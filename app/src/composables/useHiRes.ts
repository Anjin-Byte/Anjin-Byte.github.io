import { ref, type Ref } from 'vue';

import type { HiResRegion } from '../types/hiresRegion';
import { normalizeRegion } from '../utils/hiresNormalization';
import { clearRegionStorage, loadRegion, saveRegion } from '../utils/hiresStorage';

export interface UseHiRes {
  region: Ref<HiResRegion | null>;
  setRegion(region: HiResRegion): void;
  clearRegion(): void;
  syncFromWorker(region: HiResRegion | null): void;
}

export interface UseHiResOptions {
  onSetRegion?: (region: HiResRegion) => void;
  onClearRegion?: () => void;
}

export function useHiRes(options: UseHiResOptions = {}): UseHiRes {
  const region = ref<HiResRegion | null>(loadRegion());

  function commit(next: HiResRegion | null): HiResRegion | null {
    const normalized = next ? normalizeRegion(next) : null;
    region.value = normalized;
    saveRegion(normalized);
    return normalized;
  }

  function setRegion(r: HiResRegion): void {
    const normalized = normalizeRegion(r);
    if (!normalized) return;
    commit(normalized);
    options.onSetRegion?.(normalized);
  }

  function clearRegion(): void {
    if (!region.value) return;
    region.value = null;
    clearRegionStorage();
    options.onClearRegion?.();
  }

  function syncFromWorker(next: HiResRegion | null): void {
    commit(next);
  }

  return { region, setRegion, clearRegion, syncFromWorker };
}
