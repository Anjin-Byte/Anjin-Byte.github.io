import * as fs from 'fs';
import * as path from 'path';
import { WAYPOINTS } from '../space/waypoints';
import { buildRouteManifest, canonicalUrl, type NoteRoute } from '../seo/routeManifest';
import { renderSitemap, renderFeed, jsonLdGraph, rfc822, xmlEscape } from '../seo/render';
import { siteUrl } from '../data/siteIdentity';

// Guards the docs/SEO/06 §5 contract: every discovery artifact (sitemap, feed,
// per-route head tags) is a projection of ONE manifest, so the manifest must
// cover exactly the router's URL space — no orphan URLs handed to a crawler, no
// route missing its copy. The notebook side is read from disk rather than from
// space/notebookNodes.ts because that module depends on `import.meta.glob`,
// which does not exist outside Vite's transform (same reason themeParity reads
// index.html as text).

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function assertEq<T>(actual: T, expected: T, message: string): void {
  const a = JSON.stringify(actual);
  const b = JSON.stringify(expected);
  if (a !== b) throw new Error(`${message}\nexpected: ${b}\nactual:   ${a}`);
}

const NOTEBOOK_DIR = path.resolve(process.cwd(), 'src/content/notebook');

function slugsOnDisk(): string[] {
  return fs
    .readdirSync(NOTEBOOK_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
    .sort();
}

/** Fixed input for the exact-output renderer oracles. */
const FIXTURE: NoteRoute[] = [
  {
    slug: 'second',
    title: 'Second & <last>',
    date: '2026-07-17',
    summary: 'A summary with "quotes" & an ampersand.',
    tags: ['voxels'],
  },
];

// Sharp oracle: the manifest's path set is exactly the waypoint routes plus one
// route per markdown file. A post added without a sitemap entry, or a waypoint
// added without copy, fails here rather than shipping an invisible page.
function testManifestCoversRouteSpace(): void {
  const manifest = buildRouteManifest(
    slugsOnDisk().map((slug) => ({
      slug,
      title: slug,
      date: '2026-01-01',
      summary: 'x',
      tags: [],
    })),
  );
  const actual = manifest.map((route) => route.path).sort();
  const expected = [
    ...WAYPOINTS.map((w) => w.route),
    ...slugsOnDisk().map((slug) => `/notebook/${slug}`),
  ].sort();
  assertEq(actual, expected, 'manifest paths must equal waypoint routes + notebook posts');
  assertEq(new Set(actual).size, actual.length, 'manifest must not contain duplicate paths');
}

// Meta text is user-facing content, so the site-wide copy rules apply to it.
// Length bounds are the SERP truncation points: past them the snippet is cut
// mid-sentence, which reads worse than a shorter deliberate one.
function testCoreRouteCopy(): void {
  const core = buildRouteManifest([]);
  assertEq(core.length, WAYPOINTS.length, 'core manifest has one entry per waypoint');
  for (const route of core) {
    assert(!route.title.includes('—'), `${route.path}: title must not contain an em-dash`);
    assert(!route.description.includes('—'), `${route.path}: description must not contain an em-dash`);
    assert(route.title.length <= 60, `${route.path}: title is ${route.title.length} chars (max 60)`);
    assert(
      route.description.length >= 50 && route.description.length <= 160,
      `${route.path}: description is ${route.description.length} chars (want 50-160)`,
    );
    assertEq(route.type, 'website', `${route.path}: core routes are websites, not articles`);
  }
}

function testCanonicalUrls(): void {
  assertEq(canonicalUrl('https://x.dev', '/'), 'https://x.dev/', 'root keeps its slash');
  assertEq(canonicalUrl('https://x.dev', '/projects'), 'https://x.dev/projects', 'path appended');
  for (const route of buildRouteManifest(FIXTURE)) {
    const url = canonicalUrl(siteUrl, route.path);
    assert(url.startsWith(`${siteUrl}/`), `${route.path}: canonical must be absolute under siteUrl`);
  }
}

function testXmlEscaping(): void {
  assertEq(
    xmlEscape(`a & b < c > d " e ' f`),
    'a &amp; b &lt; c &gt; d &quot; e &apos; f',
    'all five XML metacharacters are escaped',
  );
}

function testRfc822(): void {
  assertEq(rfc822('2026-07-17'), 'Fri, 17 Jul 2026 00:00:00 GMT', 'RFC-822 date, UTC midnight');
  let threw = false;
  try {
    rfc822('not-a-date');
  } catch {
    threw = true;
  }
  assert(threw, 'an invalid date must throw rather than emit "Invalid Date"');
}

// Exact expected output, not a `contains` check: a renderer that silently drops
// an element or mangles escaping still passes a substring assertion.
function testSitemapExactOutput(): void {
  const manifest = [
    { path: '/', title: 'Home', description: 'd', type: 'website' as const },
    {
      path: '/notebook/second',
      title: 'Second & <last>',
      description: 'd',
      type: 'article' as const,
      lastmod: '2026-07-17',
    },
  ];
  const expected =
    '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + '  <url>\n    <loc>https://x.dev/</loc>\n    <lastmod>2026-08-01</lastmod>\n  </url>\n'
    + '  <url>\n    <loc>https://x.dev/notebook/second</loc>\n    <lastmod>2026-07-17</lastmod>\n  </url>\n'
    + '</urlset>\n';
  assertEq(
    renderSitemap(manifest, { siteUrl: 'https://x.dev', buildDate: '2026-08-01' }),
    expected,
    'sitemap output',
  );
}

function testFeedExactOutput(): void {
  const articles = buildRouteManifest(FIXTURE).filter((route) => route.type === 'article');
  const expected =
    '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n'
    + '  <channel>\n'
    + '    <title>Notebook</title>\n'
    + '    <link>https://x.dev/notebook</link>\n'
    + '    <description>Posts</description>\n'
    + '    <language>en</language>\n'
    + '    <lastBuildDate>Sat, 01 Aug 2026 00:00:00 GMT</lastBuildDate>\n'
    + '    <atom:link href="https://x.dev/feed.xml" rel="self" type="application/rss+xml"/>\n'
    + '    <item>\n'
    + '      <title>Second &amp; &lt;last&gt;</title>\n'
    + '      <link>https://x.dev/notebook/second</link>\n'
    + '      <guid isPermaLink="true">https://x.dev/notebook/second</guid>\n'
    + '      <description>A summary with &quot;quotes&quot; &amp; an ampersand.</description>\n'
    + '      <pubDate>Fri, 17 Jul 2026 00:00:00 GMT</pubDate>\n'
    + '      <category>voxels</category>\n'
    + '    </item>\n'
    + '  </channel>\n'
    + '</rss>\n';
  assertEq(
    renderFeed(articles, {
      siteUrl: 'https://x.dev',
      title: 'Notebook',
      description: 'Posts',
      buildDate: '2026-08-01',
    }),
    expected,
    'feed output',
  );
}

// The JSON-LD is embedded in a <script> block, so it must parse as JSON AND be
// unable to terminate the tag early.
function testJsonLdGraph(): void {
  const raw = jsonLdGraph({
    name: 'A Person',
    jobTitle: 'Engineer',
    description: 'Bio </script> injection attempt',
    siteUrl: 'https://x.dev',
    siteTitle: 'Site',
    sameAs: ['https://github.com/x'],
    knowsAbout: ['Rust'],
  });
  assert(!raw.includes('</'), 'JSON-LD must not contain a raw "</" sequence');
  const parsed = JSON.parse(raw) as { '@graph': { '@type': string; '@id': string }[] };
  assertEq(
    parsed['@graph'].map((node) => node['@type']),
    ['Person', 'WebSite'],
    'graph carries Person then WebSite',
  );
  assertEq(
    parsed['@graph'][0]?.['@id'],
    'https://x.dev/#person',
    'Person @id is stable and absolute',
  );
}

// robots.txt is static, so its sitemap pointer can drift from siteUrl silently.
function testRobotsPointsAtSitemap(): void {
  const robots = fs.readFileSync(path.resolve(process.cwd(), 'public/robots.txt'), 'utf8');
  assert(
    robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`),
    `public/robots.txt must point at ${siteUrl}/sitemap.xml`,
  );
}

testManifestCoversRouteSpace();
testCoreRouteCopy();
testCanonicalUrls();
testXmlEscaping();
testRfc822();
testSitemapExactOutput();
testFeedExactOutput();
testJsonLdGraph();
testRobotsPointsAtSitemap();

console.log('seo.test.ts passed');
