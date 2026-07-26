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
// Floor for the canvas backing-texture height: max(shell, screen height × dpr,
// MIN_CANVAS_HEIGHT_DEVICE_PX). The shell clips overflow so excess height is
// purely fragment-shader overdraw; we pay sub-millisecond per frame in exchange
// for not reconfiguring the surface on the shell-height changes that oscillate
// (browser toolbar collapse, window-edge drag, iOS address bar). Height that
// genuinely GROWS past the floor is still followed — see `growCanvasHeight`.
const MIN_CANVAS_HEIGHT_DEVICE_PX = 2160;

export interface CanvasSurface {
  /**
   * Size the canvas, transfer control to an OffscreenCanvas, install the
   * ResizeObserver + DPR listener (both publish to the worker), and return what
   * `WorkerBridge.init` needs. Call once, after refs are mounted.
   */
  initialize(shell: HTMLElement, canvas: HTMLCanvasElement): { offscreen: OffscreenCanvas };
  /** Crossfade the canvas in on the worker's first painted frame. */
  revealCanvas(): void;
  teardown(): void;
}

/**
 * Owns the AppBackground canvas surface: device-pixel sizing, resize/DPR
 * republishing, the hide-during-resize mask, and the first-frame crossfade.
 * Extracted verbatim from AppBackground.vue so that component stays a thin host
 * (and under the file-size limit). Posts `resize` messages via `post`.
 */
export function useCanvasSurface(post: (msg: WorkerInMsg) => void): CanvasSurface {
  let canvasEl: HTMLCanvasElement | null = null;
  let canvasW = 0;
  // GROW-ONLY within a session (see `growCanvasHeight`). Starts at a generous
  // "exceeds any plausible viewport" value and only ever rises.
  let canvasH = 0;
  let resizeObserver: ResizeObserver | null = null;
  let canvasHideTimer: number | null = null;
  // rAF coalescer for size changes — drag the window edge at 60+ events/s and
  // we still publish at most one resize per frame to the worker.
  let pendingWidth = 0;
  // Set when `growCanvasHeight` raised `canvasH`, so a height-only growth still
  // reaches the worker (the rAF path is otherwise gated on a width change).
  let pendingHeightGrowth = false;
  let resizeRafId: number | null = null;
  // Settle-debounce for the worker surface reconfigure: a window drag fires the
  // rAF coalescer ~60×/s, and a per-frame surface.configure() in the worker
  // crashes Firefox's WebGPU. We update the canvas box + grid margin live but
  // reconfigure the GPU surface only once the drag stops (the canvas is hidden
  // throughout, so this is invisible).
  let resizeSettleTimer: number | null = null;
  let detachDprListener: (() => void) | null = null;
  let disposed = false;

  function readCanvasPixelSize(el: Element): { width: number; height: number } {
    const rect = el.getBoundingClientRect();
    const dpr = effectiveDpr();
    return {
      width: Math.max(1, Math.round(rect.width * dpr)),
      height: Math.max(1, Math.round(rect.height * dpr)),
    };
  }

  // NOTE: there is no `readWidthDevicePx`. Width, like height, is measured ONLY
  // by `readCanvasPixelSize` above — `getBoundingClientRect() × effectiveDpr()`.
  //
  // It used to read `entry.devicePixelContentBoxSize[0].inlineSize` and rescale
  // it by the ratio of capped-to-true DPR, on the premise that the property
  // reports TRUE device pixels. When that premise holds the two agree; when it
  // does not, the canvas CSS box comes out at exactly shell width DIVIDED by the
  // true ratio — a hard vertical seam, with the grid painting only the leftmost
  // 1/ratio of the viewport, and correct at ratio 1 (where the two units
  // coincide), which is why it never showed on a plain desktop display.
  //
  // Init and the DPR listener always used `readCanvasPixelSize`, so the two
  // paths could disagree the moment the observer fired. That is the same defect
  // as the height bug found in Stage 0.2, in the same function, left in place
  // because only height was being touched. One derivation now, for both axes.
  //
  // The precision argument for the old path does not survive contact with this:
  // `devicePixelContentBoxSize` is more precise only if it means what the spec
  // says, and a sub-pixel gain is not worth a whole-axis failure mode. The
  // anti-flicker property it was documented for is preserved anyway —
  // `readCanvasPixelSize` also rounds to an integer, so the `w === canvasW`
  // no-op check still absorbs incidental layout nudges.

  function pickCanvasHeight(shellHeightDevicePx: number): number {
    const screenDevicePx = Math.round(screen.height * effectiveDpr());
    return Math.max(shellHeightDevicePx, screenDevicePx, MIN_CANVAS_HEIGHT_DEVICE_PX);
  }

  /**
   * Raise `canvasH` if the shell now needs more than the backing texture has.
   * Returns whether it moved.
   *
   * GROW-ONLY, deliberately. `pickCanvasHeight` used to run at mount and on DPR
   * change only, so a shell that got TALLER at a constant DPR was never noticed
   * — an Android landscape→portrait rotation left ~200 css px of bare fallback
   * grid below the canvas, and dragging a DPR-2 laptop window onto a 5K display
   * (same effective DPR, much taller `screen.height`) left ~360.
   *
   * Never shrinking is the other half: the shell's height oscillates constantly
   * on mobile as the browser toolbar collapses and re-expands, and a shrink
   * would replay the hide/reconfigure dance on every one of those. That churn
   * is exactly what MIN_CANVAS_HEIGHT_DEVICE_PX exists to prevent, so the floor
   * keeps doing its job and this only lifts it. Cost is a session-lifetime
   * high-water mark of texture memory; the shell clips the overflow, so the
   * extra rows are fragment-shader overdraw and nothing else.
   *
   * Callers pass `readCanvasPixelSize(shell).height`, NOT anything off the
   * ResizeObserver entry. `devicePixelContentBoxSize` is unreliable under DPR
   * emulation — measured at 2000 for a shell whose true device height was 4000
   * — and `entry.contentRect` was a second coordinate space back when
   * `html { zoom }` existed. `getBoundingClientRect × effectiveDpr()` is the one
   * path already used at init and by the DPR listener, so height has exactly one
   * derivation. Keep it that way even though the zoom is gone: two ways to
   * measure the same box is how the original bug happened.
   */
  function growCanvasHeight(shellHeightDevicePx: number): boolean {
    const next = pickCanvasHeight(shellHeightDevicePx);
    if (next <= canvasH) return false;
    canvasH = next;
    return true;
  }

  /**
   * Set the canvas CSS box from its device-pixel backing size.
   *
   * MUST divide by the same (possibly capped) ratio `widthPx`/`heightPx` were
   * multiplied by when sized, not the raw devicePixelRatio, or the canvas
   * renders under/over its intended box.
   *
   * There used to be a second correction here for Chrome's "effective zoom"
   * asymmetry under `html { zoom: != 1 }` — `getBoundingClientRect` returns
   * post-zoom visual px while `style.width` writes are read as pre-zoom logical
   * px, so a round-trip scaled twice — behind a `probeEffectiveZoomAsymmetry()`
   * feature probe. With the html zoom removed there is one coordinate space and
   * both the probe and the correction are gone. Deleted rather than neutered:
   * dead compensation reads as necessary to the next person, and report 02's D5
   * (applyGridPitchVars did NOT compensate while this did — at most one could be
   * right) dissolves rather than needing a ruling.
   */
  function applyCanvasBox(canvas: HTMLCanvasElement, widthPx: number, heightPx: number): void {
    const dpr = effectiveDpr();
    canvas.style.width = `${(widthPx / dpr).toFixed(2)}px`;
    canvas.style.height = `${(heightPx / dpr).toFixed(2)}px`;
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
      const widthChanged = pendingWidth > 0 && pendingWidth !== canvasW;
      // A height-only growth must still publish — `canvasH` has already moved,
      // but the worker has not been told, so its surface is still the old size.
      if (!widthChanged && !pendingHeightGrowth) return;
      pendingHeightGrowth = false;
      publishCanvasResize(canvas, widthChanged ? pendingWidth : canvasW);
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
  ): { offscreen: OffscreenCanvas } {
    canvasEl = canvas;

    const initialSize = readCanvasPixelSize(shell);
    canvasW = initialSize.width;
    growCanvasHeight(initialSize.height); // canvasH is 0 here, so this seeds it
    canvas.width = canvasW;
    canvas.height = canvasH;
    applyCanvasBox(canvas, canvasW, canvasH);
    log.debug(
      'Canvas initialised', canvasW, 'x', canvasH,
      'dpr', devicePixelRatio, `(effective ${effectiveDpr()})`,
    );

    const offscreen = canvas.transferControlToOffscreen();
    // Size the CSS fallback grid to the renderer's pitch at the current DPR.
    // (AppBackground re-applies this from the authoritative GridInfo.gridPitch
    // when the worker reports 'ready', which also cross-checks the constant.)
    applyGridPitchVars(GRID_CELL_DEVICE_PX);

    // Resize observer. Width tracks the shell in both directions; height only
    // ever grows (see `growCanvasHeight` — the canvas is fixed-positioned and
    // clipped by the shell's overflow:hidden, so being too TALL costs only
    // overdraw while being too SHORT shows bare fallback grid). Both are
    // coalesced to one publish per frame to avoid swapchain-rebuild storms.
    resizeObserver = new ResizeObserver(([entry]) => {
      if (!canvasEl || !entry) return;
      // One measurement, both axes, same path as init and the DPR listener.
      // `entry` is only the trigger; it is deliberately not the ruler.
      const size = readCanvasPixelSize(shell);
      if (growCanvasHeight(size.height)) pendingHeightGrowth = true;
      const w = size.width;
      // Record the latest width unconditionally, even when it matches canvasW:
      // an entry that returns to the current width mid-frame must CLEAR an
      // earlier pending value, not leave it queued for the rAF to publish.
      if (w > 0) pendingWidth = w;
      if (pendingWidth !== canvasW || pendingHeightGrowth) scheduleResizePublish(canvasEl);
    });
    resizeObserver.observe(shell);

    // DPR listener — fires when the user moves the window between displays of
    // different DPI or changes OS scaling. Re-checks the canvas height for the
    // new DPR and republishes the current width so the worker re-applies CSS
    // dims and uniforms. The height goes through the same grow-only rule as the
    // observer: a DPR *drop* shrinks `screen.height × dpr`, and following it
    // down would surrender height the shell may still be using.
    detachDprListener = watchDevicePixelRatio(() => {
      if (!canvasEl) return;
      const shellH = Math.round(shell.getBoundingClientRect().height * effectiveDpr());
      growCanvasHeight(shellH);
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
