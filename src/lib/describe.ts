// Words and numbers for the archive report and the result panel. Pure functions, used on the
// server (archive-report.html) and in the browser (the panel), so both say exactly the same thing.
import type { Dict } from '../i18n/locales/en';
import type { Manifest, ManifestProblem } from './manifest';

export type ResultText = Dict['result'];

export const fill = (template: string, params: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (match, key: string) => (key in params ? String(params[key]) : match));

export function plural(locale: string, forms: { one: string; other: string }, count: number): string {
  const template = new Intl.PluralRules(locale).select(count) === 'one' ? forms.one : forms.other;
  return fill(template, { count: new Intl.NumberFormat(locale).format(count) });
}

export function formatBytes(locale: string, bytes: number): string {
  const [unit, value] =
    bytes >= 1024 * 1024 ? ['megabyte', bytes / 1024 / 1024] : bytes >= 1024 ? ['kilobyte', bytes / 1024] : ['byte', bytes];
  return new Intl.NumberFormat(locale, {
    style: 'unit',
    unit,
    unitDisplay: 'short',
    maximumFractionDigits: value < 10 && unit !== 'byte' ? 1 : 0,
  }).format(value);
}

export function reasonText(
  locale: string,
  text: ResultText,
  problem: ManifestProblem,
  limits: Manifest['limits'],
): string {
  return fill(text.reasons[problem.reason], {
    status: problem.status ?? '',
    size: formatBytes(locale, limits.assetBytes),
    max: new Intl.NumberFormat(locale).format(limits.maxAssets),
  });
}

/** example.com/a/very/long/path/file.css → example.com/…/path/file.css, for lists. */
export function shortUrl(url: string, max = 64): string {
  let value = url.replace(/^https?:\/\/(www\.)?/, '');
  if (value.length <= max) return value;
  const [host, ...rest] = value.split('/');
  const tail = rest.join('/');
  value = `${host}/…/${tail.slice(-(max - host.length - 3))}`;
  return value;
}
