<script setup lang="ts">
import { ref, computed } from 'vue';
import type { HiResRegion } from '../../types/hiresRegion';
import { HIRES_MULTIPLIER, MAX_HIRES_REGIONS } from '../../types/hiresRegion';

const props = defineProps<{
  regions: HiResRegion[];
}>();

const emit = defineEmits<{
  (e: 'add-region', region: HiResRegion): void;
  (e: 'update-region', region: HiResRegion): void;
  (e: 'remove-region', id: string): void;
  (e: 'clear-regions'): void;
  (e: 'hires-tool-change', payload: { enabled: boolean }): void;
}>();

const drawEnabled = ref(false);
const canDraw = computed(() => props.regions.length < MAX_HIRES_REGIONS);

function toggleDraw(): void {
  drawEnabled.value = !drawEnabled.value;
  emit('hires-tool-change', { enabled: drawEnabled.value });
}

function toggleEnabled(region: HiResRegion): void {
  emit('update-region', { ...region, enabled: !region.enabled, updatedAt: Date.now() });
}

function toggleGrid(region: HiResRegion): void {
  emit('update-region', { ...region, showGrid: !region.showGrid, updatedAt: Date.now() });
}

function toggleBaseGrid(region: HiResRegion): void {
  emit('update-region', { ...region, showBaseGrid: !region.showBaseGrid, updatedAt: Date.now() });
}

function toggleBorder(region: HiResRegion): void {
  emit('update-region', { ...region, showBorder: !region.showBorder, updatedAt: Date.now() });
}

function shortId(region: HiResRegion): string {
  return region.id.slice(0, 6);
}
</script>

<template>
  <div class="hires-tab">
    <p class="text-caption text-medium-emphasis mb-2">
      {{ HIRES_MULTIPLIER }}x multiplier — click and drag on the grid to place a region
    </p>

    <v-btn
      :color="drawEnabled ? 'primary' : undefined"
      :variant="drawEnabled ? 'flat' : 'tonal'"
      :disabled="!canDraw && !drawEnabled"
      size="small"
      block
      @click="toggleDraw"
    >
      {{ drawEnabled ? 'Drawing — click & drag on grid' : 'Draw Hi-Res Region' }}
    </v-btn>
    <div v-if="regions.length >= MAX_HIRES_REGIONS" class="text-caption mt-1" style="opacity: 0.7">
      Max {{ MAX_HIRES_REGIONS }} regions reached.
    </div>

    <v-divider v-if="regions.length > 0" class="my-3" />

    <div class="region-list">
      <v-card v-for="region in regions" :key="region.id" variant="outlined" density="compact" class="pa-2 mb-2">
        <div class="d-flex align-center justify-space-between">
          <span class="text-body-2">
            #{{ shortId(region) }} ({{ region.x1 }}, {{ region.y1 }}) — ({{ region.x2 }}, {{ region.y2 }})
          </span>
          <v-chip size="x-small" :color="region.enabled ? 'success' : 'grey'" variant="flat">
            {{ region.enabled ? 'Active' : 'Paused' }}
          </v-chip>
        </div>
        <div class="text-caption text-medium-emphasis">
          {{ HIRES_MULTIPLIER }}x · {{ (region.x2 - region.x1 + 1) * (region.y2 - region.y1 + 1) }} base cells
        </div>
        <div class="d-flex align-center gap-2 mt-2 flex-wrap">
          <v-btn size="x-small" variant="tonal" @click="toggleEnabled(region)">
            {{ region.enabled ? 'Pause' : 'Resume' }}
          </v-btn>
          <v-btn size="x-small" variant="tonal" @click="toggleGrid(region)">
            Grid {{ region.showGrid ? 'On' : 'Off' }}
          </v-btn>
          <v-btn size="x-small" variant="tonal" @click="toggleBaseGrid(region)">
            Base {{ region.showBaseGrid ? 'On' : 'Off' }}
          </v-btn>
          <v-btn size="x-small" variant="tonal" @click="toggleBorder(region)">
            Border {{ region.showBorder ? 'On' : 'Off' }}
          </v-btn>
          <v-btn size="x-small" variant="tonal" color="error" @click="$emit('remove-region', region.id)">
            Delete
          </v-btn>
        </div>
      </v-card>
      <div v-if="regions.length === 0" class="text-caption" style="opacity: 0.7; padding: 6px 0">
        No hi-res regions.
      </div>
    </div>

    <v-btn
      v-if="regions.length > 0"
      class="mt-2"
      size="small"
      color="error"
      variant="text"
      @click="$emit('clear-regions')"
    >
      Clear All
    </v-btn>
  </div>
</template>

<style scoped>
.region-list {
  max-height: 280px;
  overflow: auto;
}
</style>
