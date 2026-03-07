import {
  TEXT_STORAGE_KEY,
  TEXT_STORAGE_VERSION,
  type TextBlock,
  type TextStoragePayload,
} from '../types/text';
import { normalizeTextBlocks } from './textNormalization';

function storageAvailable(): boolean {
  return typeof localStorage !== 'undefined';
}

export function loadTextBlocks(): TextBlock[] {
  if (!storageAvailable()) return [];

  try {
    const raw = localStorage.getItem(TEXT_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Partial<TextStoragePayload>;
    if (typeof parsed.version !== 'number' || parsed.version > TEXT_STORAGE_VERSION) return [];
    return normalizeTextBlocks(parsed.blocks);
  } catch {
    return [];
  }
}

export function saveTextBlocks(blocks: TextBlock[]): void {
  if (!storageAvailable()) return;
  const payload: TextStoragePayload = {
    version: TEXT_STORAGE_VERSION,
    blocks: normalizeTextBlocks(blocks),
  };
  localStorage.setItem(TEXT_STORAGE_KEY, JSON.stringify(payload));
}

export function clearTextStorage(): void {
  if (!storageAvailable()) return;
  localStorage.removeItem(TEXT_STORAGE_KEY);
}
