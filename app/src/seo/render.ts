// Deterministic renderers for the discovery artifacts: sitemap XML, RSS 2.0,
// and the site-level JSON-LD graph. Pure string/data transforms with no I/O and
// no ambient config — every input is a parameter, so each one is unit-testable
// against an exact expected output rather than a `contains` check.

import type { RouteMeta } from './routeManifest';
import { canonicalUrl } from './routeManifest';

/**
 * Escape text for an XML text node or attribute value. Notebook titles already
 * contain `:` and colons are safe, but `&` in a title (or a `<` in a summary)
 * produces a document no feed reader will parse, so this is not optional.
 */
export function xmlEscape(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * `YYYY-MM-DD` to the RFC-822 form RSS requires. Formatted by hand rather than
 * with `toUTCString()` so the output does not depend on the build machine's
 * locale, and parsed as UTC midnight so a post never shifts a day by timezone.
 */
export function rfc822(isoDate: string): string {
  const at = new Date(`${isoDate}T00:00:00Z`);
  if (Number.isNaN(at.getTime())) throw new Error(`rfc822: invalid date "${isoDate}"`);
  const day = DAYS[at.getUTCDay()];
  const month = MONTHS[at.getUTCMonth()];
  const date = String(at.getUTCDate()).padStart(2, '0');
  return `${day}, ${date} ${month} ${at.getUTCFullYear()} 00:00:00 GMT`;
}

/**
 * Sitemap XML for the whole manifest. Articles carry their own `lastmod` (the
 * front-matter date); static routes carry the build date, which is the closest
 * honest answer for a route whose content ships with the bundle.
 */
export function renderSitemap(
  manifest: readonly RouteMeta[],
  options: { siteUrl: string; buildDate: string },
): string {
  const entries = manifest
    .map((route) => {
      const loc = xmlEscape(canonicalUrl(options.siteUrl, route.path));
      const lastmod = route.lastmod ?? options.buildDate;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    })
    .join('\n');
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + `${entries}\n`
    + '</urlset>\n'
  );
}

/**
 * RSS 2.0 for the notebook. Items carry the front-matter summary, not the
 * rendered body: the body needs the markdown-it/KaTeX/mermaid pipeline, and
 * mermaid renders client-side, so a "full content" feed would ship diagram
 * source as literal text. Readers click through instead.
 */
export function renderFeed(
  articles: readonly RouteMeta[],
  options: { siteUrl: string; title: string; description: string; buildDate: string },
): string {
  const feedUrl = `${options.siteUrl}/feed.xml`;
  const items = articles
    .map((article) => {
      const url = xmlEscape(canonicalUrl(options.siteUrl, article.path));
      const pubDate = article.lastmod ? `\n      <pubDate>${rfc822(article.lastmod)}</pubDate>` : '';
      const categories = (article.tags ?? [])
        .map((tag) => `\n      <category>${xmlEscape(tag)}</category>`)
        .join('');
      return (
        '    <item>\n'
        + `      <title>${xmlEscape(article.title)}</title>\n`
        + `      <link>${url}</link>\n`
        + `      <guid isPermaLink="true">${url}</guid>\n`
        + `      <description>${xmlEscape(article.description)}</description>`
        + `${pubDate}${categories}\n`
        + '    </item>'
      );
    })
    .join('\n');
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n'
    + '  <channel>\n'
    + `    <title>${xmlEscape(options.title)}</title>\n`
    + `    <link>${xmlEscape(options.siteUrl)}/notebook</link>\n`
    + `    <description>${xmlEscape(options.description)}</description>\n`
    + '    <language>en</language>\n'
    + `    <lastBuildDate>${rfc822(options.buildDate)}</lastBuildDate>\n`
    + `    <atom:link href="${xmlEscape(feedUrl)}" rel="self" type="application/rss+xml"/>\n`
    + `${items}\n`
    + '  </channel>\n'
    + '</rss>\n'
  );
}

export interface JsonLdIdentity {
  name: string;
  jobTitle: string;
  description: string;
  siteUrl: string;
  siteTitle: string;
  sameAs: readonly string[];
  knowsAbout: readonly string[];
}

/**
 * The site-level `Person` + `WebSite` graph. Every field here corresponds to
 * content the page actually renders (the Hero's bio and skills, the contact
 * links) — structured data describing invisible content is a penalty, not a win.
 */
export function jsonLdGraph(identity: JsonLdIdentity): string {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${identity.siteUrl}/#person`,
        name: identity.name,
        url: `${identity.siteUrl}/`,
        jobTitle: identity.jobTitle,
        description: identity.description,
        sameAs: [...identity.sameAs],
        knowsAbout: [...identity.knowsAbout],
      },
      {
        '@type': 'WebSite',
        '@id': `${identity.siteUrl}/#website`,
        name: identity.siteTitle,
        url: `${identity.siteUrl}/`,
        inLanguage: 'en',
        publisher: { '@id': `${identity.siteUrl}/#person` },
      },
    ],
  };
  // `</` cannot appear raw inside a <script> block: a "</script>" sequence in
  // any string value would close the tag early. Escaping the slash keeps the
  // JSON semantically identical while making that impossible.
  return JSON.stringify(graph, null, 2).replace(/<\//g, '<\\/');
}
