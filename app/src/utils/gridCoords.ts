// Coordinate mapping: screen pixel → simulation grid cell.
//
// Reverses the fragment shader's cell-index math (render.wgsl lines 433-435):
//   cx = floor(px / grid_pitch_px)
//   cy = floor((py + scroll_y) / grid_pitch_px)
//
// Uses the same float grid_pitch as the shader's PaperParams.grid_pitch_px,
// NOT the rounded integer cell_px used for grid dimension calculations.
// This guarantees the click lands on the same cell the shader drew.

const MAJOR_EVERY = 5;

/**
 * Snapshot of every value needed to map a screen click to a grid cell.
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
  /** Visible cell columns (ceil(canvasW / round(gridPitch))). */
  screenCols: number;
  /** Visible cell rows (ceil(canvasH / round(gridPitch))). */
  screenRows: number;
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
 * Wrap a cell coordinate into the simulation's visible grid.
 *
 * The shader wraps with `cx % screen_cols` / `cy % screen_rows`.
 * Clicks on the same visual cell at different scroll positions must
 * resolve to the same buffer location.
 */
export function wrapCell(coord: CellCoord, snap: CoordSnapshot): CellCoord {
  // JS % can return negative for negative operands; this shouldn't happen
  // for click coordinates, but guard defensively.
  const cx = ((coord.cx % snap.screenCols) + snap.screenCols) % snap.screenCols;
  const cy = ((coord.cy % snap.screenRows) + snap.screenRows) % snap.screenRows;
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
 * the caller has already wrapped cx/cy into [0, screenCols/screenRows).
 * Those always fit inside the power-of-2 padded grid.
 */
export interface BitAddress {
  wordIndex: number;
  bitOffset: number;
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
