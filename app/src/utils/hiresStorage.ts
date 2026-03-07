import {
  HIRES_STORAGE_KEY,
  HIRES_STORAGE_VERSION,
  type HiResRegion,
  type HiResStoragePayload,
} from '../types/hiresRegion';
import { normalizeRegion, normalizeRegions } from './hiresNormalization';

function storageAvailable(): boolean {
  return typeof localStorage !== 'undefined';
}

const V1_KEY = 'gol.hires.v1';

export function loadRegions(): HiResRegion[] {
  if (!storageAvailable()) return [];
  try {
    let raw = localStorage.getItem(HIRES_STORAGE_KEY);
    // Try v1 key if current key has no data
    if (!raw) {
      raw = localStorage.getItem(V1_KEY);
      if (raw) localStorage.removeItem(V1_KEY);
    }
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (typeof parsed.version !== 'number' || parsed.version > HIRES_STORAGE_VERSION) return [];
    // v1 migration: single `region` → `regions` array
    if (parsed.version === 1 && parsed.region) {
      const r = normalizeRegion(parsed.region);
      return r ? [r] : [];
    }
    return normalizeRegions(parsed.regions);
  } catch {
    return [];
  }
}

export function saveRegions(regions: HiResRegion[]): void {
  if (!storageAvailable()) return;
  const payload: HiResStoragePayload = {
    version: HIRES_STORAGE_VERSION,
    regions: normalizeRegions(regions),
  };
  localStorage.setItem(HIRES_STORAGE_KEY, JSON.stringify(payload));
}

export function clearRegionsStorage(): void {
  if (!storageAvailable()) return;
  localStorage.removeItem(HIRES_STORAGE_KEY);
}
