// archive-report.html (inside every archive) and the version chooser (archives that hold desktop
// and mobile). Plain, self-contained HTML in the visitor's language: it has to open from a
// folder on disk, with no network, in any browser.
import type { Dict } from '../i18n/locales/en';
import { fill, formatBytes, plural, reasonText, shortUrl } from './describe';
import type { Manifest } from './manifest';

const esc = (value: string | number) =>
  String(value).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

const STYLE = `
:root{color-scheme:light dark;--bg:#f5f7fb;--surface:#fff;--ink:#0d1533;--muted:#525c78;--line:#dde2ec;--accent:#2563eb;--ok:#12825a;--warn:#b45309}
@media (prefers-color-scheme:dark){:root{--bg:#0a1128;--surface:#111a36;--ink:#e9edf6;--muted:#9aa6c4;--line:rgb(233 237 246/.12);--accent:#60a5fa;--ok:#4cd29c;--warn:#fbbf24}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.6 system-ui,-apple-system,'Segoe UI',sans-serif}
main{max-width:60rem;margin:0 auto;padding:2.5rem 1rem 4rem}h1{margin:0;font-size:1.9rem;line-height:1.15}
h2{margin:2.5rem 0 .75rem;font-size:1.2rem}p{margin:.5rem 0}a{color:var(--accent)}.muted{color:var(--muted)}
.card{margin-top:1.5rem;padding:1.25rem 1.5rem;border:1px solid var(--line);border-radius:16px;background:var(--surface)}
.score{display:flex;align-items:baseline;gap:.5rem;font-size:2.5rem;font-weight:800;line-height:1}.score span{font-size:1rem;font-weight:500;color:var(--muted)}
.facts{display:flex;flex-wrap:wrap;gap:.25rem 1.25rem;margin-top:.75rem;padding:0;list-style:none}
table{width:100%;border-collapse:collapse;font-size:.875rem}th,td{padding:.45rem .5rem;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}
th{color:var(--muted);font-weight:600}td.num{text-align:right;white-space:nowrap}code,.mono{font-family:ui-monospace,Menlo,monospace;font-size:.85em;word-break:break-all}
.swatches{display:flex;flex-wrap:wrap;gap:.5rem;padding:0;list-style:none}.swatches li{display:flex;align-items:center;gap:.4rem;padding:.25rem .6rem .25rem .25rem;border:1px solid var(--line);border-radius:999px}
.swatches i{width:1.25rem;height:1.25rem;border-radius:50%;border:1px solid var(--line)}
.chips{display:flex;flex-wrap:wrap;gap:.4rem;padding:0;list-style:none}.chips li{padding:.15rem .6rem;border-radius:999px;background:var(--bg);border:1px solid var(--line);font-size:.875rem}
dl{display:grid;grid-template-columns:minmax(8rem,auto) 1fr;gap:.4rem 1rem;margin:0}dt{color:var(--muted)}dd{margin:0;word-break:break-word}
.bad{color:var(--warn)}
`;

function page(lang: string, title: string, body: string): string {
  return `<!doctype html>
<html lang="${esc(lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${esc(title)}</title>
<style>${STYLE}</style>
</head>
<body><main>${body}</main></body>
</html>
`;
}

export function reportHtml(m: Manifest, t: Dict, lang: string): string {
  const r = t.result;
  const date = new Intl.DateTimeFormat(lang, { dateStyle: 'long', timeStyle: 'long', timeZone: 'UTC' }).format(
    new Date(m.capturedAt),
  );
  const savedFiles = m.files.filter((f) => f.kind !== 'html').length;
  const onOptions = (['cleanCopy', 'simplified', 'renameAssets', 'keepStructure', 'prettify'] as const)
    .filter((key) => m.options[key])
    .map((key) => t.hero.options[key].title);
  const optionList = [
    `${t.hero.deviceLegend}: ${t.hero.devices[m.options.device]}`,
    `${t.hero.outputLegend}: ${t.hero.outputs[m.options.output]}`,
    ...onOptions,
  ];

  const parts: string[] = [];
  parts.push(`<h1>${esc(fill(t.report.title, { host: m.host }))}</h1>`);
  parts.push(
    `<p class="muted">${fill(esc(t.report.savedFrom), { url: `<a href="${esc(m.url)}">${esc(m.url)}</a>`, date: esc(date) })}</p>`,
  );

  // Summary
  const facts = [
    plural(lang, r.saved, savedFiles),
    m.problemCount ? plural(lang, r.failed, m.problemCount) : '',
    m.pages.length / m.variants.length > 1 ? plural(lang, r.pages, m.pages.length / m.variants.length) : '',
    m.removed.length ? plural(lang, r.removed, m.removed.length) : '',
  ].filter(Boolean);
  parts.push(`<section class="card">
<p class="score">${m.score}%<span>${esc(r.score)}</span></p>
<p class="muted">${esc(r.scoreHint)}</p>
<ul class="facts">${facts.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
${m.liveLinks ? `<p class="muted">${esc(plural(lang, r.liveLinks, m.liveLinks))}</p>` : ''}
</section>`);

  parts.push(`<h2>${esc(t.report.options)}</h2><ul class="chips">${optionList.map((o) => `<li>${esc(o)}</li>`).join('')}</ul>`);

  if (m.removed.length) {
    const groups = (['tracker', 'consent', 'redirect'] as const)
      .map((kind) => [kind, m.removed.filter((item) => item.kind === kind)] as const)
      .filter(([, items]) => items.length);
    parts.push(
      `<h2>${esc(r.removedTitle)}</h2>` +
        groups
          .map(
            ([kind, items]) =>
              `<p class="muted">${esc(r.removedKinds[kind])}</p><ul class="chips">${items.map((i) => `<li>${esc(i.name)}</li>`).join('')}</ul>`,
          )
          .join(''),
    );
  }

  if (m.problems.length) {
    const rows = m.problems
      .map(
        (p) =>
          `<tr><td class="mono"><a href="${esc(p.url)}">${esc(shortUrl(p.url, 90))}</a></td><td>${esc(r.kinds[p.kind])}</td><td>${esc(reasonText(lang, r, p, m.limits))}</td></tr>`,
      )
      .join('');
    const more = m.problemCount - m.problems.length;
    parts.push(`<h2>${esc(t.report.problems)}</h2><table><tbody>${rows}</tbody></table>${
      more > 0 ? `<p class="muted">${esc(plural(lang, r.moreProblems, more))}</p>` : ''
    }`);
  }

  // Insights
  const ins = m.insights;
  const ri = r.insights;
  const swatches = (list: { hex: string }[]) =>
    `<ul class="swatches">${list.map((c) => `<li><i style="background:${esc(c.hex)}"></i><code>${esc(c.hex)}</code></li>`).join('')}</ul>`;
  const insight: string[] = [];
  if (ins.colors.length) insight.push(`<h2>${esc(ri.colors)}</h2>${swatches(ins.colors)}`);
  if (ins.neutrals.length) insight.push(`<p class="muted">${esc(ri.neutrals)}</p>${swatches(ins.neutrals)}`);
  if (ins.cssVariables) insight.push(`<p class="muted">${esc(plural(lang, ri.cssVariables, ins.cssVariables))}</p>`);
  if (ins.fonts.length) {
    insight.push(
      `<h2>${esc(ri.fonts)}</h2><table><tbody>${ins.fonts
        .map((f) => `<tr><td><strong>${esc(f.family)}</strong></td><td class="muted">${esc(ri.licenses[f.license])}</td></tr>`)
        .join('')}</tbody></table>`,
    );
  }
  if (ins.weight.length) {
    insight.push(
      `<h2>${esc(ri.weight)}</h2><table><tbody>${ins.weight
        .map(
          (w) =>
            `<tr><td>${esc(r.kinds[w.kind])}</td><td class="num">${esc(new Intl.NumberFormat(lang).format(w.files))}</td><td class="num">${esc(formatBytes(lang, w.bytes))}</td></tr>`,
        )
        .join('')}</tbody></table>`,
    );
  }
  if (ins.tech.length) {
    const cats = (['cms', 'framework', 'library', 'analytics', 'consent'] as const)
      .map((c) => [c, ins.tech.filter((x) => x.category === c)] as const)
      .filter(([, list]) => list.length);
    insight.push(
      `<h2>${esc(ri.tech)}</h2>` +
        cats
          .map(
            ([c, list]) =>
              `<p class="muted">${esc(ri.techCategories[c])}</p><ul class="chips">${list.map((x) => `<li>${esc(x.name)}</li>`).join('')}</ul>`,
          )
          .join(''),
    );
  }
  const s = ins.seo;
  const value = (v: string, withLength = false) =>
    v ? `${esc(v)}${withLength ? ` <span class="muted">(${esc(plural(lang, ri.length, [...v].length))})</span>` : ''}` : `<span class="bad">${esc(ri.missing)}</span>`;
  insight.push(`<h2>${esc(ri.seo)}</h2><dl>
<dt>${esc(ri.seoItems.title)}</dt><dd>${value(s.title, true)}</dd>
<dt>${esc(ri.seoItems.description)}</dt><dd>${value(s.description, true)}</dd>
<dt>${esc(ri.seoItems.canonical)}</dt><dd class="mono">${value(s.canonical)}</dd>
<dt>${esc(ri.seoItems.lang)}</dt><dd>${value(s.lang)}</dd>
<dt>${esc(ri.seoItems.h1)}</dt><dd>${value(s.h1.join(' · '))}</dd>
<dt>${esc(ri.seoItems.ogImage)}</dt><dd class="mono">${value(s.ogImage)}</dd>
<dt>${esc(ri.seoItems.twitterCard)}</dt><dd>${value(s.twitterCard)}</dd>
${s.robots ? `<dt>${esc(ri.seoItems.robots)}</dt><dd>${esc(s.robots)}</dd>` : ''}
<dt>${esc(ri.seoItems.structuredData)}</dt><dd>${s.structuredData.length ? esc(s.structuredData.join(', ')) : esc(ri.none)}</dd>
<dt>${esc(ri.seoItems.alt)}</dt><dd>${esc(fill(ri.altSummary, { missing: s.imagesWithoutAlt, total: s.images }))}</dd>
</dl>`);
  parts.push(`<section>${insight.join('')}</section>`);

  // Files
  parts.push(`<h2>${esc(t.report.files)}</h2><table><thead><tr><th>${esc(t.report.columns.file)}</th><th>${esc(
    t.report.columns.from,
  )}</th><th class="num">${esc(t.report.columns.size)}</th></tr></thead><tbody>${m.files
    .map(
      (f) =>
        `<tr><td class="mono"><a href="${esc(f.path)}">${esc(f.path)}</a></td><td class="mono muted">${esc(shortUrl(f.url, 70))}</td><td class="num">${esc(
          formatBytes(lang, f.bytes),
        )}</td></tr>`,
    )
    .join('')}</tbody></table>`);

  return page(lang, fill(t.report.title, { host: m.host }), parts.join('\n'));
}
