export type DecalKind = 'solid' | 'checkerboard' | 'stripes' | 'dots' | 'bitmap';
export type DecalBlendMode = 'alpha' | 'multiply' | 'screen';

export interface DecalPattern {
  kind: DecalKind;
  // solid
  coverage?: number;           // [0..1]
  solidR?: number;             // linear sRGB [0..1]
  solidG?: number;
  solidB?: number;
  // checkerboard
  cellSize?: number;           // >= 1
  // stripes
  pitchCells?: number;         // >= 2
  // dots
  dotRadius?: number;          // >= 0.1
  dotSpacing?: number;         // >= 2
  // bitmap (Phase 2)
  atlasLayer?: number;
  uvOffset?: [number, number];
  uvScale?: number;
}

export interface Decal {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  pattern: DecalPattern;
  // RGBA linear sRGB [0..1]. Default: DECAL_DEFAULT_TINT.
  tint: [number, number, number, number];
  blendMode: DecalBlendMode;
  suppressCells: boolean;
  enabled: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface DecalStoragePayload {
  version: number;
  decals: Decal[];
}

export const MAX_DECALS = 32;
export const DECAL_STORAGE_VERSION = 1;
export const DECAL_STORAGE_KEY = `gol.decals.v${DECAL_STORAGE_VERSION}`;

// Default tint: primary accent #7c4dff ≈ (0.49, 0.30, 1.0) at 60% opacity.
export const DECAL_DEFAULT_TINT: [number, number, number, number] = [0.49, 0.30, 1.0, 0.6];
