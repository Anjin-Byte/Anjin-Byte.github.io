// Pure, state-free helpers shared by the worker and its renderer adapters.
// Kept separate from backgroundRenderer.ts (which owns all mutable module state)
// so these can be reasoned about and reused without dragging in worker globals.

import { TICK_EVERY } from './rendererProtocol';

/** Coerce an unknown thrown value to a message string. */
export function errorMessage(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

/** Smoothstep easing on [0, 1] (input clamped). Drives the init-fade and the
 *  per-tick transition ramp. */
export function easeTransition(t: number): number {
  const clamped = Math.min(1, Math.max(0, t));
  return clamped * clamped * (3 - 2 * clamped);
}

/** Frame action resolved by the scheduler — separates "what frame" from "do thing". */
export type FrameAction = 'base_tick' | 'render_only';

export function resolveFrameAction(frame: number): FrameAction {
  if (frame % TICK_EVERY === 0) return 'base_tick';
  return 'render_only';
}
