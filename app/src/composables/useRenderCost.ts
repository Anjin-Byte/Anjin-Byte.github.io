import type { RenderCostStats } from '../workers/rendererProtocol';

// Module-scope relay for the worker's live render-cost stats, mirroring the
// useRendererBackend singleton pattern. The worker bridge lives in
// AppBackground, but the dev perf HUD is mounted from App.vue and must not
// reach into that component or spawn a second worker connection — so
// AppBackground publishes here and the HUD subscribes.
//
// A plain listener set rather than a `ref`: these arrive a few times a second
// and only a dev-only overlay consumes them, so there is no reason to put them
// on Vue's reactivity graph for the whole app.

type Listener = (stats: RenderCostStats) => void;

const listeners = new Set<Listener>();

/** Called by AppBackground on each worker `render_cost` message. */
export function publishRenderCost(stats: RenderCostStats): void {
  for (const fn of listeners) fn(stats);
}

/** Subscribe; returns an unsubscribe function. */
export function onRenderCost(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
