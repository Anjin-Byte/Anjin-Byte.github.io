import type { Ref } from 'vue';

import type { Decal } from '../types/decals';
import { normalizeDecal, normalizeDecals } from '../utils/decalNormalization';
import { loadDecals, saveDecals, clearDecalsStorage } from '../utils/decalStorage';
import { createFeatureComposable } from './createFeatureComposable';

export interface UseDecals {
  decals: Ref<Decal[]>;
  setDecals(decals: Decal[]): void;
  addDecal(decal: Decal): void;
  updateDecal(decal: Decal): void;
  removeDecal(id: string): void;
  clearDecals(): void;
  syncFromWorker(decals: Decal[]): void;
}

export interface UseDecalsOptions {
  onSetDecals?: (decals: Decal[]) => void;
  onAddDecal?: (decal: Decal) => void;
  onUpdateDecal?: (decal: Decal) => void;
  onRemoveDecal?: (id: string) => void;
  onClearDecals?: () => void;
}

export function useDecals(options: UseDecalsOptions = {}): UseDecals {
  const {
    items: decals, setItems, addItem, updateItem, removeItem, clearItems, syncFromWorker,
  } = createFeatureComposable({
    storage: { load: loadDecals, save: saveDecals, clear: clearDecalsStorage },
    normalize: normalizeDecals,
    normalizeOne: normalizeDecal,
    onSet: options.onSetDecals,
    onAdd: options.onAddDecal,
    onUpdate: options.onUpdateDecal,
    onRemove: options.onRemoveDecal,
    onClear: options.onClearDecals,
  });

  return {
    decals,
    setDecals: setItems,
    addDecal: addItem,
    updateDecal: updateItem,
    removeDecal: removeItem,
    clearDecals: clearItems,
    syncFromWorker,
  };
}
