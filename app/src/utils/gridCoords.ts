// Coordinate mapping: screen pixel → world grid cell.
//
// Coordinate spaces (mirrors the doc paragraph at the top of
// crates/game_of_life_gpu/src/grid.rs):
//
//   1. CSS pixel    — MouseEvent.clientX/Y.
//   2. Canvas pixel — CSS × devicePixelRatio.
//   3. World pixel  — canvas pixel + the camera offset (offsetX, offsetY).
//   4. World cell   — world pixel ÷ gridPitch, mod world_cols/world_rows.
//
// Reverses the fragment shader's cell-index math (render.wgsl):
//   cx = floor((px + scroll_x) / grid_pitch_px)
//   cy = floor((py + scroll_y) / grid_pitch_px)
//
// `gridPitch` is the renderer's authoritative cell size (gpu.rs CELL_PX,
// reported back via GridInfo.gridPitch — see GRID_CELL_DEVICE_PX in
// useCanvasSurface.ts for the TS mirror and its runtime cross-check), so a
// click lands on the same cell the shader drew.

/**
 * Snapshot of every value needed to map a screen click to a world cell.
 * Captured atomically at click time to prevent races between scroll
 * updates, resize events, and DPR changes.
 */
import { cssPx, worldCell, type CssPx, type DevicePx, type Dpr, type WorldCell } from './units';

export interface CoordSnapshot {
  /** Float grid pitch in device pixels — must match PaperParams.grid_pitch_px. */
  gridPitch: DevicePx;
  /** Horizontal camera offset in device pixels (matches shader `scroll_x`). */
  offsetX: DevicePx;
  /** Vertical camera offset in device pixels (matches shader `scroll_y`). */
  offsetY: DevicePx;
  /** Device pixel ratio at the moment of the click. */
  dpr: Dpr;
  /** World cell columns; toroidal-wrap modulus for `cx`. Currently 1024. */
  worldCols: WorldCell;
  /** World cell rows; toroidal-wrap modulus for `cy`. Currently 1024. */
  worldRows: WorldCell;
}

export interface CellCoord {
  /** Column index in the simulation grid. */
  cx: WorldCell;
  /** Row index in the simulation grid. */
  cy: WorldCell;
}

/**
 * Map a MouseEvent to a simulation grid cell.
 *
 * The caller must supply a CoordSnapshot captured at click time so that
 * scroll offset, DPR, and grid pitch are self-consistent.
 */
export function screenToCell(
  clientX: CssPx,
  clientY: CssPx,
  snap: CoordSnapshot,
): CellCoord {
  // CSS pixels → device pixels
  const canvasPx = clientX * snap.dpr;
  const canvasPy = clientY * snap.dpr;

  // Apply camera offset (matches render.wgsl: world = frag + scroll)
  const worldX = canvasPx + snap.offsetX;
  const worldY = canvasPy + snap.offsetY;

  // Reverse the shader's floor division
  return {
    cx: worldCell(Math.floor(worldX / snap.gridPitch)),
    cy: worldCell(Math.floor(worldY / snap.gridPitch)),
  };
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
  return {
    cx: worldCell(((coord.cx % snap.worldCols) + snap.worldCols) % snap.worldCols),
    cy: worldCell(((coord.cy % snap.worldRows) + snap.worldRows) % snap.worldRows),
  };
}

/**
 * Map a simulation grid cell back to CSS screen coordinates.
 * Exact inverse of screenToCell().
 */
export function cellToScreen(
  cx: WorldCell,
  cy: WorldCell,
  snap: CoordSnapshot,
): { cssX: CssPx; cssY: CssPx } {
  return {
    cssX: cssPx((cx * snap.gridPitch - snap.offsetX) / snap.dpr),
    cssY: cssPx((cy * snap.gridPitch - snap.offsetY) / snap.dpr),
  };
}

/** Convert a cell-count span to CSS pixels. */
export function cellSpanToCssPx(cellCount: WorldCell, snap: CoordSnapshot): CssPx {
  return cssPx(cellCount * snap.gridPitch / snap.dpr);
}
