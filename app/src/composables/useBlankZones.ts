import type { Ref } from 'vue';

import type { BlankZone } from '../types/blankZones';
import { normalizeZone, normalizeZones } from '../utils/blankZoneNormalization';
import { loadBlankZones, saveBlankZones, clearBlankZonesStorage } from '../utils/blankZoneStorage';
import { createFeatureComposable } from './createFeatureComposable';

export interface UseBlankZones {
  zones: Ref<BlankZone[]>;
  setZones(zones: BlankZone[]): void;
  addZone(zone: BlankZone): void;
  updateZone(zone: BlankZone): void;
  removeZone(id: string): void;
  clearZones(): void;
  syncFromWorker(zones: BlankZone[]): void;
}

export interface UseBlankZonesOptions {
  onSetZones?: (zones: BlankZone[]) => void;
  onAddZone?: (zone: BlankZone) => void;
  onUpdateZone?: (zone: BlankZone) => void;
  onRemoveZone?: (id: string) => void;
  onClearZones?: () => void;
}

export function useBlankZones(options: UseBlankZonesOptions = {}): UseBlankZones {
  const {
    items: zones, setItems, addItem, updateItem, removeItem, clearItems, syncFromWorker,
  } = createFeatureComposable({
    storage: { load: loadBlankZones, save: saveBlankZones, clear: clearBlankZonesStorage },
    normalize: normalizeZones,
    normalizeOne: normalizeZone,
    onSet: options.onSetZones,
    onAdd: options.onAddZone,
    onUpdate: options.onUpdateZone,
    onRemove: options.onRemoveZone,
    onClear: options.onClearZones,
  });

  return {
    zones,
    setZones: setItems,
    addZone: addItem,
    updateZone: updateItem,
    removeZone: removeItem,
    clearZones: clearItems,
    syncFromWorker,
  };
}
