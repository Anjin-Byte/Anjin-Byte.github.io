export type BlankMode = 'minor' | 'major' | 'both';
export type EdgeStyle = 'none' | 'bold-major' | 'fade' | 'noted';

export interface ZoneEdgeBehavior {
  style: EdgeStyle;
  widthCells: number;      // range: 1..4
  opacity: number;         // range: 0..1
  fadeStrength?: number;   // range: 0..1 (style='fade')
  notePitchCells?: number; // >= 1 (style='noted')
  hideInteriorBorder?: boolean; // suppress border where this zone is adjacent to another zone (style='bold-major'|'noted')
}

export interface BlankZone {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  mode: BlankMode;
  edge: ZoneEdgeBehavior;
  enabled: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface BlankZoneRect {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface BlankZoneDraft {
  mode: BlankMode;
  edge: ZoneEdgeBehavior;
}

export interface BlankZoneStoragePayload {
  version: number;
  zones: BlankZone[];
}

export const BLANK_ZONE_STORAGE_VERSION = 1;
export const BLANK_ZONE_STORAGE_KEY = `gol.gridBlankZones.v${BLANK_ZONE_STORAGE_VERSION}`;
export const MAX_BLANK_ZONES = 128;
