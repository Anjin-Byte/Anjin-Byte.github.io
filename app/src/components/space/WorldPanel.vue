<script setup lang="ts">
import { computed, ref, watch, type CSSProperties } from 'vue';
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

const style = computed<CSSProperties>(() => {
  const scale = FOCUS_SCALE_MIN + (1 - FOCUS_SCALE_MIN) * focus.value;
  return {
    transform: `translate(${world.value.x}px, ${world.value.y}px) translate(-50%, -50%) scale(${scale})`,
    opacity: focus.value,
    // Only the ACTIVE island is interactive; receded neighbours are true
    // click-through (grid cell-toggling works over them, and their links
    // can't catch stray clicks mid-fly). This used to be a focus threshold
    // (focus > 0.5), but FOCUS_FLOOR = 0.7 means focus never drops that low,
    // so the threshold silently made EVERY island permanently clickable —
    // the opposite of the documented intent. pointer-events does NOT gate tab
    // order, so `inert` (bound in the template) is its keyboard/AT counterpart;
    // cameraSync moves focus to the active panel on arrival.
    pointerEvents: (isActive.value ? 'auto' : 'none'),
    // EVERY panel's box is bounded to the TRUE viewport height (the stage
    // height the camera centres on), not just the active one. Two reasons:
    //   1. The active island's scroll box must match the viewport exactly, and
    //      it must match the SAME height the camera centres on. The measured
    //      stage height is that value by construction; a CSS `svh` unit is a
    //      second, independently-derived answer to the same question (it also
    //      diverged outright under the old html{zoom}).
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
  <!-- `inert` on every non-active panel. All 9+ panels stay mounted for the
       whole session (the camera flies past them), so without this a screen
       reader reads the entire constellation as one document — five coexisting
       <h1>s — and Tab walks into off-screen islands. Focusing an element inside
       a clipped panel also scrolls `.world-stage`, which permanently desyncs the
       DOM plane from the camera transform; inert removes that trigger too.
       `|| undefined` rather than a bare boolean: `inert` is not one of Vue's
       special boolean attrs, so on a browser without the DOM property (so the
       attribute path is taken) `:inert="false"` would render inert="false" —
       attribute PRESENT, i.e. the active panel inert. undefined removes it. -->
  <section
    :id="panelId"
    ref="panelRef"
    class="world-panel"
    :class="{ 'world-panel--scroll': isActive }"
    :style="style"
    :aria-current="isActive ? 'page' : undefined"
    :aria-label="node.label"
    :inert="!isActive || undefined"
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
  width: min(100vw, var(--panel-max));
  /* The island is the query container for everything inside it. Sections used
     to key their collapse off VIEWPORT width, which is the wrong quantity: the
     island is capped at --panel-max and, in rail mode, has --nav-reserve taken
     off its leading edge, so at a 961px viewport a section has 745px to work
     with, not 961. Keying off the container means a section answers "how much
     room do I have", which needs no coordination with anything — add a section
     and there is no breakpoint table to touch.

     `container-type: inline-size` implies `contain: layout style inline-size`.
     Two consequences worth naming: the panel becomes a containing block for
     absolutely/fixed-positioned descendants (checked — no section uses either),
     and its inline size may no longer depend on its contents (it does not; it
     is `min(100vw, var(--panel-max))`). */
  container-type: inline-size;
  container-name: island;
  /* Bounded to the viewport-height cap set inline (see the style computed):
     an inactive panel taller than its box is CLIPPED to a preview card rather
     than overflowing past its constellation point onto neighbouring islands.
     The active panel re-opens the vertical axis to a scroll container below;
     the horizontal axis stays clipped either way (content never exceeds the
     panel width, so there is nothing to scroll sideways). */
  overflow: hidden;
  /* Inherited by everything in the island. A single unbreakable token — an
     email address, a URL — is wider than its box at a large root font size and
     then gets CLIPPED here rather than wrapped, which is unrecoverable.

     `anywhere` rather than `break-word`, and the difference is the whole point:
     both break a word only when it cannot fit on a line of its own, so they
     render identically for prose. They differ in MIN-CONTENT contribution —
     only `anywhere` lets the break opportunities shrink min-content. A flex or
     grid item defaults to `min-width: auto`, i.e. "never smaller than
     min-content", so under `break-word` the item still refuses to shrink and
     the long token punches out of its parent anyway. Measured: the hero's email
     span sat 361px wide inside a 209px flex parent with `break-word` applied.

     No effect inside `white-space: pre` (the notebook's code blocks), which
     keep their own `overflow-x: auto` and stay horizontally scrollable. Every
     grid here carries an explicit numeric floor (`minmax(280px, …)`, `9rem`),
     so nothing else is free to collapse on the back of this. */
  overflow-wrap: anywhere;
  /* pointer-events + opacity are driven inline by the focal falloff. */
  outline: none;
  /* No permanent will-change: 5 viewport-sized layers blow Firefox's tiny
     will-change budget (it's then ignored + warns). Transform/opacity still
     composite on-demand during the fly. */
}

/* The active island is a native vertical scroll container, so tall content
   (the resume list) is reachable by scrolling. */
.world-panel--scroll {
  /* max-height is set inline from the measured viewport height (see the style
     computed) so it matches the camera's centring basis exactly.
     This re-opens the vertical axis over the base's `overflow: hidden` — an
     active island scrolls; an inactive one clips. Both land at scrollTop 0
     showing the content top, so activation is seamless (no jump). */
  overflow-y: auto;
  /* Y only. `overscroll-behavior: contain` (both axes) also suppressed the
     browser's horizontal back/forward gesture, and on a phone this element is
     most of the screen — so the site ate the back swipe. The vertical half is
     kept: it stops scroll-chaining, and it is what `breakAway.ts` documents.
     No `touch-action: pan-y` here either. That reserved the horizontal axis
     for swipe navigation, which is `GESTURE_NAV_ENABLED = false` and compiled
     out; all it did in practice was disable pinch-to-zoom over the island. */
  overscroll-behavior-y: contain;
  /* Scrollable, but the scrollbar is hidden — the grid pan is the scroll cue. */
  scrollbar-width: none; /* Firefox */
}

.world-panel--scroll::-webkit-scrollbar {
  display: none; /* WebKit / Blink */
}

/* ── Making room for the nav dock ─────────────────────────────────────────
   The dock is fixed chrome over the world plane; the island cannot see it, so
   the island has to be told. Both rules below are on the PANEL rather than on
   each section's container, because there are two container idioms in play
   (Vuetify `.v-container` in the five core sections, `.note-page-shell` in
   notebook entries) and this is one place instead of two. */

/* RAIL: step content clear by exactly the amount the rail intrudes, and no
   more. `(100vw - min(100vw, --panel-max)) / 2` is the island's own left
   margin, so once the viewport is wide enough that the margin already clears
   the rail (~1630px) this collapses to 0 and nothing moves. That is the whole
   mechanism — no second breakpoint, the geometry decides. */
@media (min-width: 961px) {
  .world-panel {
    padding-inline-start: max(
      0px,
      calc(var(--nav-reserve) - (100vw - min(100vw, var(--panel-max))) / 2)
    );
  }
}

/* BAR: the dock costs height instead of width. Reserve it at the END of the
   scroll so the last line of a resume or a note is not parked under the bar. */
@media (max-width: 960px) {
  .world-panel {
    padding-block-end: calc(
      var(--nav-bar-h) + var(--inset-chrome) * 2 + var(--safe-area-bottom)
    );
  }
}
</style>
