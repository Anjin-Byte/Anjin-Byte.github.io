// Coordinate mapping: screen pixel → world grid cell.
//
// Coordinate spaces (mirrors the doc paragraph at the top of
// crates/game_of_life_gpu/src/grid.rs):
//
//   1. CSS pixel    — MouseEvent.clientX/Y.
//   2. Canvas pixel — CSS × devicePixelRatio.
//   3. World pixel  — canvas pixel offset by current scroll.
//   4. World cell   — world pixel ÷ gridPitch, mod world_cols/world_rows.
//
// Reverses the fragment shader's cell-index math (render.wgsl):
//   cx = floor(px / grid_pitch_px)
//   cy = floor((py + scroll_y) / grid_pitch_px)
//
// Uses the same float grid_pitch as the shader's PaperParams.grid_pitch_px,
// NOT the rounded integer cell_px used for grid dimension calculations.
// This guarantees the click lands on the same cell the shader drew.

const MAJOR_EVERY = 5;

/**
 * Snapshot of every value needed to map a screen click to a world cell.
 * Captured atomically at click time to prevent races between scroll
 * updates, resize events, and DPR changes.
 */
export interface CoordSnapshot {
  /** Float grid pitch in canvas pixels — must match PaperParams.grid_pitch_px. */
  gridPitch: number;
  /** Scroll offset in canvas pixels (CSS scrollTop × DPR). */
  scrollCanvasPx: number;
  /** Device pixel ratio at the moment of the click. */
  dpr: number;
  /** World cell columns; toroidal-wrap modulus for `cx`. Currently 1024. */
  worldCols: number;
  /** World cell rows; toroidal-wrap modulus for `cy`. Currently 1024. */
  worldRows: number;
}

export interface CellCoord {
  /** Column index in the simulation grid. */
  cx: number;
  /** Row index in the simulation grid. */
  cy: number;
}

/**
 * Compute the float grid pitch from canvas width, matching both
 * AppBackground.vue and gpu.rs `aligned_pitch()`.
 *
 * canvasWidth = nTotal × MAJOR_EVERY × result, exactly.
 */
export function alignedPitch(canvasWidth: number, targetCellCssPx: number, dpr: number): number {
  const targetPx = targetCellCssPx * dpr;
  const nTotal = Math.max(1, Math.round(canvasWidth / (targetPx * MAJOR_EVERY)));
  return canvasWidth / (nTotal * MAJOR_EVERY);
}

/**
 * Map a MouseEvent to a simulation grid cell.
 *
 * The caller must supply a CoordSnapshot captured at click time so that
 * scroll offset, DPR, and grid pitch are self-consistent.
 */
export function screenToCell(
  clientX: number,
  clientY: number,
  snap: CoordSnapshot,
): CellCoord {
  // CSS pixels → canvas pixels
  const canvasPx = clientX * snap.dpr;
  const canvasPy = clientY * snap.dpr;

  // Apply scroll offset (matches render.wgsl: world_y = py + scroll_y)
  const worldY = canvasPy + snap.scrollCanvasPx;

  // Reverse the shader's floor division (render.wgsl lines 434-435)
  const cx = Math.floor(canvasPx / snap.gridPitch);
  const cy = Math.floor(worldY / snap.gridPitch);

  return { cx, cy };
}

/**
 * Wrap a cell coordinate into the world's toroidal cell space.
 *
 * The shader wraps with `cx % world_cols` / `cy % world_rows`.
 * Clicks on the same visual cell at different scroll positions must
 * resolve to the same buffer location.
 */
export function wrapCell(coord: CellCoord, snap: CoordSnapshot): CellCoord {
  // JS % can return negative for negative operands; this shouldn't happen
  // for click coordinates, but guard defensively.
  const cx = ((coord.cx % snap.worldCols) + snap.worldCols) % snap.worldCols;
  const cy = ((coord.cy % snap.worldRows) + snap.worldRows) % snap.worldRows;
  return { cx, cy };
}

/**
 * Compute the bitpacked buffer location for a wrapped cell coordinate.
 *
 * Layout (matches compute.wgsl and render.wgsl):
 *   word_idx = cy * words_per_row + floor(cx / 32)
 *   bit_offset = cx & 31
 *
 * The safe_idx bitmask from the shader is NOT needed here because
 * the caller has already wrapped cx/cy into [0, worldCols)/[0, worldRows).
 * Those always fit inside the power-of-2 padded grid.
 */
export interface BitAddress {
  wordIndex: number;
  bitOffset: number;
}

/**
 * Map a simulation grid cell back to CSS screen coordinates.
 * Exact inverse of screenToCell().
 */
export function cellToScreen(
  cx: number,
  cy: number,
  snap: CoordSnapshot,
): { cssX: number; cssY: number } {
  return {
    cssX: cx * snap.gridPitch / snap.dpr,
    cssY: (cy * snap.gridPitch - snap.scrollCanvasPx) / snap.dpr,
  };
}

/** Convert a cell-count span to CSS pixels. */
export function cellSpanToCssPx(cellCount: number, snap: CoordSnapshot): number {
  return cellCount * snap.gridPitch / snap.dpr;
}

export function cellToBitAddress(
  cx: number,
  cy: number,
  wordsPerRow: number,
): BitAddress {
  return {
    wordIndex: cy * wordsPerRow + (cx >>> 5),  // cx / 32
    bitOffset: cx & 31,
  };
}
