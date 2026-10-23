import type { APIRoute } from 'astro';
import { SITE } from '../config';
import en from '../i18n/locales/en';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify(
      {
        name: `${SITE.name} – Website Downloader`,
        short_name: SITE.name,
        description: en.meta.homeDescription,
        start_url: '/',
        display: 'standalone',
        background_color: '#0d1633',
        theme_color: '#0d1633',
        icons: [
          { src: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      null,
      2,
    ),
    { headers: { 'content-type': 'application/manifest+json' } },
  );
