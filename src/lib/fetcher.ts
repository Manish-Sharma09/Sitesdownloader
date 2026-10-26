import { isIP } from 'node:net';
import { fetchHop } from '#transport';
import type { Dict } from '../i18n/locales/en';
import { isBlockedAddress } from './addresses';

export type ErrorKey = keyof Dict['errors'];

/**
 * An error that is safe and useful to show to the person using the page. It carries a key into
 * the `errors` section of the locale files, so the API can answer in the visitor's language.
 */
export class UserFacingError extends Error {
  constructor(
    readonly key: ErrorKey,
    readonly status = 400,
    readonly params: Record<string, string | number> = {},
  ) {
    super(key);
  }
}

/** A response that is bigger than the caller allowed. */
export class TooLargeError extends Error {
  constructor(readonly limit: number) {
    super(`Response is larger than ${limit} bytes`);
  }
}

export const USER_AGENTS = {
  desktop:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
  mobile:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Mobile/15E148 Safari/604.1',
};

/** Parse what someone typed into a URL we're willing to fetch. Adds https:// when the scheme is missing. */
export function parsePublicUrl(input: string): URL {
  const trimmed = input.trim();
  if (!trimmed) throw new UserFacingError('emptyUrl');

  let url: URL;
  try {
    url = new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
  } catch {
    throw new UserFacingError('invalidUrl', 400, { input: trimmed.slice(0, 200) });
  }
  assertFetchable(url);
  return url;
}

function assertFetchable(url: URL): void {
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new UserFacingError('protocol');
  }
  if (url.username || url.password) {
    throw new UserFacingError('credentials');
  }
  const host = url.hostname.replace(/^\[|\]$/g, '');
  if (host === 'localhost' || host.endsWith('.localhost') || host.endsWith('.local') || host.endsWith('.internal')) {
    throw new UserFacingError('localAddress');
  }
  if (isIP(host) && isBlockedAddress(host)) {
    throw new UserFacingError('privateAddress');
  }
  if (!isIP(host) && !host.includes('.')) {
    throw new UserFacingError('notPublicDomain', 400, { host });
  }
}

export interface FetchResult {
  url: string;
  status: number;
  contentType: string;
  body: Uint8Array;
}

export interface FetchOptions {
  userAgent: string;
  accept?: string;
  referer?: string;
  maxBytes: number;
  timeoutMs: number;
  signal?: AbortSignal;
}

const MAX_REDIRECTS = 5;

/** Fetch a public URL, following redirects manually so every hop is validated, and stop reading past `maxBytes`. */
export async function fetchPublic(input: string | URL, options: FetchOptions): Promise<FetchResult> {
  let url = new URL(input);
  const signal = options.signal
    ? AbortSignal.any([options.signal, AbortSignal.timeout(options.timeoutMs)])
    : AbortSignal.timeout(options.timeoutMs);

  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    assertFetchable(url);
    // Private hostnames are refused inside fetchHop: at connect time on Node, by a lookup first on Workers.
    const response = await fetchHop(url, {
      signal,
      headers: {
        'user-agent': options.userAgent,
        accept: options.accept ?? '*/*',
        'accept-language': 'en-US,en;q=0.9',
        ...(options.referer ? { referer: options.referer } : {}),
      },
    });

    const location = response.headers.get('location');
    if (response.status >= 300 && response.status < 400 && location) {
      await response.body?.cancel();
      url = new URL(location, url);
      continue;
    }

    const declared = Number(response.headers.get('content-length'));
    if (declared > options.maxBytes) {
      await response.body?.cancel();
      throw new TooLargeError(options.maxBytes);
    }

    const chunks: Uint8Array[] = [];
    let size = 0;
    if (response.body) {
      for await (const chunk of response.body) {
        size += chunk.byteLength;
        if (size > options.maxBytes) {
          throw new TooLargeError(options.maxBytes);
        }
        chunks.push(chunk);
      }
    }
    const body = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      body.set(chunk, offset);
      offset += chunk.byteLength;
    }

    return {
      url: url.href,
      status: response.status,
      contentType: (response.headers.get('content-type') ?? '').toLowerCase(),
      body,
    };
  }

  throw new Error('Too many redirects');
}
