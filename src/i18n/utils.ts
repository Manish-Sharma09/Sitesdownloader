import { SITE } from '../config';
import { LANGUAGES, LANGS, type Lang, defaultLang, showDefaultLang } from './ui';

export type { Lang };

export function isLang(value: string | undefined): value is Lang {
  return !!value && value in LANGUAGES;
}

/** Language of the current page, from the first path segment (/es/about → es). */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return isLang(first) ? first : defaultLang;
}

export function useTranslations(lang: Lang) {
  return LANGUAGES[lang].dict;
}

/** Turn a default-language path ("/", "/about") into the same page in another language. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path === '/' ? '' : path.replace(/\/+$/, '');
  if (lang === defaultLang && !showDefaultLang) return clean || '/';
  return `/${lang}${clean}`;
}

export function useTranslatedPath(lang: Lang) {
  return (path: string, to: Lang = lang) => localizePath(path, to);
}

/** The default-language path of the current page (/es/about → /about, /ja → /). */
export function basePath(url: URL): string {
  const parts = url.pathname.split('/').filter(Boolean);
  if (isLang(parts[0])) parts.shift();
  return parts.length ? `/${parts.join('/')}` : '/';
}

/** Fill {placeholders} in a translated string. */
export function format(template: string, params: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in params ? String(params[key]) : match));
}

/** Pick the right plural form for a count and fill in {count}. */
export function plural(lang: Lang, forms: { one: string; other: string }, count: number): string {
  const category = new Intl.PluralRules(LANGUAGES[lang].htmlLang).select(count);
  const template = category === 'one' ? forms.one : forms.other;
  return format(template, { count: new Intl.NumberFormat(LANGUAGES[lang].htmlLang).format(count) });
}

/** Placeholders every content page can use: brand, email and localized links to the other pages. */
export function pageParams(lang: Lang): Record<string, string> {
  return {
    name: SITE.name,
    email: SITE.email,
    homeUrl: localizePath('/', lang),
    contactUrl: localizePath('/contact', lang),
    termsUrl: localizePath('/terms-and-conditions', lang),
    privacyUrl: localizePath('/privacy-policy', lang),
  };
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).href;
}

export { LANGUAGES, LANGS, defaultLang };
