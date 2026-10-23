// Checks every locale file against the English source: same keys, same list lengths, same
// {placeholders}, same HTML tags and link/id attributes, and no empty strings.
// Usage: node scripts/check-i18n.mjs [locale ...]   (Node 22: add --experimental-strip-types)
import { readdirSync } from 'node:fs';

const dir = new URL('../src/i18n/locales/', import.meta.url);
const load = async (code) => (await import(new URL(`${code}.ts`, dir).href)).default;
const en = await load('en');
const wanted = process.argv.slice(2);
const codes = (wanted.length ? wanted : readdirSync(dir).map((f) => f.replace(/\.ts$/, ''))).filter((c) => c !== 'en');

const placeholders = (s) => [...s.matchAll(/\{[a-zA-Z]+\}/g)].map((m) => m[0]).sort().join(' ');
const tags = (s) => [...s.matchAll(/<\/?([a-z0-9]+)/gi)].map((m) => m[0].toLowerCase()).join(' ');
const attrs = (s) => [...s.matchAll(/\s(href|id)="([^"]*)"/g)].map((m) => `${m[1]}=${m[2]}`).sort().join(' ');

let failures = 0;
for (const code of codes) {
  const problems = [];
  let dict;
  try {
    dict = await load(code);
  } catch (error) {
    console.log(`✗ ${code}: could not load (${error.message})`);
    failures++;
    continue;
  }
  const walk = (a, b, path) => {
    if (typeof a === 'string') {
      if (typeof b !== 'string') return problems.push(`${path}: expected a string`);
      if (!b.trim()) problems.push(`${path}: empty`);
      if (placeholders(a) !== placeholders(b)) problems.push(`${path}: placeholders ${placeholders(b) || '(none)'} ≠ ${placeholders(a)}`);
      if (/Html$/.test(path.split('.').pop() ?? '') || /<[a-z]/i.test(a)) {
        if (tags(a) !== tags(b)) problems.push(`${path}: HTML tags differ from English`);
        if (attrs(a) !== attrs(b)) problems.push(`${path}: href/id attributes differ from English`);
      }
      if (path.endsWith('.id') && a !== b) problems.push(`${path}: ids must stay "${a}"`);
      return;
    }
    if (Array.isArray(a)) {
      if (!Array.isArray(b) || a.length !== b.length) return problems.push(`${path}: expected ${a.length} items`);
      return a.forEach((item, i) => walk(item, b[i], `${path}[${i}]`));
    }
    if (typeof b !== 'object' || b === null) return problems.push(`${path}: expected an object`);
    for (const key of Object.keys(a)) {
      if (!(key in b)) problems.push(`${path}.${key}: missing`);
      else walk(a[key], b[key], `${path}.${key}`);
    }
    for (const key of Object.keys(b)) if (!(key in a)) problems.push(`${path}.${key}: not in English`);
  };
  walk(en, dict, code);
  const warn = [];
  if (dict.meta?.homeTitle?.length > 65) warn.push(`meta.homeTitle is ${dict.meta.homeTitle.length} chars (aim ≤ 60)`);
  if (dict.meta?.homeDescription?.length > 170) warn.push(`meta.homeDescription is ${dict.meta.homeDescription.length} chars (aim ≤ 160)`);
  if (problems.length) {
    failures++;
    console.log(`✗ ${code}: ${problems.length} problem(s)\n  - ${problems.slice(0, 40).join('\n  - ')}`);
  } else {
    console.log(`✓ ${code}`);
  }
  if (warn.length) console.log(`  ! ${warn.join('\n  ! ')}`);
}
process.exit(failures ? 1 : 0);
