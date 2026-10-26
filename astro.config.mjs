// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';
import { SITE } from './src/config.ts';

// `npm run build` makes a Node server (Hostinger), or Vercel Functions when Vercel runs the build (it sets VERCEL=1).
// `npm run deploy` sets ASTRO_ADAPTER=cloudflare and builds a Worker.
const target = process.env.ASTRO_ADAPTER ?? (process.env.VERCEL ? 'vercel' : 'node');

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  trailingSlash: 'never',
  build: {
    // about.astro → about.html, but [lang]/index.astro → es/index.html. With 'file' the language home
    // pages became es.html next to an es/ folder, and /es answered with a 404.
    format: 'preserve',
  },
  // Nothing uses sessions or astro:assets, so skip the KV and Images bindings the adapter would provision.
  session: false,
  security: {
    // Behind a proxy, Astro takes the visitor's IP from X-Forwarded-For only on these hosts. Otherwise every
    // visitor shares the proxy's address and src/lib/guard.ts allows two downloads for the whole site.
    allowedDomains: [SITE.url, ...SITE.aliases].map((url) => ({ hostname: new URL(url).hostname })),
  },
  adapter:
    target === 'cloudflare'
      ? cloudflare({ imageService: 'passthrough' })
      : target === 'vercel'
        ? // Its functions stream the response, so ZIPs over Vercel's 4.5 MB body limit still go through.
          vercel()
        : node({ mode: 'standalone' }),
});
