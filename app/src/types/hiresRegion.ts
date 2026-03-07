export interface HiResRegion {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  multiplier: number;
  enabled: boolean;
  showGrid: boolean;
  showBaseGrid: boolean;
  showBorder: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface HiResStoragePayload {
  version: number;
  region: HiResRegion | null;
}

export const HIRES_MULTIPLIER = 4;
export const HIRES_STORAGE_VERSION = 1;
export const HIRES_STORAGE_KEY = `gol.hires.v${HIRES_STORAGE_VERSION}`;
