import {
  BLANK_ZONE_STORAGE_KEY,
  BLANK_ZONE_STORAGE_VERSION,
  type BlankZone,
  type BlankZoneStoragePayload,
} from '../types/blankZones';
import { normalizeZones } from './blankZoneNormalization';

function storageAvailable(): boolean {
  return typeof localStorage !== 'undefined';
}

export function loadBlankZones(): BlankZone[] {
  if (!storageAvailable()) {
    return [];
  }

  try {
    const raw = localStorage.getItem(BLANK_ZONE_STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as Partial<BlankZoneStoragePayload>;
    if (parsed.version !== BLANK_ZONE_STORAGE_VERSION) {
      return [];
    }
    return normalizeZones(parsed.zones);
  } catch {
    return [];
  }
}

export function saveBlankZones(zones: BlankZone[]): void {
  if (!storageAvailable()) {
    return;
  }
  const payload: BlankZoneStoragePayload = {
    version: BLANK_ZONE_STORAGE_VERSION,
    zones: normalizeZones(zones),
  };
  localStorage.setItem(BLANK_ZONE_STORAGE_KEY, JSON.stringify(payload));
}

export function clearBlankZonesStorage(): void {
  if (!storageAvailable()) {
    return;
  }
  localStorage.removeItem(BLANK_ZONE_STORAGE_KEY);
}
