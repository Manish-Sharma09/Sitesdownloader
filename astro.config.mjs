// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import node from '@astrojs/node';
import { SITE } from './src/config.ts';

// `npm run build` makes a Node server (Hostinger). `npm run deploy` sets ASTRO_ADAPTER=cloudflare and builds a Worker.
const onWorkers = process.env.ASTRO_ADAPTER === 'cloudflare';

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
  adapter: onWorkers ? cloudflare({ imageService: 'passthrough' }) : node({ mode: 'standalone' }),
});
