import { ref, type Ref } from 'vue';
import type { RendererBackend } from '../workers/rendererProtocol';

// Which background renderer the worker actually selected, set by AppBackground
// from the worker's `ready` message. Exposed as a module-scope singleton so a
// dev-only debug toggle can display it (especially useful in Auto mode, to see
// which tier the probe chain picked). Backend selection is one-shot at worker
// init — a canvas context is claimed once — so forcing a different backend
// reloads the page with a `?renderer=` override rather than hot-swapping.

const activeBackend = ref<RendererBackend | null>(null);

/** What `?renderer=` forces, or 'auto' when unset/invalid. */
export type ForcedSelection = 'auto' | 'webgpu' | 'webgl2' | 'static';

export function currentForcedSelection(): ForcedSelection {
  const v = new URLSearchParams(window.location.search).get('renderer');
  return v === 'webgpu' || v === 'webgl2' || v === 'static' ? v : 'auto';
}

/** Reload with the chosen backend pinned (or the override removed for 'auto'). */
export function forceBackendReload(sel: ForcedSelection): void {
  const url = new URL(window.location.href);
  if (sel === 'auto') url.searchParams.delete('renderer');
  else url.searchParams.set('renderer', sel);
  window.location.href = url.toString();
}

export function useRendererBackend(): {
  activeBackend: Ref<RendererBackend | null>;
  currentForcedSelection: typeof currentForcedSelection;
  forceBackendReload: typeof forceBackendReload;
} {
  return { activeBackend, currentForcedSelection, forceBackendReload };
}
