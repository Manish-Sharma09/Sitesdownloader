import type { APIRoute } from 'astro';
import { SITE } from '../config';

export const GET: APIRoute = () =>
  new Response(
    ['User-agent: *', 'Allow: /', 'Disallow: /api/', '', `Sitemap: ${new URL('/sitemap.xml', SITE.url).href}`, ''].join(
      '\n',
    ),
    { headers: { 'content-type': 'text/plain; charset=utf-8' } },
  );
