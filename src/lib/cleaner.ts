// "Clean copy": takes out what only makes sense on the live site, so the saved page is quiet and
// private to open. Removes analytics, ad and session-recording tags, cookie-consent banners and
// automatic redirects, and reports what it removed by product name (the interface adds the
// translated category). Everything else, including the page's own scripts, is left alone.
import type { CheerioAPI } from 'cheerio';

interface Signature {
  name: string;
  kind: 'tracker' | 'consent';
  /** Matched against script, iframe, img and link URLs. */
  hosts?: string[];
  /** Matched against inline script text. */
  inline?: RegExp;
}

const SIGNATURES: Signature[] = [
  // Analytics, tag managers and session recording
  { name: 'Google Tag Manager', kind: 'tracker', hosts: ['googletagmanager.com/gtm.js', 'googletagmanager.com/ns.html'], inline: /googletagmanager\.com\/gtm\.js|\bdataLayer\s*,\s*['"]GTM-/ },
  { name: 'Google Analytics', kind: 'tracker', hosts: ['googletagmanager.com/gtag/js', 'google-analytics.com', 'analytics.google.com'], inline: /\bgtag\s*\(\s*['"](?:js|config)['"]|GoogleAnalyticsObject|google-analytics\.com\/(?:analytics|ga)\.js/ },
  { name: 'Google Ads', kind: 'tracker', hosts: ['googleadservices.com', 'googlesyndication.com', 'doubleclick.net', 'adservice.google.'] },
  { name: 'Meta Pixel', kind: 'tracker', hosts: ['connect.facebook.net', 'facebook.com/tr'], inline: /\bfbq\s*\(\s*['"]init['"]|connect\.facebook\.net\/[^'"]*\/fbevents\.js/ },
  { name: 'TikTok Pixel', kind: 'tracker', hosts: ['analytics.tiktok.com'], inline: /\bttq\.load\s*\(|analytics\.tiktok\.com/ },
  { name: 'LinkedIn Insight Tag', kind: 'tracker', hosts: ['snap.licdn.com', 'px.ads.linkedin.com'], inline: /_linkedin_partner_id/ },
  { name: 'X (Twitter) Pixel', kind: 'tracker', hosts: ['static.ads-twitter.com', 'analytics.twitter.com', 't.co/i/adsct'], inline: /\btwq\s*\(\s*['"](?:init|config)['"]/ },
  { name: 'Pinterest Tag', kind: 'tracker', hosts: ['s.pinimg.com/ct/', 'ct.pinterest.com'], inline: /\bpintrk\s*\(\s*['"]load['"]/ },
  { name: 'Snap Pixel', kind: 'tracker', hosts: ['sc-static.net/scevent', 'tr.snapchat.com'], inline: /\bsnaptr\s*\(\s*['"]init['"]/ },
  { name: 'Reddit Pixel', kind: 'tracker', hosts: ['redditstatic.com/ads', 'alb.reddit.com'], inline: /\brdt\s*\(\s*['"]init['"]/ },
  { name: 'Microsoft Advertising', kind: 'tracker', hosts: ['bat.bing.com'], inline: /bat\.bing\.com\/bat\.js|\buetq\b/ },
  { name: 'Microsoft Clarity', kind: 'tracker', hosts: ['clarity.ms'], inline: /clarity\.ms\/tag/ },
  { name: 'Hotjar', kind: 'tracker', hosts: ['hotjar.com'], inline: /_hjSettings|static\.hotjar\.com/ },
  { name: 'Yandex Metrica', kind: 'tracker', hosts: ['mc.yandex.ru', 'mc.yandex.com'], inline: /mc\.yandex\.(?:ru|com)\/metrika/ },
  { name: 'Segment', kind: 'tracker', hosts: ['cdn.segment.com'], inline: /cdn\.segment\.com\/analytics\.js/ },
  { name: 'Mixpanel', kind: 'tracker', hosts: ['cdn.mxpnl.com', 'mixpanel.com/track'], inline: /\bmixpanel\.init\s*\(/ },
  { name: 'Amplitude', kind: 'tracker', hosts: ['cdn.amplitude.com'], inline: /cdn\.amplitude\.com/ },
  { name: 'Heap', kind: 'tracker', hosts: ['cdn.heapanalytics.com'], inline: /\bheap\.load\s*\(/ },
  { name: 'FullStory', kind: 'tracker', hosts: ['fullstory.com/s/fs.js', 'edge.fullstory.com'], inline: /_fs_namespace|fullstory\.com\/s\/fs\.js/ },
  { name: 'Mouseflow', kind: 'tracker', hosts: ['cdn.mouseflow.com'], inline: /cdn\.mouseflow\.com/ },
  { name: 'Crazy Egg', kind: 'tracker', hosts: ['script.crazyegg.com'] },
  { name: 'HubSpot', kind: 'tracker', hosts: ['js.hs-scripts.com', 'js.hs-analytics.net', 'js.hsadspixel.net'] },
  { name: 'Matomo', kind: 'tracker', hosts: ['matomo.cloud', 'matomo.js', 'piwik.js'], inline: /\b_paq\.push\s*\(\s*\[\s*['"]trackPageView['"]/ },
  { name: 'Plausible', kind: 'tracker', hosts: ['plausible.io/js'] },
  { name: 'Criteo', kind: 'tracker', hosts: ['static.criteo.net', 'dis.criteo.com'] },
  { name: 'Taboola', kind: 'tracker', hosts: ['cdn.taboola.com', 'trc.taboola.com'] },
  { name: 'Outbrain', kind: 'tracker', hosts: ['widgets.outbrain.com', 'amplify.outbrain.com'] },
  { name: 'AdRoll', kind: 'tracker', hosts: ['s.adroll.com'] },
  { name: 'Quantcast', kind: 'tracker', hosts: ['quantserve.com', 'quantcount.com'] },
  { name: 'Comscore', kind: 'tracker', hosts: ['scorecardresearch.com'] },
  // Cookie-consent platforms
  { name: 'OneTrust', kind: 'consent', hosts: ['cdn.cookielaw.org', 'optanon.blob.core.windows.net', 'cookie-cdn.cookiepro.com'], inline: /\bOptanonWrapper\b/ },
  { name: 'Cookiebot', kind: 'consent', hosts: ['consent.cookiebot.com', 'consentcdn.cookiebot.com'] },
  { name: 'CookieYes', kind: 'consent', hosts: ['cdn-cookieyes.com'] },
  { name: 'Usercentrics', kind: 'consent', hosts: ['usercentrics.eu'] },
  { name: 'Didomi', kind: 'consent', hosts: ['sdk.privacy-center.org'] },
  { name: 'Quantcast Choice', kind: 'consent', hosts: ['cmp.quantcast.com', 'quantcast.mgr.consensu.org'] },
  { name: 'TrustArc', kind: 'consent', hosts: ['consent.trustarc.com', 'consent.truste.com'] },
  { name: 'Osano', kind: 'consent', hosts: ['cmp.osano.com'] },
  { name: 'iubenda', kind: 'consent', hosts: ['cdn.iubenda.com', 'cs.iubenda.com'] },
  { name: 'Termly', kind: 'consent', hosts: ['app.termly.io'] },
  { name: 'Cookie Script', kind: 'consent', hosts: ['cdn.cookie-script.com'] },
  { name: 'CookieHub', kind: 'consent', hosts: ['cookiehub.net'] },
  { name: 'Klaro', kind: 'consent', hosts: ['klaro.kiprotect.com'] },
];

// Banner markup that consent tools and popular WordPress plugins put straight into the HTML.
const BANNER_SELECTORS: [string, string][] = [
  ['#onetrust-consent-sdk, #onetrust-banner-sdk', 'OneTrust'],
  ['#CybotCookiebotDialog, #CybotCookiebotDialogBodyUnderlay', 'Cookiebot'],
  ['.cky-consent-container, .cky-overlay, .cky-btn-revisit-wrapper', 'CookieYes'],
  ['#cookie-law-info-bar, #cliSettingsPopup, .cli-modal-backdrop', 'GDPR Cookie Consent'],
  ['#cmplz-cookiebanner-container, .cmplz-cookiebanner', 'Complianz'],
  ['#moove_gdpr_cookie_info_bar, #moove_gdpr_cookie_modal', 'GDPR Cookie Compliance'],
  ['#cookie-notice', 'Cookie Notice'],
  ['#usercentrics-root, #usercentrics-cmp-ui', 'Usercentrics'],
  ['#didomi-host', 'Didomi'],
  ['#qc-cmp2-container', 'Quantcast Choice'],
  ['#truste-consent-track, #consent_blackbar', 'TrustArc'],
  ['.cc-window.cc-banner, .cc-window.cc-floating, .cc-revoke', 'Cookie Consent'],
  ['#cookiescript_injected', 'Cookie Script'],
  ['#iubenda-cs-banner', 'iubenda'],
  ['.termly-styles-root', 'Termly'],
];

export interface RemovedItem {
  name: string;
  kind: 'tracker' | 'consent' | 'redirect';
}

const matchHost = (url: string | undefined): Signature | undefined => {
  if (!url) return undefined;
  const value = url.toLowerCase();
  return SIGNATURES.find((s) => s.hosts?.some((host) => value.includes(host)));
};

/** Remove trackers, consent banners and redirects from a page. Returns what was removed, once per name. */
export function cleanPage($: CheerioAPI): RemovedItem[] {
  const removed = new Map<string, RemovedItem>();
  const note = (name: string, kind: RemovedItem['kind']) => removed.set(name, { name, kind });

  $('script').each((_, node) => {
    const el = $(node);
    const src = el.attr('src');
    const signature = src ? matchHost(src) : SIGNATURES.find((s) => s.inline?.test(el.text()));
    if (signature) {
      note(signature.name, signature.kind);
      el.remove();
    }
  });

  // Tracking pixels and the tag manager's <noscript> iframe.
  $('img, iframe').each((_, node) => {
    const el = $(node);
    const signature = matchHost(el.attr('src'));
    if (!signature) return;
    note(signature.name, signature.kind);
    const wrapper = el.parent('noscript');
    (wrapper.length ? wrapper : el).remove();
  });

  // Connection hints and preloads for the removed tags would still contact their servers.
  $('link[href]').each((_, node) => {
    const el = $(node);
    const rel = (el.attr('rel') ?? '').toLowerCase();
    if (!/preconnect|dns-prefetch|preload|prefetch|stylesheet/.test(rel)) return;
    const signature = matchHost(el.attr('href'));
    if (signature) {
      note(signature.name, signature.kind);
      el.remove();
    }
  });

  for (const [selector, name] of BANNER_SELECTORS) {
    const found = $(selector);
    if (found.length) {
      note(name, 'consent');
      found.remove();
    }
  }

  // A <meta refresh> would take the saved copy straight back to the live site (or somewhere else).
  $('meta[http-equiv]').each((_, node) => {
    const el = $(node);
    if ((el.attr('http-equiv') ?? '').toLowerCase() === 'refresh') {
      note('meta refresh', 'redirect');
      el.remove();
    }
  });

  return [...removed.values()];
}

/** Hosts known to belong to trackers and consent tools, for the page insights. */
export function trackerName(url: string): { name: string; kind: 'tracker' | 'consent' } | undefined {
  const signature = matchHost(url);
  return signature && { name: signature.name, kind: signature.kind };
}

export function inlineTrackerName(script: string): { name: string; kind: 'tracker' | 'consent' } | undefined {
  const signature = SIGNATURES.find((s) => s.inline?.test(script));
  return signature && { name: signature.name, kind: signature.kind };
}

