<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Component } from 'vue';
import { useCamera } from '../../composables/useCamera';
import WorldPanel from './WorldPanel.vue';
import HeroSection from '../sections/HeroSection.vue';
import ProjectsSection from '../sections/ProjectsSection.vue';
import ResumeSection from '../sections/ResumeSection.vue';
import ContactSection from '../sections/ContactSection.vue';
import NotebookSection from '../sections/NotebookSection.vue';
import NotebookPage from '../sections/NotebookPage.vue';
import { findWaypoint, type WaypointId } from '../../space/waypoints';
import { notebookNodes } from '../../space/notebookNodes';

// WorldStage hosts the transformed world plane. All panels coexist on the
// plane (so the camera can fly past them); the plane's transform is the live
// camera. Core sections mount in fixed-waypoint panels; notebook entries mount
// in generated entry-coordinate panels (one per markdown note).
const { cameraStyle, setViewport, isAnimating } = useCamera();

// The core-section registry: one entry per waypoint-anchored panel. `id` is
// typed `WaypointId`, so an entry naming a non-existent waypoint (or a stale one
// after a WAYPOINTS edit) is a COMPILE error — the panel list can't silently
// drift from the constellation. Adding a core section = one row here (+ its
// WAYPOINTS row, which routing needs anyway); the template renders it via v-for,
// exactly like the data-driven notebook layer below. (interface-audit S1.)
const CORE_SECTIONS: readonly { id: WaypointId; component: Component }[] = [
  { id: 'hero',     component: HeroSection },
  { id: 'projects', component: ProjectsSection },
  { id: 'resume',   component: ResumeSection },
  { id: 'contact',  component: ContactSection },
  { id: 'notebook', component: NotebookSection },
];
const coreSections = CORE_SECTIONS.map((s) => ({ ...s, node: findWaypoint(s.id) }));

const stageRef = ref<HTMLElement | null>(null);
let resizeObserver: ResizeObserver | null = null;

// Vertical wheel anywhere in the viewport drives the active island's native
// scroll — including the side margins outside the content column, where the
// wheel would otherwise hit the grid canvas and do nothing (the document is
// overflow:hidden). Over the panel itself, native scroll already handles it, so
// we forward only from outside it; this leaves margin clicks falling through to
// the grid untouched. The programmatic scroll fires the panel's `scroll` event,
// so the existing camera sync is unchanged.
function onMarginWheel(e: WheelEvent): void {
  // ctrl+wheel is the browser's zoom gesture (and what a trackpad pinch is
  // reported as). Forwarding it as scroll — and then preventDefault-ing —
  // silently disabled page zoom over the margins, which is a WCAG 1.4.4 path.
  if (e.ctrlKey) return;
  const panel = document.querySelector<HTMLElement>('.world-panel--scroll');
  if (!panel || panel.contains(e.target as Node)) return;
  // Normalise wheel delta to px: Firefox reports lines (deltaMode 1) for mouse
  // wheels; some inputs report pages (2).
  const step = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? panel.clientHeight : 1;
  panel.scrollTop += e.deltaY * step;
  e.preventDefault();
}

onMounted(() => {
  const el = stageRef.value;
  if (!el) return;
  // Feed the stage's own box size to the camera: the centering term in the
  // transform needs the live viewport dimensions, and measuring the element the
  // panels actually live in beats re-deriving them from window/vh units.
  const sync = (): void => setViewport(el.clientWidth, el.clientHeight);
  sync();
  resizeObserver = new ResizeObserver(sync);
  resizeObserver.observe(el);
  window.addEventListener('wheel', onMarginWheel, { passive: false });
});

onUnmounted(() => {
  resizeObserver?.disconnect();
  window.removeEventListener('wheel', onMarginWheel);
});
</script>

<template>
  <!-- The stage is the document's <main>: the only landmark holding content, as
       opposed to AppChrome (identity + theme) and NavSidebar (its own <nav>).
       It wraps ALL panels rather than just the active one, because swapping the
       tag per active state would remount the panel; the inactive panels are
       `inert` (WorldPanel), so they are already out of the a11y tree and the
       landmark exposes exactly the active island. `tabindex="-1"` makes it a
       valid target for the skip link in App.vue. -->
  <main id="main-content" ref="stageRef" class="world-stage" tabindex="-1">
    <div class="world-plane" :class="{ 'world-plane--animating': isAnimating }" :style="cameraStyle">
      <WorldPanel v-for="s in coreSections" :key="s.id" :node="s.node" :waypoint-id="s.id">
        <component :is="s.component" />
      </WorldPanel>
      <WorldPanel v-for="entry in notebookNodes" :key="entry.slug" :node="entry">
        <NotebookPage :entry="entry" />
      </WorldPanel>
    </div>
  </main>
</template>

<style scoped>
.world-stage {
  position: fixed;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  /* Click-through: empty stage clicks fall to the document handler (cell
     toggle); panels re-enable pointer-events for their own content. */
  pointer-events: none;
}

.world-plane {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  transform-origin: 0 0;
  pointer-events: none;
}

/* will-change only DURING a fly — a transient hint that's dropped at rest. A
   permanent one promotes a constellation-sized layer that blows Firefox's
   will-change budget (then it's ignored and warns). */
.world-plane--animating {
  will-change: transform;
}
</style>
