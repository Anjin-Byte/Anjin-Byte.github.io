<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { findWaypoint, type WaypointId } from '../../space/waypoints';
import { useCamera } from '../../composables/useCamera';
import { useLaneScroll } from '../../composables/useLaneScroll';
import { gridToWorld, focusWeight } from '../../space/layout';
import { FOCUS_FLOOR, FOCUS_RADIUS_FRACTION, FOCUS_SCALE_MIN } from '../../space/layoutConfig';

const props = defineProps<{ waypointId: WaypointId }>();
const waypoint = findWaypoint(props.waypointId);

const { camera, viewport, spacing, setCaptureScroll } = useCamera();
const route = useRoute();
const isActive = computed(() => route.name === props.waypointId);

// Physical position breathes with the viewport via responsive spacing.
const world = computed(() => gridToWorld(waypoint, spacing.value));

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
  };
});

// ── Native vertical scroll (the captured island) ─────────────────────────────
// When this panel is the active route it becomes a real scroll container; its
// scrollTop folds into the camera's vertical offset so the GoL grid pans with
// the scroll while the panel frame stays pinned (see useCamera).
const panelRef = ref<HTMLElement | null>(null);

function onScroll(): void {
  if (isActive.value && panelRef.value) setCaptureScroll(panelRef.value.scrollTop);
}

// Arriving at an island lands at its top.
watch(isActive, (active) => {
  if (active && panelRef.value) {
    panelRef.value.scrollTop = 0;
    setCaptureScroll(0);
  }
});

// Two-finger scroll navigates: vertical over-scroll → north/south neighbour,
// horizontal scroll → east/west neighbour (biased axis lock; see useLaneScroll).
useLaneScroll({ el: panelRef, isActive, waypointId: props.waypointId });
</script>

<template>
  <section
    :id="`panel-${waypointId}`"
    ref="panelRef"
    class="world-panel"
    :class="{ 'world-panel--scroll': isActive }"
    :style="style"
    :aria-current="isActive ? 'page' : undefined"
    :aria-label="waypoint.label"
    tabindex="-1"
    data-grid-ignore-click="true"
    @scroll="onScroll"
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
  will-change: transform, opacity;
}

/* The active island is a native vertical scroll container, so tall content
   (the resume list) is reachable by scrolling. overscroll-behavior: contain
   stops scroll-chaining and is the break-away edge signal. */
.world-panel--scroll {
  max-height: 100svh;
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
