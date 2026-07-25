import type { WorldCell } from '../utils/units';

export type BlankMode = 'minor' | 'major' | 'both';
export type EdgeStyle = 'none' | 'bold-major' | 'fade' | 'noted';

// Branded zone identifier (interface-audit G): a `BlankZone.id` is not
// interchangeable with an arbitrary string. Consumers that take `id: string`
// (removeZone, storage keys) still accept a ZoneId freely, so only id
// generation / parse boundaries brand via `asZoneId`.
declare const __zoneId: unique symbol;
export type ZoneId = string & { readonly [__zoneId]: 'ZoneId' };
export const asZoneId = (s: string): ZoneId => s as ZoneId;

export interface ZoneEdgeBehavior {
  style: EdgeStyle;
  widthCells: number;      // range: 1..4
  opacity: number;         // range: 0..1
  // `| undefined` (exactOptionalPropertyTypes): these are set only for the
  // relevant style and passed as explicit `undefined` otherwise; absent === n/a.
  fadeStrength?: number | undefined;   // range: 0..1 (style='fade')
  notePitchCells?: number | undefined; // >= 1 (style='noted')
  hideInteriorBorder?: boolean | undefined; // suppress border where this zone is adjacent to another zone (style='bold-major'|'noted')
}

export interface BlankZone {
  id: ZoneId;
  x1: WorldCell;
  y1: WorldCell;
  x2: WorldCell;
  y2: WorldCell;
  mode: BlankMode;
  edge: ZoneEdgeBehavior;
  enabled: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface BlankZoneRect {
  x1: WorldCell;
  y1: WorldCell;
  x2: WorldCell;
  y2: WorldCell;
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
