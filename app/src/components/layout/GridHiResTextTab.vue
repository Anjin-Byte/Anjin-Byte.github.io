<script setup lang="ts">
import { ref, watch } from 'vue';
import type { TextRenderMode } from '../../types/text';
import { DEFAULT_FONT, DEFAULT_TEXT_COLOR } from '../../types/text';
import { HIRES_MULTIPLIER } from '../../types/hiresRegion';

export interface HiResTextToolPayload {
  enabled: boolean;
  font: string;
  renderMode: TextRenderMode;
  color: string;
  showGrid: boolean;
  showBaseGrid: boolean;
  showBorder: boolean;
}

const emit = defineEmits<{
  (e: 'hires-text-tool-change', payload: HiResTextToolPayload): void;
}>();

const drawEnabled = ref(false);
const font = ref(DEFAULT_FONT);
const renderMode = ref<TextRenderMode>('cells');
const color = ref(DEFAULT_TEXT_COLOR);
const showGrid = ref(true);
const showBaseGrid = ref(true);
const showBorder = ref(true);

const renderModeItems = [
  { title: 'Cells (frozen)', value: 'cells' },
  { title: 'SDF (visual)', value: 'sdf' },
  { title: 'Both', value: 'both' },
];

function currentPayload(): HiResTextToolPayload {
  return {
    enabled: drawEnabled.value,
    font: font.value,
    renderMode: renderMode.value,
    color: color.value,
    showGrid: showGrid.value,
    showBaseGrid: showBaseGrid.value,
    showBorder: showBorder.value,
  };
}

function toggleDraw(): void {
  drawEnabled.value = !drawEnabled.value;
  emit('hires-text-tool-change', currentPayload());
}

watch([font, renderMode, color, showGrid, showBaseGrid, showBorder], () => {
  if (drawEnabled.value) {
    emit('hires-text-tool-change', currentPayload());
  }
});
</script>

<template>
  <div class="hires-text-tab">
    <p class="text-caption text-medium-emphasis mb-2">
      {{ HIRES_MULTIPLIER }}x hi-res region with auto-fit text.
      Draw a region, type text (or leave empty for hi-res only).
    </p>

    <v-btn
      :color="drawEnabled ? 'primary' : undefined"
      :variant="drawEnabled ? 'flat' : 'tonal'"
      size="small"
      block
      @click="toggleDraw"
    >
      {{ drawEnabled ? 'Drawing — click & drag on grid' : 'Draw Hi-Res Text Region' }}
    </v-btn>

    <v-text-field
      v-model="font"
      label="Font (CSS)"
      density="compact"
      hide-details
      class="mt-3"
    />

    <v-row dense class="mt-2" align="center">
      <v-col cols="8">
        <v-select
          v-model="renderMode"
          :items="renderModeItems"
          item-title="title"
          item-value="value"
          label="Render Mode"
          density="compact"
          hide-details
        />
      </v-col>
      <v-col cols="4">
        <div class="d-flex align-center ga-2">
          <label class="text-caption" style="white-space: nowrap">Ink</label>
          <input v-model="color" type="color" class="color-swatch" />
        </div>
      </v-col>
    </v-row>

    <v-divider class="my-3" />

    <div class="text-caption text-medium-emphasis mb-2">Region defaults</div>
    <div class="d-flex align-center gap-2 flex-wrap">
      <v-checkbox v-model="showGrid" label="Grid" density="compact" hide-details class="flex-grow-0" />
      <v-checkbox v-model="showBaseGrid" label="Base grid" density="compact" hide-details class="flex-grow-0" />
      <v-checkbox v-model="showBorder" label="Border" density="compact" hide-details class="flex-grow-0" />
    </div>
  </div>
</template>

<style scoped>
.color-swatch {
  width: 28px;
  height: 28px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0;
  cursor: pointer;
  background: none;
}
</style>
