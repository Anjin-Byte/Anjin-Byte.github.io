import { ref, computed, watch, type ComputedRef, type Ref } from 'vue';
import type { Camera } from '../types/space';
import { effectiveDpr } from '../utils/devicePixelRatio';
import { devicePx, type DevicePx } from '../utils/units';
import { findWaypoint, homeWaypoint, type WaypointId } from '../space/waypoints';
import {
  responsiveSpacing,
  gridToWorld,
  type Viewport,
  type Spacing,
} from '../space/layout';
import { PANEL_MAX_WIDTH, GUTTER_FRACTION } from '../space/layoutConfig';
import { useMotionPreference } from './useMotionPreference';
import { onAdvance } from './frameClock';
import {
  stepCamera,
  isSettled,
  cssTransformFor,
  cameraToDeviceOffset,
} from '../space/cameraEasing';

// The camera is genuinely app-global state: WorldStage reads its transform,
// the router drives its target, WorldPanel reads its position/focus, and the
// worker grid-sync reads its offset. Module-scope refs make this a singleton,
// mirroring useThemePreference.

// Per-frame easing fraction toward the target. Tuned for a brisk-but-smooth fly.
const EASE = 0.18;

// Grid-follow factor: 1 pans the GoL grid in lockstep with the camera. The same
// offset feeds the coordinate mapper so click-to-toggle stays correct.
const GRID_FOLLOW_RATE = 1;

/** Viewport-responsive spacing using the layout config. */
function computeSpacing(vp: Viewport): Spacing {
  return responsiveSpacing(vp, {
    panelMaxWidth: PANEL_MAX_WIDTH,
    gutterX: GUTTER_FRACTION * vp.w,
    gutterY: GUTTER_FRACTION * vp.h,
    zoom: 1,
  });
}

/**
 * Placeholder until `WorldStage` measures its own box (R15).
 *
 * This module is imported, and `installCameraRouteSync` resolves the first
 * route, BEFORE any element exists to measure — so the initial camera and a
 * deep link's initial snap are both computed against this. Every world position
 * derived here is wrong; `setViewport` corrects them on the first real
 * measurement, which happens in WorldStage's `onMounted`, before paint.
 *
 * 1×1 rather than 0×0 because `responsiveSpacing` divides by viewport extent.
 */
const UNMEASURED_VIEWPORT: Viewport = { w: 1, h: 1 };
const viewportRef = ref<Viewport>({ ...UNMEASURED_VIEWPORT });
let viewportMeasured = false;

function initialCamera(): Camera {
  const home = findWaypoint(homeWaypoint.id);
  const world = gridToWorld(home, computeSpacing(viewportRef.value));
  return { x: world.x, y: world.y, zoom: home.zoom ?? 1 };
}

const cameraRef = ref<Camera>(initialCamera());
const targetRef = ref<Camera>(initialCamera());
const isAnimatingRef = ref(false);
// The grid coordinate the camera is "parked" on (a core waypoint OR a notebook
// entry). Drives re-centering on resize; null once the user free-pans away (so a
// resize doesn't yank them back). Generalised from a WaypointId so dynamic entry
// islands re-centre on resize exactly like the fixed waypoints.
interface Anchor { gx: number; gy: number; zoom?: number | undefined }
const anchorRef = ref<Anchor | null>({ gx: homeWaypoint.gx, gy: homeWaypoint.gy });

// Vertical scroll within the captured island (CSS px). Owned by the active
// WorldPanel's native scroll container; folded into the grid/coord offset below
// so the grid pans with the scroll while the panel frame stays pinned. The
// plane transform deliberately does NOT use it.
const captureScrollRef = ref(0);

// `prefers-reduced-motion: reduce` → snap instead of fly. This module used to
// own its own matchMedia; the signal now comes from the single publisher in
// useMotionPreference so the camera, the CSS, and the render WORKER cannot
// disagree about it (responsive R11).
const { reducedMotion: reducedMotionRef } = useMotionPreference();

const spacing = computed<Spacing>(() => computeSpacing(viewportRef.value));

// ── Easing step (effectful edge over the pure cameraEasing core) ─────────────
//
// Runs in the frame clock's ADVANCE phase, NOT in an rAF loop of its own. That
// is load-bearing, not tidiness: the background worker reads this camera offset
// in the SAMPLE phase, so the two-phase contract guarantees it observes this
// frame's step. When both were independent rAF loops, the reader was queued
// first and shipped the previous frame's position to the renderer for the whole
// fly — a one-frame canvas-vs-DOM lag that only showed up during fast motion.
// See frameClock.ts for the full account.
let unsubscribeAdvance: (() => void) | null = null;

function stepOnce(): void {
  cameraRef.value = stepCamera(cameraRef.value, targetRef.value, EASE);
  if (isSettled(cameraRef.value, targetRef.value)) {
    cameraRef.value = { ...targetRef.value };
    stopLoop();
  }
}

function startLoop(): void {
  if (unsubscribeAdvance) return;
  isAnimatingRef.value = true;
  unsubscribeAdvance = onAdvance(stepOnce);
}

function stopLoop(): void {
  // Unsubscribing from inside `stepOnce` (the settle case) is safe: `runFrame`
  // iterates over a copy of the subscriber set precisely so a callback may
  // remove itself mid-frame.
  unsubscribeAdvance?.();
  unsubscribeAdvance = null;
  isAnimatingRef.value = false;
}

// ── Public controls ──────────────────────────────────────────────────────────
function snapTo(x: number, y: number, zoom?: number): void {
  stopLoop();
  const z = zoom ?? cameraRef.value.zoom;
  cameraRef.value = { x, y, zoom: z };
  targetRef.value = { x, y, zoom: z };
}

function panTo(x: number, y: number, opts: { zoom?: number | undefined; snap?: boolean | undefined } = {}): void {
  const z = opts.zoom ?? targetRef.value.zoom;
  targetRef.value = { x, y, zoom: z };
  if (opts.snap || reducedMotionRef.value) {
    snapTo(x, y, z);
    return;
  }
  startLoop();
}

/** Fly the camera to a grid coordinate — a core waypoint or a notebook entry —
 *  parking the anchor there so a viewport resize re-centres on it. */
function panToNode(node: Anchor, opts: { snap?: boolean } = {}): void {
  anchorRef.value = node;
  captureScrollRef.value = 0; // arriving at an island lands at its top
  const world = gridToWorld(node, spacing.value);
  panTo(world.x, world.y, { zoom: node.zoom, snap: opts.snap });
}

function panToWaypoint(id: WaypointId, opts: { snap?: boolean } = {}): void {
  const wp = findWaypoint(id);
  panToNode({ gx: wp.gx, gy: wp.gy, zoom: wp.zoom }, opts);
}

/**
 * Re-centre the camera on the parked anchor for a given spacing.
 *
 * Two callers, and naming it is the point of R15: the resize watcher below, and
 * the FIRST viewport measurement in `setViewport`. Those look like one thing
 * (spacing changed, re-centre) but they are not — the second is bootstrap
 * correction, fixing positions computed against UNMEASURED_VIEWPORT. That
 * correction used to happen only as a side effect of the resize watcher
 * noticing 1×1 → real, which is true but accidental: it read as resize handling
 * and nothing recorded that a deep link's correctness depended on it.
 */
function recentreOnAnchor(sp: Spacing): void {
  const node = anchorRef.value;
  if (node === null) return; // free-panning; nothing parked to re-centre on
  const world = gridToWorld(node, sp);
  snapTo(world.x, world.y, node.zoom ?? cameraRef.value.zoom);
}

function setViewport(w: number, h: number): void {
  viewportRef.value = { w: Math.max(1, w), h: Math.max(1, h) };
  if (viewportMeasured) return;
  viewportMeasured = true;
  // Explicit bootstrap correction, not a hoped-for side effect of the watcher.
  // Harmless if the watcher also fires — both snap to the same world position.
  recentreOnAnchor(spacing.value);
}

/** Set the captured island's vertical scroll offset (CSS px). Called by the
 *  active WorldPanel's native scroll handler; clamped at the DOM boundary. */
function setCaptureScroll(px: number): void {
  captureScrollRef.value = Math.max(0, px);
}

// When spacing changes (viewport resize), the parked waypoint's WORLD position
// moves — re-snap the camera to keep it centered. No-op when free-panning.
// Resize: when spacing changes, the parked waypoint's WORLD position moves, so
// re-centre to keep it under the camera. No-op when free-panning. (This also
// fires on the 1×1 → measured transition, which is why the bootstrap used to
// work by accident; `setViewport` now does that correction explicitly and this
// is back to being only what its name says.)
watch(spacing, recentreOnAnchor);

const cameraStyle = computed(() => ({
  transform: cssTransformFor(cameraRef.value, viewportRef.value),
}));

// Grid + click-mapping offset. Vertical includes the captured island's scroll
// so the grid pans with native scrolling (the plane transform above does not —
// the panel frame stays pinned while its content scrolls inside it).
const worldOffsetDevicePx = computed(() => {
  const off = cameraToDeviceOffset(
    {
      x: cameraRef.value.x,
      y: cameraRef.value.y + captureScrollRef.value,
      zoom: cameraRef.value.zoom,
    },
    effectiveDpr(),
    GRID_FOLLOW_RATE,
  );
  return { x: devicePx(off.x), y: devicePx(off.y) };
});

export interface CameraController {
  camera: Readonly<Ref<Camera>>;
  isAnimating: Readonly<Ref<boolean>>;
  viewport: Readonly<Ref<Viewport>>;
  spacing: ComputedRef<Spacing>;
  cameraStyle: ComputedRef<{ transform: string }>;
  worldOffsetDevicePx: ComputedRef<{ x: DevicePx; y: DevicePx }>;
  // Function-property syntax (not methods): this-less, safe to destructure.
  panTo: (x: number, y: number, opts?: { zoom?: number | undefined; snap?: boolean | undefined }) => void;
  panToWaypoint: (id: WaypointId, opts?: { snap?: boolean }) => void;
  panToNode: (node: { gx: number; gy: number; zoom?: number | undefined }, opts?: { snap?: boolean }) => void;
  snapTo: (x: number, y: number, zoom?: number) => void;
  // (No `releaseAnchor`. It existed to null the anchor when free-panning so a
  // resize would not yank the camera back to a waypoint — but free-panning is
  // gesture navigation, which is `GESTURE_NAV_ENABLED = false` and compiled
  // out, so nothing ever called it. Deleted rather than kept "for later", on
  // the same reasoning as the dead zoom compensations in Stage 1.2: dead code
  // reads as live to the next person. Re-enabling free-pan means restoring one
  // line that sets `anchorRef.value = null`.)
  setViewport: (w: number, h: number) => void;
  setCaptureScroll: (px: number) => void;
}

export function useCamera(): CameraController {
  return {
    camera: cameraRef,
    isAnimating: isAnimatingRef,
    viewport: viewportRef,
    spacing,
    cameraStyle,
    worldOffsetDevicePx,
    panTo,
    panToWaypoint,
    panToNode,
    snapTo,
    setViewport,
    setCaptureScroll,
  };
}
