import MarkdownIt from 'markdown-it';
import texmath from 'markdown-it-texmath';
import highlightjs from 'markdown-it-highlightjs';
import rustGrammar from 'highlight.js/lib/languages/rust';
import katex from 'katex';
import type { NotebookEntry } from '../types/notebook';
import { parseFrontMatter, validateMeta } from './notebook-parse';

// The effectful edge: glob the markdown files at build time, validate their
// front-matter (notebook-parse.ts), and render their bodies to HTML. Produces
// the typed, newest-first collection the index island + entry islands consume.
// Rendering is eager (once, at module import) — fine at notebook scale.

const md = new MarkdownIt({ html: false, linkify: true, typographer: true });
// KaTeX math: $…$ inline, $$…$$ display. throwOnError:false renders a malformed
// expression inline (in red) instead of throwing at module load.
md.use(texmath, { engine: katex, delimiters: 'dollars', katexOptions: { throwOnError: false } });
// Syntax highlighting (highlight.js token classes; coloured by NotebookPage's
// palette-driven theme). inline:false leaves inline code as a plain chip.
// highlight.js ships no WGSL grammar, so ```wgsl fences logged a console
// error on every load; Rust's grammar is close enough (fn/let/var/attributes)
// to token-colour WGSL, registered under the wgsl name. The fence label tab
// still reads "wgsl" — data-lang comes from the fence info, not the grammar.
md.use(highlightjs, { inline: false, ignoreUnknown: true, register: { wgsl: rustGrammar } });

// Wrap each fenced block with a language tab — NotebookPage renders the label
// from `data-lang` via CSS, so the markup stays simple. A ```mermaid fence is
// NOT a code block: emit it as <pre class="mermaid"> carrying the (escaped)
// diagram source, which useMermaid renders to SVG on the client. Escaping keeps
// the browser from mis-parsing mermaid's own `<`, `>`, `&`; mermaid reads the
// element's decoded textContent, so the round-trip is exact.
const renderFence = md.renderer.rules.fence;
if (renderFence) {
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const info = token?.info.trim() ?? '';
    const lang = info.split(/\s+/)[0] ?? '';
    if (lang === 'mermaid' && token) {
      return `<pre class="mermaid">${md.utils.escapeHtml(token.content)}</pre>`;
    }
    const html = renderFence(tokens, idx, options, env, self);
    return lang ? `<div class="code-block" data-lang="${lang}">${html}</div>` : html;
  };
}

// `?raw` so each module is the file's text; `import: 'default'` unwraps it.
const rawByPath = import.meta.glob<string>('../content/notebook/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

function toEntry(path: string, raw: string): NotebookEntry {
  const file = path.split('/').pop() ?? path;
  const slug = file.replace(/\.md$/, '');
  const { data, body } = parseFrontMatter(raw);
  return { ...validateMeta(slug, data), slug, html: md.render(body) };
}

/** All notebook entries, newest first. */
export const notebookEntries: readonly NotebookEntry[] = Object.entries(rawByPath)
  .map(([path, raw]) => toEntry(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date));

const bySlug = new Map(notebookEntries.map((entry) => [entry.slug, entry]));

/** Look up an entry by slug, or `undefined` if no note has it. */
export function findNote(slug: string): NotebookEntry | undefined {
  return bySlug.get(slug);
}
