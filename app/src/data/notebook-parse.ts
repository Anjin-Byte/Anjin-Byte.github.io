import type { NoteMeta } from '../types/notebook';

// Pure front-matter parsing + boundary validation for notebook entries. No Vue,
// no Vite glob, no markdown renderer — so it's unit-testable in the node harness
// (the glob + render live in data/notebook.ts). Per the codex's runtime-
// validation-at-boundaries: front-matter is untrusted *file* input, parsed from
// a raw string into a typed NoteMeta. A malformed local post is an authoring
// (invariant) error, so `validateMeta` THROWS — it should fail the build loudly,
// not degrade silently (process-fatal, not a Result).

/**
 * Split a `---`-delimited front-matter block from the body. Returns an empty
 * `data` map (and the whole input as `body`) when there's no front-matter.
 * Each `key: value` line is split on the FIRST colon, so values may contain ':'.
 */
export function parseFrontMatter(raw: string): { data: Record<string, string>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw };
  const block = match[1] ?? '';
  const body = match[2] ?? '';
  const data: Record<string, string> = {};
  for (const line of block.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue; // blank / comment
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim().replace(/^["']|["']$/g, '');
    if (key) data[key] = value;
  }
  return { data, body };
}

/**
 * Validate a raw front-matter map into a typed `NoteMeta`, or THROW with a
 * precise message naming the offending entry + field. Authoring errors should
 * fail the build, not slip through as a half-formed entry.
 */
export function validateMeta(slug: string, data: Record<string, string>): NoteMeta {
  const title = required(slug, data, 'title');
  const summary = required(slug, data, 'summary');
  const date = data.date ?? '';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(`Notebook "${slug}": front-matter "date" must be YYYY-MM-DD (got "${date}")`);
  }
  return { title, date, summary, tags: parseTags(data.tags ?? '') };
}

function required(slug: string, data: Record<string, string>, key: string): string {
  const value = data[key];
  if (!value) throw new Error(`Notebook "${slug}": front-matter "${key}" is required`);
  return value;
}

/** Parse `tags: [a, b, c]` (or a bare comma list) into a trimmed, quote-stripped array. */
function parseTags(raw: string): string[] {
  const bracketed = /^\[(.*)\]$/.exec(raw.trim());
  const inner = bracketed?.[1] ?? raw;
  return inner
    .split(',')
    .map((tag) => tag.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean);
}
