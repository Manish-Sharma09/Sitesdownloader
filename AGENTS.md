## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project notes

- Downloads run in `src/pages/api/download.ts` (on-demand). Every other page is prerendered and served as a static asset. `npm run build` makes a Node server (`@astrojs/node`, deployed as a Hostinger Node.js app); `npm run deploy` sets `ASTRO_ADAPTER=cloudflare` and ships a Cloudflare Worker (`wrangler.jsonc`). Server code must run in both: workerd has no `node:dns` `lookup`, and 128 MB of memory per request. Outgoing requests go through `#transport` (package.json `imports`): `src/lib/transport.node.ts` refuses private addresses in the connection's own DNS lookup, `transport.workers.ts` resolves the host first.
- Brand, domain and email come from `src/config.ts`. Never hardcode them in pages.
- `DESIGN.md` (Vercel) is reference material only. The live design tokens are in `src/styles/global.css`; keep new UI consistent with those.
- Design system (from the design skills in `.agents/skills/`): dark by default, light only when the visitor picks it; one canvas for every section (no colour-block sections). Amber `--accent` is the only accent; the `--kind-*` colours are a file-type legend, not accents. Type: Bricolage Grotesque for headings (`--font-display`), Geist for text, Geist Mono for file names and code. Shapes: controls are full pills, panels are double-bezel (`.bezel > .core`, 28px/22px), tiles and wells 16px. Buttons with an icon nest it in a circle (`.btn-icon`). Each section uses a different layout family; avoid three equal cards, eyebrow labels and em dashes in copy.
- Motion rules: animate only `transform`/`opacity`, name transition properties, and keep a reduced-motion path. The hero illustration (`ArchiveScene.astro`: page, files and ZIP folder) is the one bold effect; prefer restraint elsewhere.
- Try new effects on a throwaway route first, check them running, then integrate.
- FAQ content lives in the `faq` section of `src/i18n/locales/*.ts` and also feeds the FAQPage JSON-LD, which `Faq.astro` renders right after the FAQ list.
- New pages under `src/pages` are added to `/sitemap.xml` automatically.
- All user-visible copy lives in `src/i18n/locales/`. Add new strings to `en.ts` first, then to every other locale, and run `npm run check:i18n`. Never hardcode English in components; use `useTranslations(getLangFromUrl(Astro.url))`.
- Internal links must go through `localizePath()` so they stay in the visitor's language.
- Every archive carries `archive-manifest.json` (types in `src/lib/manifest.ts`). The result panel (`src/scripts/result.ts`) reads it from the ZIP in the browser; keep the server and the panel on the same manifest shape. Text from saved sites goes into the DOM with `textContent`, never `innerHTML`.
- Labels shared by the report and the panel (sizes, plurals, failure reasons) live in `src/lib/describe.ts`. Clean copy's tracker and banner list is `src/lib/cleaner.ts`; insights also reuse it.
- After adding a dependency the running dev server may answer some modules with "504 Outdated Optimize Dep"; restart it.
