// The node edge for the SEO discovery artifacts: read the notebook from disk,
// project the route manifest, emit sitemap.xml + feed.xml into the bundle.
//
// Split from the pure core (src/seo/) because this is the only part that touches
// the filesystem. The app reads the same markdown through `import.meta.glob`
// (src/data/notebook.ts), which does not exist outside Vite's transform, so the
// build reads the directory itself and reuses the SAME front-matter parser and
// validator rather than growing a second, silently divergent one.

import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import type { Plugin } from 'vite';
import { parseFrontMatter, validateMeta } from '../src/data/notebook-parse';
import { buildRouteManifest, type NoteRoute, type RouteMeta } from '../src/seo/routeManifest';
import { renderFeed, renderSitemap } from '../src/seo/render';
import { siteUrl, siteTitle, siteDescription } from '../src/data/siteIdentity';

const NOTEBOOK_DIR = fileURLToPath(new URL('../src/content/notebook', import.meta.url));

/**
 * Every notebook note, newest first — the same order and the same validation
 * the app applies. `validateMeta` throws on malformed front-matter, which is
 * intended: an authoring error should fail the build loudly, not ship a sitemap
 * entry pointing at a half-formed post.
 */
export function readNotebookRoutes(dir: string = NOTEBOOK_DIR): NoteRoute[] {
  return readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const { data } = parseFrontMatter(readFileSync(`${dir}/${file}`, 'utf8'));
      return { ...validateMeta(slug, data), slug };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** The manifest as the build sees it, plus the date static routes report. */
export function buildSeoManifest(): { manifest: RouteMeta[]; buildDate: string } {
  const buildDate = new Date().toISOString().slice(0, 10);
  return { manifest: buildRouteManifest(readNotebookRoutes()), buildDate };
}

/**
 * Emit `sitemap.xml` and `feed.xml` as build assets. They are generated rather
 * than committed to `public/` so they cannot go stale: adding a notebook post
 * updates both with no second edit and nothing to remember.
 */
export function seoAssets(): Plugin {
  return {
    name: 'seo-assets',
    apply: 'build',
    generateBundle() {
      const { manifest, buildDate } = buildSeoManifest();
      const articles = manifest.filter((route) => route.type === 'article');

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: renderSitemap(manifest, { siteUrl, buildDate }),
      });
      this.emitFile({
        type: 'asset',
        fileName: 'feed.xml',
        source: renderFeed(articles, {
          siteUrl,
          title: `${siteTitle} · Notebook`,
          description: siteDescription,
          buildDate,
        }),
      });
    },
  };
}
