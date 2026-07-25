// Worker-side registry for collection features driven over the generic `feature`
// message channel. Each feature registers its `FeatureState` plus how to push
// the collection at the active renderer; the worker's single `case 'feature'`
// then dispatches every feature through here. Adding a worker-backed feature is
// one `register()` call — no new message variant, switch case, or re-apply site.

import type { FeatureOp } from './rendererProtocol';
import type { FeatureState } from './FeatureState';

interface HasId {
  id: string;
}

/** An erased registered feature. The concrete item type `T` is captured inside
 *  the closures at `register()` time, so nothing here needs a cast or `any`. */
interface FeatureEntry {
  /** Apply a CRUD op; returns an error message on rejection, `undefined` on ok. */
  dispatch: (op: FeatureOp, payload: unknown) => string | undefined;
  /** Push the current collection to the active renderer (called after each op,
   *  and on every renderer swap / resize via `applyAll`). */
  apply: () => void;
  /** The authoritative post-op collection, echoed back as `feature_state`. */
  snapshot: () => HasId[];
}

export class FeatureRegistry {
  private readonly entries = new Map<string, FeatureEntry>();

  register<T extends HasId>(
    name: string,
    state: FeatureState<T>,
    applyToRenderer: (items: T[]) => void,
  ): void {
    this.entries.set(name, {
      dispatch: (op, payload) => dispatchFeatureOp(state, op, payload),
      apply: () => applyToRenderer(state.getAll()),
      snapshot: () => state.getAll(),
    });
  }

  get(name: string): FeatureEntry | undefined {
    return this.entries.get(name);
  }

  /** Re-push every feature's collection to the renderer — used after a renderer
   *  hand-off (GPU init, resize) rewrites its uniforms/buffers. */
  applyAll(): void {
    for (const entry of this.entries.values()) entry.apply();
  }
}

/** The single exhaustive op switch, shared by every feature. A new `FeatureOp`
 *  member is a compile error here (`never`), not a silent no-op. */
function dispatchFeatureOp<T extends HasId>(
  state: FeatureState<T>,
  op: FeatureOp,
  payload: unknown,
): string | undefined {
  switch (op) {
    case 'set':
      state.setAll(payload);
      return undefined;
    case 'add':
      return state.add(payload).error;
    case 'update':
      return state.update(payload).error;
    case 'remove':
      if (typeof payload !== 'string') return 'remove op requires a string id';
      state.remove(payload);
      return undefined;
    case 'clear':
      state.clear();
      return undefined;
    default: {
      const _exhaustive: never = op;
      return `unknown feature op: ${String(_exhaustive)}`;
    }
  }
}
