import type { TextBlock } from '../types/text';
import type { HiResRegion } from '../types/hiresRegion';

// Firefox's OffscreenCanvas 2D context may not support actualBoundingBoxAscent/Descent.
// Fall back to font-size-based estimation when the metrics are unavailable.
function measureTextHeight(ctx: OffscreenCanvasRenderingContext2D, text: string, font: string): number {
  ctx.font = font;
  const metrics = ctx.measureText(text);
  const ascent = metrics.actualBoundingBoxAscent;
  const descent = metrics.actualBoundingBoxDescent;
  if (typeof ascent === 'number' && typeof descent === 'number' && isFinite(ascent) && isFinite(descent)) {
    return ascent + descent;
  }
  // Fallback: parse font-size from the CSS font string (e.g. "bold 24px monospace")
  const sizeMatch = font.match(/(\d+(?:\.\d+)?)px/);
  return sizeMatch ? parseFloat(sizeMatch[1]) * 1.2 : 16;
}

// Shared scratch canvas reused across calls to avoid per-block allocation overhead.
let scratchCanvas: OffscreenCanvas | null = null;
function getScratchCtx(w: number, h: number): OffscreenCanvasRenderingContext2D {
  if (!scratchCanvas) scratchCanvas = new OffscreenCanvas(w, h);
  scratchCanvas.width = w;
  scratchCanvas.height = h;
  return scratchCanvas.getContext('2d')!;
}

/// Rasterize text blocks with `cells` or `both` render mode into cell coordinates.
export function rasterizeTextBlocks(blocks: TextBlock[]): { cx: number; cy: number }[] {
  const cells: { cx: number; cy: number }[] = [];
  for (const block of blocks) {
    if (!block.enabled || block.renderMode === 'sdf') continue;
    const cellsWide = Math.max(1, block.cellsWide);
    const ctx = getScratchCtx(cellsWide, 1);
    const textH = measureTextHeight(ctx, block.text, block.font);
    const textW = Math.max(1, ctx.measureText(block.text).width);
    const aspect = textH / textW;
    const cellsHigh = Math.max(1, Math.ceil(cellsWide * aspect));
    scratchCanvas!.width = cellsWide;
    scratchCanvas!.height = cellsHigh;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, cellsWide, cellsHigh);
    ctx.fillStyle = 'white';
    const fontSize = cellsHigh * 0.85;
    ctx.font = block.font.replace(/\d+px/, `${fontSize}px`);
    ctx.textBaseline = 'top';
    ctx.fillText(block.text, 0, cellsHigh * 0.05);
    const pixels = ctx.getImageData(0, 0, cellsWide, cellsHigh);
    for (let y = 0; y < cellsHigh; y++) {
      for (let x = 0; x < cellsWide; x++) {
        const alpha = pixels.data[(y * cellsWide + x) * 4];
        if (alpha > 128) {
          cells.push({ cx: block.cellX + x, cy: block.cellY + y });
        }
      }
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
    const bx2 = block.cellX + block.cellsWide - 1;
    const cellsWide = Math.max(1, block.cellsWide);
    const ctx = getScratchCtx(cellsWide, 1);
    const textH = measureTextHeight(ctx, block.text, block.font);
    const textW = Math.max(1, ctx.measureText(block.text).width);
    const aspect = textH / textW;
    const cellsHigh = Math.max(1, Math.ceil(cellsWide * aspect));
    const by2 = block.cellY + cellsHigh - 1;
    if (bx2 < region.x1 || block.cellX > region.x2 || by2 < region.y1 || block.cellY > region.y2) continue;

    const fineW = cellsWide * mult;
    const fineH = cellsHigh * mult;
    scratchCanvas!.width = fineW;
    scratchCanvas!.height = fineH;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, fineW, fineH);
    ctx.fillStyle = 'white';
    const fontSize = fineH * 0.85;
    ctx.font = block.font.replace(/\d+px/, `${fontSize}px`);
    ctx.textBaseline = 'top';
    ctx.fillText(block.text, 0, fineH * 0.05);
    const pixels = ctx.getImageData(0, 0, fineW, fineH);
    const regionFineCols = (region.x2 - region.x1 + 1) * mult;
    const regionFineRows = (region.y2 - region.y1 + 1) * mult;
    for (let y = 0; y < fineH; y++) {
      for (let x = 0; x < fineW; x++) {
        const alpha = pixels.data[(y * fineW + x) * 4];
        if (alpha > 128) {
          const worldFineX = (block.cellX - region.x1) * mult + x;
          const worldFineY = (block.cellY - region.y1) * mult + y;
          if (worldFineX >= 0 && worldFineX < regionFineCols && worldFineY >= 0 && worldFineY < regionFineRows) {
            cells.push({ cx: worldFineX, cy: worldFineY });
          }
        }
      }
    }
  }
  return cells;
}
