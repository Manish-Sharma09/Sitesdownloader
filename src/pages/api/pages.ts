import type { APIRoute } from 'astro';
import { defaultLang, format, isLang, useTranslations } from '../../i18n/utils';
import { discoverPages } from '../../lib/discover';
import { UserFacingError } from '../../lib/fetcher';
import { withSlot } from '../../lib/guard';

export const prerender = false;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

// POST { url, lang } → { url, pages: [{ url, title? }] }: pages of the same site, for the multi-page picker.
export const POST: APIRoute = async ({ request, clientAddress }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: useTranslations(defaultLang).errors.badRequest }, 400);
  }
  const lang = typeof body.lang === 'string' && isLang(body.lang) ? body.lang : defaultLang;
  const t = useTranslations(lang);

  try {
    const result = await withSlot(clientAddress, () => discoverPages(String(body.url ?? '')));
    if (!result) return json({ error: t.errors.busy }, 429);
    return json(result);
  } catch (error) {
    if (error instanceof UserFacingError) return json({ error: format(t.errors[error.key], error.params) }, error.status);
    console.error('[pages]', error);
    return json({ error: t.errors.internal }, 500);
  }
};
