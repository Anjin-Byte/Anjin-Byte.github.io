import { ref, type Ref } from 'vue';

import type { Decal } from '../types/decals';
import { normalizeDecal, normalizeDecals } from '../utils/decalNormalization';
import { clearDecalsStorage, loadDecals, saveDecals } from '../utils/decalStorage';

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
  const decals = ref<Decal[]>(loadDecals());

  function commit(next: Decal[]): Decal[] {
    const normalized = normalizeDecals(next);
    decals.value = normalized;
    saveDecals(normalized);
    return normalized;
  }

  function setDecals(next: Decal[]): void {
    const normalized = commit(next);
    options.onSetDecals?.(normalized);
  }

  function addDecal(decal: Decal): void {
    const normalized = normalizeDecal(decal);
    if (!normalized) {
      return;
    }
    commit([...decals.value, normalized]);
    options.onAddDecal?.(normalized);
  }

  function updateDecal(decal: Decal): void {
    const normalized = normalizeDecal(decal);
    if (!normalized) {
      return;
    }
    if (!decals.value.some((current) => current.id === normalized.id)) {
      return;
    }
    const next = decals.value.map((current) => current.id === normalized.id ? normalized : current);
    commit(next);
    options.onUpdateDecal?.(normalized);
  }

  function removeDecal(id: string): void {
    if (!decals.value.some((decal) => decal.id === id)) {
      return;
    }
    const next = decals.value.filter((decal) => decal.id !== id);
    commit(next);
    options.onRemoveDecal?.(id);
  }

  function clearDecals(): void {
    if (decals.value.length === 0) {
      return;
    }
    decals.value = [];
    clearDecalsStorage();
    options.onClearDecals?.();
  }

  function syncFromWorker(next: Decal[]): void {
    commit(next);
  }

  return {
    decals,
    setDecals,
    addDecal,
    updateDecal,
    removeDecal,
    clearDecals,
    syncFromWorker,
  };
}
