import type { Ref } from 'vue';
import type { RoundedRect } from '../space/collision';

// The collision registry — the common interface by which any element declares
// that it occupies space the compass waymarkers should avoid. Module-scope
// state makes it a singleton (mirroring useCamera): a component registers a
// bounds provider on mount and unregisters on unmount; useCompass collects the
// live set each frame and feeds it to the pure solver. Fixed chrome and the
// camera-transformed active island both register through the same door — adding
// a new collidable element is one `registerCollider` call, nothing in the solver.
//
// Bounds are read at the EFFECTFUL EDGE (here), so the solver only sees numbers.

/**
 * A bounds provider. `scale` converts `getBoundingClientRect`'s post-zoom VISUAL
 * px into the pre-zoom layout px the markers/solver use (see `collectObstacles`).
 * Returns `null` when the element isn't currently a collider (e.g. an island
 * that isn't the active one).
 */
export type ColliderProvider = (scale: number) => RoundedRect | null;

const providers = new Set<ColliderProvider>();

/** Register a collider; returns an unregister fn (call it in `onUnmounted`). */
export function registerCollider(provider: ColliderProvider): () => void {
  providers.add(provider);
  return () => {
    providers.delete(provider);
  };
}

/**
 * Read an element's footprint in the solver's CSS-px space. `getBoundingClientRect`
 * reports post-zoom VISUAL px, but markers live in the pre-zoom layout px the
 * camera uses; `scale` (the document's layout÷visual ratio) bridges the two and
 * is 1 when unzoomed — so this works under Chrome's effective-zoom and Safari's
 * classic zoom alike.
 */
export function elementRect(el: Element, scale: number): RoundedRect | null {
  const r = el.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return null;
  return {
    cx: (r.left + r.width / 2) * scale,
    cy: (r.top + r.height / 2) * scale,
    halfW: (r.width / 2) * scale,
    halfH: (r.height / 2) * scale,
    cornerR: 0, // v1 collides against the bounding box — see RoundedRect
  };
}

/**
 * Snapshot every registered collider's current footprint, dropping nulls. One
 * document read derives the visual→layout zoom scale; every provider reuses it,
 * so a frame costs one `getBoundingClientRect` on the document plus one per live
 * collider.
 */
// Visual→layout-px scale for `getBoundingClientRect` under `html { zoom }`. A
// child element's rect is reported in post-zoom VISUAL px, but the markers live
// in pre-zoom LAYOUT px (the camera's clientWidth space). Measuring a probe of
// known LAYOUT width (100px) and reading back its VISUAL width recovers the
// factor directly: 100/87.5 ≈ 1.143 under Chrome's effective-zoom, 100/100 = 1
// under Safari's classic zoom or none. Memoised — the page zoom is a fixed CSS
// constant, independent of DPI, so it never changes at runtime.
//
// NB: do NOT derive this from `documentElement` — the *zoomed* element reports
// its OWN box in layout px, so the ratio collapses to 1 and the correction
// silently no-ops (obstacles land ~14% off and markers sail past them).
let cachedScale: number | null = null;
function visualToLayoutScale(): number {
  if (cachedScale !== null) return cachedScale;
  if (typeof document === 'undefined') return 1;
  const probe = document.createElement('div');
  probe.style.cssText = 'position:fixed;left:-9999px;top:0;width:100px;height:100px;';
  document.body.appendChild(probe);
  const visual = probe.getBoundingClientRect().width;
  probe.remove();
  cachedScale = visual > 0 ? 100 / visual : 1;
  return cachedScale;
}

export function collectObstacles(): RoundedRect[] {
  const scale = visualToLayoutScale();
  const out: RoundedRect[] = [];
  for (const provider of providers) {
    const rect = provider(scale);
    if (rect) out.push(rect);
  }
  return out;
}

/** Per-element collision behavior. Extend as new knobs are needed (corner
 *  radius, content-box inset, priority…). */
export interface ColliderOptions {
  /** Dynamic on/off, evaluated each frame — return false to drop out of
   *  collision (e.g. an island that isn't the active one). Default: always on. */
  enabled?: () => boolean;
  /** Grow (+) or shrink (−) the footprint, in CSS px. Positive keeps markers
   *  farther off the element; negative lets them sit over its edge/padding. */
  margin?: number;
}

/**
 * Register a DOM element as a collider with optional per-element behavior — the
 * ergonomic layer over `registerCollider` + `elementRect`. `el` is a template
 * ref or a getter (for nodes reached indirectly, e.g. a component's `$el`).
 * Returns an unregister fn (pass it to `onUnmounted`).
 */
export function registerElementCollider(
  el: Ref<HTMLElement | null> | (() => HTMLElement | null | undefined),
  options: ColliderOptions = {},
): () => void {
  const getEl = typeof el === 'function' ? el : (): HTMLElement | null => el.value;
  const isEnabled = options.enabled ?? ((): boolean => true);
  const margin = options.margin ?? 0;
  return registerCollider((scale) => {
    if (!isEnabled()) return null;
    const node = getEl();
    if (!node) return null;
    const rect = elementRect(node, scale);
    if (!rect) return null;
    if (margin !== 0) {
      // halfW/halfH are already in layout (CSS) px, the same space `margin` is
      // authored in, so add it directly — no `scale`.
      rect.halfW = Math.max(0, rect.halfW + margin);
      rect.halfH = Math.max(0, rect.halfH + margin);
    }
    return rect;
  });
}
