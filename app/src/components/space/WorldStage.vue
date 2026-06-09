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
const { cameraStyle, setViewport } = useCamera();

const stageRef = ref<HTMLDivElement | null>(null);
let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  const el = stageRef.value;
  if (!el) return;
  // Feed the stage's own box size to the camera (robust to html { zoom }):
  // the centering term in the transform needs the live viewport dimensions.
  const sync = (): void => setViewport(el.clientWidth, el.clientHeight);
  sync();
  resizeObserver = new ResizeObserver(sync);
  resizeObserver.observe(el);
});

onUnmounted(() => resizeObserver?.disconnect());
</script>

<template>
  <div ref="stageRef" class="world-stage">
    <div class="world-plane" :style="cameraStyle">
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
  will-change: transform;
}
</style>
