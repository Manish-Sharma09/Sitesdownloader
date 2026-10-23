// The result panel under the hero: score and counts, the archive's files (untick to leave some
// out; the ZIP is repacked here in the browser), what couldn't be saved and why, what Clean copy
// removed, and the page insights. Everything comes from archive-manifest.json inside the ZIP.
// All text from the saved site (titles, URLs, colours, font names) is set as text, never as HTML.
import type JSZip from 'jszip';
import type { Dict } from '../i18n/locales/en';
import { fill, formatBytes, plural, reasonText, shortUrl } from '../lib/describe';
import { MANIFEST_FILE, type Manifest, type ManifestFile, REPORT_FILE } from '../lib/manifest';
import { relativePath } from '../lib/paths';

const text = JSON.parse(document.querySelector('#saver-text')!.textContent!) as {
  locale: string;
  status: Dict['status'];
  result: Dict['result'];
};
const R = text.result;
const locale = text.locale;

const section = document.querySelector<HTMLElement>('#result')!;
const $ = <T extends HTMLElement = HTMLElement>(name: string) => section.querySelector<T>(`[data-r="${name}"]`)!;

export async function loadZip(data: Blob): Promise<JSZip> {
  const { default: JSZipLib } = await import('jszip');
  return JSZipLib.loadAsync(data);
}

export function saveBlob(blob: Blob, filename: string) {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 30_000);
}

const el = <K extends keyof HTMLElementTagNameMap>(tag: K, className?: string, content?: string) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content !== undefined) node.textContent = content;
  return node;
};

const KIND_COLOR: Record<string, string> = {
  html: 'var(--ink)',
  css: 'var(--kind-css)',
  js: 'var(--kind-js)',
  image: 'var(--kind-image)',
  font: 'var(--kind-font)',
  media: 'var(--accent)',
  other: 'var(--muted)',
};

interface Ctx {
  blob: Blob;
  zip: JSZip;
  manifest: Manifest;
  /** "Choose files first": nothing downloaded yet, open on the file list. */
  openFiles: boolean;
}

let current: Ctx | undefined;
const excluded = new Set<string>();

// ---- Tabs ----------------------------------------------------------------------------------------
const tabs = [...section.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
function selectTab(tab: HTMLButtonElement, focus = false) {
  for (const t of tabs) {
    const selected = t === tab;
    t.setAttribute('aria-selected', String(selected));
    t.tabIndex = selected ? 0 : -1;
    section.querySelector<HTMLElement>(`#${t.getAttribute('aria-controls')}`)!.hidden = !selected;
  }
  if (focus) tab.focus();
}
for (const tab of tabs) {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    const i = tabs.indexOf(tab);
    const next = event.key === 'ArrowRight' ? i + 1 : event.key === 'ArrowLeft' ? i - 1 : event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : -1;
    if (next === -1) return;
    event.preventDefault();
    selectTab(tabs[(next + tabs.length) % tabs.length], true);
  });
}

// ---- Summary -------------------------------------------------------------------------------------
function renderSummary(ctx: Ctx) {
  const m = ctx.manifest;
  const meta = $('meta');
  meta.replaceChildren(el('span', 'mono', m.filename), el('span', '', formatBytes(locale, ctx.blob.size)));
  $('score').textContent = `${new Intl.NumberFormat(locale).format(m.score)}%`;
  $('meter').style.transform = `scaleX(${m.score / 100})`;
  section.dataset.score = m.score >= 95 ? 'high' : m.score >= 75 ? 'mid' : 'low';

  const assets = m.options.output === 'single' ? m.insights.weight.reduce((s, w) => s + w.files, 0) : m.files.length;
  const facts = [
    plural(locale, R.saved, assets),
    m.problemCount ? plural(locale, R.failed, m.problemCount) : '',
    m.pages.length / m.variants.length > 1 ? plural(locale, R.pages, m.pages.length / m.variants.length) : '',
    m.removed.length ? plural(locale, R.removed, m.removed.length) : '',
  ].filter(Boolean);
  $('facts').replaceChildren(...facts.map((f) => el('li', '', f)));
  const live = $('live');
  live.textContent = m.liveLinks ? plural(locale, R.liveLinks, m.liveLinks) : '';
  live.hidden = !m.liveLinks;
  const count = $('problem-count');
  count.textContent = m.problemCount ? new Intl.NumberFormat(locale).format(m.problemCount) : '';
  count.hidden = !m.problemCount;
}

// ---- Files ---------------------------------------------------------------------------------------
interface Entry {
  path: string;
  bytes: number;
  kind: string;
  locked: boolean;
}

interface Folder {
  name: string;
  path: string;
  folders: Map<string, Folder>;
  files: Entry[];
}

function entriesOf(m: Manifest): Entry[] {
  const entries: Entry[] = m.files.map((f: ManifestFile) => ({ path: f.path, bytes: f.bytes, kind: f.kind, locked: f.kind === 'html' }));
  if (m.variants.length > 1) entries.unshift({ path: 'index.html', bytes: 0, kind: 'html', locked: true });
  entries.push({ path: REPORT_FILE, bytes: 0, kind: 'other', locked: true }, { path: MANIFEST_FILE, bytes: 0, kind: 'other', locked: true });
  return entries;
}

function buildTree(entries: Entry[]): Folder {
  const root: Folder = { name: '', path: '', folders: new Map(), files: [] };
  for (const entry of entries) {
    const parts = entry.path.split('/');
    let folder = root;
    for (const part of parts.slice(0, -1)) {
      const path = folder.path ? `${folder.path}/${part}` : part;
      if (!folder.folders.has(part)) folder.folders.set(part, { name: part, path, folders: new Map(), files: [] });
      folder = folder.folders.get(part)!;
    }
    folder.files.push(entry);
  }
  return root;
}

const filesIn = (folder: Folder): Entry[] => [...folder.files, ...[...folder.folders.values()].flatMap(filesIn)];

function renderFolder(folder: Folder): HTMLLIElement[] {
  const items: HTMLLIElement[] = [];
  const sortedFolders = [...folder.folders.values()].sort((a, b) => a.name.localeCompare(b.name));
  for (const sub of sortedFolders) {
    const li = el('li', 'folder');
    const row = el('label', 'row');
    const box = el('input');
    box.type = 'checkbox';
    box.dataset.folder = sub.path;
    const size = filesIn(sub).reduce((s, f) => s + f.bytes, 0);
    row.append(box, el('span', 'name', `${sub.name}/`), el('span', 'size', size ? formatBytes(locale, size) : ''));
    const list = el('ul');
    list.append(...renderFolder(sub));
    li.append(row, list);
    items.push(li);
  }
  for (const file of [...folder.files].sort((a, b) => Number(b.locked) - Number(a.locked) || a.path.localeCompare(b.path))) {
    const li = el('li', 'file');
    li.style.setProperty('--kind', KIND_COLOR[file.kind] ?? KIND_COLOR.other);
    const row = el('label', 'row');
    const box = el('input');
    box.type = 'checkbox';
    box.dataset.path = file.path;
    box.checked = !excluded.has(file.path);
    box.disabled = file.locked;
    row.append(box, el('span', 'name', file.path.split('/').pop()!), el('span', 'size', file.bytes ? formatBytes(locale, file.bytes) : ''));
    li.append(row);
    items.push(li);
  }
  return items;
}

let tree: Folder | undefined;

function syncTree() {
  if (!tree || !current) return;
  const list = $('tree');
  for (const box of list.querySelectorAll<HTMLInputElement>('input[data-folder]')) {
    const prefix = `${box.dataset.folder}/`;
    const inside = filesIn(tree).filter((f) => f.path.startsWith(prefix) && !f.locked);
    const kept = inside.filter((f) => !excluded.has(f.path)).length;
    box.disabled = inside.length === 0;
    box.checked = inside.length > 0 ? kept === inside.length : true;
    box.indeterminate = kept > 0 && kept < inside.length;
  }
  for (const box of list.querySelectorAll<HTMLInputElement>('input[data-path]')) box.checked = !excluded.has(box.dataset.path!);
  const all = filesIn(tree);
  const kept = all.filter((f) => !excluded.has(f.path));
  $('selection').textContent = fill(R.selection, {
    files: plural(locale, text.status.files, kept.length),
    size: formatBytes(locale, kept.reduce((s, f) => s + f.bytes, 0)),
  });
}

function renderFiles(ctx: Ctx) {
  const single = ctx.manifest.options.output === 'single';
  $('files-hint').textContent = single ? R.singleHint : R.filesHint;
  $('tree').hidden = single;
  $('selection-bar').hidden = single;
  if (single) return;
  tree = buildTree(entriesOf(ctx.manifest));
  $('tree').replaceChildren(...renderFolder(tree));
  syncTree();
}

$('tree').addEventListener('change', (event) => {
  const box = event.target as HTMLInputElement;
  if (!tree) return;
  if (box.dataset.path) {
    if (box.checked) excluded.delete(box.dataset.path);
    else excluded.add(box.dataset.path);
  } else if (box.dataset.folder !== undefined) {
    const prefix = `${box.dataset.folder}/`;
    for (const file of filesIn(tree)) {
      if (!file.path.startsWith(prefix) || file.locked) continue;
      if (box.checked) excluded.delete(file.path);
      else excluded.add(file.path);
    }
  }
  syncTree();
});

const escapeRe = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** The archive without the unticked files; whatever used them now points at the live site. */
async function repack(ctx: Ctx): Promise<Blob> {
  const zip = await loadZip(ctx.blob);
  const gone = ctx.manifest.files.filter((f) => excluded.has(f.path));
  for (const file of gone) zip.remove(file.path);
  const textFiles = Object.values(zip.files).filter((f) => !f.dir && /\.(?:html?|css)$/i.test(f.name) && f.name !== REPORT_FILE);
  for (const file of textFiles) {
    let content = await file.async('string');
    const before = content;
    for (const g of gone) {
      // References are written relative to the file they are in, as "…", '…', (…) or in a srcset.
      const rel = escapeRe(relativePath(file.name, g.path));
      content = content.replace(new RegExp(`(["'(\\s,=;])${rel}(?=["')\\s,&>]|$)`, 'g'), (_, pre: string) => pre + g.url);
    }
    if (content !== before) zip.file(file.name, content);
  }
  const manifest = {
    ...ctx.manifest,
    files: ctx.manifest.files.filter((f) => !excluded.has(f.path)),
    excluded: gone.map((f) => ({ path: f.path, url: f.url })),
  };
  zip.file(MANIFEST_FILE, JSON.stringify(manifest, null, 2));
  return zip.generateAsync({ type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 6 } });
}

async function downloadAll(ctx: Ctx) {
  if (ctx.manifest.singleFile) {
    const html = await ctx.zip.file(ctx.manifest.singleFile)!.async('blob');
    saveBlob(new Blob([html], { type: 'text/html' }), ctx.manifest.filename);
  } else {
    saveBlob(ctx.blob, ctx.manifest.filename);
  }
}

$('download-all').addEventListener('click', () => current && downloadAll(current));
$<HTMLButtonElement>('download-selected').addEventListener('click', async () => {
  if (!current) return;
  const button = $<HTMLButtonElement>('download-selected');
  button.disabled = true;
  try {
    saveBlob(excluded.size ? await repack(current) : current.blob, current.manifest.filename);
  } finally {
    button.disabled = false;
  }
});

// ---- Problems and Clean copy -----------------------------------------------------------------------
function renderProblems(ctx: Ctx) {
  const m = ctx.manifest;
  const removed = $('removed');
  removed.replaceChildren();
  if (m.removed.length) {
    removed.append(el('h3', '', R.removedTitle));
    for (const kind of ['tracker', 'consent', 'redirect'] as const) {
      const items = m.removed.filter((r) => r.kind === kind);
      if (!items.length) continue;
      const chips = el('ul', 'chips');
      chips.append(...items.map((i) => el('li', '', i.name)));
      removed.append(el('p', 'group-label', R.removedKinds[kind]), chips);
    }
  }
  const list = $('problems');
  list.replaceChildren();
  if (!m.problems.length) {
    list.append(el('li', 'empty', R.noProblems));
  }
  for (const p of m.problems) {
    const li = el('li');
    li.style.setProperty('--kind', KIND_COLOR[p.kind] ?? KIND_COLOR.other);
    const link = el('a', 'mono', shortUrl(p.url));
    link.href = p.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer nofollow';
    li.append(el('span', 'kind', R.kinds[p.kind]), link, el('span', 'reason', reasonText(locale, R, p, m.limits)));
    list.append(li);
  }
  const more = m.problemCount - m.problems.length;
  $('more-problems').textContent = more > 0 ? plural(locale, R.moreProblems, more) : '';
}

// ---- Insights --------------------------------------------------------------------------------------
const HEX = /^#[0-9a-f]{6}$/i;

function swatches(target: HTMLElement, colors: { hex: string }[]) {
  target.replaceChildren(
    ...colors
      .filter((c) => HEX.test(c.hex))
      .map((c) => {
        const li = el('li');
        const button = el('button', 'swatch');
        button.type = 'button';
        button.setAttribute('aria-label', fill(R.insights.copyColor, { hex: c.hex }));
        const chip = el('i');
        chip.style.background = c.hex;
        button.append(chip, el('code', '', c.hex));
        button.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(c.hex);
          } catch {
            // Older browsers and some embedded views: copy through a selection instead.
            const area = Object.assign(document.createElement('textarea'), { value: c.hex });
            area.style.cssText = 'position:fixed;opacity:0';
            document.body.append(area);
            area.select();
            const ok = document.execCommand('copy');
            area.remove();
            if (!ok) return;
          }
          $('copy-status').textContent = fill(R.insights.copied, { hex: c.hex });
        });
        li.append(button);
        return li;
      }),
  );
}

function renderInsights(ctx: Ctx) {
  const ins = ctx.manifest.insights;
  const I = R.insights;
  swatches($('colors'), ins.colors);
  swatches($('neutrals'), ins.neutrals);
  $('neutrals-label').hidden = !ins.neutrals.length;
  $('colors-empty').hidden = ins.colors.length + ins.neutrals.length > 0;
  $('css-vars').textContent = ins.cssVariables ? plural(locale, I.cssVariables, ins.cssVariables) : '';

  const fonts = $('fonts');
  fonts.replaceChildren(...ins.fonts.map((f) => {
    const li = el('li');
    li.append(el('strong', '', f.family), el('span', 'muted', I.licenses[f.license]));
    return li;
  }));
  if (!ins.fonts.length) fonts.append(el('li', 'muted', I.none));

  const total = ins.weight.reduce((s, w) => s + w.bytes, 0) || 1;
  const bar = $('weight-bar');
  bar.replaceChildren(...ins.weight.map((w) => {
    const seg = el('span');
    seg.style.flexGrow = String(w.bytes / total);
    seg.style.background = KIND_COLOR[w.kind] ?? KIND_COLOR.other;
    return seg;
  }));
  $('weight').replaceChildren(...ins.weight.map((w) => {
    const li = el('li');
    li.style.setProperty('--kind', KIND_COLOR[w.kind] ?? KIND_COLOR.other);
    li.append(
      el('span', 'kind-name', R.kinds[w.kind]),
      el('span', 'muted', new Intl.NumberFormat(locale).format(w.files)),
      el('span', 'size', formatBytes(locale, w.bytes)),
    );
    return li;
  }));

  const tech = $('tech');
  tech.replaceChildren();
  for (const category of ['cms', 'framework', 'library', 'analytics', 'consent'] as const) {
    const items = ins.tech.filter((t) => t.category === category);
    if (!items.length) continue;
    const chips = el('ul', 'chips');
    chips.append(...items.map((t) => el('li', '', t.name)));
    tech.append(el('p', 'group-label', I.techCategories[category]), chips);
  }
  if (!ins.tech.length) tech.append(el('p', 'muted', I.none));

  const s = ins.seo;
  const dl = $('seo');
  dl.replaceChildren();
  const row = (term: string, value: string, opts: { length?: boolean; mono?: boolean; optional?: boolean } = {}) => {
    if (!value && opts.optional) return;
    const dd = el('dd', opts.mono ? 'mono' : '');
    if (value) {
      dd.append(document.createTextNode(value));
      if (opts.length) dd.append(el('span', 'muted', ` ${plural(locale, I.length, [...value].length)}`));
    } else {
      dd.append(el('span', 'missing', I.missing));
    }
    dl.append(el('dt', '', term), dd);
  };
  row(I.seoItems.title, s.title, { length: true });
  row(I.seoItems.description, s.description, { length: true });
  row(I.seoItems.canonical, s.canonical, { mono: true });
  row(I.seoItems.lang, s.lang);
  row(I.seoItems.h1, s.h1.join(' / '));
  row(I.seoItems.ogImage, s.ogImage, { mono: true });
  row(I.seoItems.twitterCard, s.twitterCard);
  row(I.seoItems.robots, s.robots, { optional: true });
  row(I.seoItems.structuredData, s.structuredData.join(', ') || I.none);
  row(I.seoItems.alt, fill(I.altSummary, { missing: s.imagesWithoutAlt, total: s.images }));
}

// ---- Showing a result ------------------------------------------------------------------------------
export function showResult(ctx: Ctx) {
  current = ctx;
  excluded.clear();
  section.hidden = false;
  renderSummary(ctx);
  renderFiles(ctx);
  renderProblems(ctx);
  renderInsights(ctx);
  $('download-all').hidden = ctx.openFiles;
  selectTab(tabs[0]);
  const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  requestAnimationFrame(() => {
    section.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
    section.focus({ preventScroll: true });
  });
}
