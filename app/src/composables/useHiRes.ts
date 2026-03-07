import { ref, type Ref } from 'vue';

import type { HiResRegion } from '../types/hiresRegion';
import { normalizeRegion, normalizeRegions } from '../utils/hiresNormalization';
import { clearRegionsStorage, loadRegions, saveRegions } from '../utils/hiresStorage';

export interface UseHiRes {
  regions: Ref<HiResRegion[]>;
  addRegion(region: HiResRegion): void;
  updateRegion(region: HiResRegion): void;
  removeRegion(id: string): void;
  clearRegions(): void;
  syncFromWorker(regions: HiResRegion[]): void;
}

export interface UseHiResOptions {
  onSetRegions?: (regions: HiResRegion[]) => void;
  onAddRegion?: (region: HiResRegion) => void;
  onUpdateRegion?: (region: HiResRegion) => void;
  onRemoveRegion?: (id: string) => void;
  onClearRegions?: () => void;
}

export function useHiRes(options: UseHiResOptions = {}): UseHiRes {
  const regions = ref<HiResRegion[]>(loadRegions());

  function commit(next: HiResRegion[]): void {
    const normalized = normalizeRegions(next);
    regions.value = normalized;
    saveRegions(normalized);
  }

  function addRegion(r: HiResRegion): void {
    const normalized = normalizeRegion(r);
    if (!normalized) return;
    commit([...regions.value.filter((e) => e.id !== normalized.id), normalized]);
    options.onAddRegion?.(normalized);
  }

  function updateRegion(r: HiResRegion): void {
    const normalized = normalizeRegion(r);
    if (!normalized) return;
    const idx = regions.value.findIndex((e) => e.id === normalized.id);
    if (idx < 0) return;
    const updated = regions.value.slice();
    updated[idx] = normalized;
    commit(updated);
    options.onUpdateRegion?.(normalized);
  }

  function removeRegion(id: string): void {
    if (!regions.value.some((r) => r.id === id)) return;
    commit(regions.value.filter((r) => r.id !== id));
    options.onRemoveRegion?.(id);
  }

  function clearRegions(): void {
    if (regions.value.length === 0) return;
    regions.value = [];
    clearRegionsStorage();
    options.onClearRegions?.();
  }

  function syncFromWorker(next: HiResRegion[]): void {
    commit(next);
  }

  return { regions, addRegion, updateRegion, removeRegion, clearRegions, syncFromWorker };
}
