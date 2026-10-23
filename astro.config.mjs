// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import { SITE } from './src/config.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  trailingSlash: 'never',
  build: {
    // about.astro → about.html, but [lang]/index.astro → es/index.html. With 'file' the language home
    // pages became es.html next to an es/ folder, and the Node server answered /es with a 404.
    format: 'preserve',
  },
  adapter: node({
    mode: 'standalone',
  }),
});
