<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCompass } from '../../composables/useCompass';

// The waymarker compass: a circle per reachable island, placed by bearing and
// sized by distance (nearer = bigger), with an arrow pointing the true bearing
// and the destination icon. Positions come from the constrained solver in
// useCompass (rim-pull + repulsion + box containment); clicking flies there.
// DOM buttons (not canvas) so they stay keyboard- and screen-reader-accessible.
const router = useRouter();
const markers = useCompass();

function go(route: string): void {
  void router.push(route);
}
</script>

<template>
  <nav class="compass" aria-label="Move to a section">
    <button
      v-for="m in markers"
      :key="m.id"
      type="button"
      class="compass__marker"
      :style="{
        transform: `translate(${m.x}px, ${m.y}px) translate(-50%, -50%)`,
        width: `${m.radius * 2}px`,
        height: `${m.radius * 2}px`,
        opacity: m.opacity,
        pointerEvents: m.opacity > 0.4 ? 'auto' : 'none',
      }"
      :aria-label="`Go to ${m.label}`"
      :title="m.label"
      @click="go(m.route)"
    >
      <span class="compass__arrow" :style="{ transform: `rotate(${m.bearing}rad)` }" aria-hidden="true" />
      <v-icon :icon="m.icon" :size="Math.round(m.radius)" class="compass__icon" />
    </button>
  </nav>
</template>

<style scoped>
.compass {
  position: fixed;
  inset: 0;
  z-index: 5;
  pointer-events: none;
}

.compass__marker {
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
  padding: 0;
  border-radius: 50%;
  color: var(--theme-ink-secondary);
  background: color-mix(in oklab, var(--theme-surface) 82%, transparent);
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 58%, white 8%);
  backdrop-filter: blur(10px) saturate(1.05);
  -webkit-backdrop-filter: blur(10px) saturate(1.05);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 8px 22px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: color 0.18s ease, box-shadow 0.18s ease;
}

.compass__marker:hover,
.compass__marker:focus-visible {
  color: var(--theme-ink);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 10px 26px rgba(0, 0, 0, 0.16);
  outline: none;
}

/* A full-size layer rotated to the true bearing; its triangle sits just past the
   right edge (bearing 0 = +x), so rotating points it at the island. */
.compass__arrow {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.compass__arrow::after {
  content: '';
  position: absolute;
  right: -5px;
  top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-left-color: currentColor;
}

.compass__icon {
  pointer-events: none;
}
</style>
