// Web Worker: owns all background rendering logic.
// Receives OffscreenCanvas from main thread and drives GPU or CPU rendering.
// Main thread sends 'frame' messages at requestAnimationFrame rate for vsync sync.

import { createLogger } from '../logger';
import type { WorkerInMsg, WorkerOutMsg } from './rendererProtocol';

const log = createLogger('Renderer');
const ws  = self as unknown as DedicatedWorkerGlobalScope;

// ── Renderer interface ────────────────────────────────────────────────────────

interface Renderer {
  tick(): void;
  resize(w: number, h: number): void;
  free(): void;
}

let renderer: Renderer | null = null;

// ── Helpers ───────────────────────────────────────────────────────────────────

function post(msg: WorkerOutMsg): void {
  ws.postMessage(msg);
}

function errorMessage(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

// ── CPU fallback ──────────────────────────────────────────────────────────────

const CELL_SIZE   = 5;
const DEAD_COLOR  = '#0a0a0f';
const ALIVE_COLOR = '#7c4dff';

async function makeCpuRenderer(canvas: OffscreenCanvas): Promise<Renderer> {
  log.debug('CPU: loading WASM bridge...');
  const ctx = canvas.getContext('2d') as OffscreenCanvasRenderingContext2D;
  const { WasmBridge } = await import('../wasm');
  const bridge = await WasmBridge.create();
  canvas.width  = (CELL_SIZE + 1) * bridge.width  + 1;
  canvas.height = (CELL_SIZE + 1) * bridge.height + 1;
  log.debug('CPU: bridge ready, grid', bridge.width, 'x', bridge.height);

  return {
    tick() {
      bridge.tick();
      const cells = bridge.getCells();
      for (let row = 0; row < bridge.height; row++) {
        for (let col = 0; col < bridge.width; col++) {
          const idx = row * bridge.width + col;
          ctx.fillStyle = cells[idx] === 0 ? DEAD_COLOR : ALIVE_COLOR;
          ctx.fillRect(
            col * (CELL_SIZE + 1) + 1,
            row * (CELL_SIZE + 1) + 1,
            CELL_SIZE,
            CELL_SIZE,
          );
        }
      }
    },
    resize(_w: number, _h: number) { /* CPU grid is fixed-size */ },
    free() { /* WasmBridge has no explicit destructor */ },
  };
}

// ── Message handler ───────────────────────────────────────────────────────────

ws.onmessage = async (e: MessageEvent<WorkerInMsg>) => {
  switch (e.data.type) {

    case 'init': {
      const { canvas, cellPx } = e.data;
      log.debug('Init received — canvas', canvas.width, 'x', canvas.height, 'cell_px', cellPx);

      // ── WebGPU pre-probe (no canvas involved) ─────────────────────────
      // We must verify WebGPU works BEFORE calling new_offscreen(), because
      // create_surface() permanently claims the canvas as a WebGPU context.
      // If that call succeeds but requestDevice() then fails, getContext('2d')
      // can never be obtained on the same canvas, breaking the CPU fallback.
      log.debug('GPU: probing WebGPU availability...');
      let gpuProbeOk = false;
      try {
        const probeAdapter = await navigator.gpu?.requestAdapter() ?? null;
        if (!probeAdapter) throw new Error('No WebGPU adapter');
        gpuProbeOk = true;
        log.debug('GPU: probe passed — adapter found');
      } catch (probeErr) {
        log.info('GPU: probe failed, will use CPU renderer:', errorMessage(probeErr));
        post({ type: 'error', phase: 'gpu-probe', message: errorMessage(probeErr) });
      }

      // ── GPU path (canvas committed here) ──────────────────────────────
      if (gpuProbeOk) {
        log.debug('GPU: loading wasm module...');
        try {
          const { GpuGameOfLife } = await import(
            /* @vite-ignore */ '@gpu-pkg/game_of_life_gpu.js'
          );
          log.debug('GPU: module loaded, initialising surface...');
          const gpu = await GpuGameOfLife.new_offscreen(canvas, cellPx);
          renderer = {
            tick:   () => gpu.tick_and_render(),
            resize: (w, h) => { canvas.width = w; canvas.height = h; gpu.resize(w, h); },
            free:   () => gpu.free(),
          };
          log.info('GPU renderer ready');
          post({ type: 'ready', backend: 'gpu' });
          break;
        } catch (gpuErr) {
          const message = errorMessage(gpuErr);
          // Unexpected: probe passed but WASM init failed.
          // Canvas is likely locked to WebGPU — CPU canvas fallback unavailable.
          log.error('GPU init failed after probe passed (canvas may be locked):', message);
          post({ type: 'error', phase: 'gpu-init', message });
          break;
        }
      }

      // ── CPU fallback (canvas is clean — probe failed before canvas commit) ──
      log.debug('CPU: starting software renderer...');
      try {
        renderer = await makeCpuRenderer(canvas);
        log.info('CPU renderer ready');
        post({ type: 'ready', backend: 'cpu' });
      } catch (cpuErr) {
        const message = errorMessage(cpuErr);
        log.error('CPU init failed:', message);
        post({ type: 'error', phase: 'cpu-init', message });
      }
      break;
    }

    case 'frame':
      renderer?.tick();
      break;

    case 'resize':
      log.debug('Resize →', e.data.width, 'x', e.data.height);
      renderer?.resize(e.data.width, e.data.height);
      break;

    case 'stop':
      log.debug('Stop received, freeing renderer');
      renderer?.free();
      renderer = null;
      break;
  }
};
