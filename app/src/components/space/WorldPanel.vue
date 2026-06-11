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
    pointerEvents: (focus.value > 0.5 ? 'auto' : 'none') as 'auto' | 'none',
    // The active island's scroll box must match the TRUE viewport — the stage
    // height the camera centres on. A CSS `svh` unit diverges from it under
    // html{zoom}, leaving the box short and centred, so content clipped a
    // ~chrome-height early at top (masked by the header) and bottom (was masked
    // by the footer). Driving the height from the measured viewport fixes both.
    maxHeight: isActive.value ? `${viewport.value.h}px` : undefined,
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
     computed) so it matches the camera's centring basis exactly under zoom. */
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
