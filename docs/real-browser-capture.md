# Plan: real-browser capture

Status: planned, not built. Written 2026-10-21 after the competitor review.

## Why

Today the server downloads a page's HTML as sent and never runs its JavaScript. Pages that build
their content in the browser (React, Vue and other single-page apps, many landing-page builders)
save as an empty shell, and content that loads on scroll is missed unless it uses a known
`data-src`-style attribute.

Among the eight tools reviewed, only paid or self-hosted ones render JavaScript:

- WebsiteDownloader.io renders only on paid plans.
- ArchiveBox renders, but you have to host it yourself (Docker, about 2 GB RAM).
- The Chrome extensions render the current tab only, and need an install.

A free, no-install renderer that still produces one linked offline ZIP would be the clearest
difference from every competitor.

## What it adds for the visitor

- A **Render JavaScript** switch under More options (hint: slower, for pages built by scripts).
- A real Chromium loads the page, scrolls to the bottom to trigger lazy loading, waits for the
  network to go quiet, then hands the **rendered DOM** to the existing archiver. Rewriting, Clean
  copy, the report, insights, single-file output and the file picker all keep working unchanged.
- Optional extras in the archive: `screenshot-desktop.png` / `screenshot-mobile.png` (full page)
  and `page.pdf`. They are shown in the result panel and listed in the report.

## How it fits the current code

1. `src/lib/render.ts` (new): `renderPage(url, device) → { html, finalUrl, resources }`.
   - Uses `playwright-core` with a Chromium binary installed in the image.
   - One browser per server process, one fresh **context** per job (no shared cookies or storage).
   - Steps: `goto` with `waitUntil: 'networkidle'` and a 20-second cap. Scroll in steps until
     `scrollHeight` stops growing (cap 15 steps or 10 seconds). Freeze CSS animations. Serialize
     `document.documentElement.outerHTML`, keeping the original `<!doctype>`.
   - `resources`: every response the page received (URL, type, body), collected with
     `page.on('response')`. The archiver can use these bodies instead of fetching again. That also
     catches files only scripts asked for (code-split chunks, fonts loaded by JS, images set from
     JS), which raw parsing never sees.
2. `capture()` in `archiver.ts`: when `options.render` is on, take `html` from `renderPage`
   instead of `fetchPublic`. Then pre-seed the asset map from `resources`, so registered URLs that
   were already loaded skip the network.
3. Saved pages: the rendered DOM already contains what the scripts built. With Render JavaScript
   on, also apply **Simplified** by default (offer it as a recommended pairing). Otherwise the
   page's router may run again when opened from disk and redirect to a 404, a top complaint in the
   Chrome extension reviews.
4. Manifest: add `rendered: boolean` and `extras: { path, kind: 'screenshot' | 'pdf' }[]`. Then the
   panel's Files tab and the report pick them up.

## Security (the part that matters most)

A browser makes requests that the server-side fetcher's checks never see, including subresources,
redirects, iframes, workers and WebSockets. Every one of them has to pass the same SSRF checks.

- Intercept **all** requests with `context.route('**/*')`:
  - Reject non-http(s) schemes.
  - Resolve the host with the same DNS guard as `fetcher.ts` and abort anything that resolves to
    private, loopback, link-local or metadata ranges.
  - Re-check every redirect hop.
- Block service workers (`serviceWorkers: 'block'`), downloads (`acceptDownloads: false`),
  WebSockets to private hosts, `file:` and `chrome:` URLs, and permission prompts.
- Run Chromium as an unprivileged user in its own container, with its sandbox on. Never pass
  `--no-sandbox` in production.
- Hard limits per job:
  - 30-second total render time.
  - 200 requests.
  - 50 MB of responses.
  - A kill switch if the context's memory grows past 600 MB.
- Keep the existing per-client limit (`src/lib/guard.ts`) and add a global render queue (for
  example, 2 renders per CPU). When it is full, answer with the existing "busy" message.

## Hosting needs

| | Today (HTML only) | With rendering |
| --- | --- | --- |
| Image size | ~150 MB (Node + app) | ~500–600 MB (adds Chromium and fonts) |
| Memory | ~150 MB + archives in flight | +300–500 MB per concurrent render |
| CPU | Light | About 1 vCPU per 1–2 concurrent renders |
| Typical job | 2–10 s | 8–30 s |

Deployment options, simplest first:

1. **Same Node server**: install Chromium in the Docker image and cap renders at 2. Needs a
   machine with at least 2 vCPU and 2 GB RAM.
2. **Separate render worker**: a small service that only renders, scaled on its own. The main
   site calls it over HTTP. Best once traffic grows.
3. **Managed headless browser** (Browserless, Cloudflare Browser Rendering and similar): no
   Chromium to run, billed per browser-minute. Check current pricing. The SSRF interception still
   has to happen in our code, through their request-interception APIs.

Check the reverse proxy timeout as well: rendered jobs can take up to 30 seconds, on top of
the current 150-second ceiling for several pages.

## Phases

1. **Rendered DOM + scroll loading + SSRF interception + queue** (3–5 days). Ship behind the switch.
2. **Screenshots and PDF** (1–2 days): `page.screenshot({ fullPage: true })` and `page.pdf()`,
   saved into the archive and shown in the panel.
3. **Network-captured assets** (3–5 days): reuse response bodies, save code-split chunks, and
   rewrite `import()` paths in saved scripts, so pages that keep their JavaScript work offline too.

Each phase needs new interface text in `en.ts` and all seven translations, as usual.

## Risks

- **Cost and abuse:** rendering is about 10× the work of a plain download. The queue, the
  per-client limit and per-job caps are required, not optional.
- **Bot protection:** some sites show a challenge page to headless browsers. The renderer should
  detect a challenge title or a 403 or 503 status, and say so in the visitor's language rather than
  saving the challenge page.
- **Terms of use:** unchanged from today. The tool saves what any visitor's browser receives, and
  the existing terms ask people to save only pages they have the right to copy.
