import { createLogger } from '../logger';
import { alignedPitch } from '../utils/gridCoords';
import type { WorkerInMsg } from '../workers/rendererProtocol';

const log = createLogger('AppBackground');

const MAJOR_EVERY = 5;
const TARGET_CELL_CSS_PX = 16;
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
  initialize(shell: HTMLElement, canvas: HTMLCanvasElement): { offscreen: OffscreenCanvas; gridPitch: number };
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
  let detachDprListener: (() => void) | null = null;
  // Cached "Chrome effective-zoom asymmetry" flag. Refreshed at mount and on
  // DPR change. See `probeEffectiveZoomAsymmetry` / `applyCanvasBox`.
  let effectiveZoomActive = false;
  let disposed = false;

  function readCanvasPixelSize(el: Element): { width: number; height: number } {
    const rect = el.getBoundingClientRect();
    return {
      width: Math.max(1, Math.round(rect.width * devicePixelRatio)),
      height: Math.max(1, Math.round(rect.height * devicePixelRatio)),
    };
  }

  /** Read width in device pixels with sub-pixel precision when available. */
  function readWidthDevicePx(entry: ResizeObserverEntry): number {
    const dp = entry.devicePixelContentBoxSize?.[0]?.inlineSize;
    if (typeof dp === 'number' && dp > 0) return dp;
    return Math.max(1, Math.round(entry.contentRect.width * devicePixelRatio));
  }

  function pickCanvasHeight(initialShellHeightDevicePx: number): number {
    const screenDevicePx = Math.round(screen.height * devicePixelRatio);
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

  function alignedGridPitch(widthPx: number): number {
    return alignedPitch(widthPx, TARGET_CELL_CSS_PX, devicePixelRatio);
  }

  function applyCanvasBox(canvas: HTMLCanvasElement, widthPx: number, heightPx: number): void {
    // Intended visual size is `widthPx / devicePixelRatio` CSS px. Under
    // Chrome's effective-zoom model with `html { zoom: !=1 }`, `style.width` is
    // interpreted as pre-zoom logical CSS px and re-scaled by the html zoom
    // factor on render — so we pre-divide by zoom to land at the right visual
    // size. Safari's classic-zoom model agrees on coord systems and skips this.
    const visualWCss = widthPx / devicePixelRatio;
    const visualHCss = heightPx / devicePixelRatio;
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

  function applyGridMargin(widthPx: number): void {
    const gp = alignedGridPitch(widthPx);
    document.documentElement.style.setProperty(
      '--grid-margin',
      `${((0.8 * gp * MAJOR_EVERY) / devicePixelRatio).toFixed(1)}px`,
    );
  }

  function publishCanvasResize(canvas: HTMLCanvasElement, widthPx: number): void {
    canvasW = widthPx;
    applyCanvasBox(canvas, canvasW, canvasH);
    hideCanvasDuringResize(canvas);
    applyGridMargin(canvasW);
    log.debug('Resize → width', canvasW, 'height', canvasH);
    post({ type: 'resize', width: canvasW, height: canvasH });
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
    log.debug('Canvas initialised', canvasW, 'x', canvasH, 'dpr', devicePixelRatio, 'effectiveZoom', effectiveZoomActive);

    const offscreen = canvas.transferControlToOffscreen();
    const gridPitch = alignedGridPitch(canvasW);
    applyGridMargin(canvasW);

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
      const shellH = Math.round(shell.getBoundingClientRect().height * devicePixelRatio);
      canvasH = pickCanvasHeight(shellH);
      publishCanvasResize(canvasEl, canvasW);
    });

    return { offscreen, gridPitch };
  }

  function revealCanvas(): void {
    if (!canvasEl) return;
    // Crossfade the canvas in over ~700 ms; the GPU shader is also ramping its
    // `init_fade_t` 0→1 over ~1.2 s in parallel, so paper and grid fade in
    // slightly faster than the cells themselves.
    canvasEl.classList.add('app-bg--visible');
    // After the initial fade window, swap to the snappy 180 ms transition so
    // subsequent toggles (resize-hide path) don't drag at the slow rate.
    window.setTimeout(() => {
      if (!disposed) canvasEl?.classList.add('app-bg--snappy-transition');
    }, 800);
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
    canvasEl = null;
  }

  return { initialize, revealCanvas, teardown };
}
