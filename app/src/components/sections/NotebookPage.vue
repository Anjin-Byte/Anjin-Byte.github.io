<script setup lang="ts">
import { ref } from 'vue';
import type { NotebookNode } from '../../space/notebookNodes';
import { useMermaid } from '../../composables/useMermaid';

const props = defineProps<{ entry: NotebookNode }>();

const dateFmt = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
const formatDate = (iso: string): string => dateFmt.format(new Date(`${iso}T12:00:00`));

// The prose is v-html'd markdown; any ```mermaid fences arrive as
// <pre class="mermaid"> and are rendered to SVG here (theme-synced, lazy,
// and scoped to this note only being active — see useMermaid's docstring).
const proseRef = ref<HTMLElement | null>(null);
useMermaid(proseRef, props.entry.route);
</script>

<template>
  <section class="note-page-shell">
    <article class="note-page content-surface">
      <header class="note-page-head">
        <router-link to="/notebook" class="note-back">← Notebook</router-link>
        <time class="note-page-date" :datetime="entry.date">{{ formatDate(entry.date) }}</time>
        <h1 class="note-page-title section-heading">{{ entry.title }}</h1>
        <div v-if="entry.tags.length" class="note-page-tags">
          <span v-for="tag in entry.tags" :key="tag" class="note-tag">{{ tag }}</span>
        </div>
      </header>
      <!-- entry.html is rendered from trusted local markdown (markdown-it html:false). -->
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div ref="proseRef" class="note-prose" v-html="entry.html"></div>
    </article>
  </section>
</template>

<style scoped>
/* Vertical run-out around the card so the scroll doesn't end the instant the
   viewport reaches the card's edge — space above on arrival, space below at the
   end. Padding on this in-flow shell is always counted in the scroll height. */
.note-page-shell {
  padding-block: clamp(2.5rem, 9vh, 6rem);
}

/* A wide page with presence on the grid. Text and the header share ONE centred
   reading column (see the grouped rule near the end); display math breaks out to
   the fuller width, while code stays in the column with the prose.

   The column is a FIXED length, NOT `ch`. `ch` scales with font-size, so a `ch`
   measure handed the big title, the larger lead paragraph, the section headings,
   and the body each a different column width — and therefore a different left
   edge. 46rem ≈ 75ch at the body size, applied identically to every element, so
   they all line up on one spine. */
.note-page {
  --measure: 46rem;
  --note-pad-x: clamp(1.5rem, 5vw, 3.5rem);
  max-width: 60rem;
  margin: 0 auto;
  padding: clamp(1.8rem, 4vw, 3rem) var(--note-pad-x);
}

.note-page-head {
  max-width: var(--measure);
  margin-inline: auto;
  display: grid;
  gap: 0.55rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--island-edge);
}

.note-back {
  justify-self: start;
  color: var(--theme-text-tertiary);
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  transition: color 140ms ease;
}
.note-back:hover {
  color: var(--theme-text-primary);
}

.note-page-date {
  color: var(--theme-text-tertiary);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.note-page-title {
  margin: 0.2rem 0 0;
  font-size: var(--step-3);
}

.note-page-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.35rem;
}

.note-tag {
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: var(--theme-text-secondary);
  padding: 0.26rem 0.62rem;
  background: var(--badge-fill);
  border: 1px solid var(--island-edge);
  border-radius: var(--radius-pill);
}

/* ── Prose (v-html'd markdown → reached with :deep) ─────────────────────────
   Set as a printed page from this notebook: book-serif body, cut-paper rules
   and wells borrowed from the island vocabulary, ink-on-paper code. */
.note-prose {
  font-family: var(--font-display);
  color: var(--theme-text-primary);
  font-size: 1.05rem;
  line-height: 1.72;
  font-variant-numeric: oldstyle-figures proportional-nums;
}

.note-prose :deep(p) {
  margin: 0 0 1.25rem;
  max-width: var(--measure);
}

/* Lead paragraph — a touch larger, to set the page's voice. */
.note-prose :deep(p:first-child) {
  font-size: 1.16rem;
  line-height: 1.6;
}

/* Headings scored into the paper: a lit cut-rule (the ΔL lip vocabulary). */
.note-prose :deep(h2) {
  position: relative;
  font-family: var(--font-display);
  font-size: var(--step-1);
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 2.4rem 0 1rem;
  padding-bottom: 0.5rem;
}
.note-prose :deep(h2)::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: linear-gradient(
    to bottom,
    var(--island-fill-shadow) 0 1px,
    var(--island-fill-lit) 1px 2px
  );
}
.note-prose :deep(h3) {
  font-family: var(--font-display);
  font-size: var(--step-0);
  font-weight: 600;
  margin: 1.7rem 0 0.55rem;
}

/* Horizontal rule as a scored cut line (shadow over lit lip). */
.note-prose :deep(hr) {
  border: none;
  height: 2px;
  margin: 2.5rem 0;
  background: linear-gradient(
    to bottom,
    var(--island-fill-shadow) 0 1px,
    var(--island-fill-lit) 1px 2px
  );
}

/* Lists — cut-square markers (a grid echo); ordered figures tabular. */
.note-prose :deep(ul) {
  list-style: none;
  margin: 0 0 1.25rem;
  padding-left: 1.3rem;
  max-width: var(--measure);
}
.note-prose :deep(ul li) {
  position: relative;
  margin: 0.35rem 0;
}
.note-prose :deep(ul li)::before {
  content: '';
  position: absolute;
  left: -1.15rem;
  top: 0.62em;
  width: 0.38rem;
  height: 0.38rem;
  background: var(--theme-accent);
  border-radius: 1px;
}
.note-prose :deep(ol) {
  margin: 0 0 1.25rem;
  padding-left: 1.6rem;
  max-width: var(--measure);
}
.note-prose :deep(ol li) {
  margin: 0.35rem 0;
}
.note-prose :deep(ol li)::marker {
  color: var(--theme-text-tertiary);
  font-variant-numeric: tabular-nums;
}

.note-prose :deep(strong) {
  font-weight: 650;
}
.note-prose :deep(a) {
  color: var(--theme-accent);
  text-decoration-color: var(--theme-accent-underline);
  text-underline-offset: 3px;
}
.note-prose :deep(a:hover) {
  text-decoration-color: var(--theme-accent);
}

/* A few display equations (long integrals) exceed the reading measure; let the
   widest scroll within the column instead of overflowing the page. */
.note-prose :deep(.katex-display) {
  overflow-x: auto;
  overflow-y: hidden;
  padding-block: 0.35rem;
}

/* texmath wraps block math in <section><eqn>…; make eqn a full-width block so the
   equation breaks out beyond the text column and centres across the page. */
.note-prose :deep(eqn) {
  display: block;
}

/* Blockquote as a recessed margin aside with a lit accent edge. */
.note-prose :deep(blockquote) {
  margin: 1.5rem 0;
  padding: 0.85rem 1.15rem;
  max-width: var(--measure);
  background: var(--well-recess);
  border-left: 2px solid var(--theme-accent);
  border-radius: var(--radius-sm);
  box-shadow: inset 0 1px 2px var(--well-recess-shadow);
  color: var(--theme-text-secondary);
}
.note-prose :deep(blockquote p) {
  margin: 0;
  max-width: none;
}

/* Inline code — a chip pressed into the page (recessed well + inset cut ring). */
.note-prose :deep(code) {
  font-family: var(--font-mono);
  font-size: 0.85em;
  padding: 0.12em 0.4em;
  background: var(--well-recess);
  border-radius: var(--radius-xs);
  box-shadow: inset 0 0 0 1px var(--island-fill-shadow);
}

/* ── Code block — a deep inset well carrying a language tab ───────────────── */
.note-prose :deep(.code-block) {
  position: relative;
  margin: 0 0 1.5rem;
}
.note-prose :deep(.code-block)::before {
  content: attr(data-lang);
  position: absolute;
  top: 0;
  right: 0.7rem;
  transform: translateY(-50%);
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--theme-text-tertiary);
  background: var(--island-fill);
  border: 1px solid var(--island-edge);
  border-radius: var(--radius-pill);
  padding: 0.1rem 0.55rem;
}
.note-prose :deep(pre) {
  margin: 0;
  padding: 1.05rem 1.2rem;
  background: var(--well-recess);
  border-radius: var(--radius-md);
  overflow-x: auto;
  box-shadow: inset 0 1px 3px var(--well-recess-shadow);
}
.note-prose :deep(pre code) {
  font-family: var(--font-mono);
  font-size: 0.84rem;
  line-height: 1.62;
  background: none;
  box-shadow: none;
  padding: 0;
  color: var(--theme-text-primary);
}

/* highlight.js → a muted, multi-hue "ink on paper" palette. Each colour takes the
   THEME ink's lightness (so it stays legible on the code well in both light and
   dark) and adds a low, fixed chroma at a conventional hue — coloured enough to
   scan, matte enough not to shout. Tune chroma (the 0.1x) up for more punch. */
.note-prose :deep(pre code) {
  --syntax-string: oklch(from var(--theme-text-primary) l 0.12 150); /* green  */
  --syntax-number: oklch(from var(--theme-text-primary) l 0.13 68); /* amber  */
  --syntax-func: oklch(from var(--theme-text-primary) l 0.12 250); /* blue   */
  --syntax-type: oklch(from var(--theme-text-primary) l 0.11 305); /* violet */
}
.note-prose :deep(.hljs-comment),
.note-prose :deep(.hljs-quote) {
  color: var(--theme-text-tertiary);
  font-style: italic;
}
.note-prose :deep(.hljs-keyword),
.note-prose :deep(.hljs-built_in) {
  color: var(--theme-accent);
}
.note-prose :deep(.hljs-string),
.note-prose :deep(.hljs-regexp),
.note-prose :deep(.hljs-symbol),
.note-prose :deep(.hljs-char) {
  color: var(--syntax-string);
}
.note-prose :deep(.hljs-number),
.note-prose :deep(.hljs-literal) {
  color: var(--syntax-number);
}
.note-prose :deep(.hljs-title),
.note-prose :deep(.hljs-title.function_) {
  color: var(--syntax-func);
}
.note-prose :deep(.hljs-type),
.note-prose :deep(.hljs-title.class_),
.note-prose :deep(.hljs-attr),
.note-prose :deep(.hljs-attribute) {
  color: var(--syntax-type);
}
.note-prose :deep(.hljs-property) {
  color: var(--theme-text-primary);
}
.note-prose :deep(.hljs-meta),
.note-prose :deep(.hljs-punctuation),
.note-prose :deep(.hljs-operator) {
  color: var(--theme-text-tertiary);
}

/* ── Mermaid figure — a diagram laid on the page like a cut plate ──────────────
   The ```mermaid fence arrives as <pre class="mermaid"> holding the source;
   useMermaid swaps it for an SVG and flags data-processed. Hide the raw source
   until then so the diagram never flashes its text. The frame is the island
   vocabulary; the SVG inside is mermaid's, themed to match (see useMermaid). */
.note-prose :deep(pre.mermaid) {
  display: flex;
  justify-content: center;
  margin: 1.8rem auto;
  padding: 1.4rem 1.2rem;
  background: var(--island-fill);
  border: 1px solid var(--island-edge);
  border-radius: var(--radius-md);
  overflow-x: auto;
  visibility: hidden; /* raw source hidden until rendered */
}
.note-prose :deep(pre.mermaid[data-processed]) {
  visibility: visible;
}
.note-prose :deep(pre.mermaid svg) {
  max-width: 100%;
  height: auto;
}
/* Mermaid sizes each label box by measuring the text in the font passed to
   mermaid.initialize (our --font-mono). The label markup then inherits the
   article's serif from .note-prose, which is wider, so text overflows and
   clips. Pin the whole diagram subtree back to the measurement font so boxes
   and glyphs agree. !important beats mermaid's own inline label styles. */
.note-prose :deep(pre.mermaid svg),
.note-prose :deep(pre.mermaid svg *) {
  font-family: var(--font-mono) !important;
}

/* The reading column: body text, headings, lists, quotes, code blocks AND
   diagrams centre at the measure — one shared spine. Only display math
   (section/eqn) is left out, so equations alone break out to the fuller width. */
.note-prose :deep(p),
.note-prose :deep(h2),
.note-prose :deep(h3),
.note-prose :deep(ul),
.note-prose :deep(ol),
.note-prose :deep(blockquote),
.note-prose :deep(hr),
.note-prose :deep(.code-block),
.note-prose :deep(pre.mermaid) {
  max-width: var(--measure);
  margin-inline: auto;
}
</style>
