# SitesDownloader: website downloader

Live at [sitesdownloader.com](https://sitesdownloader.com).

An Astro site that saves any public webpage — HTML, CSS, JavaScript, images and fonts — into a ZIP archive.
The name, domain and email are placeholders: set yours in `src/config.ts` before launch.

## Run it

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # production build of the Node server into dist/
npm start          # run that build (HOST / PORT env vars supported)
npm run deploy     # build for Cloudflare Workers instead, then deploy with Wrangler
```

Requires Node 22.19+. The download endpoint runs on the server, so the site needs a host that runs
code, not only static files. Three targets share the same code:

- **Node** (`@astrojs/node`, standalone), the default. On Hostinger this needs a Business or Cloud
  plan: add the site as a **Node.js web app** connected to the GitHub repo, with the Astro preset,
  build command `npm run build`, output directory `dist`, entry file `server/entry.mjs` and Node 24.
  Without the entry file Hostinger deploys only the static pages. A plain Git deploy into
  `public_html` copies the source without building it and answers 403.
- **Vercel** (`@astrojs/vercel`), picked automatically because Vercel sets `VERCEL=1` during its
  builds. Import the GitHub repo with the Astro preset and the default settings. The API routes run as
  one streaming Node function, so archives larger than Vercel's 4.5 MB body limit still download;
  downloads stop well within the Hobby plan's 300 s limit.
- **Cloudflare Workers** (`@astrojs/cloudflare`, `wrangler.jsonc`), with `npm run deploy`. Prerendered
  pages are static assets and the API routes run in the Worker. Downloads need the Workers Paid plan;
  the Free plan's 10 ms CPU and 50 subrequests per request stop almost every archive.

On Node, every hostname the site answers on goes in `SITE.url` or `SITE.aliases` (`src/config.ts`),
so the server can read the visitor's IP from the proxy and limit downloads per visitor.

## Download options

| Option | What it does |
| --- | --- |
| One page / Several pages | Several pages: up to 20 addresses, one per line, or picked with "Find pages on this site" (the page's own links, then its sitemaps). One ZIP; shared files are saved once and links between saved pages work offline |
| Version: Desktop / Mobile / Both | Mobile fetches the page and its assets with an iPhone Safari user agent. Both puts `desktop/` and `mobile/` copies in one ZIP, with a chooser `index.html` at the root |
| Save as: ZIP archive / Single HTML file | Single file inlines every image, font, stylesheet and script as `data:` URIs. One page downloads as `example.com.html`; several pages or both versions give one self-contained file per page inside the ZIP |
| Clean copy | Removes analytics, ad and session-recording tags (Google Tag Manager/Analytics, Meta Pixel, Hotjar, Clarity, TikTok and ~30 more), cookie-consent banners (OneTrust, Cookiebot, CookieYes and others) and `<meta refresh>` redirects. The page's own scripts stay. List: `src/lib/cleaner.ts` |
| Simplified download | Removes scripts and inline `on*` handlers, and promotes lazy-loaded `data-src` images so they show without JS |
| Rename all assets | Files get short names: `style-1.css`, `image-3.webp`, `font-1.woff2` |
| Save website structure | Keeps the site's own folder paths; third-party files go under `external/<host>/`; extra pages mirror their URL paths |
| Prettify code (More options) | Indents minified HTML, CSS and JavaScript with js-beautify (files up to 1.5 MB) |
| Choose files first (More options) | Nothing downloads until the visitor has reviewed the file list; unticked files are left out and every reference to them points at the live site |

Without "Save website structure", files are grouped into `css/`, `js/`, `images/`, `fonts/` and `media/`, and extra pages go into `pages/`.

## The archive report

Every archive holds `archive-report.html` (readable, in the visitor's language) and `archive-manifest.json`
(machine-readable): each file with its original URL and size, every file that couldn't be saved and why
(HTTP error, timeout, too large, blocked address, time or size limit), what Clean copy removed, how many
links still open the live site, an offline score (share of files saved locally) and page insights:
colours and neutrals, CSS variables, fonts with a licence hint (Google Fonts, Adobe Fonts, system, check),
page weight by file type, the tools the page is built with (CMS, frameworks, libraries, trackers, consent
tools) and its search and sharing tags.

The home page reads the manifest back out of the ZIP in the browser (JSZip) to show the **Your archive**
panel under the hero: score, Files (untick files and "Download selected" repacks the ZIP in the browser),
Problems and Insights. Nothing is kept on the server.

## How it works

- `src/pages/api/download.ts`: `POST { urls: string[] (or url), lang, cleanCopy, simplified, renameAssets,
  keepStructure, prettify, device: 'desktop' | 'mobile' | 'both', output: 'zip' | 'single' }` returns the ZIP
  (always a ZIP on the wire, with the manifest inside; the page unwraps a single HTML file itself).
  Errors come back as `{ error }` in the visitor's language.
- `src/pages/api/pages.ts`: `POST { url, lang }` returns `{ url, pages: [{ url, title? }] }` for the page picker.
- `src/lib/guard.ts`: at most 2 jobs at a time per client address (in memory, per server process).
- `src/lib/archiver.ts`: fetches the pages (3 at a time), parses them with cheerio, and collects stylesheets, scripts, images,
  `srcset`, icons, fonts, video posters, inline styles and lazy-load attributes. It then downloads
  them 8 at a time, follows `@import` and `url()` inside CSS, and rewrites every reference to a
  relative local path (or a `data:` URI for single files). Assets that fail keep their original absolute URL, so the saved page still
  loads them from the live site.
- `src/lib/cleaner.ts` (Clean copy), `src/lib/insights.ts` (page insights), `src/lib/discover.ts` (find pages),
  `src/lib/report.ts` (report and version chooser), `src/lib/manifest.ts` (manifest types, shared with the browser),
  `src/lib/describe.ts` (sizes, plurals and failure reasons, shared by the report and the panel).
- `src/scripts/saver.ts` and `src/scripts/result.ts`: the console and the result panel in the browser.
- `src/lib/paths.ts`: decides each file's path in the archive. The live preview next to the form
  uses the same code, so the preview matches the real output.
- `src/lib/fetcher.ts`: outgoing HTTP with SSRF protection. It accepts only http/https, rejects
  localhost and private, link-local and metadata IP ranges (checked at DNS-connect time and on
  every redirect hop), and enforces size limits and timeouts.

Limits live in `LIMITS` at the top of `archiver.ts`: 400 assets (1,000 across several pages), 25 MB per file,
150 MB per archive, 20 pages, and a 90 second deadline (150 seconds for several pages or both versions).
Put the server behind a proxy whose timeout is longer than that.

Real-browser capture (JavaScript-built pages, PDF and screenshots) is planned: see `docs/real-browser-capture.md`.

## Pages and SEO

| Route | Source |
| --- | --- |
| `/` | `src/pages/index.astro`: tool, features, SEO article (`Guide.astro`), FAQ (`Faq.astro`) |
| `/about`, `/contact` | `src/views/About.astro`, `src/views/Contact.astro` (routed from `src/pages/` and `src/pages/[lang]/`) |
| `/privacy-policy`, `/terms-and-conditions` | Template legal text. Have it reviewed for your jurisdiction. |
| `/404`, `/500` | Error pages (`src/components/ErrorPage.astro`), marked `noindex`, rendered on demand so they follow the language of the requested URL |
| `/robots.txt`, `/sitemap.xml`, `/site.webmanifest` | Generated from `src/config.ts`; the sitemap lists every page automatically |

- Main keyword: **website downloader**. Supporting: download website, save website as zip, website to zip,
  download landing page, website copier, download website source code, website ripper, save webpage offline.
- Every page gets a canonical URL, Open Graph and Twitter tags (`src/layouts/Layout.astro`).
- The home page has `WebApplication` and `FAQPage` JSON-LD. The FAQ questions and answers live in the `faq` section of each locale file (`src/i18n/locales/`),
  which feeds both the visible FAQ and the structured data.
- About, contact and legal pages (`src/layouts/TextPage.astro`) carry `AboutPage`, `ContactPage` or `WebPage` JSON-LD
  with the `Organization` (name, logo, contact email), plus `dateModified` from `SITE.legalUpdated` on the legal pages.
  Each locale's `title` on those pages is the SEO `<title>`; `heading` is the visible h1.
- Logo: `src/components/Logo.astro` (inline, so the wordmark follows the theme; `variant="mark"` for the icon alone).
  Icons generated from the logo mark: `favicon.svg`, `favicon.ico` (16/32/48), `favicon-96x96.png`,
  `apple-touch-icon.png` and the two manifest icons in `public/`. `og-image.png` (1200×630) shows the logo and the hero
  illustration; regenerate it if the name or the hero changes.

## Configuration

- `src/config.ts`: name, production URL, contact email, Telegram bot (empty hides that section), legal page date,
  home page title and description.
- `.env`: copy `.env.example` and set `PUBLIC_GA_ID=G-XXXXXXXXXX` to turn on Google Analytics. The privacy policy
  adds its analytics and cookie sections automatically when this is set.
- Colours, type scale, spacing, radii and easing are tokens at the top of `src/styles/global.css`, with a dark-mode set.

## Languages

English, Español, 日本語, Français, Deutsch, Português (Brazil), 한국어 and Italiano, following the Astro i18n
recipe (https://docs.astro.build/en/recipes/i18n/).

- URLs: English stays unprefixed (`/`, `/about`); other languages live under `/es`, `/ja/about` and so on.
  `src/pages/*.astro` are the English routes and `src/pages/[lang]/*.astro` generate the other seven from the same
  views in `src/views/`.
- Copy: every string is in `src/i18n/locales/<lang>.ts`. `en.ts` is the source and defines the shape; the other
  files must match it. Run `npm run check:i18n` after editing (Node 23+; on Node 22 add
  `--experimental-strip-types`). It checks keys, list lengths, `{placeholders}` and HTML tags against English.
- Each locale's home title, description, headings and FAQ were written around that market's search terms
  (e.g. "descargar página web", "ウェブサイト ダウンロード", "Website herunterladen", "baixar site").
- SEO: `<html lang>`, a canonical URL and `hreflang` alternates (plus `x-default`) on every page, Open Graph
  locales, translated FAQ and WebApplication JSON-LD, and a sitemap listing all 40 URLs with their alternates.
- Language menu in the header (links, works without JavaScript) and a language list in the footer.
- Download errors come back in the page's language: the client sends `lang`, and the server throws error keys
  (`UserFacingError('notFound', …)`) that `src/pages/api/download.ts` translates.
- The 404 page is one static file; an inline script switches it to the language in the URL.
- Japanese and Korean pages load Noto Sans JP/KR and use CJK typography rules in `global.css`.
- To add a language: copy `en.ts`, translate it, register it in `src/i18n/ui.ts`, and run `npm run check:i18n`.
- Not translated: the Telegram strip (hidden until `telegramBot` is set in `src/config.ts`) and the file names in
  the 3D preview, which are real paths.

## Design and motion

Fonts: Mona Sans (variable width, expanded for headlines) and JetBrains Mono for file names and code. The
"stage" (`.stage`, `.stage-grid`) frames the hero and page headers: a pale blueprint in the light theme, deep navy
in the dark one. Add `.stage-dark` to keep a stage dark in both themes (the closing call to action does). Themes are
token sets in `global.css`, selected by `<html data-theme>` or, when unset, the system setting.

| Effect | Where | Notes |
| --- | --- | --- |
| Hero illustration (browser page, its files and the ZIP folder, joined by dashed connectors) | `src/components/ArchiveScene.astro` | HTML and CSS in a light 3D rig plus one SVG; sized in `cqw` so it scales as one piece. Camera angle and colours are at the top of its `<style>`, tilt strength in its `<script>`. It mirrors the form: options rename the file cards, swap in a phone (or show both), drop the JS card; Save flies the files into the folder and runs the zipper, then shows a tick. The status badge follows along |
| Pointer tilt on the hero illustration and feature tiles | `ArchiveScene.astro`, `Features.astro` | Mouse and trackpad only; pauses off screen |
| Steps arrive in order, line draws itself | `Steps.astro` | CSS scroll-driven animation; shown statically where unsupported |
| Zipper closes as the CTA scrolls in | `CtaBand.astro` | CSS scroll-driven animation |
| FAQ answers slide in, icon turns | `Faq.astro` | |
| Page-to-page transitions | `global.css` (`@view-transition`) | Cross-document view transitions, no JavaScript |
| Preloader: the logo above a closed zipper; the bolt pull crosses, then the halves part | `Preloader.astro`, inline script in `Layout.astro` | Every page load; opens once the page has loaded and the pull has crossed, capped at 2.4 s; skipped with reduced motion or without JavaScript. The hero's entrance waits for it |
| Light/dark switch with a circular reveal from the button | `ThemeToggle.astro` | Defaults to the system setting; a manual choice is saved in `localStorage` and applied before first paint. Same-document view transition; instant without support or with reduced motion |

Everything respects `prefers-reduced-motion`: states still change, without the movement. Only `transform` and
`opacity` are animated.

## AI tooling in this repo

- `.claude/skills/tailwind-4-docs` and `.claude/skills/web-design-guidelines` (installed with `npx skills add`,
  tracked in `skills-lock.json`). The Tailwind skill needs its docs snapshot downloaded once, which means
  accepting the Tailwind docs license:
  `python3 .claude/skills/tailwind-4-docs/scripts/sync_tailwind_docs.py --accept-docs-license`
- `.mcp.json` registers the Astro Docs MCP server (`https://mcp.docs.astro.build/mcp`).
- `DESIGN.md` is Vercel's design system from `npx getdesign@latest add vercel`, kept as reference. The site's own
  design tokens are in `src/styles/global.css`.

## Before launch

- [ ] Real name, domain and email in `src/config.ts`
- [ ] `PUBLIC_GA_ID` in the production environment
- [ ] Submit `https://<your-domain>/sitemap.xml` to Google Search Console and Bing Webmaster Tools
- [ ] Email routing for the contact address (for example Cloudflare Email Routing to Gmail)
- [ ] Legal pages reviewed
