import type { TextBlock } from '../types/text';
import type { HiResRegion } from '../types/hiresRegion';

// Measure the full font's vertical extent (ascent + descent) rather than just
// the ink bounds of a specific string. This ensures descenders (g, y, p, q, j)
// and tall ascenders are never clipped regardless of which characters appear.
// Uses fontBoundingBox metrics when available, falls back to measuring a
// reference string that exercises both ascenders and descenders.
const FONT_HEIGHT_REF = 'HgyjpqÑ|';

function measureFontHeight(ctx: OffscreenCanvasRenderingContext2D, font: string): number {
  ctx.font = font;
  const metrics = ctx.measureText(FONT_HEIGHT_REF);
  // fontBoundingBox covers the entire font's design metrics (Chrome 87+)
  const fbAsc = (metrics as any).fontBoundingBoxAscent;
  const fbDes = (metrics as any).fontBoundingBoxDescent;
  if (typeof fbAsc === 'number' && typeof fbDes === 'number' && isFinite(fbAsc) && isFinite(fbDes)) {
    return fbAsc + fbDes;
  }
  // actualBoundingBox of the reference string covers most glyphs (Firefox)
  const ascent = metrics.actualBoundingBoxAscent;
  const descent = metrics.actualBoundingBoxDescent;
  if (typeof ascent === 'number' && typeof descent === 'number' && isFinite(ascent) && isFinite(descent)) {
    return ascent + descent;
  }
  // Final fallback: standard 1.2× line-height heuristic
  const sizeMatch = font.match(/(\d+(?:\.\d+)?)px/);
  return sizeMatch ? parseFloat(sizeMatch[1]) * 1.2 : 16;
}

// Compute the baseline Y offset (ascent) for drawing with textBaseline='alphabetic'.
// This is the distance from the top of the canvas to the alphabetic baseline, so
// that ascenders start near the top and descenders extend into the space below.
function measureBaseline(ctx: OffscreenCanvasRenderingContext2D, font: string): number {
  ctx.font = font;
  const metrics = ctx.measureText(FONT_HEIGHT_REF);
  const fbAsc = (metrics as any).fontBoundingBoxAscent;
  if (typeof fbAsc === 'number' && isFinite(fbAsc)) return fbAsc;
  const ascent = metrics.actualBoundingBoxAscent;
  if (typeof ascent === 'number' && isFinite(ascent)) return ascent;
  const sizeMatch = font.match(/(\d+(?:\.\d+)?)px/);
  return sizeMatch ? parseFloat(sizeMatch[1]) * 0.85 : 16;
}

// Shared scratch canvas reused across calls to avoid per-block allocation overhead.
let scratchCanvas: OffscreenCanvas | null = null;
function ensureScratch(w: number, h: number): void {
  if (!scratchCanvas) scratchCanvas = new OffscreenCanvas(w, h);
}

// Parse the reference font size from a CSS font string (e.g. "bold 24px monospace" → 24).
function parseFontSize(font: string): number {
  const m = font.match(/(\d+(?:\.\d+)?)px/);
  return m ? parseFloat(m[1]) : 24;
}

// Measure text at the reference font and return the font size that fills targetWidth,
// plus the natural cellsHigh at that font size (derived from full font metrics, not
// just the ink bounds of the specific text — so descenders are never clipped).
function fitFontToWidth(text: string, font: string, targetWidth: number): { fontSize: number; cellsHigh: number } {
  ensureScratch(targetWidth, 1);
  scratchCanvas!.width = targetWidth;
  scratchCanvas!.height = 1;
  const ctx = scratchCanvas!.getContext('2d')!;
  const refSize = parseFontSize(font);
  ctx.font = font;
  const refW = Math.max(1, ctx.measureText(text).width);
  const refFontH = measureFontHeight(ctx, font);
  // Scale font so rendered width = targetWidth
  const scale = targetWidth / refW;
  const fontSize = refSize * scale;
  // Height from full font metrics (covers all ascenders/descenders) + 10% padding
  const cellsHigh = Math.max(1, Math.ceil(refFontH * scale * 1.1));
  return { fontSize, cellsHigh };
}

// Compute cellsHigh from font aspect ratio when not explicitly provided.
function computeCellsHigh(text: string, font: string, cellsWide: number): number {
  return fitFontToWidth(text, font, cellsWide).cellsHigh;
}

// ── Rasterization cache ─────────────────────────────────────────────────────
// Caches position-independent pixel masks keyed by text+font+dimensions.
// Values are relative offsets {dx, dy}[] from the block origin.

interface CachedMask {
  offsets: { dx: number; dy: number }[];
  cellsHigh: number;
}

const maskCache = new Map<string, CachedMask>();
const hiResMaskCache = new Map<string, CachedMask>();

function baseCacheKey(text: string, font: string, cellsWide: number, cellsHigh: number): string {
  return `${cellsWide}|${cellsHigh}|${font}|${text}`;
}

function hiresCacheKey(text: string, font: string, cellsWide: number, cellsHigh: number, mult: number): string {
  return `${cellsWide}|${cellsHigh}|${mult}|${font}|${text}`;
}

function rasterizeMask(text: string, font: string, cellsWide: number, cellsHigh: number): CachedMask {
  const { fontSize } = fitFontToWidth(text, font, cellsWide);
  scratchCanvas!.width = cellsWide;
  scratchCanvas!.height = cellsHigh;
  const ctx = scratchCanvas!.getContext('2d')!;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, cellsWide, cellsHigh);
  ctx.fillStyle = 'white';
  const scaledFont = font.replace(/\d+px/, `${fontSize}px`);
  ctx.font = scaledFont;
  // Use alphabetic baseline and position it using font ascent metrics
  // so descenders render into the space below the baseline.
  ctx.textBaseline = 'alphabetic';
  const baseline = measureBaseline(ctx, scaledFont);
  ctx.fillText(text, 0, baseline);
  const pixels = ctx.getImageData(0, 0, cellsWide, cellsHigh);
  const offsets: { dx: number; dy: number }[] = [];
  for (let y = 0; y < cellsHigh; y++) {
    for (let x = 0; x < cellsWide; x++) {
      if (pixels.data[(y * cellsWide + x) * 4] > 128) {
        offsets.push({ dx: x, dy: y });
      }
    }
  }
  return { offsets, cellsHigh };
}

function rasterizeHiResMask(text: string, font: string, cellsWide: number, cellsHigh: number, mult: number): CachedMask {
  const { fontSize } = fitFontToWidth(text, font, cellsWide * mult);
  const fineW = cellsWide * mult;
  const fineH = cellsHigh * mult;
  scratchCanvas!.width = fineW;
  scratchCanvas!.height = fineH;
  const ctx = scratchCanvas!.getContext('2d')!;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, fineW, fineH);
  ctx.fillStyle = 'white';
  const scaledFont = font.replace(/\d+px/, `${fontSize}px`);
  ctx.font = scaledFont;
  ctx.textBaseline = 'alphabetic';
  const baseline = measureBaseline(ctx, scaledFont);
  ctx.fillText(text, 0, baseline);
  const pixels = ctx.getImageData(0, 0, fineW, fineH);
  const offsets: { dx: number; dy: number }[] = [];
  for (let y = 0; y < fineH; y++) {
    for (let x = 0; x < fineW; x++) {
      if (pixels.data[(y * fineW + x) * 4] > 128) {
        offsets.push({ dx: x, dy: y });
      }
    }
  }
  return { offsets, cellsHigh };
}

function getCachedMask(text: string, font: string, cellsWide: number, cellsHigh: number): CachedMask {
  const key = baseCacheKey(text, font, cellsWide, cellsHigh);
  let cached = maskCache.get(key);
  if (!cached) {
    // Ensure scratch canvas exists before rasterizing
    if (!scratchCanvas) scratchCanvas = new OffscreenCanvas(cellsWide, cellsHigh);
    cached = rasterizeMask(text, font, cellsWide, cellsHigh);
    maskCache.set(key, cached);
  }
  return cached;
}

function getCachedHiResMask(text: string, font: string, cellsWide: number, cellsHigh: number, mult: number): CachedMask {
  const key = hiresCacheKey(text, font, cellsWide, cellsHigh, mult);
  let cached = hiResMaskCache.get(key);
  if (!cached) {
    if (!scratchCanvas) scratchCanvas = new OffscreenCanvas(cellsWide * mult, cellsHigh * mult);
    cached = rasterizeHiResMask(text, font, cellsWide, cellsHigh, mult);
    hiResMaskCache.set(key, cached);
  }
  return cached;
}

// Resolve the effective cellsHigh for a block: explicit value or auto-computed.
function effectiveCellsHigh(block: TextBlock, cellsWide: number): number {
  if (block.cellsHigh !== undefined && block.cellsHigh >= 1) return block.cellsHigh;
  return computeCellsHigh(block.text, block.font, cellsWide);
}

/// Rasterize text blocks with `cells` or `both` render mode into cell coordinates.
export function rasterizeTextBlocks(blocks: TextBlock[]): { cx: number; cy: number }[] {
  const cells: { cx: number; cy: number }[] = [];
  for (const block of blocks) {
    if (!block.enabled || block.renderMode === 'sdf') continue;
    const cellsWide = Math.max(1, block.cellsWide);
    const cellsHigh = effectiveCellsHigh(block, cellsWide);
    const mask = getCachedMask(block.text, block.font, cellsWide, cellsHigh);
    for (const { dx, dy } of mask.offsets) {
      cells.push({ cx: block.cellX + dx, cy: block.cellY + dy });
    }
  }
  return cells;
}

/// Rasterize text blocks at fine-cell resolution for a hi-res region.
/// Returns region-relative fine-cell coordinates.
export function rasterizeTextBlocksForRegion(
  blocks: TextBlock[],
  region: HiResRegion,
): { cx: number; cy: number }[] {
  const mult = region.multiplier;
  const cells: { cx: number; cy: number }[] = [];
  for (const block of blocks) {
    if (!block.enabled || block.renderMode === 'sdf') continue;
    const cellsWide = Math.max(1, block.cellsWide);
    const cellsHigh = effectiveCellsHigh(block, cellsWide);
    const bx2 = block.cellX + cellsWide - 1;
    const by2 = block.cellY + cellsHigh - 1;
    if (bx2 < region.x1 || block.cellX > region.x2 || by2 < region.y1 || block.cellY > region.y2) continue;

    const mask = getCachedHiResMask(block.text, block.font, cellsWide, cellsHigh, mult);
    const regionFineCols = (region.x2 - region.x1 + 1) * mult;
    const regionFineRows = (region.y2 - region.y1 + 1) * mult;
    for (const { dx, dy } of mask.offsets) {
      const worldFineX = (block.cellX - region.x1) * mult + dx;
      const worldFineY = (block.cellY - region.y1) * mult + dy;
      if (worldFineX >= 0 && worldFineX < regionFineCols && worldFineY >= 0 && worldFineY < regionFineRows) {
        cells.push({ cx: worldFineX, cy: worldFineY });
      }
    }
  }
  return cells;
}
