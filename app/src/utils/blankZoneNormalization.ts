import type { BlankMode, BlankZone, EdgeStyle, ZoneEdgeBehavior } from '../types/blankZones';
import { MAX_BLANK_ZONES } from '../types/blankZones';

const VALID_MODES = new Set<BlankMode>(['minor', 'major', 'both']);
const VALID_EDGE_STYLES = new Set<EdgeStyle>(['none', 'bold-major', 'fade', 'noted']);

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function asInteger(value: unknown): number | null {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return null;
  }
  return Math.trunc(value);
}

function fallbackZoneId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeMode(value: unknown): BlankMode {
  return typeof value === 'string' && VALID_MODES.has(value as BlankMode)
    ? (value as BlankMode)
    : 'both';
}

function normalizeEdge(edge: unknown): ZoneEdgeBehavior {
  const source = (edge && typeof edge === 'object') ? edge as Partial<ZoneEdgeBehavior> : {};
  const style = (typeof source.style === 'string' && VALID_EDGE_STYLES.has(source.style as EdgeStyle))
    ? source.style as EdgeStyle
    : 'none';

  const widthCells = clamp(asInteger(source.widthCells) ?? 1, 1, 4);
  const opacityRaw = typeof source.opacity === 'number' ? source.opacity : 1;
  const opacity = clamp(opacityRaw, 0, 1);

  const normalized: ZoneEdgeBehavior = { style, widthCells, opacity };

  if (style === 'fade') {
    const fadeRaw = typeof source.fadeStrength === 'number' ? source.fadeStrength : 0.6;
    normalized.fadeStrength = clamp(fadeRaw, 0, 1);
  }

  if (style === 'noted') {
    normalized.notePitchCells = Math.max(1, asInteger(source.notePitchCells) ?? 2);
  }

  if (style === 'bold-major' || style === 'noted') {
    normalized.hideInteriorBorder = typeof source.hideInteriorBorder === 'boolean'
      ? source.hideInteriorBorder
      : false;
  }

  return normalized;
}

function normalizeEnabled(value: unknown): boolean {
  return typeof value === 'boolean' ? value : true;
}

function normalizeTimestamp(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

export function normalizeZone(zone: unknown, now = Date.now()): BlankZone | null {
  if (!zone || typeof zone !== 'object') {
    return null;
  }

  const source = zone as Partial<BlankZone>;
  const x1 = asInteger(source.x1);
  const y1 = asInteger(source.y1);
  const x2 = asInteger(source.x2);
  const y2 = asInteger(source.y2);
  if (x1 === null || y1 === null || x2 === null || y2 === null) {
    return null;
  }

  const normX1 = Math.min(x1, x2);
  const normX2 = Math.max(x1, x2);
  const normY1 = Math.min(y1, y2);
  const normY2 = Math.max(y1, y2);

  return {
    id: typeof source.id === 'string' && source.id.length > 0 ? source.id : fallbackZoneId(),
    x1: normX1,
    y1: normY1,
    x2: normX2,
    y2: normY2,
    mode: normalizeMode(source.mode),
    edge: normalizeEdge(source.edge),
    enabled: normalizeEnabled(source.enabled),
    createdAt: normalizeTimestamp(source.createdAt, now),
    updatedAt: normalizeTimestamp(source.updatedAt, now),
  };
}

export function normalizeZones(zones: unknown, now = Date.now()): BlankZone[] {
  if (!Array.isArray(zones)) {
    return [];
  }

  const normalized: BlankZone[] = [];
  for (const zone of zones) {
    if (normalized.length >= MAX_BLANK_ZONES) {
      break;
    }
    const next = normalizeZone(zone, now);
    if (next) {
      normalized.push(next);
    }
  }
  return normalized;
}
