// The hero console: one page or several, the options, the 3D preview, and the download itself.
// The server always answers with a ZIP that carries archive-manifest.json; this script reads it,
// hands the visitor the right file (the ZIP, or the single HTML file inside it) and opens the
// result panel. ?url=… (from the bookmarklet or any link) fills the address in.
import type { Dict } from '../i18n/locales/en';
import { fill, plural } from '../lib/describe';
import { MANIFEST_FILE, type Manifest } from '../lib/manifest';
import { hostFromInput, layerLabels, splitPath, zipName, type LayerName } from '../lib/preview';
import { loadZip, saveBlob, showResult } from './result';

const text = JSON.parse(document.querySelector('#saver-text')!.textContent!) as {
  lang: string;
  locale: string;
  maxPages: number;
  hero: Dict['hero'];
  status: Dict['status'];
  errors: { emptyUrl: string; tooManyPages: string };
  result: Dict['result'];
};

const form = document.querySelector<HTMLFormElement>('#save-form')!;
const input = form.querySelector<HTMLInputElement>('#url')!;
const textarea = form.querySelector<HTMLTextAreaElement>('#urls')!;
const saveButtons = [...form.querySelectorAll<HTMLButtonElement>('[data-save]')];
const status = form.querySelector<HTMLParagraphElement>('#status')!;
const resultLink = form.querySelector<HTMLAnchorElement>('.result-link')!;
const urlCount = form.querySelector<HTMLElement>('#url-count')!;
const findButton = form.querySelector<HTMLButtonElement>('#find-pages')!;
const picker = form.querySelector<HTMLElement>('#picker')!;
const pickerTitle = form.querySelector<HTMLElement>('#picker-title')!;
const pickerList = form.querySelector<HTMLUListElement>('#picker-list')!;
const optionsCount = form.querySelector<HTMLElement>('[data-options-count]')!;
const scene = document.querySelector<HTMLElement>('#scene')!;
const label = (name: string) => scene.querySelector<HTMLElement>(`[data-label="${name}"]`)!;
const folder = (name: string) => scene.querySelector<HTMLElement>(`[data-dir="${name}"]`);
const EXAMPLE_URL = 'https://example.com';

type Mode = 'single' | 'multi';
const mode = (): Mode => (form.querySelector<HTMLInputElement>('input[name="mode"]:checked')?.value as Mode) ?? 'single';
const radio = (name: string) => form.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`)!.value;
const checked = (name: string) => form.querySelector<HTMLInputElement>(`input[name="${name}"]`)!.checked;

/** Addresses in the several-pages box: one per line, blank lines and repeats dropped. */
const listedUrls = () => [...new Set(textarea.value.split(/\s*\n\s*/).map((l) => l.trim()).filter(Boolean))];
const urls = () => (mode() === 'multi' ? listedUrls() : [input.value.trim()].filter(Boolean));

const readOptions = () => ({
  cleanCopy: checked('cleanCopy'),
  simplified: checked('simplified'),
  renameAssets: checked('renameAssets'),
  keepStructure: checked('keepStructure'),
  prettify: checked('prettify'),
  pickFiles: checked('pickFiles'),
  device: radio('device') as 'desktop' | 'mobile' | 'both',
  output: radio('output') as 'zip' | 'single',
});

/** Mirror the form in the hero drawing: file names and folders, browser vs phone, the JavaScript file, the archive name. */
function updateScene() {
  const options = readOptions();
  const host = hostFromInput(urls()[0] ?? '');
  const labels = layerLabels(host, options);
  for (const name of Object.keys(labels) as LayerName[]) {
    const { dir, base } = splitPath(labels[name]);
    label(name).textContent = base;
    const dirLabel = folder(name);
    if (dirLabel) dirLabel.textContent = dir;
  }
  const single = options.output === 'single' && mode() === 'single' && options.device !== 'both';
  label('zip').textContent = single ? zipName(host).replace(/\.zip$/, '.html') : zipName(host);
  label('host').textContent = host;
  scene.dataset.device = options.device;
  scene.toggleAttribute('data-simplified', options.simplified);
}

/** The number on the folded options panel: how many options are switched on. */
function updateOptionsCount() {
  const on = form.querySelectorAll('.options input:checked').length;
  optionsCount.textContent = String(on);
  optionsCount.hidden = on === 0;
}

function updateCount() {
  const count = listedUrls().length;
  urlCount.textContent = count ? `${plural(text.locale, text.result.pages, count)} / ${text.maxPages}` : '';
  urlCount.classList.toggle('over', count > text.maxPages);
}

function setMode(next: Mode) {
  form.dataset.mode = next;
  form.querySelector<HTMLElement>('.entry-single')!.hidden = next !== 'single';
  form.querySelector<HTMLElement>('.entry-multi')!.hidden = next !== 'multi';
  // Carry the address across, so switching never loses what was typed.
  if (next === 'multi' && !textarea.value.trim() && input.value.trim()) textarea.value = input.value.trim();
  if (next === 'single' && !input.value.trim() && listedUrls()[0]) input.value = listedUrls()[0];
  updateCount();
  updateScene();
}

function setState(state: 'idle' | 'working' | 'done') {
  scene.dataset.state = state;
}

function setStatus(tone: 'working' | 'done' | 'error' | '', message: string) {
  status.dataset.tone = tone;
  status.textContent = message;
  input.toggleAttribute('aria-invalid', tone === 'error' && mode() === 'single');
  textarea.toggleAttribute('aria-invalid', tone === 'error' && mode() === 'multi');
}

function setBusy(busy: boolean) {
  for (const button of saveButtons) {
    button.disabled = busy;
    button.querySelector('span')!.textContent = busy ? text.hero.saving : text.hero.save;
  }
}

// Option chips explain themselves in one line under the row, for the chip being pointed at or focused.
// (Screen readers get the same text through each chip's aria-describedby.)
const hintLine = form.querySelector<HTMLElement>('[data-hint-line]')!;
for (const chip of form.querySelectorAll<HTMLElement>('.chip')) {
  const show = () => (hintLine.textContent = chip.dataset.hint ?? '');
  chip.addEventListener('pointerenter', show);
  chip.addEventListener('focusin', show);
}

// Any change after a finished download unpacks the archive again, ready for the next one.
form.addEventListener('change', (event) => {
  if ((event.target as HTMLInputElement).name === 'mode') setMode(mode());
  updateScene();
  updateOptionsCount();
  if (scene.dataset.state === 'done') setState('idle');
});
for (const field of [input, textarea]) {
  field.addEventListener('input', () => {
    updateScene();
    updateCount();
    if (scene.dataset.state === 'done') setState('idle');
    if (status.dataset.tone === 'error' || status.dataset.tone === 'done') setStatus('', '');
  });
}

// ---- Find pages on this site ---------------------------------------------------------------------
interface FoundPage {
  url: string;
  title?: string;
}

/** An address as the server will see it, so "example.com" matches "https://example.com/". */
function normal(value: string): string {
  try {
    const url = new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(value) ? value : `https://${value}`);
    url.hash = '';
    url.hostname = url.hostname.replace(/^www\./, '');
    url.pathname = url.pathname.replace(/\/index\.(?:html?|php)$/i, '/');
    return url.href.replace(/\/$/, '');
  } catch {
    return value;
  }
}

function renderPicker(pages: FoundPage[], host: string) {
  pickerList.replaceChildren();
  const listed = new Set(listedUrls().map(normal));
  for (const page of pages) {
    const li = document.createElement('li');
    const row = document.createElement('label');
    const box = document.createElement('input');
    box.type = 'checkbox';
    box.value = page.url;
    box.checked = listed.has(normal(page.url));
    const title = document.createElement('span');
    title.className = 'page-title';
    const path = new URL(page.url).pathname + new URL(page.url).search;
    title.textContent = page.title || path;
    const url = document.createElement('span');
    url.className = 'page-url';
    url.textContent = path;
    row.append(box, title, url);
    li.append(row);
    pickerList.append(li);
  }
  pickerTitle.textContent =
    pages.length > 1 ? plural(text.locale, text.hero.pagesFound, pages.length) : fill(text.hero.noPagesFound, { host });
  form.querySelector<HTMLElement>('#picker-add')!.hidden = pages.length <= 1;
  for (const id of ['#picker-all', '#picker-none']) form.querySelector<HTMLElement>(id)!.hidden = pages.length <= 1;
  picker.hidden = false;
}

findButton.addEventListener('click', async () => {
  const first = listedUrls()[0];
  if (!first) {
    setStatus('error', text.errors.emptyUrl);
    textarea.focus();
    return;
  }
  const findLabel = findButton.querySelector('span')!;
  findButton.disabled = true;
  findLabel.textContent = text.hero.findingPages;
  try {
    const response = await fetch('/api/pages', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ url: first, lang: text.lang }),
    }).catch(() => {
      throw new Error(text.status.serverUnreachable);
    });
    const data = await response.json().catch(() => null);
    if (!response.ok) throw new Error(data?.error ?? text.status.failed);
    renderPicker(data.pages as FoundPage[], hostFromInput(first));
    setStatus('', '');
  } catch (error) {
    setStatus('error', (error as Error).message);
  } finally {
    findButton.disabled = false;
    findLabel.textContent = text.hero.findPages;
  }
});

const pickerBoxes = () => [...pickerList.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')];
form.querySelector('#picker-all')!.addEventListener('click', () => {
  // "Select all" stops at the page limit; the first pages listed are the site's main navigation.
  const room = text.maxPages;
  pickerBoxes().forEach((box, i) => (box.checked = i < room));
});
form.querySelector('#picker-none')!.addEventListener('click', () => pickerBoxes().forEach((box) => (box.checked = false)));
form.querySelector('#picker-add')!.addEventListener('click', () => {
  const chosen = pickerBoxes().filter((box) => box.checked).map((box) => box.value);
  // Keep what was typed, add the new pages, and never list the same page twice.
  const seen = new Set<string>();
  const merged = [...listedUrls(), ...chosen].filter((u) => !seen.has(normal(u)) && Boolean(seen.add(normal(u))));
  if (merged.length > text.maxPages) setStatus('error', fill(text.errors.tooManyPages, { max: text.maxPages }));
  textarea.value = merged.slice(0, text.maxPages).join('\n');
  picker.hidden = true;
  updateCount();
  updateScene();
  textarea.focus();
});

// ---- Save --------------------------------------------------------------------------------------
/** Hand over the download: the archive itself, or the one HTML file inside it. */
async function deliver(blob: Blob, manifest: Manifest, zip: Awaited<ReturnType<typeof loadZip>>) {
  if (manifest.singleFile) {
    const html = await zip.file(manifest.singleFile)!.async('blob');
    saveBlob(new Blob([html], { type: 'text/html' }), manifest.filename);
  } else {
    saveBlob(blob, manifest.filename);
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (scene.dataset.state === 'working') return;

  const list = urls();
  if (!list.length) {
    setStatus('error', text.errors.emptyUrl);
    (mode() === 'multi' ? textarea : input).focus();
    return;
  }
  if (list.length > text.maxPages) {
    setStatus('error', fill(text.errors.tooManyPages, { max: text.maxPages }));
    textarea.focus();
    return;
  }

  const options = readOptions();
  const host = hostFromInput(list[0]);
  setState('working');
  setBusy(true);
  setStatus('working', fill(text.status.downloading, { host }));

  try {
    const response = await fetch('/api/download', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ urls: list, lang: text.lang, ...options }),
    }).catch(() => {
      throw new Error(text.status.serverUnreachable);
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      throw new Error(data?.error ?? text.status.failed);
    }

    const blob = await response.blob();
    const zip = await loadZip(blob);
    const manifestFile = zip.file(MANIFEST_FILE);
    if (!manifestFile) throw new Error(text.status.failed);
    const manifest = JSON.parse(await manifestFile.async('string')) as Manifest;

    const files = plural(text.locale, text.status.files, savedCount(manifest));
    if (options.pickFiles && !manifest.singleFile) {
      setStatus('done', fill(text.status.ready, { files }));
    } else {
      await deliver(blob, manifest, zip);
      const missed = manifest.problemCount > 0 ? ` ${plural(text.locale, text.status.missed, manifest.problemCount)}` : '';
      setStatus('done', fill(text.status.saved, { filename: manifest.filename, files }) + missed);
    }
    setState('done');
    resultLink.hidden = false;
    showResult({ blob, zip, manifest, openFiles: options.pickFiles && !manifest.singleFile });
  } catch (error) {
    setState('idle');
    setStatus('error', (error as Error).message);
  } finally {
    setBusy(false);
  }
});

/** Files in the download, counting what a single HTML file holds inside it. */
function savedCount(manifest: Manifest): number {
  if (manifest.options.output === 'single') {
    return manifest.insights.weight.reduce((sum, w) => sum + w.files, 0) * manifest.variants.length;
  }
  return manifest.files.length;
}

// ---- Arriving with an address ------------------------------------------------------------------
// ?url=example.com (the bookmarklet, or a shared link) fills the field in; several url= fill the list.
const incoming = new URLSearchParams(location.search).getAll('url').map((u) => u.trim()).filter(Boolean);
if (incoming.length > 1) {
  form.querySelector<HTMLInputElement>('input[name="mode"][value="multi"]')!.checked = true;
  textarea.value = incoming.slice(0, text.maxPages).join('\n');
  setMode('multi');
} else if (incoming.length === 1) {
  input.value = incoming[0];
}
updateScene();
updateCount();
updateOptionsCount();
if (incoming.length) saveButtons.find((b) => b.offsetParent)?.focus({ preventScroll: true });

// "Try an example" fills in a page anyone may save, then hands over to the Save button.
document.querySelector('[data-try-example]')?.addEventListener('click', () => {
  if (mode() !== 'single') {
    form.querySelector<HTMLInputElement>('input[name="mode"][value="single"]')!.checked = true;
    setMode('single');
  }
  input.value = EXAMPLE_URL;
  input.dispatchEvent(new Event('input'));
  const save = saveButtons.find((b) => b.offsetParent);
  if (!save) return;
  save.focus({ preventScroll: true });
  // Restart the bounce on every click.
  save.removeAttribute('data-nudge');
  void save.offsetWidth;
  save.setAttribute('data-nudge', '');
});

// The header button and the closing call to action bring people back to the field.
document.addEventListener('click', (event) => {
  const trigger = (event.target as Element).closest('[data-focus-url]');
  if (!trigger) return;
  event.preventDefault();
  const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelector('#top')?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
  (mode() === 'multi' ? textarea : input).focus({ preventScroll: true });
});
