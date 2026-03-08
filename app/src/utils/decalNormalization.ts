import type { Decal, DecalBlendMode, DecalKind, DecalPattern } from '../types/decals';
import { DECAL_DEFAULT_TINT, MAX_DECALS } from '../types/decals';
import { normalizeArray } from './normalizeArray';

const VALID_KINDS = new Set<DecalKind>(['solid', 'checkerboard', 'stripes', 'dots', 'bitmap']);
const VALID_BLEND_MODES = new Set<DecalBlendMode>(['alpha', 'multiply', 'screen']);

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function asFinite(value: unknown): number | null {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null;
  return value;
}

function asInteger(value: unknown): number | null {
  const n = asFinite(value);
  return n === null ? null : Math.trunc(n);
}

function fallbackDecalId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `decal-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeKind(value: unknown): DecalKind {
  return typeof value === 'string' && VALID_KINDS.has(value as DecalKind)
    ? (value as DecalKind)
    : 'solid';
}

function normalizeBlendMode(value: unknown): DecalBlendMode {
  return typeof value === 'string' && VALID_BLEND_MODES.has(value as DecalBlendMode)
    ? (value as DecalBlendMode)
    : 'alpha';
}

function normalizePattern(source: unknown): DecalPattern {
  const p = (source && typeof source === 'object') ? source as Partial<DecalPattern> : {};
  const kind = normalizeKind(p.kind);

  const base: DecalPattern = { kind };

  if (kind === 'solid') {
    base.coverage = clamp(asFinite(p.coverage) ?? 1.0, 0, 1);
    base.solidR = clamp(asFinite(p.solidR) ?? DECAL_DEFAULT_TINT[0], 0, 1);
    base.solidG = clamp(asFinite(p.solidG) ?? DECAL_DEFAULT_TINT[1], 0, 1);
    base.solidB = clamp(asFinite(p.solidB) ?? DECAL_DEFAULT_TINT[2], 0, 1);
  } else if (kind === 'checkerboard') {
    base.cellSize = Math.max(1, asFinite(p.cellSize) ?? 2);
  } else if (kind === 'stripes') {
    base.pitchCells = Math.max(2, asFinite(p.pitchCells) ?? 4);
  } else if (kind === 'dots') {
    base.dotRadius = Math.max(0.1, asFinite(p.dotRadius) ?? 0.4);
    base.dotSpacing = Math.max(2, asFinite(p.dotSpacing) ?? 3);
  }

  return base;
}

function normalizeTint(value: unknown): [number, number, number, number] {
  if (!Array.isArray(value) || value.length < 4) return [...DECAL_DEFAULT_TINT];
  return [
    clamp(asFinite(value[0]) ?? DECAL_DEFAULT_TINT[0], 0, 1),
    clamp(asFinite(value[1]) ?? DECAL_DEFAULT_TINT[1], 0, 1),
    clamp(asFinite(value[2]) ?? DECAL_DEFAULT_TINT[2], 0, 1),
    clamp(asFinite(value[3]) ?? DECAL_DEFAULT_TINT[3], 0, 1),
  ];
}

function normalizeEnabled(value: unknown): boolean {
  return typeof value === 'boolean' ? value : true;
}

function normalizeTimestamp(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

export function normalizeDecal(decal: unknown, now = Date.now()): Decal | null {
  if (!decal || typeof decal !== 'object') return null;

  const source = decal as Partial<Decal>;
  const x1 = asInteger(source.x1);
  const y1 = asInteger(source.y1);
  const x2 = asInteger(source.x2);
  const y2 = asInteger(source.y2);
  if (x1 === null || y1 === null || x2 === null || y2 === null) return null;

  return {
    id: typeof source.id === 'string' && source.id.length > 0 ? source.id : fallbackDecalId(),
    x1: Math.min(x1, x2),
    y1: Math.min(y1, y2),
    x2: Math.max(x1, x2),
    y2: Math.max(y1, y2),
    pattern: normalizePattern(source.pattern),
    tint: normalizeTint(source.tint),
    blendMode: normalizeBlendMode(source.blendMode),
    suppressCells: typeof source.suppressCells === 'boolean' ? source.suppressCells : false,
    enabled: normalizeEnabled(source.enabled),
    createdAt: normalizeTimestamp(source.createdAt, now),
    updatedAt: normalizeTimestamp(source.updatedAt, now),
  };
}

export function normalizeDecals(decals: unknown, now = Date.now()): Decal[] {
  return normalizeArray(decals, normalizeDecal, MAX_DECALS, now);
}
