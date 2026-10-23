import type { APIRoute } from 'astro';
import { LANGUAGES, defaultLang, format, isLang, useTranslations } from '../../i18n/utils';
import { archiveWebsite } from '../../lib/archiver';
import { UserFacingError } from '../../lib/fetcher';
import { withSlot } from '../../lib/guard';
import type { ArchiveOptions } from '../../lib/manifest';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

function readOptions(body: Record<string, unknown>): ArchiveOptions {
  const device = body.device === 'mobile' || body.device === 'both' ? body.device : body.mobile === true ? 'mobile' : 'desktop';
  return {
    renameAssets: body.renameAssets === true,
    keepStructure: body.keepStructure === true,
    simplified: body.simplified === true,
    cleanCopy: body.cleanCopy === true,
    prettify: body.prettify === true,
    device,
    output: body.output === 'single' ? 'single' : 'zip',
  };
}

// POST { url | urls[], lang, ...options } → a ZIP. The archive always carries archive-manifest.json,
// which the page reads to show the result panel (and, for a single HTML file, to unwrap it).
export const POST: APIRoute = async ({ request, clientAddress }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: useTranslations(defaultLang).errors.badRequest }, 400);
  }

  // Errors are answered in the language of the page that sent the request.
  const lang = typeof body.lang === 'string' && isLang(body.lang) ? body.lang : defaultLang;
  const t = useTranslations(lang);
  const urls = Array.isArray(body.urls) ? body.urls.map(String) : [String(body.url ?? '')];

  try {
    const result = await withSlot(clientAddress, () =>
      archiveWebsite({ urls, options: readOptions(body), t, htmlLang: LANGUAGES[lang].htmlLang }),
    );
    if (!result) return json({ error: t.errors.busy }, 429);

    const failed = result.manifest.problemCount;
    return new Response(result.zip, {
      headers: {
        'content-type': 'application/zip',
        'content-disposition': `attachment; filename="${result.filename.replace(/\.html$/, '.zip')}"`,
        'x-assets-saved': String(result.manifest.files.length),
        'x-assets-failed': String(failed),
        'cache-control': 'no-store',
      },
    });
  } catch (error) {
    if (error instanceof UserFacingError) {
      return json({ error: format(t.errors[error.key], error.params) }, error.status);
    }
    console.error('[download]', error);
    return json({ error: t.errors.internal }, 500);
  }
};
