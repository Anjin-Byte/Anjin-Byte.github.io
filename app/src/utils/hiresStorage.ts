import type { HiResRegion } from '../types/hiresRegion';
import { createFeatureStorage } from './featureStorage';
import { normalizeRegion, normalizeRegions } from './hiresNormalization';
import {
  HIRES_STORAGE_KEY,
  HIRES_STORAGE_VERSION,
} from '../types/hiresRegion';

const V1_KEY = 'gol.hires.v1';

const storage = createFeatureStorage<HiResRegion>({
  key: HIRES_STORAGE_KEY,
  version: HIRES_STORAGE_VERSION,
  normalize: normalizeRegions,
  itemsKey: 'regions',
  migrate(raw) {
    // v1 had a single 'region' field instead of 'regions' array
    if (raw.region && !raw.regions) {
      const r = normalizeRegion(raw.region);
      return { ...raw, regions: r ? [r] : [], version: HIRES_STORAGE_VERSION };
    }
    return { ...raw, version: HIRES_STORAGE_VERSION };
  },
});

// Wrap load to also check the legacy v1 key
const baseLoad = storage.load;
export function loadRegions(): HiResRegion[] {
  const result = baseLoad();
  if (result.length > 0) return result;
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(V1_KEY);
    if (!raw) return [];
    localStorage.removeItem(V1_KEY);
    const parsed = JSON.parse(raw);
    if (parsed.region) {
      const r = normalizeRegion(parsed.region);
      return r ? [r] : [];
    }
    return normalizeRegions(parsed.regions);
  } catch {
    return [];
  }
}

export const saveRegions = storage.save;
export const clearRegionsStorage = storage.clear;
