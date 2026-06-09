<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { coerceWaypointId, gridNeighbor } from '../../space/waypoints';

// On-screen chevrons are the universal, accessible way to move between adjacent
// islands — they work on every browser/input (unlike the trackpad scroll
// gesture) and make the spatial model discoverable ("there's content this way").
// A chevron shows only when a neighbour exists in that direction; clicking it
// flies the camera there via the router, reusing the same fly as everything else.

interface Direction {
  key: string;
  dgx: number;
  dgy: number;
  icon: string;
  edge: 'left' | 'right' | 'top' | 'bottom';
}

const DIRECTIONS: readonly Direction[] = [
  { key: 'west', dgx: -1, dgy: 0, icon: 'mdi-chevron-left', edge: 'left' },
  { key: 'east', dgx: 1, dgy: 0, icon: 'mdi-chevron-right', edge: 'right' },
  { key: 'north', dgx: 0, dgy: -1, icon: 'mdi-chevron-up', edge: 'top' },
  { key: 'south', dgx: 0, dgy: 1, icon: 'mdi-chevron-down', edge: 'bottom' },
];

const route = useRoute();
const router = useRouter();
const currentId = computed(() => coerceWaypointId(route.name));

const links = computed(() =>
  DIRECTIONS.flatMap((d) => {
    const neighbour = gridNeighbor(currentId.value, d.dgx, d.dgy);
    return neighbour ? [{ d, neighbour }] : [];
  }),
);

function go(target: string): void {
  void router.push(target);
}
</script>

<template>
  <nav class="lane-compass" aria-label="Move to an adjacent section">
    <v-btn
      v-for="{ d, neighbour } in links"
      :key="d.key"
      :icon="d.icon"
      :aria-label="`Go to ${neighbour.label}`"
      :title="neighbour.label"
      variant="flat"
      size="small"
      class="lane-compass__btn"
      :class="`lane-compass__btn--${d.edge}`"
      @click="go(neighbour.route)"
    />
  </nav>
</template>

<style scoped>
.lane-compass__btn {
  position: fixed;
  z-index: 5;
  color: var(--theme-ink-secondary) !important;
  background: color-mix(in oklab, var(--theme-surface) 80%, transparent) !important;
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 58%, white 8%);
  backdrop-filter: blur(10px) saturate(1.05);
  -webkit-backdrop-filter: blur(10px) saturate(1.05);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 8px 22px rgba(0, 0, 0, 0.1);
  opacity: 0.62;
  transition: opacity 0.18s ease, color 0.18s ease;
}

.lane-compass__btn:hover,
.lane-compass__btn:focus-visible {
  opacity: 1;
  color: var(--theme-ink) !important;
}

.lane-compass__btn--left {
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
}

.lane-compass__btn--right {
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
}

.lane-compass__btn--top {
  top: calc(76px + var(--safe-area-top));
  left: 50%;
  transform: translateX(-50%);
}

.lane-compass__btn--bottom {
  bottom: calc(76px + var(--safe-area-bottom));
  left: 50%;
  transform: translateX(-50%);
}
</style>
