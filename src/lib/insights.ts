// Page insights: what a designer or marketer wants to know about a saved page, worked out from the
// HTML and stylesheets the archiver already downloaded. Colours, fonts and their licences, page
// weight by file type, the tools the page is built with, and its search and sharing tags.
// Only names, numbers and URLs: every label is translated by the interface.
import type { CheerioAPI } from 'cheerio';
import { inlineTrackerName, trackerName } from './cleaner';
import type { AssetKind } from './paths';

export interface Insights {
  colors: { hex: string; count: number }[];
  neutrals: { hex: string; count: number }[];
  /** Number of CSS custom properties (design tokens) the stylesheets define. */
  cssVariables: number;
  /** Web fonts first (loaded by the page), then fonts the page expects the device to have. */
  fonts: { family: string; license: 'google' | 'adobe' | 'unknown' | 'system' }[];
  weight: { kind: AssetKind | 'html'; bytes: number; files: number }[];
  tech: { name: string; category: 'cms' | 'framework' | 'library' | 'analytics' | 'consent' }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
    lang: string;
    h1: string[];
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    twitterCard: string;
    robots: string;
    structuredData: string[];
    imagesWithoutAlt: number;
    images: number;
  };
}

interface SizedFile {
  kind: AssetKind | 'html';
  bytes: number;
}

// ---- Colours ---------------------------------------------------------------------------------

const COLOR = /#(?:[0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3,4})\b|rgba?\(\s*[\d.]+%?[\s,]+[\d.]+%?[\s,]+[\d.]+%?(?:[\s,/]+[\d.]+%?)?\s*\)|hsla?\(\s*[\d.]+(?:deg)?[\s,]+[\d.]+%[\s,]+[\d.]+%(?:[\s,/]+[\d.]+%?)?\s*\)/gi;

const hex2 = (n: number) => Math.round(Math.min(255, Math.max(0, n))).toString(16).padStart(2, '0');

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0) * 255, f(8) * 255, f(4) * 255];
}

/** A CSS colour as #rrggbb, or undefined when it is (nearly) transparent. */
function toHex(value: string): string | undefined {
  const v = value.toLowerCase();
  if (v.startsWith('#')) {
    let h = v.slice(1);
    if (h.length === 3 || h.length === 4) h = [...h].map((c) => c + c).join('');
    if (h.length === 8 && parseInt(h.slice(6, 8), 16) < 26) return undefined;
    return `#${h.slice(0, 6)}`;
  }
  const nums = (v.match(/[\d.]+%?/g) ?? []).map((n) => (n.endsWith('%') ? parseFloat(n) / 100 : parseFloat(n)));
  if (nums.length < 3) return undefined;
  const alpha = nums[3] ?? 1;
  if (alpha < 0.1) return undefined;
  let rgb: [number, number, number];
  if (v.startsWith('hsl')) {
    rgb = hslToRgb(nums[0], nums[1], nums[2]);
  } else {
    // rgb() channels written as percentages are fractions of 255.
    const parts = v.match(/[\d.]+%?/g) ?? [];
    rgb = [0, 1, 2].map((i) => (parts[i].endsWith('%') ? nums[i] * 255 : nums[i])) as [number, number, number];
  }
  return `#${rgb.map(hex2).join('')}`;
}

function isNeutral(hex: string): boolean {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return Math.max(r, g, b) - Math.min(r, g, b) < 18;
}

function palette(css: string) {
  const counts = new Map<string, number>();
  for (const match of css.matchAll(COLOR)) {
    const hex = toHex(match[0]);
    if (hex) counts.set(hex, (counts.get(hex) ?? 0) + 1);
  }
  const sorted = [...counts].map(([hex, count]) => ({ hex, count })).sort((a, b) => b.count - a.count);
  return {
    colors: sorted.filter((c) => !isNeutral(c.hex)).slice(0, 10),
    neutrals: sorted.filter((c) => isNeutral(c.hex)).slice(0, 6),
  };
}

// ---- Fonts -----------------------------------------------------------------------------------

const GENERIC = /^(serif|sans-serif|monospace|cursive|fantasy|system-ui|ui-\w+|emoji|math|fangsong|inherit|initial|unset|revert|-apple-system|blinkmacsystemfont|var\(.*)$/i;

function fonts(css: string, urls: string[]): Insights['fonts'] {
  const google = new Set<string>();
  const adobe = urls.some((u) => /use\.typekit\.net|p\.typekit\.net/.test(u));
  for (const url of urls) {
    if (!url.includes('fonts.googleapis.com')) continue;
    for (const [, family] of url.matchAll(/family=([^&:]+)/g)) {
      google.add(decodeURIComponent(family.replace(/\+/g, ' ')).toLowerCase());
    }
  }
  const clean = (raw: string) => raw.trim().replace(/^["']|["']$/g, '').trim();
  // Families loaded with @font-face are the page's web fonts.
  const loaded = new Set<string>();
  for (const [, block] of css.matchAll(/@font-face\s*{([^}]*)}/gi)) {
    const family = /font-family\s*:\s*([^;]+)/i.exec(block)?.[1];
    if (family) loaded.add(clean(family).toLowerCase());
  }
  // font-family declarations show which families the page actually asks for, and how often.
  const families = new Map<string, number>();
  const add = (raw: string) => {
    const family = clean(raw);
    if (!family || GENERIC.test(family) || family.length > 60) return;
    families.set(family, (families.get(family) ?? 0) + 1);
  };
  for (const [, list] of css.matchAll(/font-family\s*:\s*([^;}]+)/gi)) add(list.split(',')[0]);
  for (const family of loaded) if (![...families.keys()].some((f) => f.toLowerCase() === family)) families.set(family, 0);
  const licenseOf = (family: string): Insights['fonts'][number]['license'] => {
    const key = family.toLowerCase();
    if (google.has(key)) return 'google';
    if (!loaded.has(key)) return 'system';
    return adobe ? 'adobe' : 'unknown';
  };
  return [...families]
    .map(([family, uses]) => ({ family, uses, license: licenseOf(family) }))
    .sort((a, b) => Number(a.license === 'system') - Number(b.license === 'system') || b.uses - a.uses)
    .slice(0, 8)
    .map(({ family, license }) => ({ family, license }));
}

// ---- Built with --------------------------------------------------------------------------------

const TECH: { name: string; category: Insights['tech'][number]['category']; test: RegExp }[] = [
  { name: 'WordPress', category: 'cms', test: /\/wp-content\/|\/wp-includes\/|<meta[^>]+generator[^>]+wordpress/i },
  { name: 'Elementor', category: 'cms', test: /elementor/i },
  { name: 'WooCommerce', category: 'cms', test: /woocommerce/i },
  { name: 'Shopify', category: 'cms', test: /cdn\.shopify\.com|Shopify\.theme/ },
  { name: 'Wix', category: 'cms', test: /static\.wixstatic\.com|wix\.com\/website/i },
  { name: 'Squarespace', category: 'cms', test: /squarespace\.com|static1\.squarespace/i },
  { name: 'Webflow', category: 'cms', test: /data-wf-page|webflow\.(?:js|css)|assets\.website-files\.com/i },
  { name: 'Framer', category: 'cms', test: /framerusercontent\.com|data-framer/i },
  { name: 'Ghost', category: 'cms', test: /<meta[^>]+generator[^>]+ghost/i },
  { name: 'Drupal', category: 'cms', test: /\/sites\/default\/files|drupal-settings-json|<meta[^>]+generator[^>]+drupal/i },
  { name: 'Joomla', category: 'cms', test: /<meta[^>]+generator[^>]+joomla/i },
  { name: 'HubSpot CMS', category: 'cms', test: /hs-sites\.com|hubspotusercontent/i },
  { name: 'ClickFunnels', category: 'cms', test: /clickfunnels/i },
  { name: 'Unbounce', category: 'cms', test: /unbounce/i },
  { name: 'Leadpages', category: 'cms', test: /leadpages/i },
  { name: 'Instapage', category: 'cms', test: /instapage/i },
  { name: 'Next.js', category: 'framework', test: /__NEXT_DATA__|\/_next\/static\// },
  { name: 'Nuxt', category: 'framework', test: /__NUXT__|\/_nuxt\// },
  { name: 'Gatsby', category: 'framework', test: /___gatsby|\/page-data\// },
  { name: 'Astro', category: 'framework', test: /<meta[^>]+generator[^>]+astro|astro-island|\/_astro\// },
  { name: 'SvelteKit', category: 'framework', test: /__sveltekit|\/_app\/immutable\// },
  { name: 'Angular', category: 'framework', test: /ng-version=|ng-app/ },
  { name: 'React', category: 'framework', test: /data-reactroot|react(?:-dom)?(?:\.production)?(?:\.min)?\.js|__REACT_DEVTOOLS/ },
  { name: 'Vue', category: 'framework', test: /data-v-[0-9a-f]{6,}|vue(?:\.runtime)?(?:\.global)?(?:\.prod)?(?:\.min)?\.js/ },
  { name: 'Tailwind CSS', category: 'library', test: /tailwind(?:css)?|--tw-/i },
  { name: 'Bootstrap', category: 'library', test: /bootstrap(?:\.bundle)?(?:\.min)?\.(?:css|js)/i },
  { name: 'jQuery', category: 'library', test: /jquery(?:[.-]\d[\d.]*)?(?:\.min)?\.js/i },
  { name: 'GSAP', category: 'library', test: /gsap(?:\.min)?\.js|ScrollTrigger/ },
  { name: 'Swiper', category: 'library', test: /swiper(?:-bundle)?(?:\.min)?\.(?:css|js)/i },
  { name: 'Font Awesome', category: 'library', test: /font-?awesome/i },
  { name: 'Google Fonts', category: 'library', test: /fonts\.googleapis\.com/ },
  { name: 'Cloudflare', category: 'library', test: /cdnjs\.cloudflare\.com|\/cdn-cgi\// },
];

function tech(html: string, urls: string[], scripts: string[]): Insights['tech'] {
  const found = new Map<string, Insights['tech'][number]>();
  const haystack = `${html}\n${urls.join('\n')}`;
  for (const t of TECH) if (t.test.test(haystack)) found.set(t.name, { name: t.name, category: t.category });
  for (const url of urls) {
    const match = trackerName(url);
    if (match) found.set(match.name, { name: match.name, category: match.kind === 'consent' ? 'consent' : 'analytics' });
  }
  for (const script of scripts) {
    const match = inlineTrackerName(script);
    if (match) found.set(match.name, { name: match.name, category: match.kind === 'consent' ? 'consent' : 'analytics' });
  }
  return [...found.values()];
}

// ---- Search and sharing ------------------------------------------------------------------------

function seo($: CheerioAPI): Insights['seo'] {
  const meta = (selector: string) => ($(selector).attr('content') ?? '').trim();
  const types = new Set<string>();
  $('script[type="application/ld+json"]').each((_, node) => {
    try {
      const walk = (value: unknown): void => {
        if (Array.isArray(value)) return value.forEach(walk);
        if (value && typeof value === 'object') {
          const type = (value as Record<string, unknown>)['@type'];
          for (const t of Array.isArray(type) ? type : [type]) if (typeof t === 'string') types.add(t);
          const graph = (value as Record<string, unknown>)['@graph'];
          if (graph) walk(graph);
        }
      };
      walk(JSON.parse($(node).text()));
    } catch {
      // Broken JSON-LD is common; it simply doesn't count.
    }
  });
  const images = $('img');
  return {
    title: $('head > title').first().text().trim() || $('title').first().text().trim(),
    description: meta('meta[name="description" i]'),
    canonical: ($('link[rel="canonical" i]').attr('href') ?? '').trim(),
    lang: ($('html').attr('lang') ?? '').trim(),
    h1: $('h1')
      .map((_, el) => $(el).text().replace(/\s+/g, ' ').trim())
      .get()
      .filter(Boolean)
      .slice(0, 3),
    ogTitle: meta('meta[property="og:title" i]'),
    ogDescription: meta('meta[property="og:description" i]'),
    ogImage: meta('meta[property="og:image" i]') || meta('meta[name="twitter:image" i]'),
    twitterCard: meta('meta[name="twitter:card" i]'),
    robots: meta('meta[name="robots" i]'),
    structuredData: [...types].slice(0, 8),
    imagesWithoutAlt: images.filter((_, el) => $(el).attr('alt') === undefined).length,
    images: images.length,
  };
}

// ---- Together ----------------------------------------------------------------------------------

export function collectInsights(input: {
  /** The page as downloaded, before anything was removed or rewritten. */
  $: CheerioAPI;
  html: string;
  /** Every stylesheet's text: linked, imported, <style> blocks and style attributes. */
  css: string[];
  /** Every asset URL the page referenced. */
  urls: string[];
  files: SizedFile[];
}): Insights {
  const css = input.css.join('\n');
  const scripts = input.$('script:not([src])')
    .map((_, el) => input.$(el).text())
    .get();
  // Tags straight from the page, including ones Clean copy took out before anything was downloaded.
  const tagUrls = input.$('script[src], iframe[src], img[src], link[href]')
    .map((_, el) => input.$(el).attr('src') ?? input.$(el).attr('href') ?? '')
    .get();
  const weight = new Map<SizedFile['kind'], { bytes: number; files: number }>();
  for (const file of input.files) {
    const entry = weight.get(file.kind) ?? { bytes: 0, files: 0 };
    entry.bytes += file.bytes;
    entry.files += 1;
    weight.set(file.kind, entry);
  }
  return {
    ...palette(css),
    cssVariables: new Set([...css.matchAll(/(?:^|[;{\s])(--[\w-]+)\s*:/g)].map((m) => m[1])).size,
    fonts: fonts(css, input.urls),
    weight: [...weight].map(([kind, w]) => ({ kind, ...w })).sort((a, b) => b.bytes - a.bytes),
    tech: tech(input.html, [...input.urls, ...tagUrls], scripts),
    seo: seo(input.$),
  };
}
