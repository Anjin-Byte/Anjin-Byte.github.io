import type { HiResRegion } from '../types/hiresRegion';
import { HIRES_MULTIPLIER } from '../types/hiresRegion';

function asInteger(value: unknown): number | null {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null;
  return Math.trunc(value);
}

function fallbackId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `hires-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeTimestamp(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

export function normalizeRegion(region: unknown, now = Date.now()): HiResRegion | null {
  if (!region || typeof region !== 'object') return null;

  const source = region as Partial<HiResRegion>;
  const x1 = asInteger(source.x1);
  const y1 = asInteger(source.y1);
  const x2 = asInteger(source.x2);
  const y2 = asInteger(source.y2);
  if (x1 === null || y1 === null || x2 === null || y2 === null) return null;

  return {
    id: typeof source.id === 'string' && source.id.length > 0 ? source.id : fallbackId(),
    x1: Math.min(x1, x2),
    y1: Math.min(y1, y2),
    x2: Math.max(x1, x2),
    y2: Math.max(y1, y2),
    multiplier: HIRES_MULTIPLIER,
    enabled: typeof source.enabled === 'boolean' ? source.enabled : true,
    showGrid: typeof source.showGrid === 'boolean' ? source.showGrid : true,
    showBaseGrid: typeof source.showBaseGrid === 'boolean' ? source.showBaseGrid : true,
    showBorder: typeof source.showBorder === 'boolean' ? source.showBorder : true,
    createdAt: normalizeTimestamp(source.createdAt, now),
    updatedAt: normalizeTimestamp(source.updatedAt, now),
  };
}
