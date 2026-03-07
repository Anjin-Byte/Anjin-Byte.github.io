import type { TextBlock, TextRenderMode } from '../types/text';
import { DEFAULT_FONT, DEFAULT_TEXT_COLOR, MAX_TEXT_BLOCKS } from '../types/text';

const VALID_RENDER_MODES = new Set<TextRenderMode>(['sdf', 'cells', 'both']);
const HEX_COLOR_RE = /^#[0-9a-fA-F]{6}$/;

function asFinite(value: unknown): number | null {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null;
  return value;
}

function asInteger(value: unknown): number | null {
  const n = asFinite(value);
  return n === null ? null : Math.trunc(n);
}

function fallbackId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `text-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeTimestamp(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

export function normalizeTextBlock(block: unknown, now = Date.now()): TextBlock | null {
  if (!block || typeof block !== 'object') return null;

  const source = block as Partial<TextBlock>;
  if (typeof source.text !== 'string' || source.text.length === 0) return null;

  const cellX = asInteger(source.cellX);
  const cellY = asInteger(source.cellY);
  if (cellX === null || cellY === null) return null;

  const cellsWide = Math.max(1, asInteger(source.cellsWide) ?? 100);
  const renderMode: TextRenderMode =
    typeof source.renderMode === 'string' && VALID_RENDER_MODES.has(source.renderMode as TextRenderMode)
      ? (source.renderMode as TextRenderMode)
      : 'cells';

  return {
    id: typeof source.id === 'string' && source.id.length > 0 ? source.id : fallbackId(),
    text: source.text,
    font: typeof source.font === 'string' && source.font.length > 0 ? source.font : DEFAULT_FONT,
    cellX,
    cellY,
    cellsWide,
    renderMode,
    color: typeof source.color === 'string' && HEX_COLOR_RE.test(source.color)
      ? source.color
      : DEFAULT_TEXT_COLOR,
    enabled: typeof source.enabled === 'boolean' ? source.enabled : true,
    createdAt: normalizeTimestamp(source.createdAt, now),
    updatedAt: normalizeTimestamp(source.updatedAt, now),
  };
}

export function normalizeTextBlocks(blocks: unknown, now = Date.now()): TextBlock[] {
  if (!Array.isArray(blocks)) return [];

  const normalized: TextBlock[] = [];
  for (const block of blocks) {
    if (normalized.length >= MAX_TEXT_BLOCKS) break;
    const next = normalizeTextBlock(block, now);
    if (next) normalized.push(next);
  }
  return normalized;
}
