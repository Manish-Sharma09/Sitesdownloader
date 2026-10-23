// Brand and site details used everywhere: page titles, SEO tags, sitemap, robots.txt and legal pages.
// Page copy, titles and descriptions live in src/i18n/locales/ (one file per language).
// Make sure the contact mailbox below exists before going live.
// Keep this file free of imports and import.meta.env so astro.config.mjs can import it too.
export const SITE = {
  name: 'SitesDownloader',
  /** Production origin, no trailing slash. Used for canonical URLs, Open Graph and the sitemap. */
  url: 'https://sitesdownloader.com',
  email: 'hello@sitesdownloader.com',
  /** Telegram bot username without the @. Leave empty to hide the Telegram section. */
  telegramBot: '',
  /** ISO date shown on the privacy policy and terms pages. Update it whenever you change them. */
  legalUpdated: '2026-10-23',
};
