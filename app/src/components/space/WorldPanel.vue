<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { panelDomId, type WaypointId } from '../../space/waypoints';
import type { PanelNode } from '../../types/space';
import { useCamera } from '../../composables/useCamera';
import { useLaneScroll } from '../../composables/useLaneScroll';
import { GESTURE_NAV_ENABLED } from '../../featureFlags';
import { gridToWorld, focusWeight } from '../../space/layout';
import { FOCUS_FLOOR, FOCUS_RADIUS_FRACTION, FOCUS_SCALE_MIN } from '../../space/layoutConfig';

// A panel hosts either a core section or a generated notebook-entry island. Both
// supply a `node` (route + grid position + label) — the route is the active-state
// and DOM-id key. `waypointId` is passed only for core sections (the gesture-nav
// wiring is waypoint-only and feature-gated off).
const props = defineProps<{ node: PanelNode; waypointId?: WaypointId }>();

const { camera, viewport, spacing, setCaptureScroll } = useCamera();
const route = useRoute();
const isActive = computed(() => route.path === props.node.route);
const panelId = computed(() => panelDomId(props.node.route));

// Physical position breathes with the viewport via responsive spacing.
const world = computed(() => gridToWorld(props.node, spacing.value));

// Focal falloff: crisp + interactive when centred under the camera; receding
// (faded, slightly smaller, click-through) as it leaves the focus radius.
const focus = computed(() => {
  const radius = Math.min(spacing.value.col, spacing.value.row) * FOCUS_RADIUS_FRACTION;
  return focusWeight(world.value, camera.value, viewport.value, { radius, floor: FOCUS_FLOOR });
});

const style = computed(() => {
  const scale = FOCUS_SCALE_MIN + (1 - FOCUS_SCALE_MIN) * focus.value;
  return {
    transform: `translate(${world.value.x}px, ${world.value.y}px) translate(-50%, -50%) scale(${scale})`,
    opacity: focus.value,
    // Only the ACTIVE island is interactive; receded neighbours are true
    // click-through (grid cell-toggling works over them, and their links
    // can't catch stray clicks mid-fly). This used to be a focus threshold
    // (focus > 0.5), but FOCUS_FLOOR = 0.7 means focus never drops that low,
    // so the threshold silently made EVERY island permanently clickable —
    // the opposite of the documented intent. Keyboard focus is unaffected
    // (pointer-events doesn't gate tab order); cameraSync moves focus to the
    // active panel on arrival.
    pointerEvents: (isActive.value ? 'auto' : 'none') as 'auto' | 'none',
    // EVERY panel's box is bounded to the TRUE viewport height (the stage
    // height the camera centres on), not just the active one. Two reasons:
    //   1. The active island's scroll box must match the viewport exactly — a
    //      CSS `svh` unit diverges from it under html{zoom}, clipping content a
    //      ~chrome-height early at top/bottom. The measured height fixes that.
    //   2. An INACTIVE panel is centred on its constellation point via
    //      translate(-50%,-50%); with no height cap its box is as tall as its
    //      content, so a long article (the notebook entries run to many
    //      thousands of px) extends half its height in EACH direction and
    //      bleeds over neighbouring islands laid out nearby (e.g. a notebook
    //      entry reaching down across the Demos section one row below). Capping
    //      every box at viewport height + clipping inactive panels (overflow
    //      hidden, in CSS) makes a tall island a bounded preview card instead.
    // Same value in both states also means no box-size jump on activation.
    maxHeight: `${viewport.value.h}px`,
  };
});

// ── Native vertical scroll (the captured island) ─────────────────────────────
// When this panel is the active route it becomes a real scroll container. Its
// scrollTop folds into the camera's vertical offset so the GoL grid pans with
// the scroll while the panel frame stays pinned (see useCamera). The grid reads
// scrollTop on the render rAF (AppBackground's frame loop), NOT the throttled
// `scroll` event, so the grid stays frame-locked to the native scroll.
const panelRef = ref<HTMLElement | null>(null);

// Arriving at an island lands at its top.
watch(isActive, (active) => {
  if (active && panelRef.value) {
    panelRef.value.scrollTop = 0;
    setCaptureScroll(0);
  }
});

// Gesture navigation (scroll/swipe break-away to a neighbour) is feature-gated
// off — the compass + header links are the navigation. With the flag false the
// bundler strips useLaneScroll entirely. It's core-waypoint-only (entry islands
// don't lane-scroll), so it's wired only when a waypointId is present.
const waypointId = props.waypointId;
if (GESTURE_NAV_ENABLED && waypointId) {
  useLaneScroll({ el: panelRef, isActive, waypointId });
}
</script>

<template>
  <section
    :id="panelId"
    ref="panelRef"
    class="world-panel"
    :class="{ 'world-panel--scroll': isActive }"
    :style="style"
    :aria-current="isActive ? 'page' : undefined"
    :aria-label="node.label"
    tabindex="-1"
    data-grid-ignore-click="true"
  >
    <slot />
  </section>
</template>

<style scoped>
.world-panel {
  position: absolute;
  left: 0;
  top: 0;
  width: min(100vw, 1200px);
  /* Bounded to the viewport-height cap set inline (see the style computed):
     an inactive panel taller than its box is CLIPPED to a preview card rather
     than overflowing past its constellation point onto neighbouring islands.
     The active panel re-opens the vertical axis to a scroll container below;
     the horizontal axis stays clipped either way (content never exceeds the
     panel width, so there is nothing to scroll sideways). */
  overflow: hidden;
  /* pointer-events + opacity are driven inline by the focal falloff. */
  outline: none;
  /* No permanent will-change: 5 viewport-sized layers blow Firefox's tiny
     will-change budget (it's then ignored + warns). Transform/opacity still
     composite on-demand during the fly. */
}

/* The active island is a native vertical scroll container, so tall content
   (the resume list) is reachable by scrolling. overscroll-behavior: contain
   stops scroll-chaining and is the break-away edge signal. */
.world-panel--scroll {
  /* max-height is set inline from the measured viewport height (see the style
     computed) so it matches the camera's centring basis exactly under zoom.
     This re-opens the vertical axis over the base's `overflow: hidden` — an
     active island scrolls; an inactive one clips. Both land at scrollTop 0
     showing the content top, so activation is seamless (no jump). */
  overflow-y: auto;
  overscroll-behavior: contain;
  /* Touch keeps vertical native-scroll; horizontal-swipe nav is deferred. */
  touch-action: pan-y;
  /* Scrollable, but the scrollbar is hidden — the grid pan is the scroll cue. */
  scrollbar-width: none; /* Firefox */
}

.world-panel--scroll::-webkit-scrollbar {
  display: none; /* WebKit / Blink */
}
</style>
