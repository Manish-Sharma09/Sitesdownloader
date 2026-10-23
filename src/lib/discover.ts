// "Find pages on this site": lists pages of the same site that someone might want in a multi-page
// archive. Reads the links on the page itself (in the order they appear, so navigation comes
// first), then the site's sitemaps (from robots.txt, or /sitemap.xml). Uses the same guarded
// fetcher as the archiver, so it can't be pointed at private addresses either.
import * as cheerio from 'cheerio';
import { USER_AGENTS, UserFacingError, fetchPublic, parsePublicUrl } from './fetcher';

export interface FoundPage {
  url: string;
  /** Link text, when the page was found as a link. */
  title?: string;
}

const LIMITS = {
  pages: 300,
  sitemaps: 4,
  bytes: 5 * 1024 * 1024,
  timeoutMs: 10_000,
  deadlineMs: 20_000,
};

const NOT_A_PAGE = /\.(?:pdf|zip|rar|7z|gz|dmg|exe|msi|apk|jpe?g|png|gif|webp|avif|svg|ico|mp4|webm|mp3|wav|docx?|xlsx?|pptx?|csv|xml|json|txt|css|js)$/i;

const sameSite = (a: URL, b: URL) => a.hostname.replace(/^www\./, '') === b.hostname.replace(/^www\./, '');

function normalize(raw: string, base: URL): URL | undefined {
  try {
    const url = new URL(raw.trim(), base);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return undefined;
    if (!sameSite(url, base) || NOT_A_PAGE.test(url.pathname)) return undefined;
    url.hash = '';
    return url;
  } catch {
    return undefined;
  }
}

// /blog, /blog/ and /blog/index.html are one page.
const key = (url: URL) =>
  `${url.hostname.replace(/^www\./, '')}${url.pathname.replace(/\/index\.(?:html?|php)$/i, '/').replace(/\/+$/, '') || '/'}${url.search}`;

export async function discoverPages(input: string): Promise<{ url: string; pages: FoundPage[] }> {
  const start = parsePublicUrl(input);
  const deadline = AbortSignal.timeout(LIMITS.deadlineMs);
  const get = (url: URL | string, accept: string) =>
    fetchPublic(url, { userAgent: USER_AGENTS.desktop, accept, maxBytes: LIMITS.bytes, timeoutMs: LIMITS.timeoutMs, signal: deadline });

  let page;
  try {
    page = await get(start, 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8');
  } catch (error) {
    if (error instanceof UserFacingError) throw error;
    throw new UserFacingError('unreachable', 502, { host: start.hostname });
  }
  if (page.status >= 400) throw new UserFacingError('httpError', 422, { host: start.hostname, status: page.status });

  const base = new URL(page.url);
  const found = new Map<string, FoundPage>();
  const add = (url: URL | undefined, title?: string) => {
    if (!url || found.size >= LIMITS.pages) return;
    const k = key(url);
    const existing = found.get(k);
    if (!existing) found.set(k, { url: url.href, ...(title ? { title } : {}) });
    else if (!existing.title && title) existing.title = title;
  };

  const $ = cheerio.load(new TextDecoder().decode(page.body));
  add(base, $('title').first().text().replace(/\s+/g, ' ').trim().slice(0, 80) || undefined);
  $('a[href]').each((_, node) => {
    const el = $(node);
    const title = (el.attr('aria-label') ?? el.text()).replace(/\s+/g, ' ').trim().slice(0, 80);
    add(normalize(el.attr('href') ?? '', base), title || undefined);
  });

  // Sitemaps: those robots.txt names, otherwise the usual address. A sitemap index lists more sitemaps.
  const sitemaps: string[] = [];
  try {
    const robots = await get(new URL('/robots.txt', base), 'text/plain');
    if (robots.status < 400) {
      for (const [, url] of new TextDecoder().decode(robots.body).matchAll(/^\s*sitemap:\s*(\S+)/gim)) sitemaps.push(url);
    }
  } catch {
    // No robots.txt is fine.
  }
  if (!sitemaps.length) sitemaps.push(new URL('/sitemap.xml', base).href);

  const visited = new Set<string>();
  while (sitemaps.length && visited.size < LIMITS.sitemaps && found.size < LIMITS.pages && !deadline.aborted) {
    const next = sitemaps.shift()!;
    if (visited.has(next)) continue;
    visited.add(next);
    try {
      const sitemapUrl = new URL(next, base);
      if (!sameSite(sitemapUrl, base)) continue;
      const res = await get(sitemapUrl, 'application/xml,text/xml;q=0.9,*/*;q=0.5');
      if (res.status >= 400) continue;
      const xml = new TextDecoder().decode(res.body);
      const locs = [...xml.matchAll(/<loc>\s*(?:<!\[CDATA\[)?\s*([^<\]\s]+)/gi)].map((m) => m[1].replace(/&amp;/g, '&'));
      if (/<sitemapindex/i.test(xml)) sitemaps.push(...locs);
      else for (const loc of locs) add(normalize(loc, base));
    } catch {
      // A broken sitemap just adds nothing.
    }
  }

  return { url: base.href, pages: [...found.values()] };
}
