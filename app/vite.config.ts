import { defineConfig, type Plugin } from 'vite';
import { fileURLToPath } from 'node:url';
import { copyFileSync, existsSync } from 'node:fs';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import {
  profile,
  skills,
  education,
  siteUrl,
  siteTitle,
  siteDescription,
  ogImagePath,
  portraitPath,
} from './src/data/siteIdentity';
import { jsonLdGraph } from './src/seo/render';
import { seoAssets } from './build/seo';

// wgpu 22.x serialises 'maxInterStageShaderComponents' into the GPUDeviceDescriptor's
// requiredLimits. That field was removed from the WebGPU spec (renamed to
// 'maxInterStageShaderVariables') and Firefox rejects it with an OperationError.
// This plugin patches the one requestDevice call-site in the generated WASM JS shim
// to delete the offending key before the call reaches the browser API.
// Remove once wgpu is updated to a version that sends the correct field name.
function patchWgpuFirefoxLimits(): Plugin {
  // Match `<dev>.requestDevice(<opts>)`, allowing one level of wrapping (newer
  // wasm-bindgen emits `getObject(arg0).requestDevice(getObject(arg1))`), and
  // rewrite it to delete the offending limit inline via the comma operator.
  // WARNS (does not throw) on a miss so a glue drift never blocks the deploy —
  // it just ships a Firefox-degraded background until the regex is refreshed.
  // (Cargo.lock is committed, so the glue form is pinned and this should match.)
  const RE = /([\w$]+(?:\([^)]*\))?)\.requestDevice\(([\w$]+(?:\([^)]*\))?)\)/;
  return {
    name: 'patch-wgpu-firefox-limits',
    transform(code, id) {
      if (!id.includes('game_of_life_gpu_bg.js')) return;
      if (!RE.test(code)) {
        console.warn(
          '[patch-wgpu-firefox-limits] requestDevice call-site not found — wasm-bindgen glue form ' +
            'changed; Firefox may reject maxInterStageShaderComponents until the regex is updated.',
        );
        return;
      }
      return code.replace(
        RE,
        '($2?.requiredLimits && delete $2.requiredLimits.maxInterStageShaderComponents, $1.requestDevice($2))',
      );
    },
  };
}

// GitHub Pages has no SPA fallback, so a hard load of /projects 404s (no such
// file). Emitting a 404.html that IS the built index.html makes Pages serve the
// app for any unmatched path; assets are absolute (base '/'), so it boots at any
// depth and vue-router resolves the real route. Runs only on `vite build`.
function spaPages404(): Plugin {
  return {
    name: 'spa-pages-404',
    closeBundle() {
      const dist = fileURLToPath(new URL('./dist', import.meta.url));
      const index = `${dist}/index.html`;
      if (existsSync(index)) copyFileSync(index, `${dist}/404.html`);
    },
  };
}

// Inject the site-level <title> and social metadata into index.html at build
// time, sourced from `src/data/siteIdentity.ts`.
//
// Why build-time injection rather than static tags typed into index.html: the
// name, tagline and description already exist in `siteIdentity.ts` (which
// `profile.ts` re-exports and the Hero renders). Hand-copying them into the
// head would mean editing the bio silently leaves the search snippet and the
// unfurl showing last month's text. Injecting keeps ONE source of truth while
// still emitting fully static HTML — which matters, because most unfurlers
// (Slack, LinkedIn, iMessage) never run JS and read the served markup verbatim.
// A client-side head manager would not fix the unfurl at all.
//
// Scope: the site-level set only, for `/`. Per-route tags need the prerender
// step (docs/SEO/03) — until then every route unfurls as the site, which is
// correct-if-generic rather than wrong.
function injectSiteMeta(): Plugin {
  return {
    name: 'inject-site-meta',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const ogImage = `${siteUrl}${ogImagePath}`;
        // Person + WebSite. This is the identity anchor for a named-person
        // portfolio: how search models "who is this and what did they build".
        // Every field maps to something the Hero actually renders.
        const jsonLd = jsonLdGraph({
          name: profile.name,
          alternateName: profile.alternateName,
          jobTitle: profile.jobTitle,
          description: siteDescription,
          email: profile.email,
          image: `${siteUrl}${portraitPath}`,
          address: {
            locality: profile.locality,
            region: profile.region,
            country: profile.country,
          },
          alumniOf: education.map((entry) => entry.school),
          siteUrl,
          siteTitle,
          sameAs: [profile.github, profile.linkedin],
          knowsAbout: skills.flatMap((group) => group.items),
        });
        return {
          html: html.replace(
            /<title>.*?<\/title>/,
            `<title>${escapeHtml(siteTitle)}</title>`,
          ),
          tags: [
            { tag: 'meta', attrs: { name: 'description', content: siteDescription }, injectTo: 'head' },
            { tag: 'meta', attrs: { name: 'author', content: profile.name }, injectTo: 'head' },
            { tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` }, injectTo: 'head' },
            // Open Graph. og:image must be absolute; relative URLs are dropped.
            { tag: 'meta', attrs: { property: 'og:type', content: 'website' }, injectTo: 'head' },
            { tag: 'meta', attrs: { property: 'og:site_name', content: profile.name }, injectTo: 'head' },
            { tag: 'meta', attrs: { property: 'og:title', content: siteTitle }, injectTo: 'head' },
            { tag: 'meta', attrs: { property: 'og:description', content: siteDescription }, injectTo: 'head' },
            { tag: 'meta', attrs: { property: 'og:url', content: `${siteUrl}/` }, injectTo: 'head' },
            { tag: 'meta', attrs: { property: 'og:image', content: ogImage }, injectTo: 'head' },
            { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' }, injectTo: 'head' },
            { tag: 'meta', attrs: { property: 'og:image:height', content: '630' }, injectTo: 'head' },
            { tag: 'meta', attrs: { property: 'og:image:alt', content: `${profile.name}, ${profile.tagline.replace(/\s+·\s+/g, ', ')}` }, injectTo: 'head' },
            // Twitter/X reads og:* for most fields; card type + image are its own.
            { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' }, injectTo: 'head' },
            { tag: 'meta', attrs: { name: 'twitter:title', content: siteTitle }, injectTo: 'head' },
            { tag: 'meta', attrs: { name: 'twitter:description', content: siteDescription }, injectTo: 'head' },
            { tag: 'meta', attrs: { name: 'twitter:image', content: ogImage }, injectTo: 'head' },
            // Feed autodiscovery: readers and aggregators look for this link.
            {
              tag: 'link',
              attrs: {
                rel: 'alternate',
                type: 'application/rss+xml',
                title: `${profile.name} · Notebook`,
                href: '/feed.xml',
              },
              injectTo: 'head',
            },
            {
              tag: 'script',
              attrs: { type: 'application/ld+json' },
              children: jsonLd,
              injectTo: 'head',
            },
          ],
        };
      },
    },
  };
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Plugins needed in both the main pipeline and the worker sub-pipeline.
const sharedPlugins = () => [wasm(), topLevelAwait(), patchWgpuFirefoxLimits()];
const repoRoot = fileURLToPath(new URL('..', import.meta.url));

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    injectSiteMeta(),
    seoAssets(),
    spaPages404(),
    ...sharedPlugins(),
  ],
  server: {
    fs: {
      allow: [repoRoot],
    },
  },
  worker: {
    // Workers are spawned as ES modules (type: 'module' in AppBackground.vue).
    format: 'es',
    // vite-plugin-wasm and friends must be registered here so they apply
    // inside the worker sub-build that vite:worker-import-meta-url creates.
    // Without this the worker bundle follows the WASM import chain and hits
    // Vite's built-in "ESM integration proposal not supported" error.
    plugins: sharedPlugins,
  },
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
      '@gpu-pkg': new URL('../crates/game_of_life_gpu/pkg', import.meta.url).pathname,
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Keep mermaid's entire dependency graph (mermaid + d3 + dagre +
        // cytoscape + friends) in ONE lazy chunk. Left to its own devices,
        // Rollup splits it across many chunks that cross-import the app's
        // index chunk, and because index is wrapped by vite-plugin-top-level-
        // await (needed for the WASM), mermaid ends up awaiting the app's TLA
        // cycle. That coupling reorders d3-color's circular init and throws
        // "Cannot set properties of undefined (setting 'prototype')" at load.
        // Isolating the graph removes the cross-import, so d3 initialises in
        // dependency order (as it does under esbuild in dev). katex is shared
        // with the app's own math rendering, so it is deliberately left out.
        manualChunks(id) {
          if (!id.includes('node_modules') || id.includes('/katex/')) return;
          const mermaidGraph = [
            '/mermaid/', '/d3', '/dagre', '/cytoscape', '/khroma/', '/roughjs/',
            '/@mermaid-js/', '/dompurify/', '/@braintree/', '/stylis/',
            '/ts-dedent/', '/uuid/', '/marked/', '/dayjs/', '/@iconify/',
            '/robust-predicates/', '/internmap/', '/delaunator/', '/elkjs/',
            '/cose-base/', '/layout-base/', '/point-at-length/', '/web-worker/',
          ];
          if (mermaidGraph.some((dep) => id.includes(dep))) return 'mermaid';
        },
      },
    },
  },
});
