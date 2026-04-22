import { createLogger } from '../logger';
import type { BlankZone } from '../types/blankZones';

const log = createLogger('CpuRenderer');
const CELL_SIZE   = 5;

// Pre-computed RGBA32 colors (native-endian packed into Uint32).
// Canvas ImageData is always RGBA byte order, but Uint32Array view uses
// platform endianness. Little-endian (all WebAssembly targets): 0xAABBGGRR.
const DEAD_RGBA  = 0xFF0F0A0A;  // #0a0a0f
const ALIVE_RGBA = 0xFFFF4D7C;  // #7c4dff
const GRID_RGBA  = 0xFF000000;  // #000000 (grid lines)

export interface CpuRenderer {
  tick(): void;
  renderOnly?(): void;
  resize(w: number, h: number): void;
  setZones?(zones: BlankZone[]): void;
  free(): void;
}

export async function makeCpuRenderer(canvas: OffscreenCanvas): Promise<CpuRenderer> {
  log.debug('CPU: loading WASM bridge...');
  const ctx = canvas.getContext('2d') as OffscreenCanvasRenderingContext2D;
  const { WasmBridge } = await import('../wasm');
  const bridge = await WasmBridge.create();

  const pitch = CELL_SIZE + 1; // cell + 1px grid line
  const cw = pitch * bridge.width + 1;
  const ch = pitch * bridge.height + 1;
  canvas.width  = cw;
  canvas.height = ch;
  log.debug('CPU: bridge ready, grid', bridge.width, 'x', bridge.height);

  // Pre-allocate ImageData and Uint32 view — reused every frame.
  let imgData = ctx.createImageData(cw, ch);
  let buf32 = new Uint32Array(imgData.data.buffer);

  // Fill grid lines once (they never change).
  buf32.fill(GRID_RGBA);

  function render(): void {
    const cells = bridge.getCells();
    const w = bridge.width;
    const h = bridge.height;
    const stride = cw; // pixels per row in the ImageData

    for (let row = 0; row < h; row++) {
      const cellRowStart = row * w;
      const pyBase = row * pitch + 1; // first pixel row of this cell row
      for (let col = 0; col < w; col++) {
        const color = cells[cellRowStart + col] === 0 ? DEAD_RGBA : ALIVE_RGBA;
        const pxBase = col * pitch + 1; // first pixel col of this cell col
        // Fill the CELL_SIZE × CELL_SIZE block.
        for (let dy = 0; dy < CELL_SIZE; dy++) {
          const rowOffset = (pyBase + dy) * stride + pxBase;
          for (let dx = 0; dx < CELL_SIZE; dx++) {
            buf32[rowOffset + dx] = color;
          }
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }

  return {
    tick() {
      bridge.tick();
      render();
    },
    renderOnly() {
      render();
    },
    resize(_w: number, _h: number) {
      // Recompute if canvas dimensions changed externally (unlikely for CPU path).
      if (canvas.width !== cw || canvas.height !== ch) {
        canvas.width  = cw;
        canvas.height = ch;
        imgData = ctx.createImageData(cw, ch);
        buf32 = new Uint32Array(imgData.data.buffer);
        buf32.fill(GRID_RGBA);
      }
    },
    setZones(_zones: BlankZone[]) { /* CPU fallback ignores blank zones */ },
    free() { /* WasmBridge has no explicit destructor */ },
  };
}
