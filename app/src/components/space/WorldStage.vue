<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useCamera } from '../../composables/useCamera';
import WorldPanel from './WorldPanel.vue';
import HeroSection from '../sections/HeroSection.vue';
import ProjectsSection from '../sections/ProjectsSection.vue';
import ResumeSection from '../sections/ResumeSection.vue';
import ContactSection from '../sections/ContactSection.vue';
import AboutSection from '../sections/AboutSection.vue';

// WorldStage hosts the transformed world plane. All panels coexist on the
// plane (so the camera can fly past them); the plane's transform is the live
// camera. Sections mount UNCHANGED inside their panels.
const { cameraStyle, setViewport, isAnimating } = useCamera();

const stageRef = ref<HTMLDivElement | null>(null);
let resizeObserver: ResizeObserver | null = null;

// Vertical wheel anywhere in the viewport drives the active island's native
// scroll — including the side margins outside the content column, where the
// wheel would otherwise hit the grid canvas and do nothing (the document is
// overflow:hidden). Over the panel itself, native scroll already handles it, so
// we forward only from outside it; this leaves margin clicks falling through to
// the grid untouched. The programmatic scroll fires the panel's `scroll` event,
// so the existing camera sync is unchanged.
function onMarginWheel(e: WheelEvent): void {
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
  // Feed the stage's own box size to the camera (robust to html { zoom }):
  // the centering term in the transform needs the live viewport dimensions.
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
  <div ref="stageRef" class="world-stage">
    <div class="world-plane" :class="{ 'world-plane--animating': isAnimating }" :style="cameraStyle">
      <WorldPanel waypoint-id="hero"><HeroSection /></WorldPanel>
      <WorldPanel waypoint-id="projects"><ProjectsSection /></WorldPanel>
      <WorldPanel waypoint-id="resume"><ResumeSection /></WorldPanel>
      <WorldPanel waypoint-id="contact"><ContactSection /></WorldPanel>
      <WorldPanel waypoint-id="about"><AboutSection /></WorldPanel>
    </div>
  </div>
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
