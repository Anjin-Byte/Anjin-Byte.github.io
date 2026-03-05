import {
  DECAL_STORAGE_KEY,
  DECAL_STORAGE_VERSION,
  type Decal,
  type DecalStoragePayload,
} from '../types/decals';
import { normalizeDecals } from './decalNormalization';

function storageAvailable(): boolean {
  return typeof localStorage !== 'undefined';
}

export function loadDecals(): Decal[] {
  if (!storageAvailable()) {
    return [];
  }

  try {
    const raw = localStorage.getItem(DECAL_STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as Partial<DecalStoragePayload>;
    if (parsed.version !== DECAL_STORAGE_VERSION) {
      return [];
    }
    return normalizeDecals(parsed.decals);
  } catch {
    return [];
  }
}

export function saveDecals(decals: Decal[]): void {
  if (!storageAvailable()) {
    return;
  }
  const payload: DecalStoragePayload = {
    version: DECAL_STORAGE_VERSION,
    decals: normalizeDecals(decals),
  };
  localStorage.setItem(DECAL_STORAGE_KEY, JSON.stringify(payload));
}

export function clearDecalsStorage(): void {
  if (!storageAvailable()) {
    return;
  }
  localStorage.removeItem(DECAL_STORAGE_KEY);
}
