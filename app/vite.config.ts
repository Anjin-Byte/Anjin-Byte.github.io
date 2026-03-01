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

export default defineConfig({
  base: '/',
  plugins: [vue(), wasm(), topLevelAwait(), patchWgpuFirefoxLimits()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
      '@gpu-pkg': new URL('../crates/game_of_life_gpu/pkg', import.meta.url).pathname,
    },
  },
  build: { outDir: 'dist' },
});
