import { ref, computed, watch, type ComputedRef, type Ref } from 'vue';
import type { Camera } from '../types/space';
import { findWaypoint, homeWaypoint, type WaypointId } from '../space/waypoints';
import {
  responsiveSpacing,
  gridToWorld,
  type Viewport,
  type Spacing,
} from '../space/layout';
import { PANEL_MAX_WIDTH, GUTTER_FRACTION } from '../space/layoutConfig';
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

const viewportRef = ref<Viewport>({ w: 1, h: 1 });

function initialCamera(): Camera {
  const home = findWaypoint(homeWaypoint.id);
  const world = gridToWorld(home, computeSpacing(viewportRef.value));
  return { x: world.x, y: world.y, zoom: home.zoom ?? 1 };
}

const cameraRef = ref<Camera>(initialCamera());
const targetRef = ref<Camera>(initialCamera());
const isAnimatingRef = ref(false);
// The waypoint the camera is "parked" on. Drives re-centering on resize; null
// once the user free-pans away (so a resize doesn't yank them back).
const anchorRef = ref<WaypointId | null>(homeWaypoint.id);

// Vertical scroll within the captured island (CSS px). Owned by the active
// WorldPanel's native scroll container; folded into the grid/coord offset below
// so the grid pans with the scroll while the panel frame stays pinned. The
// plane transform deliberately does NOT use it.
const captureScrollRef = ref(0);

// `prefers-reduced-motion: reduce` → snap instead of fly. Tracked live.
const reducedMotionRef = ref(
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false,
);
if (typeof window !== 'undefined' && window.matchMedia) {
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  const onChange = (e: MediaQueryListEvent): void => {
    reducedMotionRef.value = e.matches;
  };
  if (typeof mql.addEventListener === 'function') mql.addEventListener('change', onChange);
}

const spacing = computed<Spacing>(() => computeSpacing(viewportRef.value));

// ── rAF easing loop (effectful edge over the pure cameraEasing core) ─────────
let rafId = 0;
function tick(): void {
  cameraRef.value = stepCamera(cameraRef.value, targetRef.value, EASE);
  if (isSettled(cameraRef.value, targetRef.value)) {
    cameraRef.value = { ...targetRef.value };
    isAnimatingRef.value = false;
    rafId = 0;
    return;
  }
  rafId = requestAnimationFrame(tick);
}
function startLoop(): void {
  if (rafId !== 0) return;
  isAnimatingRef.value = true;
  rafId = requestAnimationFrame(tick);
}
function stopLoop(): void {
  if (rafId !== 0) {
    cancelAnimationFrame(rafId);
    rafId = 0;
  }
  isAnimatingRef.value = false;
}

// ── Public controls ──────────────────────────────────────────────────────────
function snapTo(x: number, y: number, zoom?: number): void {
  stopLoop();
  const z = zoom ?? cameraRef.value.zoom;
  cameraRef.value = { x, y, zoom: z };
  targetRef.value = { x, y, zoom: z };
}

function panTo(x: number, y: number, opts: { zoom?: number; snap?: boolean } = {}): void {
  const z = opts.zoom ?? targetRef.value.zoom;
  targetRef.value = { x, y, zoom: z };
  if (opts.snap || reducedMotionRef.value) {
    snapTo(x, y, z);
    return;
  }
  startLoop();
}

function panToWaypoint(id: WaypointId, opts: { snap?: boolean } = {}): void {
  anchorRef.value = id;
  captureScrollRef.value = 0; // arriving at an island lands at its top
  const wp = findWaypoint(id);
  const world = gridToWorld(wp, spacing.value);
  panTo(world.x, world.y, { zoom: wp.zoom, snap: opts.snap });
}

/** Detach from the parked waypoint (called when free-panning) so a viewport
 *  resize won't snap the camera back to that waypoint. */
function releaseAnchor(): void {
  anchorRef.value = null;
}

function setViewport(w: number, h: number): void {
  viewportRef.value = { w: Math.max(1, w), h: Math.max(1, h) };
}

/** Set the captured island's vertical scroll offset (CSS px). Called by the
 *  active WorldPanel's native scroll handler; clamped at the DOM boundary. */
function setCaptureScroll(px: number): void {
  captureScrollRef.value = Math.max(0, px);
}

// When spacing changes (viewport resize), the parked waypoint's WORLD position
// moves — re-snap the camera to keep it centered. No-op when free-panning.
watch(spacing, (sp) => {
  const id = anchorRef.value;
  if (id === null) return;
  const wp = findWaypoint(id);
  const world = gridToWorld(wp, sp);
  snapTo(world.x, world.y, wp.zoom ?? cameraRef.value.zoom);
});

const cameraStyle = computed(() => ({
  transform: cssTransformFor(cameraRef.value, viewportRef.value),
}));

// Grid + click-mapping offset. Vertical includes the captured island's scroll
// so the grid pans with native scrolling (the plane transform above does not —
// the panel frame stays pinned while its content scrolls inside it).
const worldOffsetDevicePx = computed(() =>
  cameraToDeviceOffset(
    {
      x: cameraRef.value.x,
      y: cameraRef.value.y + captureScrollRef.value,
      zoom: cameraRef.value.zoom,
    },
    typeof window !== 'undefined' ? window.devicePixelRatio : 1,
    GRID_FOLLOW_RATE,
  ),
);

export interface CameraController {
  camera: Readonly<Ref<Camera>>;
  isAnimating: Readonly<Ref<boolean>>;
  viewport: Readonly<Ref<Viewport>>;
  spacing: ComputedRef<Spacing>;
  cameraStyle: ComputedRef<{ transform: string }>;
  worldOffsetDevicePx: ComputedRef<{ x: number; y: number }>;
  panTo(x: number, y: number, opts?: { zoom?: number; snap?: boolean }): void;
  panToWaypoint(id: WaypointId, opts?: { snap?: boolean }): void;
  snapTo(x: number, y: number, zoom?: number): void;
  releaseAnchor(): void;
  setViewport(w: number, h: number): void;
  setCaptureScroll(px: number): void;
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
    snapTo,
    releaseAnchor,
    setViewport,
    setCaptureScroll,
  };
}
