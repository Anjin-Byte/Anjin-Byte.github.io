import type { Ref } from 'vue';

import type { HiResRegion } from '../types/hiresRegion';
import { normalizeRegion, normalizeRegions } from '../utils/hiresNormalization';
import { loadRegions, saveRegions, clearRegionsStorage } from '../utils/hiresStorage';
import { createFeatureComposable } from './createFeatureComposable';

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
  const {
    items: regions, addItem, updateItem, removeItem, clearItems, syncFromWorker,
  } = createFeatureComposable({
    storage: { load: loadRegions, save: saveRegions, clear: clearRegionsStorage },
    normalize: normalizeRegions,
    normalizeOne: normalizeRegion,
    onSet: options.onSetRegions,
    onAdd: options.onAddRegion,
    onUpdate: options.onUpdateRegion,
    onRemove: options.onRemoveRegion,
    onClear: options.onClearRegions,
  });

  return {
    regions,
    addRegion: addItem,
    updateRegion: updateItem,
    removeRegion: removeItem,
    clearRegions: clearItems,
    syncFromWorker,
  };
}
