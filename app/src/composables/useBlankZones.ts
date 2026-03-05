import { ref, type Ref } from 'vue';

import type { BlankZone } from '../types/blankZones';
import { normalizeZone, normalizeZones } from '../utils/blankZoneNormalization';
import { clearBlankZonesStorage, loadBlankZones, saveBlankZones } from '../utils/blankZoneStorage';

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
  const zones = ref<BlankZone[]>(loadBlankZones());

  function commit(next: BlankZone[]): BlankZone[] {
    const normalized = normalizeZones(next);
    zones.value = normalized;
    saveBlankZones(normalized);
    return normalized;
  }

  function setZones(next: BlankZone[]): void {
    const normalized = commit(next);
    options.onSetZones?.(normalized);
  }

  function addZone(zone: BlankZone): void {
    const normalized = normalizeZone(zone);
    if (!normalized) {
      return;
    }
    commit([...zones.value, normalized]);
    options.onAddZone?.(normalized);
  }

  function updateZone(zone: BlankZone): void {
    const normalized = normalizeZone(zone);
    if (!normalized) {
      return;
    }
    if (!zones.value.some((current) => current.id === normalized.id)) {
      return;
    }
    const next = zones.value.map((current) => current.id === normalized.id ? normalized : current);
    commit(next);
    options.onUpdateZone?.(normalized);
  }

  function removeZone(id: string): void {
    if (!zones.value.some((zone) => zone.id === id)) {
      return;
    }
    const next = zones.value.filter((zone) => zone.id !== id);
    commit(next);
    options.onRemoveZone?.(id);
  }

  function clearZones(): void {
    if (zones.value.length === 0) {
      return;
    }
    zones.value = [];
    clearBlankZonesStorage();
    options.onClearZones?.();
  }

  function syncFromWorker(next: BlankZone[]): void {
    commit(next);
  }

  return {
    zones,
    setZones,
    addZone,
    updateZone,
    removeZone,
    clearZones,
    syncFromWorker,
  };
}
