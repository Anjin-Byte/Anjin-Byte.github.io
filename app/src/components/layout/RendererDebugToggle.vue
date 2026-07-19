<script setup lang="ts">
// DEV-ONLY renderer backend switcher. Mounted from App.vue behind
// `import.meta.env.DEV`, so it is never present in a production build. It's a
// thin UI over the `?renderer=` override (useRendererBackend): backend
// selection is one-shot at worker init (a canvas context is claimed once and
// permanently), so switching reloads the page with the override applied rather
// than hot-swapping. Shows the ACTIVE backend the worker reported — in Auto
// that's whichever tier the WebGPU→WebGL2→static probe chain landed on.
import { computed } from 'vue';
import {
  useRendererBackend,
  currentForcedSelection,
  type ForcedSelection,
} from '../../composables/useRendererBackend';

const { activeBackend, forceBackendReload } = useRendererBackend();

const OPTIONS: { id: ForcedSelection; label: string }[] = [
  { id: 'auto', label: 'Auto' },
  { id: 'webgpu', label: 'WebGPU' },
  { id: 'webgl2', label: 'WebGL2' },
  { id: 'static', label: 'Static' },
];

const forced = currentForcedSelection();

const ACTIVE_LABEL: Record<string, string> = { gpu: 'WebGPU', webgl2: 'WebGL2', cpu: 'Static' };
const activeLabel = computed(() =>
  activeBackend.value ? ACTIVE_LABEL[activeBackend.value] ?? activeBackend.value : '…',
);
</script>

<template>
  <div class="renderer-debug" role="group" aria-label="Renderer backend (debug)">
    <span class="rd-active">active: <strong>{{ activeLabel }}</strong></span>
    <button
      v-for="o in OPTIONS"
      :key="o.id"
      type="button"
      class="rd-btn"
      :class="{ 'rd-btn--on': forced === o.id }"
      :aria-pressed="forced === o.id"
      @click="forceBackendReload(o.id)"
    >{{ o.label }}</button>
  </div>
</template>

<style scoped>
.renderer-debug {
  position: fixed;
  left: 10px;
  bottom: 10px;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  border-radius: 8px;
  background: color-mix(in oklab, var(--theme-surface) 82%, transparent);
  border: 1px solid var(--island-edge);
  backdrop-filter: blur(6px);
  font: 500 11px/1 var(--font-mono, monospace);
  color: var(--theme-text-secondary);
  user-select: none;
}
.rd-active {
  padding-right: 4px;
  color: var(--theme-text-tertiary);
  white-space: nowrap;
}
.rd-active strong {
  color: var(--theme-text-primary);
}
.rd-btn {
  padding: 3px 7px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--theme-text-secondary);
  cursor: pointer;
  font: inherit;
}
.rd-btn:hover {
  border-color: var(--island-edge);
  color: var(--theme-text-primary);
}
.rd-btn--on {
  background: var(--theme-accent);
  color: var(--theme-surface);
  border-color: transparent;
}
</style>
