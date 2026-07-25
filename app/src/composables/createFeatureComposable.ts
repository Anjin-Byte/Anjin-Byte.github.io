import { ref, type Ref } from 'vue';
import type { FeatureStorage } from '../utils/featureStorage';

interface HasId {
  id: string;
}

export interface FeatureComposableConfig<T extends HasId> {
  storage: FeatureStorage<T>;
  normalize: (raw: unknown) => T[];
  normalizeOne: (raw: unknown) => T | null;
  // `| undefined` so callers may pass an explicitly-undefined hook (absent ===
  // no hook) under exactOptionalPropertyTypes.
  onAdd?: ((item: T) => void) | undefined;
  onUpdate?: ((item: T) => void) | undefined;
  onRemove?: ((id: string) => void) | undefined;
  onSet?: ((items: T[]) => void) | undefined;
  onClear?: (() => void) | undefined;
}

/** The worker-sync callbacks of a feature composable, as their own type so a
 *  transport (see `featureChannel`) can supply all five at once. */
export type FeatureCallbacks<T extends HasId> =
  Pick<FeatureComposableConfig<T>, 'onSet' | 'onAdd' | 'onUpdate' | 'onRemove' | 'onClear'>;

export interface FeatureComposable<T extends HasId> {
  items: Ref<T[]>;
  // Function-property syntax (not methods): this-less, safe to destructure.
  setItems: (items: T[]) => void;
  addItem: (item: T) => void;
  updateItem: (item: T) => void;
  removeItem: (id: string) => void;
  clearItems: () => void;
  syncFromWorker: (items: T[]) => void;
}

export function createFeatureComposable<T extends HasId>(
  config: FeatureComposableConfig<T>,
): FeatureComposable<T> {
  const items = ref<T[]>(config.storage.load()) as Ref<T[]>;

  function commit(next: T[]): T[] {
    const normalized = config.normalize(next);
    items.value = normalized;
    config.storage.save(normalized);
    return normalized;
  }

  function setItems(next: T[]): void {
    const normalized = commit(next);
    config.onSet?.(normalized);
  }

  function addItem(item: T): void {
    const normalized = config.normalizeOne(item);
    if (!normalized) return;
    commit([...items.value.filter((i) => i.id !== normalized.id), normalized]);
    config.onAdd?.(normalized);
  }

  function updateItem(item: T): void {
    const normalized = config.normalizeOne(item);
    if (!normalized) return;
    if (!items.value.some((i) => i.id === normalized.id)) return;
    const next = items.value.map((i) => i.id === normalized.id ? normalized : i);
    commit(next);
    config.onUpdate?.(normalized);
  }

  function removeItem(id: string): void {
    if (!items.value.some((i) => i.id === id)) return;
    commit(items.value.filter((i) => i.id !== id));
    config.onRemove?.(id);
  }

  function clearItems(): void {
    if (items.value.length === 0) return;
    items.value = [];
    config.storage.clear();
    config.onClear?.();
  }

  function syncFromWorker(next: T[]): void {
    commit(next);
  }

  return { items, setItems, addItem, updateItem, removeItem, clearItems, syncFromWorker };
}
