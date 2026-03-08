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
  tickMultiplier: number;
  createdAt: number;
  updatedAt: number;
}

export interface HiResStoragePayload {
  version: number;
  regions: HiResRegion[];
}

export const HIRES_MULTIPLIER = 4;
export const MAX_HIRES_REGIONS = 8;
export const HIRES_STORAGE_VERSION = 2;
export const HIRES_STORAGE_KEY = 'gol.hires';
