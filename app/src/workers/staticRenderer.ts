import { createLogger } from '../logger';
import type { ThemePalette } from '../types/theme';
import { LIGHT_THEME, lerpOkLab, oklabCss } from '../types/theme';

const log = createLogger('StaticRenderer');

// Fallback renderer for browsers without WebGPU: a STATIC image in the same
// visual language as the GPU effect — themed paper, the engineering grid at
// the same pitch, and a frozen scattering of ghostly ink cells — with no
// simulation. The CPU cannot run the real per-pixel effect at frame rate
// (that's why the GPU path exists), but it doesn't need to: this draws only
// on change (camera moved / theme changed / resized), so idle cost is zero
// and a scroll costs one cheap 2D vector redraw per frame (a few hundred
// rects and lines — canvas2d rasterizes that on the GPU anyway).
//
// It replaced a legacy Game-of-Life CPU port that predated the cut-paper
// redesign: fixed 128×128 world stretched to the viewport, hardcoded
// neon-on-black palette, no theme/camera/resize support. See
// docs/canvas-island-audit-2026-07.md (F1).

/** Cell pitch in device px — mirrors `CELL_PX` in gpu.rs (see GRID_CELL_
 *  DEVICE_PX in useCanvasSurface.ts, the third mirror; AppBackground
 *  cross-checks the GPU's reported pitch against it at runtime). */
const CELL_PX = 32;
/** Major grid line every N minor lines — mirrors PaperParams.major_every. */
const MAJOR_EVERY = 5;
/** World dims (toroidal wrap modulus) — mirrors WORLD_COLS/ROWS in gpu.rs. */
const WORLD_CELLS = 1024;
/** Fraction of cells occupied in the frozen field. A settled GoL soup sits
 *  around 3–5% density; this reads as the same texture without simulating. */
const CELL_DENSITY = 0.04;

/** Deterministic per-cell occupancy: integer hash of the WRAPPED cell coords,
 *  so the field is stable across pans (toroidal-consistent) and sessions. */
function cellOccupied(cx: number, cy: number): boolean {
  const x = ((cx % WORLD_CELLS) + WORLD_CELLS) % WORLD_CELLS;
  const y = ((cy % WORLD_CELLS) + WORLD_CELLS) % WORLD_CELLS;
  let h = (x * 73856093) ^ (y * 19349663);
  h = Math.imul(h ^ (h >>> 13), 0x5bd1e995);
  h ^= h >>> 15;
  // >>> 0 for unsigned; compare against density scaled to u32 range.
  return (h >>> 0) / 0xffffffff < CELL_DENSITY;
}

export interface StaticRenderer {
  tick(): void;
  renderOnly(): void;
  resize(w: number, h: number): void;
  setCamera(x: number, y: number): void;
  setInitFade(t: number): void;
  setTheme(theme: ThemePalette): void;
  free(): void;
}

export function makeStaticRenderer(canvas: OffscreenCanvas): StaticRenderer {
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('2D context unavailable');

  let theme: ThemePalette = LIGHT_THEME;
  let camX = 0;
  let camY = 0;
  // First-paint cell reveal, ramped 0→1 by the worker (setInitFade) exactly
  // like the GPU path, so cells fade in over the paper/grid instead of snapping
  // in with the canvas crossfade.
  let initFade = 0;
  // Draw only when something changed since the last presented frame — the
  // static image is idempotent, and the worker calls renderOnly every
  // (throttled) frame regardless.
  let dirty = true;

  function draw(): void {
    if (!dirty) return;
    dirty = false;
    const w = canvas.width;
    const h = canvas.height;
    if (w === 0 || h === 0) return;

    // ── Paper ────────────────────────────────────────────────────────────
    ctx.fillStyle = oklabCss(theme.surface);
    ctx.fillRect(0, 0, w, h);

    // ── Grid ─────────────────────────────────────────────────────────────
    // Same world-anchored lines as the shader: world = frag + camera offset,
    // minor every CELL_PX, major every 5th world line (not every 5th visible
    // line — anchoring must survive panning).
    const firstCol = Math.floor(camX / CELL_PX);
    const lastCol = Math.ceil((camX + w) / CELL_PX);
    const firstRow = Math.floor(camY / CELL_PX);
    const lastRow = Math.ceil((camY + h) / CELL_PX);

    const minorColor = oklabCss(lerpOkLab(theme.surface, theme.ink, theme.minor_t));
    const majorColor = oklabCss(lerpOkLab(theme.surface, theme.ink, theme.major_t));

    // Line weights mirror the GPU shader (minor = pitch*0.04, major = pitch*0.12
    // full width — twice PaperParams' half-widths). The per-pass alpha
    // approximates the shader's value-noise "print-roller" fade (minor ~0.85,
    // major ~0.72 average of its 0.70–1.0 / 0.45–1.0 ranges) so the grid reads
    // soft rather than mechanical.
    for (const major of [false, true]) {
      ctx.strokeStyle = major ? majorColor : minorColor;
      ctx.lineWidth = CELL_PX * (major ? 0.12 : 0.04);
      ctx.globalAlpha = major ? 0.72 : 0.85;
      ctx.beginPath();
      for (let c = firstCol; c <= lastCol; c++) {
        if ((((c % MAJOR_EVERY) + MAJOR_EVERY) % MAJOR_EVERY === 0) !== major) continue;
        const x = c * CELL_PX - camX;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let r = firstRow; r <= lastRow; r++) {
        if ((((r % MAJOR_EVERY) + MAJOR_EVERY) % MAJOR_EVERY === 0) !== major) continue;
        const y = r * CELL_PX - camY;
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // ── Frozen ink cells ─────────────────────────────────────────────────
    // Full-cell squares (a hair of corner rounding), so adjacent cells join
    // into blocks like the GPU shader's neighbour-extended fill, rather than
    // reading as isolated inset tiles. Ink at the theme's atmospheric opacity,
    // ramped by the first-paint fade (setInitFade) to match the GPU reveal.
    const cellAlpha = theme.ink_opacity * initFade;
    if (cellAlpha > 0.001) {
      ctx.fillStyle = oklabCss(theme.ink);
      ctx.globalAlpha = cellAlpha;
      const radius = CELL_PX * 0.08;
      for (let cy = firstRow; cy <= lastRow; cy++) {
        for (let cx = firstCol; cx <= lastCol; cx++) {
          if (!cellOccupied(cx, cy)) continue;
          const px = cx * CELL_PX - camX;
          const py = cy * CELL_PX - camY;
          if (typeof ctx.roundRect === 'function') {
            ctx.beginPath();
            ctx.roundRect(px, py, CELL_PX, CELL_PX, radius);
            ctx.fill();
          } else {
            ctx.fillRect(px, py, CELL_PX, CELL_PX);
          }
        }
      }
      ctx.globalAlpha = 1;
    }
  }

  log.info('Static fallback renderer ready (no simulation)');

  return {
    // No simulation: a "tick" is just a (possibly no-op) redraw. TICK_EVERY
    // cadence and transition easing in the worker are irrelevant here.
    tick: draw,
    renderOnly: draw,
    resize(_w: number, _h: number) {
      // The worker already wrote canvas.width/height before calling this;
      // setting canvas dims cleared the bitmap, so a redraw is mandatory.
      dirty = true;
      draw();
    },
    setCamera(x: number, y: number) {
      if (x === camX && y === camY) return;
      camX = x;
      camY = y;
      dirty = true;
    },
    setInitFade(t: number) {
      const clamped = Math.min(1, Math.max(0, t));
      if (clamped === initFade) return;
      initFade = clamped;
      dirty = true;
    },
    setTheme(next: ThemePalette) {
      theme = next;
      dirty = true;
      // Repaint immediately — don't wait for the next frame message — so a
      // theme toggle lands on the fallback canvas in the same beat as the DOM.
      draw();
    },
    free() { /* nothing to release */ },
  };
}
