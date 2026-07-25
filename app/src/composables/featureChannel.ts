import type { WorkerInMsg } from '../workers/rendererProtocol';

/** The five worker-sync callbacks, all present (a channel always binds every op).
 *  Assignable to `FeatureCallbacks<T>` — the composable accepts them wholesale. */
export interface FeatureChannel<T extends { id: string }> {
  onSet: (items: T[]) => void;
  onAdd: (item: T) => void;
  onUpdate: (item: T) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}

/**
 * Deep-clone a payload to a plain, structured-clone-safe object before posting
 * to the worker. Feature items live in a Vue `ref`, so reading them yields
 * reactive proxies that `postMessage` refuses to clone; and by construction they
 * are JSON-persistable (they already round-trip through localStorage), so a JSON
 * round-trip is both sufficient and the most robust generic deep-copy here.
 */
function toPlain<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

/**
 * Bind a worker-backed collection feature to the generic `feature` message
 * channel. Returns the five `createFeatureComposable` sync callbacks, each
 * posting one CRUD op under `name`, so wiring a feature to the worker is a
 * single call instead of five hand-written `bridge.post` closures. The inverse
 * direction (worker → composable) is the `feature_state` / `feature_error`
 * replies, dispatched by `name` on the main thread.
 */
export function featureChannel<T extends { id: string }>(
  post: (msg: WorkerInMsg) => void,
  name: string,
): FeatureChannel<T> {
  return {
    onSet:    (items) => post({ type: 'feature', feature: name, op: 'set',    payload: items.map(toPlain) }),
    onAdd:    (item)  => post({ type: 'feature', feature: name, op: 'add',    payload: toPlain(item) }),
    onUpdate: (item)  => post({ type: 'feature', feature: name, op: 'update', payload: toPlain(item) }),
    onRemove: (id)    => post({ type: 'feature', feature: name, op: 'remove', payload: id }),
    onClear:  ()      => post({ type: 'feature', feature: name, op: 'clear' }),
  };
}
