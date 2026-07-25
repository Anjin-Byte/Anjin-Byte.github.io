// See `app/src/utils/gridCoords.ts` for the four coordinate spaces
// (CSS px → canvas px → world px → world cell) referenced throughout
// this composable.

import { type Ref } from 'vue';
import {
  type CoordSnapshot,
  type CellCoord,
  screenToCell,
  cellToScreen as cellToScreenUtil,
  cellSpanToCssPx as cellSpanUtil,
} from '../utils/gridCoords';
import { effectiveDpr } from '../utils/devicePixelRatio';
import { cssPx, worldCell, type CssPx, type DevicePx, type WorldCell } from '../utils/units';
import type { GridInfo } from '../workers/rendererProtocol';
import type { BlankZoneRect } from '../types/blankZones';

const MAJOR_EVERY = 5;

export interface CoordinateMapper {
  makeSnapshot(): CoordSnapshot | null;
  pointerToCell(event: PointerEvent): CellCoord | null;
  cellToScreen(cx: WorldCell, cy: WorldCell, snap: CoordSnapshot): { cssX: CssPx; cssY: CssPx };
  cellSpanToCssPx(count: WorldCell, snap: CoordSnapshot): CssPx;
  normalizeRect(a: CellCoord, b: CellCoord): BlankZoneRect;
  snapRectToMajor(rect: BlankZoneRect, snap: CoordSnapshot): BlankZoneRect;
  isInteractiveTarget(target: EventTarget | null): boolean;
  wrapXToWorld(x: WorldCell, snap: CoordSnapshot): WorldCell;
}

const INTERACTIVE_TAGS = new Set(['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'LABEL']);
const INTERACTIVE_SELECTORS = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';

export function useCoordinateMapper(
  gridInfo: Ref<GridInfo | null>,
  worldOffset: Ref<{ x: DevicePx; y: DevicePx }>,
): CoordinateMapper {
  function makeSnapshot(): CoordSnapshot | null {
    const info = gridInfo.value;
    if (!info || info.gridPitch === 0) return null;
    return {
      gridPitch: info.gridPitch,
      offsetX: worldOffset.value.x,
      offsetY: worldOffset.value.y,
      dpr: effectiveDpr(),
      worldCols: info.worldCols,
      worldRows: info.worldRows,
    };
  }

  function wrapXToWorld(x: WorldCell, snap: CoordSnapshot): WorldCell {
    return worldCell(((x % snap.worldCols) + snap.worldCols) % snap.worldCols);
  }

  function pointerToCell(event: PointerEvent): CellCoord | null {
    const snap = makeSnapshot();
    if (!snap) return null;
    const cell = screenToCell(cssPx(event.clientX), cssPx(event.clientY), snap);
    return {
      cx: wrapXToWorld(cell.cx, snap),
      cy: cell.cy,
    };
  }

  function normalizeRect(a: CellCoord, b: CellCoord): BlankZoneRect {
    return {
      x1: worldCell(Math.min(a.cx, b.cx)),
      y1: worldCell(Math.min(a.cy, b.cy)),
      x2: worldCell(Math.max(a.cx, b.cx)),
      y2: worldCell(Math.max(a.cy, b.cy)),
    };
  }

  function snapRectToMajor(rect: BlankZoneRect, snap: CoordSnapshot): BlankZoneRect {
    const toStart = (v: WorldCell): number => Math.floor(v / MAJOR_EVERY) * MAJOR_EVERY;
    const toEnd = (v: WorldCell): number => toStart(v) + (MAJOR_EVERY - 1);
    const maxCol = snap.worldCols - 1;
    return {
      x1: worldCell(Math.max(0, Math.min(maxCol, toStart(rect.x1)))),
      y1: worldCell(toStart(rect.y1)),
      x2: worldCell(Math.max(0, Math.min(maxCol, toEnd(rect.x2)))),
      y2: worldCell(toEnd(rect.y2)),
    };
  }

  function isInteractiveTarget(target: EventTarget | null): boolean {
    if (!(target instanceof HTMLElement)) return false;
    if (target.closest(INTERACTIVE_SELECTORS)) return true;
    let el: HTMLElement | null = target;
    while (el) {
      if (INTERACTIVE_TAGS.has(el.tagName)) return true;
      if (el.getAttribute('role') === 'button') return true;
      el = el.parentElement;
    }
    return false;
  }

  return {
    makeSnapshot,
    pointerToCell,
    cellToScreen: cellToScreenUtil,
    cellSpanToCssPx: cellSpanUtil,
    normalizeRect,
    snapRectToMajor,
    isInteractiveTarget,
    wrapXToWorld,
  };
}
