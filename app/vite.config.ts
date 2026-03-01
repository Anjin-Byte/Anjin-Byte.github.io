import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

// wgpu 22.x serialises 'maxInterStageShaderComponents' into the GPUDeviceDescriptor's
// requiredLimits. That field was removed from the WebGPU spec (renamed to
// 'maxInterStageShaderVariables') and Firefox rejects it with an OperationError.
// This plugin patches the one requestDevice call-site in the generated WASM JS shim
// to delete the offending key before the call reaches the browser API.
// Remove once wgpu is updated to a version that sends the correct field name.
function patchWgpuFirefoxLimits(): Plugin {
  return {
    name: 'patch-wgpu-firefox-limits',
    transform(code, id) {
      if (!id.includes('game_of_life_gpu_bg.js')) return;
      const patched = code.replace(
        'const ret = arg0.requestDevice(arg1);',
        "if (arg1?.requiredLimits) delete arg1.requiredLimits.maxInterStageShaderComponents;\n    const ret = arg0.requestDevice(arg1);",
      );
      if (patched === code) {
        console.warn('[patch-wgpu-firefox-limits] requestDevice call-site not found — patch may be stale');
      }
      return patched;
    },
  };
}

// Plugins needed in both the main pipeline and the worker sub-pipeline.
const sharedPlugins = () => [wasm(), topLevelAwait(), patchWgpuFirefoxLimits()];

export default defineConfig({
  base: '/',
  plugins: [vue(), ...sharedPlugins()],
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
  build: { outDir: 'dist' },
});
