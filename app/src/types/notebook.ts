// Domain types for the notebook (blog) collection. `NoteMeta` is the validated
// front-matter; `NotebookEntry` adds the URL slug and the rendered HTML body.
// Parsing/validation lives at the boundary: data/notebook-parse.ts (pure) and
// data/notebook.ts (the Vite-glob + markdown-render edge).

export interface NoteMeta {
  /** Human title. */
  title: string;
  /** ISO calendar date `YYYY-MM-DD`; the collection sorts (newest-first) on it. */
  date: string;
  /** One-line dek shown in the notebook index. */
  summary: string;
  /** Topic tags. */
  tags: readonly string[];
}

export interface NotebookEntry extends NoteMeta {
  /** URL slug, derived from the filename (e.g. `cut-paper`). */
  slug: string;
  /** Rendered HTML body (markdown-it). */
  html: string;
}
