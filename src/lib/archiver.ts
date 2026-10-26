import * as cheerio from 'cheerio';
import type { Cheerio, CheerioAPI } from 'cheerio';
import type { Element } from 'domhandler';
import beautify from 'js-beautify';
import JSZip from 'jszip';
import type { Dict } from '../i18n/locales/en';
import { type RemovedItem, cleanPage } from './cleaner';
import { TooLargeError, USER_AGENTS, UserFacingError, fetchPublic, parsePublicUrl } from './fetcher';
import { collectInsights } from './insights';
import {
  type ArchiveOptions,
  type Device,
  type FailReason,
  MANIFEST_FILE,
  MAX_PAGES,
  type Manifest,
  type ManifestFile,
  type ManifestPage,
  type ManifestProblem,
  REPORT_FILE,
} from './manifest';
import { type AssetKind, extensionOf, kindFromExtension, planPagePaths, planPaths, relativePath } from './paths';
import { reportHtml } from './report';

export type { ArchiveOptions };

export interface ArchiveRequest {
  urls: string[];
  options: ArchiveOptions;
  /** Translations for the report and the version chooser, in the visitor's language. */
  t: Dict;
  htmlLang: string;
}

export interface ArchiveResult {
  filename: string;
  zip: Uint8Array<ArrayBuffer>;
  manifest: Manifest;
}

const LIMITS = {
  pageBytes: 10 * 1024 * 1024,
  assetBytes: 25 * 1024 * 1024,
  /** Kept well under the 128 MB a Worker may use: the files, the ZIP chunks and the finished ZIP are all in memory at the end. */
  totalBytes: 30 * 1024 * 1024,
  /** Files per version of the site; several pages share a bigger allowance. */
  maxAssets: 400,
  maxAssetsMulti: 1000,
  concurrency: 8,
  pageConcurrency: 3,
  pageTimeoutMs: 20_000,
  assetTimeoutMs: 20_000,
  /** After this, assets still in flight are abandoned and linked to their original URLs instead. */
  deadlineMs: 90_000,
  deadlineMultiMs: 150_000,
  /** Text files bigger than this are left as they are by "Prettify code" (it gets slow). */
  prettifyBytes: 1.5 * 1024 * 1024,
  /** Problems listed one by one in the manifest; the rest are only counted. */
  listedProblems: 300,
};

const CONTENT_TYPE_EXTS: Record<string, string> = {
  'text/css': '.css',
  'text/javascript': '.js',
  'application/javascript': '.js',
  'application/x-javascript': '.js',
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/gif': '.gif',
  'image/webp': '.webp',
  'image/avif': '.avif',
  'image/svg+xml': '.svg',
  'image/x-icon': '.ico',
  'image/vnd.microsoft.icon': '.ico',
  'image/bmp': '.bmp',
  'font/woff': '.woff',
  'font/woff2': '.woff2',
  'font/ttf': '.ttf',
  'font/otf': '.otf',
  'application/font-woff': '.woff',
  'application/font-woff2': '.woff2',
  'application/x-font-ttf': '.ttf',
  'application/vnd.ms-fontobject': '.eot',
  'video/mp4': '.mp4',
  'video/webm': '.webm',
  'audio/mpeg': '.mp3',
  'audio/ogg': '.ogg',
};

// Used for single-file output when the server didn't send a usable Content-Type.
const EXT_MIMES: Record<string, string> = {
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
};

// Already-compressed formats are stored as-is; deflating them again only costs time.
const STORE_KINDS = new Set<AssetKind>(['image', 'font', 'media']);

interface Asset {
  url: string;
  kind: AssetKind;
  /** Page or stylesheet that referenced it, sent as Referer (some CDNs require one). */
  referer: string;
  data?: Uint8Array;
  ext?: string;
  mime?: string;
  /** Raw stylesheet text, rewritten once every asset has a path. */
  cssText?: string;
  path?: string;
  failed?: { reason: FailReason; status?: number };
}

type El = Cheerio<Element>;
type Ref =
  | { type: 'attr'; el: El; attr: string; url: string }
  | { type: 'srcset'; el: El; attr: string }
  | { type: 'style'; el: El; attr?: string }
  | { type: 'link'; el: El; attr: string; url: string; hash: string };

interface Page {
  url: string;
  $: CheerioAPI;
  baseHref: string;
  refs: Ref[];
  title: string;
  path: string;
}

const SKIP_URL = /^(data:|blob:|javascript:|mailto:|tel:|about:|#)/i;

// url(...) in all three spellings. Quoted values are matched whole, so a data: URI
// that contains its own url(#gradient) is skipped rather than split apart.
const CSS_URL = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^)'"\s]+))\s*\)/gi;
// @import "a.css" and @import url(a.css), used to tell stylesheets apart from images.
const CSS_IMPORT = /@import\s+(?:"([^"]*)"|'([^']*)'|url\(\s*(?:"([^"]*)"|'([^']*)'|([^)'"\s]+)))/gi;
// Only the bare-string form; @import url(...) is rewritten along with every other url().
const CSS_IMPORT_STRING = /@import\s+(["'])([^"']*)\1/gi;

// Links to these are files, not pages, so they never count as pages of the site.
const FILE_LINK = /\.(?:pdf|zip|rar|7z|gz|dmg|exe|msi|apk|jpe?g|png|gif|webp|avif|svg|mp4|webm|mp3|wav|docx?|xlsx?|pptx?|csv|xml|json|txt)$/i;

function resolveUrl(raw: string | undefined, base: string): string | undefined {
  const value = raw?.trim();
  if (!value || SKIP_URL.test(value)) return undefined;
  try {
    const url = new URL(value, base);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return undefined;
    url.hash = '';
    return url.href;
  } catch {
    return undefined;
  }
}

/** The same page whatever the trailing slash or fragment: used to match links to saved pages. */
function pageKey(url: string): string {
  const u = new URL(url);
  u.hash = '';
  u.hostname = u.hostname.replace(/^www\./, '');
  u.pathname = u.pathname.replace(/\/index\.(?:html?|php)$/i, '/');
  if (u.pathname.length > 1) u.pathname = u.pathname.replace(/\/+$/, '');
  return u.href;
}

function guessKind(url: string, fallback: AssetKind): AssetKind {
  return kindFromExtension(extensionOf(new URL(url).pathname)) ?? fallback;
}

function decodeText(data: Uint8Array, contentType: string): string {
  const charset = /charset=["']?([\w-]+)/i.exec(contentType)?.[1];
  try {
    return new TextDecoder(charset ?? 'utf-8').decode(data);
  } catch {
    return new TextDecoder('utf-8').decode(data);
  }
}

function parseSrcset(value: string): { url: string; descriptor: string }[] {
  return value
    .split(/,\s+|,(?=\S+\s+\d)/)
    .map((candidate) => {
      const [url, ...rest] = candidate.trim().split(/\s+/);
      return { url: url.replace(/,$/, ''), descriptor: rest.join(' ') };
    })
    .filter((c) => c.url);
}

function hostName(url: URL): string {
  return url.hostname.replace(/^www\./, '').replace(/[^a-z0-9.-]/gi, '-');
}

function failureOf(error: unknown, deadline: AbortSignal): { reason: FailReason; status?: number } {
  if (error instanceof TooLargeError) return { reason: 'tooLarge' };
  if (error instanceof UserFacingError) return { reason: 'blocked' };
  const code = (error as { cause?: { code?: string } }).cause?.code;
  if (code === 'EPRIVATE') return { reason: 'blocked' };
  if (deadline.aborted) return { reason: 'deadline' };
  if ((error as Error).name === 'TimeoutError') return { reason: 'timeout' };
  return { reason: 'network' };
}

/** Turn a failure to fetch the first page into a message for the visitor. */
function pageError(error: unknown, url: URL): never {
  if (error instanceof UserFacingError) throw error; // e.g. a redirect to a private address
  const reason = (error as { cause?: { code?: string } }).cause?.code;
  const host = url.hostname;
  if (reason === 'EPRIVATE') throw new UserFacingError('privateNetwork');
  if (reason === 'ENOTFOUND') throw new UserFacingError('notFound', 422, { host });
  if ((error as Error).name === 'TimeoutError') throw new UserFacingError('timeout', 504, { host });
  throw new UserFacingError('unreachable', 502, { host });
}

const PRETTIFY = { indent_size: 2, max_preserve_newlines: 2, end_with_newline: true, wrap_line_length: 0 };

function prettify(text: string, kind: 'html' | 'css' | 'js'): string {
  if (text.length > LIMITS.prettifyBytes) return text;
  try {
    if (kind === 'css') return beautify.css(text, PRETTIFY);
    if (kind === 'js') return beautify.js(text, PRETTIFY);
    return beautify.html(text, {
      ...PRETTIFY,
      indent_inner_html: true,
      unformatted: ['pre', 'textarea', 'code', 'script[type="application/ld+json"]'],
      content_unformatted: ['pre', 'textarea'],
      extra_liners: [],
    });
  } catch {
    return text;
  }
}

const base64 = (data: Uint8Array | string) =>
  (typeof data === 'string' ? Buffer.from(data, 'utf8') : Buffer.from(data.buffer, data.byteOffset, data.byteLength)).toString('base64');

// ---- One version of the site (desktop or mobile) -----------------------------------------------

interface Capture {
  device: Device;
  pages: Page[];
  assets: Map<string, Asset>;
  /** References left pointing at the live site because the page used too many files. */
  overLimit: Set<string>;
  removed: RemovedItem[];
  /** Original HTML of the first page, for the insights. */
  firstHtml: string;
  failedPages: ManifestProblem[];
}

interface Budget {
  totalBytes: number;
}

async function capture(
  urls: URL[],
  device: Device,
  options: ArchiveOptions,
  deadline: AbortSignal,
  budget: Budget,
): Promise<Capture> {
  const userAgent = device === 'mobile' ? USER_AGENTS.mobile : USER_AGENTS.desktop;
  const maxAssets = urls.length > 1 ? LIMITS.maxAssetsMulti : LIMITS.maxAssets;
  const assets = new Map<string, Asset>();
  const overLimit = new Set<string>();
  const queue: Asset[] = [];
  const removed = new Map<string, RemovedItem>();
  const failedPages: ManifestProblem[] = [];

  const register = (raw: string | undefined, base: string, kind: AssetKind, referer: string): string | undefined => {
    const url = resolveUrl(raw, base);
    if (!url) return undefined;
    if (!assets.has(url)) {
      if (assets.size >= maxAssets) {
        overLimit.add(url);
        return url;
      }
      const asset: Asset = { url, kind, referer };
      assets.set(url, asset);
      queue.push(asset);
    }
    return url;
  };

  const findCssRefs = (css: string, base: string, referer: string) => {
    for (const [, ...raws] of css.matchAll(CSS_IMPORT)) register(raws.find((r) => r !== undefined), base, 'css', referer);
    for (const [, ...raws] of css.matchAll(CSS_URL)) {
      const url = resolveUrl(raws.find((r) => r !== undefined), base);
      if (url) register(url, base, guessKind(url, 'image'), referer);
    }
  };

  // ---- 1. Fetch the pages (a few at a time) and collect every reference they make ------------
  const fetched: ({ url: string; html: string } | undefined)[] = new Array(urls.length);
  let next = 0;
  const fetchOne = async (): Promise<void> => {
    while (next < urls.length) {
      const i = next++;
      const url = urls[i];
      try {
        const page = await fetchPublic(url, {
          userAgent,
          accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8',
          maxBytes: LIMITS.pageBytes,
          timeoutMs: LIMITS.pageTimeoutMs,
          signal: deadline,
        });
        if (page.status >= 400) {
          if (i === 0) throw new UserFacingError('httpError', 422, { host: url.hostname, status: page.status });
          failedPages.push({ url: url.href, kind: 'html', reason: 'http', status: page.status, variant: device });
          continue;
        }
        if (page.contentType && !page.contentType.includes('html')) {
          if (i === 0) throw new UserFacingError('notHtml', 422);
          failedPages.push({ url: url.href, kind: 'html', reason: 'notAsset', variant: device });
          continue;
        }
        fetched[i] = { url: page.url, html: decodeText(page.body, page.contentType) };
      } catch (error) {
        if (i === 0) pageError(error, url);
        failedPages.push({ url: url.href, kind: 'html', ...failureOf(error, deadline), variant: device });
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(LIMITS.pageConcurrency, urls.length) }, fetchOne));

  // Two addresses can redirect to the same page; keep it once.
  const seen = new Set<string>();
  const sources = fetched.filter((f): f is { url: string; html: string } => {
    if (!f || seen.has(pageKey(f.url))) return false;
    seen.add(pageKey(f.url));
    return true;
  });

  const pages: Page[] = sources.map(({ url: finalUrl, html }) => {
    const $ = cheerio.load(html);
    const refs: Ref[] = [];

    // A <base> tag changes how relative links resolve; apply it now, then drop it
    // because every link in the saved copy is rewritten to be local or absolute.
    const baseHref = resolveUrl($('base[href]').attr('href'), finalUrl) ?? finalUrl;
    $('base').remove();

    if (options.cleanCopy) for (const item of cleanPage($)) removed.set(`${item.kind}:${item.name}`, item);

    const addAttr = (el: El, attr: string, kind: AssetKind) => {
      const raw = el.attr(attr);
      const url = register(raw, baseHref, raw ? guessKind(resolveUrl(raw, baseHref) ?? baseHref, kind) : kind, finalUrl);
      if (url) refs.push({ type: 'attr', el, attr, url });
    };

    const addSrcset = (el: El, attr: string) => {
      const value = el.attr(attr);
      if (!value) return;
      for (const { url } of parseSrcset(value)) register(url, baseHref, 'image', finalUrl);
      refs.push({ type: 'srcset', el, attr });
    };

    if (options.simplified) {
      $('script, link[rel="modulepreload"], link[rel="preload"][as="script"]').remove();
      $('*').each((_, node) => {
        for (const name of Object.keys((node as Element).attribs)) {
          if (/^on/i.test(name)) $(node).removeAttr(name);
        }
      });
      // Without JavaScript, lazy-loaded images would never appear, so promote their real sources.
      $('img, source').each((_, node) => {
        const el = $(node);
        const lazySrc = el.attr('data-src') ?? el.attr('data-lazy-src');
        const lazySrcset = el.attr('data-srcset') ?? el.attr('data-lazy-srcset');
        if (lazySrc) el.attr('src', lazySrc);
        if (lazySrcset) el.attr('srcset', lazySrcset);
      });
    }

    // Subresource integrity and CSP would block our rewritten local copies.
    $('[integrity]').removeAttr('integrity');
    $('meta[http-equiv="Content-Security-Policy" i]').remove();

    $('link[href]').each((_, node) => {
      const el = $(node);
      const rel = (el.attr('rel') ?? '').toLowerCase().split(/\s+/);
      const as = (el.attr('as') ?? '').toLowerCase();
      if (rel.includes('stylesheet') || (rel.includes('preload') && as === 'style')) addAttr(el, 'href', 'css');
      else if (rel.some((r) => r.includes('icon'))) addAttr(el, 'href', 'image');
      else if (rel.includes('preload') && as === 'font') addAttr(el, 'href', 'font');
      else if (rel.includes('preload') && as === 'image') addAttr(el, 'href', 'image');
      else if (rel.includes('preload') && as === 'script') addAttr(el, 'href', 'js');
      else if (rel.includes('modulepreload')) addAttr(el, 'href', 'js');
      else {
        const url = resolveUrl(el.attr('href'), baseHref);
        if (url) el.attr('href', url);
      }
    });

    $('script[src]').each((_, node) => addAttr($(node), 'src', 'js'));

    $('img, source, input[type="image"]').each((_, node) => {
      const el = $(node);
      const parentIsMedia = el.parent().is('video, audio');
      for (const attr of ['src', 'data-src', 'data-lazy-src', 'data-original']) {
        if (el.attr(attr)) addAttr(el, attr, parentIsMedia ? 'media' : 'image');
      }
      for (const attr of ['srcset', 'data-srcset', 'data-lazy-srcset']) addSrcset(el, attr);
    });

    $('video[src], audio[src]').each((_, node) => addAttr($(node), 'src', 'media'));
    $('video[poster]').each((_, node) => addAttr($(node), 'poster', 'image'));
    $('[data-bg], [data-background]').each((_, node) => {
      const el = $(node);
      for (const attr of ['data-bg', 'data-background']) if (el.attr(attr)) addAttr(el, attr, 'image');
    });

    $('style').each((_, node) => {
      const el = $(node);
      findCssRefs(el.html() ?? '', baseHref, finalUrl);
      refs.push({ type: 'style', el });
    });
    $('[style*="url("]').each((_, node) => {
      const el = $(node);
      findCssRefs(el.attr('style') ?? '', baseHref, finalUrl);
      refs.push({ type: 'style', el, attr: 'style' });
    });

    // Links point back at the live site, unless the page they open is saved too (step 3).
    $('a[href], area[href]').each((_, node) => {
      const el = $(node);
      const raw = el.attr('href');
      const url = resolveUrl(raw, baseHref);
      if (!url) return;
      el.attr('href', url + (/#.+$/.exec(raw ?? '')?.[0] ?? ''));
      refs.push({ type: 'link', el, attr: 'href', url, hash: /#.+$/.exec(raw ?? '')?.[0] ?? '' });
    });
    $('form[action], iframe[src]').each((_, node) => {
      const el = $(node);
      const attr = el.is('form') ? 'action' : 'src';
      const url = resolveUrl(el.attr(attr), baseHref);
      if (url) el.attr(attr, url);
    });

    return { url: finalUrl, $, baseHref, refs, title: $('title').first().text().trim(), path: '' };
  });

  // ---- 2. Download everything, discovering stylesheet dependencies as we go -----------------
  const download = async (asset: Asset) => {
    if (deadline.aborted) {
      asset.failed = { reason: 'deadline' };
      return;
    }
    if (budget.totalBytes > LIMITS.totalBytes) {
      asset.failed = { reason: 'archiveFull' };
      return;
    }
    try {
      const result = await fetchPublic(asset.url, {
        userAgent,
        referer: asset.referer,
        maxBytes: LIMITS.assetBytes,
        timeoutMs: LIMITS.assetTimeoutMs,
        signal: deadline,
      });
      if (result.status >= 400) {
        asset.failed = { reason: 'http', status: result.status };
        return;
      }
      // A stylesheet or script URL that answers with an HTML error page is a miss, not an asset.
      if ((asset.kind === 'css' || asset.kind === 'js') && result.contentType.includes('text/html')) {
        asset.failed = { reason: 'notAsset' };
        return;
      }
      budget.totalBytes += result.body.byteLength;
      const mime = result.contentType.split(';')[0].trim();
      asset.ext = CONTENT_TYPE_EXTS[mime];
      asset.mime = mime || undefined;
      if (asset.kind === 'css' || mime === 'text/css') {
        asset.kind = 'css';
        asset.cssText = decodeText(result.body, result.contentType);
        findCssRefs(asset.cssText, result.url, result.url);
      } else {
        asset.data = result.body;
      }
    } catch (error) {
      asset.failed = failureOf(error, deadline);
    }
  };

  await new Promise<void>((resolve) => {
    let active = 0;
    const pump = () => {
      while (active < LIMITS.concurrency && queue.length > 0) {
        const asset = queue.shift()!;
        active++;
        download(asset).finally(() => {
          active--;
          pump();
        });
      }
      if (active === 0 && queue.length === 0) resolve();
    };
    pump();
  });

  return {
    device,
    pages,
    assets,
    overLimit,
    removed: [...removed.values()],
    firstHtml: sources[0]?.html ?? '',
    failedPages,
  };
}

// ---- Writing one version into the archive --------------------------------------------------------

interface Written {
  files: ManifestFile[];
  pages: ManifestPage[];
  liveLinks: Set<string>;
}

function write(zip: JSZip, cap: Capture, options: ArchiveOptions, prefix: string): Written {
  const firstUrl = cap.pages[0].url;
  const pagePaths = planPagePaths(
    cap.pages.map((p) => p.url),
    options,
  );
  cap.pages.forEach((page, i) => (page.path = pagePaths[i]));
  const pageByKey = new Map(cap.pages.map((p) => [pageKey(p.url), p]));

  const saved = [...cap.assets.values()].filter((a) => !a.failed);
  const single = options.output === 'single';
  if (!single) {
    const paths = planPaths(
      saved.map((a) => ({ url: a.url, kind: a.kind, ext: a.ext })),
      firstUrl,
      options,
      [...pagePaths, MANIFEST_FILE, REPORT_FILE],
    );
    saved.forEach((asset, i) => (asset.path = paths[i]));
  }

  // ---- Stylesheets: rewritten once, against the file they end up in ---------------------------
  const rewriteCss = (css: string, base: string, link: (url: string) => string) =>
    css
      .replace(CSS_URL, (match, double?: string, single?: string, bare?: string) => {
        const url = resolveUrl(double ?? single ?? bare, base);
        const quote = double !== undefined ? '"' : single !== undefined ? "'" : '';
        return url ? `url(${quote}${link(url)}${quote})` : match;
      })
      .replace(CSS_IMPORT_STRING, (match, quote: string, raw: string) => {
        const url = resolveUrl(raw, base);
        return url ? `@import ${quote}${link(url)}${quote}` : match;
      });

  // Single-file output: every asset becomes a data: URI, stylesheets with their own assets inlined.
  const dataUris = new Map<string, string>();
  const inlining = new Set<string>();
  const dataUri = (url: string): string => {
    const asset = cap.assets.get(url);
    if (!asset || asset.failed) return url;
    const cached = dataUris.get(url);
    if (cached) return cached;
    if (inlining.has(url)) return url; // stylesheets that import each other
    inlining.add(url);
    let uri: string;
    if (asset.cssText !== undefined) {
      uri = `data:text/css;base64,${base64(rewriteCss(asset.cssText, asset.url, dataUri))}`;
    } else {
      const mime = asset.mime?.includes('/') ? asset.mime : EXT_MIMES[asset.ext ?? extensionOf(new URL(url).pathname)];
      uri = `data:${mime ?? 'application/octet-stream'};base64,${base64(asset.data!)}`;
    }
    inlining.delete(url);
    dataUris.set(url, uri);
    return uri;
  };

  // In a single file, the page first gets short placeholders, so "Prettify code" formats the page
  // itself rather than megabytes of inline data; the data goes in afterwards.
  const inlined: string[] = [];
  const placeholder = (url: string) => {
    const uri = dataUri(url);
    if (uri === url) return url;
    inlined.push(uri);
    return `zz-inline-asset-7f3c:${inlined.length - 1}`;
  };

  /** Where a reference should point from `fromFile`: the local copy, inline data, or the original URL. */
  const linkTo = (url: string, fromFile: string) => {
    if (single) return placeholder(url);
    const asset = cap.assets.get(url);
    return asset?.path ? relativePath(fromFile, asset.path) : url;
  };

  const liveLinks = new Set<string>();
  const files: ManifestFile[] = [];
  const pages: ManifestPage[] = [];

  for (const page of cap.pages) {
    const from = page.path;
    for (const ref of page.refs) {
      if (ref.type === 'attr') {
        ref.el.attr(ref.attr, linkTo(ref.url, from));
      } else if (ref.type === 'srcset') {
        const value = parseSrcset(ref.el.attr(ref.attr) ?? '')
          .map(({ url, descriptor }) => {
            const resolved = resolveUrl(url, page.baseHref);
            return [resolved ? linkTo(resolved, from) : url, descriptor].filter(Boolean).join(' ');
          })
          .join(', ');
        ref.el.attr(ref.attr, value);
      } else if (ref.type === 'style') {
        const link = (url: string) => linkTo(url, from);
        if (ref.attr) ref.el.attr(ref.attr, rewriteCss(ref.el.attr(ref.attr) ?? '', page.baseHref, link));
        else ref.el.text(rewriteCss(ref.el.html() ?? '', page.baseHref, link));
      } else {
        const target = pageByKey.get(pageKey(ref.url));
        if (target === page && ref.hash) ref.el.attr('href', ref.hash);
        else if (target) ref.el.attr('href', relativePath(from, target.path) + ref.hash);
        else if (!FILE_LINK.test(new URL(ref.url).pathname)) liveLinks.add(pageKey(ref.url));
      }
    }
    let html = page.$.html();
    if (options.prettify) html = prettify(html, 'html');
    if (single) html = html.replace(/zz-inline-asset-7f3c:(\d+)/g, (_, i: string) => inlined[Number(i)]);
    zip.file(prefix + page.path, html);
    files.push({ path: prefix + page.path, url: page.url, kind: 'html', bytes: Buffer.byteLength(html), variant: cap.device });
    pages.push({ url: page.url, path: prefix + page.path, title: page.title, variant: cap.device });
  }

  if (!single) {
    for (const asset of saved) {
      const path = prefix + asset.path!;
      let body: string | Uint8Array;
      if (asset.cssText !== undefined) {
        body = rewriteCss(asset.cssText, asset.url, (url) => linkTo(url, asset.path!));
        if (options.prettify) body = prettify(body, 'css');
      } else if (asset.kind === 'js' && options.prettify) {
        body = prettify(new TextDecoder().decode(asset.data!), 'js');
      } else {
        body = asset.data!;
      }
      zip.file(path, body, { compression: STORE_KINDS.has(asset.kind) ? 'STORE' : 'DEFLATE' });
      files.push({
        path,
        url: asset.url,
        kind: asset.kind,
        bytes: typeof body === 'string' ? Buffer.byteLength(body) : body.byteLength,
        variant: cap.device,
      });
    }
  }

  return { files, pages, liveLinks };
}

// ---- The whole download --------------------------------------------------------------------------

export async function archiveWebsite(request: ArchiveRequest): Promise<ArchiveResult> {
  const { options, t } = request;
  const urls: URL[] = [];
  for (const raw of request.urls) {
    const url = parsePublicUrl(raw);
    if (!urls.some((u) => pageKey(u.href) === pageKey(url.href))) urls.push(url);
  }
  if (urls.length === 0) throw new UserFacingError('emptyUrl');
  if (urls.length > MAX_PAGES) throw new UserFacingError('tooManyPages', 400, { max: MAX_PAGES });

  const devices: Device[] = options.device === 'both' ? ['desktop', 'mobile'] : [options.device];
  const multi = urls.length > 1 || devices.length > 1;
  const deadline = AbortSignal.timeout(multi ? LIMITS.deadlineMultiMs : LIMITS.deadlineMs);
  const budget: Budget = { totalBytes: 0 };

  // Both versions download side by side; each has its own pool of files.
  const captures = await Promise.all(devices.map((device) => capture(urls, device, options, deadline, budget)));
  const first = captures[0];
  const firstUrl = new URL(first.pages[0].url);
  const host = hostName(firstUrl);

  // Insights come from the first page as it was served, before Clean copy or rewriting.
  const original = cheerio.load(first.firstHtml);
  const cssTexts = [
    ...[...first.assets.values()].map((a) => a.cssText ?? ''),
    ...original('style').map((_, el) => original(el).html() ?? '').get(),
    ...original('[style]').map((_, el) => original(el).attr('style') ?? '').get(),
  ];

  const zip = new JSZip();
  const files: ManifestFile[] = [];
  const pages: ManifestPage[] = [];
  const problems: ManifestProblem[] = [];
  const liveLinks = new Set<string>();
  let savedAssets = 0;
  let failedAssets = 0;

  for (const cap of captures) {
    const prefix = devices.length > 1 ? `${cap.device}/` : '';
    const written = write(zip, cap, options, prefix);
    files.push(...written.files);
    pages.push(...written.pages);
    for (const link of written.liveLinks) liveLinks.add(link);
    problems.push(...cap.failedPages);
    for (const asset of cap.assets.values()) {
      if (asset.failed) {
        failedAssets++;
        problems.push({ url: asset.url, kind: asset.kind, ...asset.failed, variant: cap.device });
      } else {
        savedAssets++;
      }
    }
    for (const url of cap.overLimit) {
      failedAssets++;
      problems.push({ url, kind: guessKind(url, 'other'), reason: 'limit', variant: cap.device });
    }
  }

  const removed = new Map<string, RemovedItem>();
  for (const cap of captures) for (const item of cap.removed) removed.set(`${item.kind}:${item.name}`, item);

  // One page saved as a single file: the visitor gets just that .html file.
  const singleFile = options.output === 'single' && urls.length === 1 && devices.length === 1 ? 'index.html' : undefined;
  const filename = singleFile ? `${host}.html` : `${host}.zip`;

  const manifest: Manifest = {
    version: 1,
    url: firstUrl.href,
    host,
    capturedAt: new Date().toISOString(),
    options,
    variants: devices,
    filename,
    ...(singleFile ? { singleFile } : {}),
    pages,
    files,
    problems: problems.slice(0, LIMITS.listedProblems),
    problemCount: problems.length,
    removed: [...removed.values()],
    liveLinks: liveLinks.size,
    score: savedAssets + failedAssets === 0 ? 100 : Math.floor((savedAssets / (savedAssets + failedAssets)) * 100),
    insights: collectInsights({
      $: original,
      html: first.firstHtml,
      css: cssTexts,
      urls: [...first.assets.keys(), ...first.overLimit],
      // Counted from the downloads themselves, so a single file still shows what it holds.
      files: [
        ...files.filter((f) => f.variant === first.device && f.kind === 'html').map((f) => ({ kind: f.kind, bytes: f.bytes })),
        ...[...first.assets.values()]
          .filter((a) => !a.failed)
          .map((a) => ({ kind: a.kind, bytes: a.data?.byteLength ?? Buffer.byteLength(a.cssText ?? '') })),
      ],
    }),
    limits: { assetBytes: LIMITS.assetBytes, maxAssets: urls.length > 1 ? LIMITS.maxAssetsMulti : LIMITS.maxAssets },
  };

  zip.file(REPORT_FILE, reportHtml(manifest, t, request.htmlLang));
  zip.file(MANIFEST_FILE, JSON.stringify(manifest, null, 2));

  return {
    filename,
    manifest,
    zip: (await zip.generateAsync({
      type: 'uint8array',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 },
    })) as Uint8Array<ArrayBuffer>,
  };
}
