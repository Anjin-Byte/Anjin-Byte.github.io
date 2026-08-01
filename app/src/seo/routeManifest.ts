// The one route table every discovery artifact projects from: sitemap, RSS
// feed, and (once prerender lands) per-route head tags. See docs/SEO/06 §1.
//
// Pure by construction — no filesystem, no Vite glob, no Vue. The notebook
// notes are passed IN, because the app reads them via `import.meta.glob`
// (src/data/notebook.ts) while the build reads them from disk (build/seo.ts),
// and neither transport belongs in this module. That keeps it unit-testable in
// the node harness and keeps the two call sites honest about the same shape.

import { WAYPOINTS } from '../space/waypoints';

/** A notebook note, reduced to the fields discovery artifacts need. */
export interface NoteRoute {
  slug: string;
  title: string;
  /** ISO calendar date `YYYY-MM-DD`. */
  date: string;
  summary: string;
  tags: readonly string[];
}

export interface RouteMeta {
  /** Site-absolute path, e.g. `/projects`. Always leading-slash, never trailing. */
  path: string;
  title: string;
  description: string;
  type: 'website' | 'article';
  /** ISO date the content last changed; articles only (static routes use build date). */
  lastmod?: string;
  tags?: readonly string[];
}

// Copy for the five core routes. Descriptions are user-facing content: specific
// per route (a near-duplicate description is worse than none), sized for the
// ~155-char search snippet, and free of em-dashes per the site-wide rule.
//
// `satisfies` shape-checks the table without widening the keys, so the coverage
// test can compare these literal routes against WAYPOINTS.
const CORE_ROUTE_META = {
  '/': {
    title: 'Taylor Hale',
    description:
      'Portfolio of Taylor Hale, a software engineer working on graphics systems, '
      + 'codegen tools, and integration work. Projects, resume, and notebook.',
  },
  '/projects': {
    title: 'Projects',
    description:
      'Selected engineering work: a GPU voxel renderer, a cycle-accurate Game Boy '
      + 'emulator, an SDF lattice generator, and spec-driven codegen tooling.',
  },
  '/resume': {
    title: 'Resume',
    description:
      'Experience, skills, and education for Taylor Hale: GPU and graphics systems, '
      + 'Rust and WebAssembly, API integration, and computer vision research.',
  },
  '/contact': {
    title: 'Contact',
    description:
      'Get in touch with Taylor Hale by email or phone, or find the work on GitHub '
      + 'and LinkedIn.',
  },
  '/notebook': {
    title: 'Notebook',
    description:
      'Long-form technical writing on graphics, data structures, and compression: '
      + 'voxel DAGs, GPU editing, and the rendering equation.',
  },
} as const satisfies Record<string, { title: string; description: string }>;

/**
 * Build the full route manifest: the core constellation plus one article entry
 * per notebook note.
 *
 * Adding a waypoint without copy for it is a COMPILE error, not a runtime one:
 * `w.route` is a literal union derived from the `as const` WAYPOINTS table, so
 * indexing `CORE_ROUTE_META` with it only typechecks while the two tables agree.
 */
export function buildRouteManifest(notes: readonly NoteRoute[]): RouteMeta[] {
  const core: RouteMeta[] = WAYPOINTS.map((w) => ({
    path: w.route,
    ...CORE_ROUTE_META[w.route],
    type: 'website',
  }));

  const articles: RouteMeta[] = notes.map((note) => ({
    path: `/notebook/${note.slug}`,
    title: note.title,
    description: note.summary,
    type: 'article',
    lastmod: note.date,
    tags: note.tags,
  }));

  return [...core, ...articles];
}

/** Absolute canonical URL for a manifest path. `siteUrl` carries no trailing slash. */
export function canonicalUrl(siteUrl: string, path: string): string {
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`;
}
