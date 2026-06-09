import { watch } from 'vue';
import type { WorkerBridge } from './useWorkerBridge';
import { useCamera } from './useCamera';

// Sub-pixel deltas aren't worth a worker round-trip.
const POST_EPSILON = 0.1;

/**
 * Forward the live camera offset to the worker so the Game-of-Life grid pans in
 * lockstep with the content plane. Driven by Vue reactivity — the offset
 * computed only changes while the camera is flying, so this is idle-free (no
 * standalone rAF loop). Posts are gated to skip sub-pixel deltas; the worker
 * caches the latest offset and re-applies it after resize / async init.
 *
 * Note: the very first offset (e.g. a deep-link landing where the camera is
 * snapped before the worker spawns) is delivered by AppBackground's `ready`
 * handler, since the worker isn't accepting messages yet when this watcher
 * would first fire.
 */
export function useCameraGridSync(bridge: WorkerBridge): void {
  const { worldOffsetDevicePx } = useCamera();
  let lastX = Number.NaN;
  let lastY = Number.NaN;
  watch(worldOffsetDevicePx, ({ x, y }) => {
    if (Math.abs(x - lastX) < POST_EPSILON && Math.abs(y - lastY) < POST_EPSILON) return;
    lastX = x;
    lastY = y;
    bridge.post({ type: 'camera', x, y });
  });
}
