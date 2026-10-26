// How fetcher.ts sends one request on Cloudflare Workers. The Node build uses transport.node.ts instead
// (package.json "imports", "workerd" condition); both export the same fetchHop.
import { promises as dns } from 'node:dns';
import { isIP } from 'node:net';
import { isBlockedAddress } from './addresses';

const NO_RECORDS = new Set(['ENODATA', 'ENOTFOUND']);
const RESOLVE_TTL_MS = 60_000;
const resolved = new Map<string, { at: number; addresses: Promise<string[]> }>();

/** Every A and AAAA address of a hostname, kept for a minute so a page's many assets don't each cost two lookups. */
function addressesOf(hostname: string): Promise<string[]> {
  const hit = resolved.get(hostname);
  if (hit && Date.now() - hit.at < RESOLVE_TTL_MS) return hit.addresses;
  const addresses = Promise.allSettled([dns.resolve4(hostname), dns.resolve6(hostname)]).then((results) =>
    results.flatMap((r) => {
      // On Workers the answers also list CNAME targets ("github.com."); only the addresses matter.
      if (r.status === 'fulfilled') return r.value.filter((a) => isIP(a) !== 0);
      if (NO_RECORDS.has((r.reason as { code?: string })?.code ?? '')) return [];
      throw r.reason;
    }),
  );
  addresses.catch(() => resolved.delete(hostname));
  resolved.set(hostname, { at: Date.now(), addresses });
  return addresses;
}

const fetchFailed = (message: string, code: string) =>
  new TypeError('fetch failed', { cause: Object.assign(new Error(message), { code }) });

// Workers can't hook the DNS lookup of the connection itself, so every hop's hostname is resolved first and
// refused when any of its addresses is private. Failures look like a refused connection (cause.code), as on Node.
async function assertPublicHost(url: URL): Promise<void> {
  const host = url.hostname.replace(/^\[|\]$/g, '');
  if (isIP(host)) return; // literal addresses are checked by assertFetchable
  const addresses = await addressesOf(host);
  if (addresses.length === 0) throw fetchFailed(`${host} does not resolve`, 'ENOTFOUND');
  if (addresses.some(isBlockedAddress)) throw fetchFailed(`${host} resolves to a private address`, 'EPRIVATE');
}

/** One request, redirects not followed. */
export async function fetchHop(url: URL, init: { signal: AbortSignal; headers: Record<string, string> }): Promise<Response> {
  await assertPublicHost(url);
  return fetch(url, { ...init, redirect: 'manual' });
}
