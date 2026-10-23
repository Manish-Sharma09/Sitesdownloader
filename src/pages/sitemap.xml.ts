import type { APIRoute } from 'astro';
import { LANGS, LANGUAGES, absoluteUrl, defaultLang, localizePath } from '../i18n/utils';

// Every English page in src/pages is listed in every language, with hreflang alternates so search
// engines connect the translations. Error pages and the [lang] routes themselves are skipped.
const routes = Object.keys(import.meta.glob('./*.astro'))
  .map((file) => file.replace(/^\.\//, '').replace(/\.astro$/, ''))
  .filter((route) => !/^(404|500)$/.test(route))
  .map((route) => (route === 'index' ? '/' : `/${route}`))
  .sort();

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const entries = routes.flatMap((route) => {
    const alternates = [
      ...LANGS.map(
        (l) =>
          `    <xhtml:link rel="alternate" hreflang="${LANGUAGES[l].hreflang}" href="${absoluteUrl(localizePath(route, l))}"/>`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(localizePath(route, defaultLang))}"/>`,
    ].join('\n');
    return LANGS.map(
      (lang) => `  <url>
    <loc>${absoluteUrl(localizePath(route, lang))}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${route === '/' ? '1.0' : '0.5'}</priority>
${alternates}
  </url>`,
    );
  });

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`,
    { headers: { 'content-type': 'application/xml; charset=utf-8' } },
  );
};
