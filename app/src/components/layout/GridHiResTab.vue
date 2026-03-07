<script setup lang="ts">
import { ref } from 'vue';
import type { HiResRegion } from '../../types/hiresRegion';
import { HIRES_MULTIPLIER } from '../../types/hiresRegion';

defineProps<{
  region: HiResRegion | null;
}>();

const emit = defineEmits<{
  (e: 'set-region', region: HiResRegion): void;
  (e: 'clear-region'): void;
  (e: 'hires-tool-change', payload: { enabled: boolean }): void;
}>();

const drawEnabled = ref(false);

function toggleDraw(): void {
  drawEnabled.value = !drawEnabled.value;
  emit('hires-tool-change', { enabled: drawEnabled.value });
}

function toggleEnabled(region: HiResRegion): void {
  emit('set-region', { ...region, enabled: !region.enabled, updatedAt: Date.now() });
}

function toggleGrid(region: HiResRegion): void {
  emit('set-region', { ...region, showGrid: !region.showGrid, updatedAt: Date.now() });
}

function toggleBaseGrid(region: HiResRegion): void {
  emit('set-region', { ...region, showBaseGrid: !region.showBaseGrid, updatedAt: Date.now() });
}

function toggleBorder(region: HiResRegion): void {
  emit('set-region', { ...region, showBorder: !region.showBorder, updatedAt: Date.now() });
}
</script>

<template>
  <div class="hires-tab">
    <p class="text-caption text-medium-emphasis mb-2">
      {{ HIRES_MULTIPLIER }}x multiplier — click and drag on the grid to place a region
    </p>

    <template v-if="!region">
      <v-btn
        :color="drawEnabled ? 'primary' : undefined"
        :variant="drawEnabled ? 'flat' : 'tonal'"
        size="small"
        block
        @click="toggleDraw"
      >
        {{ drawEnabled ? 'Drawing — click & drag on grid' : 'Draw Hi-Res Region' }}
      </v-btn>
    </template>

    <template v-else>
      <v-card variant="outlined" density="compact" class="pa-2 mb-2">
        <div class="d-flex align-center justify-space-between">
          <span class="text-body-2">
            ({{ region.x1 }}, {{ region.y1 }}) — ({{ region.x2 }}, {{ region.y2 }})
          </span>
          <v-chip size="x-small" :color="region.enabled ? 'success' : 'grey'" variant="flat">
            {{ region.enabled ? 'Active' : 'Paused' }}
          </v-chip>
        </div>
        <div class="text-caption text-medium-emphasis">
          {{ HIRES_MULTIPLIER }}x · {{ (region.x2 - region.x1 + 1) * (region.y2 - region.y1 + 1) }} base cells
        </div>
        <div class="d-flex align-center gap-2 mt-2">
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
          <v-btn size="x-small" variant="tonal" color="error" @click="$emit('clear-region')">
            Delete
          </v-btn>
        </div>
      </v-card>
    </template>
  </div>
</template>
