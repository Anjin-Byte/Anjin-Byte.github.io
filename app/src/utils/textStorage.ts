import { createFeatureStorage } from './featureStorage';
import { normalizeTextBlocks } from './textNormalization';
import {
  TEXT_STORAGE_KEY,
  TEXT_STORAGE_VERSION,
} from '../types/text';

const storage = createFeatureStorage({
  key: TEXT_STORAGE_KEY,
  version: TEXT_STORAGE_VERSION,
  normalize: normalizeTextBlocks,
  itemsKey: 'blocks',
});

export const loadTextBlocks = storage.load;
export const saveTextBlocks = storage.save;
export const clearTextStorage = storage.clear;
