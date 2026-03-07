export type TextRenderMode = 'sdf' | 'cells' | 'both';

export interface TextBlock {
  id: string;
  text: string;
  font: string;
  cellX: number;
  cellY: number;
  cellsWide: number;
  renderMode: TextRenderMode;
  color: string; // CSS hex color, e.g. '#1a1a2e'
  enabled: boolean;
  createdAt: number;
  updatedAt: number;
}

export const DEFAULT_TEXT_COLOR = '#1a1a2e';

export interface TextStoragePayload {
  version: number;
  blocks: TextBlock[];
}

export const MAX_TEXT_BLOCKS = 8;
export const MAX_TOTAL_GLYPHS = 256;
export const TEXT_STORAGE_VERSION = 1;
export const TEXT_STORAGE_KEY = `gol.text.v${TEXT_STORAGE_VERSION}`;
export const DEFAULT_FONT = 'bold 24px monospace';
