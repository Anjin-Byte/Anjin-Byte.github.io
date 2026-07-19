import { createLogger } from '../logger';
import { effectiveDpr } from '../utils/devicePixelRatio';
import type { WorkerInMsg } from '../workers/rendererProtocol';

const log = createLogger('AppBackground');

/** Cell pitch in device px — mirrors `CELL_PX` in gpu.rs (the renderer's
 *  single source of truth; it reports it back as `GridInfo.gridPitch` and
 *  AppBackground cross-checks this constant against it on 'ready'). Also
 *  mirrored by staticRenderer.ts. Used here to size the CSS fallback grid
 *  (App.vue's html background) so the backdrop revealed at first paint and
 *  during resize-masks matches the canvas grid at EVERY device pixel ratio —
 *  the old hardcoded 16px background only matched at exactly dpr 2. */
export const GRID_CELL_DEVICE_PX = 32;
const MAJOR_EVERY = 5;

/** Publish the fallback-grid pitch to CSS (App.vue consumes the vars in the
 *  html background). `devicePitch` is in device px; CSS gets it ÷ the same
 *  capped DPR the canvas backing store uses, so backdrop and canvas agree. */
export function applyGridPitchVars(devicePitch: number): void {
  const cssPitch = devicePitch / effectiveDpr();
  const s = document.documentElement.style;
  s.setProperty('--grid-pitch-minor', `${cssPitch.toFixed(2)}px`);
  s.setProperty('--grid-pitch-major', `${(cssPitch * MAJOR_EVERY).toFixed(2)}px`);
}
// Floor for the canvas backing-texture height: max(initial shell, screen
// height × dpr, MIN_CANVAS_HEIGHT_DEVICE_PX). The shell clips overflow so
// excess height is purely fragment-shader overdraw; we pay sub-millisecond
// per frame in exchange for never reconfiguring the surface on shell-height
// changes (browser toolbar collapse, window-edge drag, iOS address bar).
const MIN_CANVAS_HEIGHT_DEVICE_PX = 2160;

export interface CanvasSurface {
  /**
   * Size the canvas, transfer control to an OffscreenCanvas, install the
   * width-only ResizeObserver + DPR listener (both publish to the worker), and
   * return what `WorkerBridge.init` needs. Call once, after refs are mounted.
   */
  initialize(shell: HTMLElement, canvas: HTMLCanvasElement): { offscreen: OffscreenCanvas };
  /** Crossfade the canvas in on the worker's first painted frame. */
  revealCanvas(): void;
  teardown(): void;
}

/**
 * Owns the AppBackground canvas surface: device-pixel sizing, the Chrome/
 * Firefox effective-zoom compensation under `html { zoom }`, resize/DPR
 * republishing, the hide-during-resize mask, and the first-frame crossfade.
 * Extracted verbatim from AppBackground.vue so that component stays a thin host
 * (and under the file-size limit). Posts `resize` messages via `post`.
 */
export function useCanvasSurface(post: (msg: WorkerInMsg) => void): CanvasSurface {
  let canvasEl: HTMLCanvasElement | null = null;
  let canvasW = 0;
  // Picked once at mount and recomputed only on DPR change. Width is the only
  // dimension that triggers actual reconfigures; height is held constant at a
  // generous "exceeds any plausible viewport" value.
  let canvasH = 0;
  let resizeObserver: ResizeObserver | null = null;
  let canvasHideTimer: number | null = null;
  // rAF coalescer for width changes — drag the window edge at 60+ events/s and
  // we still publish at most one resize per frame to the worker.
  let pendingWidth = 0;
  let resizeRafId: number | null = null;
  // Settle-debounce for the worker surface reconfigure: a window drag fires the
  // rAF coalescer ~60×/s, and a per-frame surface.configure() in the worker
  // crashes Firefox's WebGPU. We update the canvas box + grid margin live but
  // reconfigure the GPU surface only once the drag stops (the canvas is hidden
  // throughout, so this is invisible).
  let resizeSettleTimer: number | null = null;
  let detachDprListener: (() => void) | null = null;
  // Cached "Chrome effective-zoom asymmetry" flag. Refreshed at mount and on
  // DPR change. See `probeEffectiveZoomAsymmetry` / `applyCanvasBox`.
  let effectiveZoomActive = false;
  let disposed = false;

  function readCanvasPixelSize(el: Element): { width: number; height: number } {
    const rect = el.getBoundingClientRect();
    const dpr = effectiveDpr();
    return {
      width: Math.max(1, Math.round(rect.width * dpr)),
      height: Math.max(1, Math.round(rect.height * dpr)),
    };
  }

  /** Read width in device pixels with sub-pixel precision when available.
   *  `devicePixelContentBoxSize` reports TRUE device pixels (uncapped) — when
   *  the effective DPR is capped below the true ratio, rescale it down to the
   *  same capped space the rest of this module (and the canvas backing store)
   *  uses, so a width change still compares correctly against `canvasW`.
   *  Rounded to an integer (matching `canvasW`, always an integer) — an
   *  unrounded rescale can land a hair off an otherwise-unchanged width,
   *  which defeats the `w === canvasW` no-op check below and spuriously
   *  replays the whole resize/hide/reconfigure dance (visible as a flicker)
   *  on any incidental layout nudge, e.g. a scrollbar appearing after a
   *  `color-scheme` change on theme toggle. */
  function readWidthDevicePx(entry: ResizeObserverEntry): number {
    const dpr = effectiveDpr();
    const dp = entry.devicePixelContentBoxSize?.[0]?.inlineSize;
    if (typeof dp === 'number' && dp > 0) return Math.round(dp * (dpr / devicePixelRatio));
    return Math.max(1, Math.round(entry.contentRect.width * dpr));
  }

  function pickCanvasHeight(initialShellHeightDevicePx: number): number {
    const screenDevicePx = Math.round(screen.height * effectiveDpr());
    return Math.max(initialShellHeightDevicePx, screenDevicePx, MIN_CANVAS_HEIGHT_DEVICE_PX);
  }

  /**
   * Detect whether this browser exhibits Chrome's "effective zoom" asymmetry
   * under `html { zoom: !=1 }`: `getBoundingClientRect` returns post-zoom
   * (visual) CSS pixels while `style.width` writes are interpreted as pre-zoom
   * (logical) CSS pixels and visually re-scaled by the html zoom factor.
   * Round-tripping a value between the two then ends up scaled twice.
   *
   * Probe: write 100 logical CSS px to a hidden div, read its rect, compare.
   * If they differ by more than a sub-pixel epsilon, the asymmetry is active.
   */
  function probeEffectiveZoomAsymmetry(): boolean {
    const probe = document.createElement('div');
    probe.style.cssText = 'position:fixed;left:-9999px;top:0;width:100px;height:100px;';
    document.body.appendChild(probe);
    const measured = probe.getBoundingClientRect().width;
    probe.remove();
    return Math.abs(measured - 100) > 0.1;
  }

  function applyCanvasBox(canvas: HTMLCanvasElement, widthPx: number, heightPx: number): void {
    // Intended visual size is `widthPx / effectiveDpr()` CSS px — MUST divide by
    // the same (possibly capped) ratio `widthPx`/`heightPx` were multiplied by
    // when sized, not the raw devicePixelRatio, or the canvas renders under/over
    // its intended CSS box. Under Chrome's effective-zoom model with
    // `html { zoom: !=1 }`, `style.width` is interpreted as pre-zoom logical CSS
    // px and re-scaled by the html zoom factor on render — so we pre-divide by
    // zoom to land at the right visual size. Safari's classic-zoom model agrees
    // on coord systems and skips this.
    const dpr = effectiveDpr();
    const visualWCss = widthPx / dpr;
    const visualHCss = heightPx / dpr;
    let logicalWCss = visualWCss;
    let logicalHCss = visualHCss;
    if (effectiveZoomActive) {
      const zoom = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
      if (zoom > 0 && zoom !== 1) {
        logicalWCss = visualWCss / zoom;
        logicalHCss = visualHCss / zoom;
      }
    }
    canvas.style.width = `${logicalWCss.toFixed(2)}px`;
    canvas.style.height = `${logicalHCss.toFixed(2)}px`;
  }

  function hideCanvasDuringResize(canvas: HTMLCanvasElement): void {
    canvas.classList.add('app-bg--hidden');
    if (canvasHideTimer !== null) clearTimeout(canvasHideTimer);
    canvasHideTimer = window.setTimeout(() => {
      canvasHideTimer = null;
      canvas.classList.remove('app-bg--hidden');
    }, 120);
  }

  function publishCanvasResize(canvas: HTMLCanvasElement, widthPx: number): void {
    canvasW = widthPx;
    applyCanvasBox(canvas, canvasW, canvasH);
    hideCanvasDuringResize(canvas);
    // Reconfigure the GPU surface only once the resize settles (see note at the
    // declaration). During a drag this keeps resetting, so the worker sees one
    // resize on release instead of ~60/s — which is what crashes Firefox WebGPU.
    if (resizeSettleTimer !== null) clearTimeout(resizeSettleTimer);
    resizeSettleTimer = window.setTimeout(() => {
      resizeSettleTimer = null;
      log.debug('Resize settle → width', canvasW, 'height', canvasH);
      post({ type: 'resize', width: canvasW, height: canvasH });
      // Keep the canvas masked until the reconfigured frame lands.
      hideCanvasDuringResize(canvas);
    }, 90);
  }

  function scheduleResizePublish(canvas: HTMLCanvasElement): void {
    if (resizeRafId !== null) return;
    resizeRafId = requestAnimationFrame(() => {
      resizeRafId = null;
      if (pendingWidth === 0 || pendingWidth === canvasW) return;
      publishCanvasResize(canvas, pendingWidth);
    });
  }

  /**
   * Subscribe to device-pixel-ratio changes via matchMedia. The query captures
   * the current DPR at construction, so we re-arm after every fire.
   */
  function watchDevicePixelRatio(onChange: () => void): () => void {
    let detached = false;
    const arm = (): void => {
      if (detached) return;
      const mql = matchMedia(`(resolution: ${devicePixelRatio}dppx)`);
      const handler = (): void => {
        if (detached) return;
        onChange();
        arm();
      };
      mql.addEventListener('change', handler, { once: true });
    };
    arm();
    return () => {
      detached = true;
    };
  }

  function initialize(
    shell: HTMLElement,
    canvas: HTMLCanvasElement,
  ): { offscreen: OffscreenCanvas; gridPitch: number } {
    canvasEl = canvas;

    // Detect Chrome/Firefox effective-zoom asymmetry once (refreshed on DPR
    // change). `applyCanvasBox` reads this to decide whether to compensate
    // `canvas.style.{width,height}` for `html { zoom }`.
    effectiveZoomActive = probeEffectiveZoomAsymmetry();

    const initialSize = readCanvasPixelSize(shell);
    canvasW = initialSize.width;
    canvasH = pickCanvasHeight(initialSize.height);
    canvas.width = canvasW;
    canvas.height = canvasH;
    applyCanvasBox(canvas, canvasW, canvasH);
    log.debug(
      'Canvas initialised', canvasW, 'x', canvasH,
      'dpr', devicePixelRatio, '(effective', effectiveDpr() + ')',
      'effectiveZoom', effectiveZoomActive,
    );

    const offscreen = canvas.transferControlToOffscreen();
    // Size the CSS fallback grid to the renderer's pitch at the current DPR.
    // (AppBackground re-applies this from the authoritative GridInfo.gridPitch
    // when the worker reports 'ready', which also cross-checks the constant.)
    applyGridPitchVars(GRID_CELL_DEVICE_PX);

    // Resize observer — width-only. Shell-height changes are deliberately
    // ignored: the canvas is fixed-positioned and clipped by the shell's
    // overflow:hidden, so the backing texture only needs to be at least as tall
    // as any plausible viewport (handled by `pickCanvasHeight`). Width changes
    // are coalesced to one publish per frame to avoid swapchain-rebuild storms.
    resizeObserver = new ResizeObserver(([entry]) => {
      if (!canvasEl) return;
      const w = readWidthDevicePx(entry);
      if (w <= 0 || w === canvasW) return;
      pendingWidth = w;
      scheduleResizePublish(canvasEl);
    });
    resizeObserver.observe(shell);

    // DPR listener — fires when the user moves the window between displays of
    // different DPI or changes OS scaling. Recomputes the constant canvas height
    // for the new DPR, re-runs the effective-zoom probe, and republishes the
    // current width so the worker re-applies CSS dims and uniforms.
    detachDprListener = watchDevicePixelRatio(() => {
      if (!canvasEl) return;
      effectiveZoomActive = probeEffectiveZoomAsymmetry();
      const shellH = Math.round(shell.getBoundingClientRect().height * effectiveDpr());
      canvasH = pickCanvasHeight(shellH);
      // The CSS pitch is device-pitch ÷ effectiveDpr, so a DPR change moves it.
      applyGridPitchVars(GRID_CELL_DEVICE_PX);
      publishCanvasResize(canvasEl, canvasW);
    });

    return { offscreen };
  }

  function revealCanvas(): void {
    if (!canvasEl) return;
    // Crossfade the canvas in over ~1 s; the GPU shader ramps its `init_fade_t`
    // 0→1 over the same window in parallel, so paper, grid, and cells all
    // resolve together.
    canvasEl.classList.add('app-bg--visible');
    // Just after the fade completes, swap to the snappy 180 ms transition so
    // subsequent toggles (resize-hide path) don't drag at the slow rate. Keep
    // this ≥ the fade duration above so it never cuts the reveal short.
    window.setTimeout(() => {
      if (!disposed) canvasEl?.classList.add('app-bg--snappy-transition');
    }, 1100);
  }

  function teardown(): void {
    disposed = true;
    resizeObserver?.disconnect();
    detachDprListener?.();
    if (canvasHideTimer !== null) {
      clearTimeout(canvasHideTimer);
      canvasHideTimer = null;
    }
    if (resizeRafId !== null) {
      cancelAnimationFrame(resizeRafId);
      resizeRafId = null;
    }
    if (resizeSettleTimer !== null) {
      clearTimeout(resizeSettleTimer);
      resizeSettleTimer = null;
    }
    canvasEl = null;
  }

  return { initialize, revealCanvas, teardown };
}
