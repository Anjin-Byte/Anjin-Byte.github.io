import { defineConfig, type Plugin } from 'vite';
import { fileURLToPath } from 'node:url';
import { copyFileSync, existsSync } from 'node:fs';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

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

// Plugins needed in both the main pipeline and the worker sub-pipeline.
const sharedPlugins = () => [wasm(), topLevelAwait(), patchWgpuFirefoxLimits()];
const repoRoot = fileURLToPath(new URL('..', import.meta.url));

export default defineConfig({
  base: '/',
  plugins: [vue(), vuetify({ autoImport: true }), spaPages404(), ...sharedPlugins()],
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
