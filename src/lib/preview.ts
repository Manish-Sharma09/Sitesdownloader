// Labels for the 3D archive preview in the hero. Runs on the server for the first
// render and in the browser whenever an option changes, using the same path logic
// as the real archive so the preview never lies.
import { type PathInput, type PathOptions, planPaths } from './paths';

export interface PreviewOptions extends PathOptions {
  simplified: boolean;
}

export type LayerName = 'html' | 'css' | 'js' | 'media';

/** The hostname someone has typed so far, or example.com while it isn't a usable address yet. */
export function hostFromInput(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return 'example.com';
  try {
    const url = new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
    return url.hostname.includes('.') ? url.hostname : 'example.com';
  } catch {
    return 'example.com';
  }
}

export function zipName(host: string): string {
  return `${host.replace(/^www\./, '')}.zip`;
}

/** "css/main.css" → { dir: "css/", base: "main.css" }: the preview cards show the two apart. */
export function splitPath(path: string): { dir: string; base: string } {
  const cut = path.lastIndexOf('/') + 1;
  return { dir: path.slice(0, cut), base: path.slice(cut) };
}

/** One representative file per layer, showing where it will sit inside the ZIP. */
export function layerLabels(host: string, options: PreviewOptions): Record<LayerName, string> {
  const samples: PathInput[] = [
    { url: `https://${host}/assets/css/main.css?v=3`, kind: 'css' },
    { url: `https://${host}/assets/js/app.js`, kind: 'js' },
    { url: `https://${host}/assets/img/hero.jpg`, kind: 'image' },
  ];
  const [css, js, media] = planPaths(samples, `https://${host}/`, options);
  return { html: 'index.html', css, js, media };
}
