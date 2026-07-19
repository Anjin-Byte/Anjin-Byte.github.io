// Drives `onFrame` on every native rAF tick — deliberately UNTHROTTLED.
// AppBackground uses this to sample the live camera/scroll position and post
// it to the worker; that data must never go stale relative to the camera's
// own (also uncapped) easing loop in useCamera.ts, or the DOM's per-frame
// camera transform and the worker-rendered grid visibly drift apart during a
// pan — exactly what happened when an earlier version throttled this loop
// directly (grid position lagged the smoothly-moving foreground, then
// snapped to catch up, reading as ghosting/chugging until the camera
// settled). The actual expensive-render throttle belongs downstream, in the
// worker's 'frame' handler — see backgroundRenderer.ts — which can skip the
// costly tick/render call while still consuming every message's camera
// offset, so the GPU uniform is always current whenever a frame does render.
export interface AnimationLoop {
  start(onFrame: () => void): void;
  stop(): void;
}

export function useAnimationLoop(): AnimationLoop {
  let animFrameId = 0;
  let frameCallback: (() => void) | null = null;
  let visibilityHandler: (() => void) | null = null;

  function loop(): void {
    animFrameId = requestAnimationFrame(loop);
    frameCallback?.();
  }

  function start(onFrame: () => void): void {
    frameCallback = onFrame;
    animFrameId = requestAnimationFrame(loop);

    // Defense-in-depth beyond whatever background-tab rAF throttling the
    // browser already does: explicitly stop driving the worker the instant
    // the tab is hidden, and resume cleanly on return.
    visibilityHandler = () => {
      if (document.hidden) {
        if (animFrameId) {
          cancelAnimationFrame(animFrameId);
          animFrameId = 0;
        }
      } else if (!animFrameId && frameCallback) {
        animFrameId = requestAnimationFrame(loop);
      }
    };
    document.addEventListener('visibilitychange', visibilityHandler);
  }

  function stop(): void {
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = 0;
    }
    if (visibilityHandler) {
      document.removeEventListener('visibilitychange', visibilityHandler);
      visibilityHandler = null;
    }
    frameCallback = null;
  }

  return { start, stop };
}
