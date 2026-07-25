import type { Ref } from 'vue';

import type { BlankZone } from '../types/blankZones';
import { normalizeZone, normalizeZones } from '../utils/blankZoneNormalization';
import { loadBlankZones, saveBlankZones, clearBlankZonesStorage } from '../utils/blankZoneStorage';
import { createFeatureComposable, type FeatureCallbacks } from './createFeatureComposable';

export interface UseBlankZones {
  zones: Ref<BlankZone[]>;
  setZones(zones: BlankZone[]): void;
  addZone(zone: BlankZone): void;
  updateZone(zone: BlankZone): void;
  removeZone(id: string): void;
  clearZones(): void;
  syncFromWorker(zones: BlankZone[]): void;
}

// The worker-sync callbacks are the generic feature-channel shape (onSet/onAdd/
// …), supplied wholesale by `featureChannel(bridge.post, 'blankZones')` — no
// per-feature renaming layer.
export type UseBlankZonesOptions = FeatureCallbacks<BlankZone>;

export function useBlankZones(options: UseBlankZonesOptions = {}): UseBlankZones {
  const {
    items: zones, setItems, addItem, updateItem, removeItem, clearItems, syncFromWorker,
  } = createFeatureComposable({
    storage: { load: loadBlankZones, save: saveBlankZones, clear: clearBlankZonesStorage },
    normalize: normalizeZones,
    normalizeOne: normalizeZone,
    onSet: options.onSet,
    onAdd: options.onAdd,
    onUpdate: options.onUpdate,
    onRemove: options.onRemove,
    onClear: options.onClear,
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
