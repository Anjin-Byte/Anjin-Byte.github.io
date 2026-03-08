import { ref, type Ref } from 'vue';
import type { CoordinateMapper } from './useCoordinateMapper';
import type { CellCoord, CoordSnapshot } from '../utils/gridCoords';
import type { BlankZoneRect } from '../types/blankZones';

export interface DragToolHandlers {
  isEnabled(): boolean;
  priority: number;
  snapMajor?(): boolean;
  /** 'paint' expands bounding box continuously; 'rect' uses anchor+current corner. */
  dragMode?: 'rect' | 'paint';
  /** Called on pointer up. Return false to suppress clearing drag state (e.g., for text input). */
  onCommit(rect: BlankZoneRect, snap: CoordSnapshot | null): boolean | void;
  /** Called when the tool is disabled while a drag is active. */
  onCancel?(): void;
}

export interface DragTools {
  register(name: string, handlers: DragToolHandlers): void;
  activeTool: Ref<string | null>;
  previewRect: Ref<BlankZoneRect | null>;
  previewStyle: Ref<Record<string, string> | null>;
  cancelActiveDrag(toolName: string): void;
  anyToolEnabled(): boolean;
  attachListeners(): () => void;
}

export function useDragTools(coords: CoordinateMapper): DragTools {
  const tools = new Map<string, DragToolHandlers>();
  const activeTool = ref<string | null>(null);
  const previewRect = ref<BlankZoneRect | null>(null);
  const previewStyle = ref<Record<string, string> | null>(null);
  let dragAnchor: CellCoord | null = null;
  let paintBounds: BlankZoneRect | null = null;

  function register(name: string, handlers: DragToolHandlers): void {
    tools.set(name, handlers);
  }

  function anyToolEnabled(): boolean {
    for (const h of tools.values()) {
      if (h.isEnabled()) return true;
    }
    return false;
  }

  function updatePreviewStyle(): void {
    const rect = previewRect.value;
    const snap = coords.makeSnapshot();
    if (!rect || !snap) {
      previewStyle.value = null;
      return;
    }
    const pos = coords.cellToScreen(rect.x1, rect.y1, snap);
    const width = coords.cellSpanToCssPx(rect.x2 - rect.x1 + 1, snap);
    const height = coords.cellSpanToCssPx(rect.y2 - rect.y1 + 1, snap);
    previewStyle.value = {
      left: `${pos.cssX}px`,
      top: `${pos.cssY}px`,
      width: `${width}px`,
      height: `${height}px`,
    };
  }

  function resetDrag(): void {
    dragAnchor = null;
    activeTool.value = null;
    paintBounds = null;
    previewRect.value = null;
    previewStyle.value = null;
  }

  function cancelActiveDrag(toolName: string): void {
    if (activeTool.value === toolName) {
      resetDrag();
    }
  }

  function onPointerDown(event: PointerEvent): void {
    if (event.button !== 0 || coords.isInteractiveTarget(event.target)) return;

    // Find highest-priority enabled tool
    let best: [string, DragToolHandlers] | null = null;
    for (const entry of tools.entries()) {
      if (entry[1].isEnabled() && (!best || entry[1].priority > best[1].priority)) {
        best = entry;
      }
    }
    if (!best) return;

    const start = coords.pointerToCell(event);
    if (!start) return;

    activeTool.value = best[0];
    dragAnchor = start;
    const initRect = { x1: start.cx, y1: start.cy, x2: start.cx, y2: start.cy };
    if (best[1].dragMode === 'paint') {
      paintBounds = { ...initRect };
    }
    previewRect.value = initRect;
    updatePreviewStyle();
    if (event.target instanceof Element) {
      event.target.setPointerCapture(event.pointerId);
    }
    event.preventDefault();
  }

  function onPointerMove(event: PointerEvent): void {
    if (!activeTool.value || !dragAnchor) return;
    const handler = tools.get(activeTool.value);
    if (!handler) return;
    const next = coords.pointerToCell(event);
    const snap = coords.makeSnapshot();
    if (!next || !snap) return;

    if (handler.dragMode === 'paint' && paintBounds) {
      paintBounds.x1 = Math.min(paintBounds.x1, next.cx);
      paintBounds.y1 = Math.min(paintBounds.y1, next.cy);
      paintBounds.x2 = Math.max(paintBounds.x2, next.cx);
      paintBounds.y2 = Math.max(paintBounds.y2, next.cy);
      previewRect.value = { ...paintBounds };
    } else {
      const rawRect = coords.normalizeRect(dragAnchor, next);
      previewRect.value = handler.snapMajor?.() ? coords.snapRectToMajor(rawRect, snap) : rawRect;
    }
    updatePreviewStyle();
  }

  function onPointerUp(event: PointerEvent): void {
    if (!activeTool.value || !dragAnchor || event.button !== 0) return;
    if (event.target instanceof Element && event.target.hasPointerCapture(event.pointerId)) {
      event.target.releasePointerCapture(event.pointerId);
    }

    const handler = tools.get(activeTool.value);
    if (!handler) { resetDrag(); return; }

    const next = coords.pointerToCell(event);
    const snap = coords.makeSnapshot();

    let rect: BlankZoneRect;
    if (handler.dragMode === 'paint' && paintBounds) {
      if (next) {
        paintBounds.x1 = Math.min(paintBounds.x1, next.cx);
        paintBounds.y1 = Math.min(paintBounds.y1, next.cy);
        paintBounds.x2 = Math.max(paintBounds.x2, next.cx);
        paintBounds.y2 = Math.max(paintBounds.y2, next.cy);
      }
      rect = paintBounds;
    } else if (next) {
      const rawRect = coords.normalizeRect(dragAnchor, next);
      rect = (handler.snapMajor?.() && snap) ? coords.snapRectToMajor(rawRect, snap) : rawRect;
    } else {
      resetDrag();
      return;
    }

    const keepState = handler.onCommit(rect, snap) === false;
    if (!keepState) resetDrag();
  }

  function attachListeners(): () => void {
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerup', onPointerUp);
    };
  }

  return { register, activeTool, previewRect, previewStyle, cancelActiveDrag, anyToolEnabled, attachListeners };
}
