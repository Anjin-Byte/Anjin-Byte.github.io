<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { createLogger } from '../../logger';
import type { WorkerOutMsg } from '../../workers/rendererProtocol';

const log = createLogger('AppBackground');

// 5 mm per cell — standard graph paper square at 96 CSS PPI, scaled to physical pixels.
const DEFAULT_CELL_PX = Math.round(19 * devicePixelRatio);
const canvasRef = ref<HTMLCanvasElement | null>(null);
let worker: Worker | null = null;
let animFrameId = 0;
let resizeObserver: ResizeObserver | null = null;
let canvasW = 0;
let canvasH = 0;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  canvasW = Math.round(window.innerWidth  * devicePixelRatio);
  canvasH = Math.round(window.innerHeight * devicePixelRatio);
  canvas.width  = canvasW;
  canvas.height = canvasH;
  log.debug('Canvas initialised', canvasW, 'x', canvasH, 'dpr', devicePixelRatio);

  const offscreen = canvas.transferControlToOffscreen();

  worker = new Worker(
    new URL('../../workers/backgroundRenderer.ts', import.meta.url),
    { type: 'module' },
  );

  worker.onmessage = (e: MessageEvent<WorkerOutMsg>) => {
    switch (e.data.type) {
      case 'ready':
        log.info(`${e.data.backend.toUpperCase()} renderer active`);
        break;
      case 'error':
        // gpu-init failures are expected on browsers without WebGPU; log at debug.
        // Any other phase failing is a true problem.
        if (e.data.phase === 'gpu-init') {
          log.debug(`GPU unavailable (${e.data.message}) — CPU fallback in progress`);
        } else {
          log.error(`Renderer error [${e.data.phase}]:`, e.data.message);
        }
        break;
    }
  };

  worker.onerror = (e: ErrorEvent) => {
    log.error('Worker uncaught exception:', e.message, `at ${e.filename}:${e.lineno}`);
  };

  worker.postMessage({ type: 'init', canvas: offscreen, cellPx: DEFAULT_CELL_PX }, [offscreen]);
  log.debug('Worker spawned, init message sent');

  const loop = () => {
    worker?.postMessage({ type: 'frame' });
    animFrameId = requestAnimationFrame(loop);
  };
  animFrameId = requestAnimationFrame(loop);

  resizeObserver = new ResizeObserver(([entry]) => {
    const w = Math.round(entry.contentRect.width  * devicePixelRatio);
    const h = Math.round(entry.contentRect.height * devicePixelRatio);
    if (w === canvasW && h === canvasH) return;
    canvasW = w;
    canvasH = h;
    log.debug('Resize →', w, 'x', h);
    worker?.postMessage({ type: 'resize', width: w, height: h });
  });
  resizeObserver.observe(canvas);
});

onUnmounted(() => {
  cancelAnimationFrame(animFrameId);
  resizeObserver?.disconnect();
  worker?.postMessage({ type: 'stop' });
  worker?.terminate();
  worker = null;
  log.debug('Unmounted, worker terminated');
});
</script>

<template>
  <canvas ref="canvasRef" class="app-bg" />
</template>

<style scoped>
.app-bg {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  opacity: 1;
}
</style>
