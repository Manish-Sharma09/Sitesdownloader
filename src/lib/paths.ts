// Decides where each downloaded asset lives inside the ZIP.
// Pure string logic, so the browser preview and the server archive share it.

export type AssetKind = 'css' | 'js' | 'image' | 'font' | 'media' | 'other';

export interface PathOptions {
  renameAssets: boolean;
  keepStructure: boolean;
}

export interface PathInput {
  url: string;
  kind: AssetKind;
  /** Extension derived from the response Content-Type, used when the URL has none. */
  ext?: string;
}

const FOLDERS: Record<AssetKind, string> = {
  css: 'css',
  js: 'js',
  image: 'images',
  font: 'fonts',
  media: 'media',
  other: 'files',
};

const PREFIXES: Record<AssetKind, string> = {
  css: 'style',
  js: 'script',
  image: 'image',
  font: 'font',
  media: 'media',
  other: 'file',
};

const KNOWN_EXTS: Record<AssetKind, string[]> = {
  css: ['.css'],
  js: ['.js', '.mjs'],
  image: ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.svg', '.ico', '.bmp'],
  font: ['.woff', '.woff2', '.ttf', '.otf', '.eot'],
  media: ['.mp4', '.webm', '.ogg', '.ogv', '.mp3', '.wav', '.m4a', '.mov'],
  other: [],
};

const DEFAULT_EXTS: Record<AssetKind, string> = {
  css: '.css',
  js: '.js',
  image: '.img',
  font: '.font',
  media: '.media',
  other: '.bin',
};

export const EXTERNAL_DIR = 'external';

export function extensionOf(name: string): string {
  const match = /\.[a-z0-9]{1,6}$/i.exec(name);
  return match ? match[0].toLowerCase() : '';
}

export function kindFromExtension(ext: string): AssetKind | undefined {
  for (const kind of Object.keys(KNOWN_EXTS) as AssetKind[]) {
    if (KNOWN_EXTS[kind].includes(ext)) return kind;
  }
  return undefined;
}

function safeDecode(segment: string): string {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

/** Reduce a URL segment to a filesystem-safe name. Leading dots are stripped so `..` can never escape the archive. */
function sanitize(segment: string): string {
  return safeDecode(segment)
    .replace(/[^A-Za-z0-9._-]+/g, '-')
    .replace(/^[.-]+/, '')
    .replace(/-+$/, '')
    .slice(0, 80);
}

function withUniqueName(dir: string[], stem: string, ext: string, used: Set<string>): string {
  let candidate = [...dir, stem + ext].join('/');
  for (let n = 2; used.has(candidate.toLowerCase()); n++) {
    candidate = [...dir, `${stem}-${n}${ext}`].join('/');
  }
  used.add(candidate.toLowerCase());
  return candidate;
}

/**
 * Returns one archive path per input, in the same order. `reserved` paths (the saved pages and the
 * archive report) are never handed out; by default that is just `index.html`.
 */
export function planPaths(
  inputs: PathInput[],
  pageUrl: string,
  options: PathOptions,
  reserved: string[] = ['index.html'],
): string[] {
  const pageHost = new URL(pageUrl).host;
  const used = new Set<string>(reserved.map((path) => path.toLowerCase()));
  const counters: Partial<Record<AssetKind, number>> = {};

  return inputs.map(({ url, kind, ext: typeExt }) => {
    const parsed = new URL(url);
    const segments = parsed.pathname.split('/').map(sanitize).filter(Boolean);
    const base = segments.pop() ?? '';

    let ext = extensionOf(base);
    let stem = ext ? base.slice(0, -ext.length) : base;
    if (!KNOWN_EXTS[kind].includes(ext)) {
      // e.g. `style.php` served as text/css, or `/photo?id=4` served as image/jpeg
      if (typeExt) {
        stem = base;
        ext = typeExt;
      } else if (!ext) {
        ext = DEFAULT_EXTS[kind];
      }
    }
    stem = stem.replace(/\.+$/, '') || 'index';

    if (options.renameAssets) {
      const n = (counters[kind] ?? 0) + 1;
      counters[kind] = n;
      stem = `${PREFIXES[kind]}-${n}`;
    }

    let dir: string[];
    if (!options.keepStructure) {
      dir = [FOLDERS[kind]];
    } else if (parsed.host === pageHost) {
      dir = segments;
    } else {
      dir = [EXTERNAL_DIR, sanitize(parsed.host), ...segments];
    }

    return withUniqueName(dir, stem, ext, used);
  });
}

/**
 * Where each saved page goes: the first one is always `index.html`. The others go into `pages/`
 * named after their address (`/pricing/teams` → `pages/pricing-teams.html`), or, with
 * keepStructure, into the site's own folders (`pricing/teams/index.html`).
 */
export function planPagePaths(pageUrls: string[], options: Pick<PathOptions, 'keepStructure'>): string[] {
  const used = new Set<string>();
  return pageUrls.map((raw, i) => {
    if (i === 0) {
      used.add('index.html');
      return 'index.html';
    }
    const url = new URL(raw);
    const segments = url.pathname.split('/').map(sanitize).filter(Boolean);
    const query = url.search ? sanitize(url.search.slice(1)) : '';
    let dir: string[];
    let stem: string;
    if (options.keepStructure) {
      const last = segments.at(-1) ?? '';
      if (/\.html?$/i.test(last)) {
        dir = segments.slice(0, -1);
        stem = last.replace(/\.html?$/i, '');
      } else {
        dir = segments;
        stem = 'index';
      }
      if (query) stem += `-${query}`;
    } else {
      // /blog/post/index.html and /blog/post/ are the same page: name it after the folder.
      const names = segments.map((s) => s.replace(/\.(?:html?|php|aspx?)$/i, ''));
      if (names.at(-1)?.toLowerCase() === 'index') names.pop();
      dir = ['pages'];
      stem = [...names, query].filter(Boolean).join('-') || 'home';
    }
    return withUniqueName(dir, stem.slice(0, 80), '.html', used);
  });
}

/** Relative link from one archive file to another, e.g. `css/a.css` → `../fonts/b.woff2`. */
export function relativePath(fromFile: string, toFile: string): string {
  const fromDir = fromFile.split('/').slice(0, -1);
  const toParts = toFile.split('/');
  let shared = 0;
  while (shared < fromDir.length && shared < toParts.length - 1 && fromDir[shared] === toParts[shared]) {
    shared++;
  }
  return [...Array(fromDir.length - shared).fill('..'), ...toParts.slice(shared)].join('/');
}
