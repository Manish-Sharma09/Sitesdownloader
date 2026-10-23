// Supported languages (pattern from the Astro i18n recipe: https://docs.astro.build/en/recipes/i18n/).
// English is the default and keeps unprefixed URLs (/about); the others live under /es/about, /ja/about…
import type { Dict } from './locales/en';
import de from './locales/de';
import en from './locales/en';
import es from './locales/es';
import fr from './locales/fr';
import it from './locales/it';
import ja from './locales/ja';
import ko from './locales/ko';
import pt from './locales/pt';

interface Language {
  /** Name of the language in that language, for the language picker. */
  label: string;
  /** BCP 47 tag for <html lang>. */
  htmlLang: string;
  /** hreflang value used in alternate links and the sitemap. */
  hreflang: string;
  /** Open Graph locale. */
  ogLocale: string;
  dict: Dict;
}

export const LANGUAGES = {
  en: { label: 'English', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US', dict: en },
  es: { label: 'Español', htmlLang: 'es', hreflang: 'es', ogLocale: 'es_ES', dict: es },
  ja: { label: '日本語', htmlLang: 'ja', hreflang: 'ja', ogLocale: 'ja_JP', dict: ja },
  fr: { label: 'Français', htmlLang: 'fr', hreflang: 'fr', ogLocale: 'fr_FR', dict: fr },
  de: { label: 'Deutsch', htmlLang: 'de', hreflang: 'de', ogLocale: 'de_DE', dict: de },
  // Brazilian Portuguese content, offered to every Portuguese-speaking country.
  pt: { label: 'Português', htmlLang: 'pt-BR', hreflang: 'pt', ogLocale: 'pt_BR', dict: pt },
  ko: { label: '한국어', htmlLang: 'ko', hreflang: 'ko', ogLocale: 'ko_KR', dict: ko },
  it: { label: 'Italiano', htmlLang: 'it', hreflang: 'it', ogLocale: 'it_IT', dict: it },
} satisfies Record<string, Language>;

export type Lang = keyof typeof LANGUAGES;
export const LANGS = Object.keys(LANGUAGES) as Lang[];
export const defaultLang: Lang = 'en';
/** false = the default language has no /en prefix in its URLs. */
export const showDefaultLang = false;
