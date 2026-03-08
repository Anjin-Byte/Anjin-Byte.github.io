import { createFeatureStorage } from './featureStorage';
import { normalizeDecals } from './decalNormalization';
import {
  DECAL_STORAGE_KEY,
  DECAL_STORAGE_VERSION,
} from '../types/decals';

const storage = createFeatureStorage({
  key: DECAL_STORAGE_KEY,
  version: DECAL_STORAGE_VERSION,
  normalize: normalizeDecals,
  itemsKey: 'decals',
});

export const loadDecals = storage.load;
export const saveDecals = storage.save;
export const clearDecalsStorage = storage.clear;
