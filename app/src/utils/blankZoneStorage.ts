import { createFeatureStorage } from './featureStorage';
import { normalizeZones } from './blankZoneNormalization';
import {
  BLANK_ZONE_STORAGE_KEY,
  BLANK_ZONE_STORAGE_VERSION,
} from '../types/blankZones';

const storage = createFeatureStorage({
  key: BLANK_ZONE_STORAGE_KEY,
  version: BLANK_ZONE_STORAGE_VERSION,
  normalize: normalizeZones,
  itemsKey: 'zones',
});

export const loadBlankZones = storage.load;
export const saveBlankZones = storage.save;
export const clearBlankZonesStorage = storage.clear;
