// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import { SITE } from './src/config.ts';

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
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
});
