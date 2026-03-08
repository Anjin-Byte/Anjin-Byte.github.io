import { type Ref } from 'vue';
import {
  type CoordSnapshot,
  type CellCoord,
  screenToCell,
  cellToScreen as cellToScreenUtil,
  cellSpanToCssPx as cellSpanUtil,
} from '../utils/gridCoords';
import type { GridInfo } from '../workers/rendererProtocol';
import type { BlankZoneRect } from '../types/blankZones';

const MAJOR_EVERY = 5;

export interface CoordinateMapper {
  makeSnapshot(): CoordSnapshot | null;
  pointerToCell(event: PointerEvent): CellCoord | null;
  cellToScreen(cx: number, cy: number, snap: CoordSnapshot): { cssX: number; cssY: number };
  cellSpanToCssPx(count: number, snap: CoordSnapshot): number;
  normalizeRect(a: CellCoord, b: CellCoord): BlankZoneRect;
  snapRectToMajor(rect: BlankZoneRect, snap: CoordSnapshot): BlankZoneRect;
  isInteractiveTarget(target: EventTarget | null): boolean;
  wrapXToViewport(x: number, snap: CoordSnapshot): number;
}

const INTERACTIVE_TAGS = new Set(['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'LABEL']);
const INTERACTIVE_SELECTORS = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';

export function useCoordinateMapper(
  gridInfo: Ref<GridInfo | null>,
  scrollCanvasPx: Ref<number>,
): CoordinateMapper {
  function makeSnapshot(): CoordSnapshot | null {
    const info = gridInfo.value;
    if (!info || info.gridPitch === 0) return null;
    return {
      gridPitch: info.gridPitch,
      scrollCanvasPx: scrollCanvasPx.value,
      dpr: devicePixelRatio,
      screenCols: info.screenCols,
      screenRows: info.screenRows,
    };
  }

  function wrapXToViewport(x: number, snap: CoordSnapshot): number {
    return ((x % snap.screenCols) + snap.screenCols) % snap.screenCols;
  }

  function pointerToCell(event: PointerEvent): CellCoord | null {
    const snap = makeSnapshot();
    if (!snap) return null;
    const cell = screenToCell(event.clientX, event.clientY, snap);
    return {
      cx: wrapXToViewport(cell.cx, snap),
      cy: cell.cy,
    };
  }

  function normalizeRect(a: CellCoord, b: CellCoord): BlankZoneRect {
    return {
      x1: Math.min(a.cx, b.cx),
      y1: Math.min(a.cy, b.cy),
      x2: Math.max(a.cx, b.cx),
      y2: Math.max(a.cy, b.cy),
    };
  }

  function snapRectToMajor(rect: BlankZoneRect, snap: CoordSnapshot): BlankZoneRect {
    const toStart = (v: number): number => Math.floor(v / MAJOR_EVERY) * MAJOR_EVERY;
    const toEnd = (v: number): number => toStart(v) + (MAJOR_EVERY - 1);
    return {
      x1: Math.max(0, Math.min(snap.screenCols - 1, toStart(rect.x1))),
      y1: toStart(rect.y1),
      x2: Math.max(0, Math.min(snap.screenCols - 1, toEnd(rect.x2))),
      y2: toEnd(rect.y2),
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
    wrapXToViewport,
  };
}
