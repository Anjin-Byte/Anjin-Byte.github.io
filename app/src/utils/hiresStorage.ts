import {
  HIRES_STORAGE_KEY,
  HIRES_STORAGE_VERSION,
  type HiResRegion,
  type HiResStoragePayload,
} from '../types/hiresRegion';
import { normalizeRegion } from './hiresNormalization';

function storageAvailable(): boolean {
  return typeof localStorage !== 'undefined';
}

export function loadRegion(): HiResRegion | null {
  if (!storageAvailable()) return null;
  try {
    const raw = localStorage.getItem(HIRES_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<HiResStoragePayload>;
    if (parsed.version !== HIRES_STORAGE_VERSION) return null;
    return normalizeRegion(parsed.region);
  } catch {
    return null;
  }
}

export function saveRegion(region: HiResRegion | null): void {
  if (!storageAvailable()) return;
  const payload: HiResStoragePayload = {
    version: HIRES_STORAGE_VERSION,
    region: region ? normalizeRegion(region) : null,
  };
  localStorage.setItem(HIRES_STORAGE_KEY, JSON.stringify(payload));
}

export function clearRegionStorage(): void {
  if (!storageAvailable()) return;
  localStorage.removeItem(HIRES_STORAGE_KEY);
}
