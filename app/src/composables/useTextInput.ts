import { ref, nextTick, type Ref } from 'vue';
import type { CoordinateMapper } from './useCoordinateMapper';
import type { CoordSnapshot, CellCoord } from '../utils/gridCoords';

export interface TextInputState {
  visible: Ref<boolean>;
  value: Ref<string>;
  style: Ref<Record<string, string>>;
  inputRef: Ref<HTMLTextAreaElement | null>;
}

export interface TextInput {
  state: TextInputState;
  anchor: CellCoord | null;
  cellsWide: number;
  cellsHigh: number;
  show(anchorCoord: CellCoord, wide: number, high: number, snap?: CoordSnapshot | null): void;
  updateStyle(snap?: CoordSnapshot | null): void;
  cleanup(): void;
  onKeydown(event: KeyboardEvent, commitFn: () => void): void;
  isInsideInput(target: EventTarget | null): boolean;
}

export function useTextInput(coords: CoordinateMapper): TextInput {
  const visible = ref(false);
  const value = ref('');
  const style = ref<Record<string, string>>({});
  const inputRef = ref<HTMLTextAreaElement | null>(null);
  let anchor: CellCoord | null = null;
  let cellsWide = 0;
  let cellsHigh = 0;

  function updateStyle(snap?: CoordSnapshot | null): void {
    if (!anchor || !cellsWide) {
      style.value = {};
      return;
    }
    const s = snap ?? coords.makeSnapshot();
    if (!s) return;
    const pos = coords.cellToScreen(anchor.cx, anchor.cy, s);
    const widthPx = coords.cellSpanToCssPx(cellsWide, s);
    style.value = {
      position: 'fixed',
      left: `${pos.cssX}px`,
      top: `${pos.cssY}px`,
      width: `${widthPx}px`,
      'min-height': '2em',
      'z-index': '25',
    };
  }

  function show(anchorCoord: CellCoord, wide: number, high: number, snap?: CoordSnapshot | null): void {
    anchor = anchorCoord;
    cellsWide = wide;
    cellsHigh = high;
    value.value = '';
    visible.value = true;
    updateStyle(snap);
    nextTick(() => inputRef.value?.focus());
  }

  function cleanup(): void {
    visible.value = false;
    value.value = '';
    anchor = null;
    cellsWide = 0;
    cellsHigh = 0;
  }

  function onKeydown(event: KeyboardEvent, commitFn: () => void): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      commitFn();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      cleanup();
    }
  }

  function isInsideInput(target: EventTarget | null): boolean {
    const ta = inputRef.value;
    return target === ta || (ta?.contains(target as Node) ?? false);
  }

  return {
    state: { visible, value, style, inputRef },
    get anchor() { return anchor; },
    get cellsWide() { return cellsWide; },
    get cellsHigh() { return cellsHigh; },
    show,
    updateStyle,
    cleanup,
    onKeydown,
    isInsideInput,
  };
}
