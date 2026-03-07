<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { TextBlock, TextRenderMode } from '../../types/text';
import { DEFAULT_FONT, DEFAULT_TEXT_COLOR, MAX_TEXT_BLOCKS } from '../../types/text';

const props = defineProps<{
  blocks: TextBlock[];
}>();

const emit = defineEmits<{
  (e: 'add-text', block: TextBlock): void;
  (e: 'update-text', block: TextBlock): void;
  (e: 'remove-text', id: string): void;
  (e: 'clear-text'): void;
  (e: 'text-tool-change', payload: { enabled: boolean; font: string; renderMode: TextRenderMode; color: string }): void;
}>();

const drawEnabled = ref(false);
const font = ref(DEFAULT_FONT);
const renderMode = ref<TextRenderMode>('cells');
const color = ref(DEFAULT_TEXT_COLOR);

const renderModeItems = [
  { title: 'Cells (frozen)', value: 'cells' },
  { title: 'SDF (visual)', value: 'sdf' },
  { title: 'Both', value: 'both' },
];

const safeBlocks = computed<TextBlock[]>(() =>
  props.blocks.filter((b): b is TextBlock => (
    !!b && typeof b.id === 'string' && b.id.length > 0 && typeof b.text === 'string'
  )),
);

const canDraw = computed(() => safeBlocks.value.length < MAX_TEXT_BLOCKS);

function currentSettings(): { enabled: boolean; font: string; renderMode: TextRenderMode; color: string } {
  return { enabled: drawEnabled.value, font: font.value, renderMode: renderMode.value, color: color.value };
}

function toggleDraw(): void {
  drawEnabled.value = !drawEnabled.value;
  emit('text-tool-change', currentSettings());
}

// Re-emit settings whenever they change while the tool is active.
watch([font, renderMode, color], () => {
  if (drawEnabled.value) {
    emit('text-tool-change', currentSettings());
  }
});

function shortId(block: TextBlock): string {
  return block.id.slice(0, 6);
}

function toggle(block: TextBlock): void {
  emit('update-text', { ...block, enabled: !block.enabled, updatedAt: Date.now() });
}
</script>

<template>
  <div class="text-tab">
    <p class="text-caption text-medium-emphasis mb-2">
      Click &amp; drag on the grid to set position and width
    </p>

    <v-btn
      :color="drawEnabled ? 'primary' : undefined"
      :variant="drawEnabled ? 'flat' : 'tonal'"
      :disabled="!canDraw && !drawEnabled"
      size="small"
      block
      @click="toggleDraw"
    >
      {{ drawEnabled ? 'Drawing — click & drag on grid' : 'Place Text Block' }}
    </v-btn>
    <div v-if="safeBlocks.length >= MAX_TEXT_BLOCKS" class="text-caption mt-1" style="opacity: 0.7">
      Max {{ MAX_TEXT_BLOCKS }} blocks reached.
    </div>

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

    <div class="text-list">
      <div v-for="block in safeBlocks" :key="block.id" class="text-row">
        <div class="text-info">
          <div>#{{ shortId(block) }} &middot; "{{ block.text }}" &middot; {{ block.renderMode }}</div>
          <div class="text-coords">
            <span class="color-dot" :style="{ background: block.color || DEFAULT_TEXT_COLOR }"></span>
            cell ({{ block.cellX }},{{ block.cellY }}) w={{ block.cellsWide }}
          </div>
        </div>
        <div class="text-actions">
          <v-btn size="x-small" variant="text" @click="toggle(block)">{{ block.enabled ? 'Disable' : 'Enable' }}</v-btn>
          <v-btn size="x-small" variant="text" color="error" @click="emit('remove-text', block.id)">Delete</v-btn>
        </div>
      </div>
      <div v-if="safeBlocks.length === 0" class="text-empty">No text blocks.</div>
    </div>

    <v-btn class="mt-3" size="small" color="error" variant="text" :disabled="safeBlocks.length === 0" @click="emit('clear-text')">
      Clear All
    </v-btn>
  </div>
</template>

<style scoped>
.text-list {
  max-height: 240px;
  overflow: auto;
}

.text-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.text-info {
  min-width: 0;
  font-size: 0.76rem;
  line-height: 1.2;
}

.text-coords {
  opacity: 0.72;
}

.text-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.text-empty {
  font-size: 0.8rem;
  opacity: 0.7;
  padding: 6px 0;
}

.color-swatch {
  width: 28px;
  height: 28px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0;
  cursor: pointer;
  background: none;
}

.color-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 4px;
}
</style>
