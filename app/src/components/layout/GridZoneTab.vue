<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { BlankZone, BlankMode, EdgeStyle, BlankZoneDraft, BlankZoneRect } from '../../types/blankZones';

const props = defineProps<{
  zones: BlankZone[];
  previewRect?: BlankZoneRect | null;
}>();

const emit = defineEmits<{
  (e: 'add-zone', zone: BlankZone): void;
  (e: 'update-zone', zone: BlankZone): void;
  (e: 'remove-zone', id: string): void;
  (e: 'clear-zones'): void;
  (e: 'tool-change', payload: { enabled: boolean; snapMajor: boolean }): void;
  (e: 'draft-change', draft: BlankZoneDraft): void;
}>();

const toolEnabled = ref(false);
const snapMajor = ref(false);
const x1 = ref(0);
const y1 = ref(0);
const x2 = ref(4);
const y2 = ref(4);
const mode = ref<BlankMode>('both');
const edgeStyle = ref<EdgeStyle>('none');
const edgeWidth = ref(1);
const edgeOpacity = ref(1);
const fadeStrength = ref(0.6);
const notePitch = ref(2);
const hideInteriorBorder = ref(false);

const safeZones = computed<BlankZone[]>(() =>
  props.zones.filter((zone): zone is BlankZone => (
    !!zone
    && typeof zone.id === 'string'
    && zone.id.length > 0
    && typeof zone.x1 === 'number'
    && typeof zone.y1 === 'number'
    && typeof zone.x2 === 'number'
    && typeof zone.y2 === 'number'
    && typeof zone.mode === 'string'
    && !!zone.edge
    && typeof zone.edge.style === 'string'
  )),
);

function zoneShortId(zone: BlankZone): string {
  return zone.id.slice(0, 6);
}

function edgeFromInputs() {
  return {
    style: edgeStyle.value,
    widthCells: Math.max(1, Math.min(4, Math.trunc(edgeWidth.value))),
    opacity: Math.max(0, Math.min(1, edgeOpacity.value)),
    fadeStrength: edgeStyle.value === 'fade'
      ? Math.max(0, Math.min(1, fadeStrength.value))
      : undefined,
    notePitchCells: edgeStyle.value === 'noted'
      ? Math.max(1, Math.trunc(notePitch.value))
      : undefined,
    hideInteriorBorder: (edgeStyle.value === 'bold-major' || edgeStyle.value === 'noted')
      ? hideInteriorBorder.value
      : undefined,
  };
}

const modeItems = [
  { title: 'Both', value: 'both' },
  { title: 'Minor only', value: 'minor' },
  { title: 'Major only', value: 'major' },
];

const edgeItems = [
  { title: 'None', value: 'none' },
  { title: 'Bold Major', value: 'bold-major' },
  { title: 'Fade', value: 'fade' },
  { title: 'Noted', value: 'noted' },
];

function zoneId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `zone-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function submitZone(): void {
  const now = Date.now();
  emit('add-zone', {
    id: zoneId(),
    x1: Math.min(Math.trunc(x1.value), Math.trunc(x2.value)),
    y1: Math.min(Math.trunc(y1.value), Math.trunc(y2.value)),
    x2: Math.max(Math.trunc(x1.value), Math.trunc(x2.value)),
    y2: Math.max(Math.trunc(y1.value), Math.trunc(y2.value)),
    mode: mode.value,
    edge: edgeFromInputs(),
    enabled: true,
    createdAt: now,
    updatedAt: now,
  });
}

function toggleZone(zone: BlankZone): void {
  emit('update-zone', {
    ...zone,
    enabled: !zone.enabled,
    updatedAt: Date.now(),
  });
}

function emitTool(): void {
  emit('tool-change', {
    enabled: toolEnabled.value,
    snapMajor: snapMajor.value,
  });
}

function emitDraft(): void {
  emit('draft-change', {
    mode: mode.value,
    edge: edgeFromInputs(),
  });
}

watch(toolEnabled, emitTool, { immediate: true });
watch(snapMajor, emitTool, { immediate: true });
watch([mode, edgeStyle, edgeWidth, edgeOpacity, fadeStrength, notePitch, hideInteriorBorder], emitDraft, { immediate: true });
</script>

<template>
  <v-switch
    v-model="toolEnabled"
    inset
    density="compact"
    color="primary"
    hide-details
    label="Zone Tool (drag on page)"
  />
  <v-switch
    v-model="snapMajor"
    class="mt-1"
    inset
    density="compact"
    hide-details
    label="Snap to major blocks (5x5)"
  />

  <div v-if="props.previewRect" class="zone-preview-text">
    Preview: ({{ props.previewRect.x1 }},{{ props.previewRect.y1 }}) &rarr; ({{ props.previewRect.x2 }},{{ props.previewRect.y2 }})
  </div>

  <v-row dense>
    <v-col cols="3"><v-text-field v-model.number="x1" label="x1" type="number" density="compact" hide-details /></v-col>
    <v-col cols="3"><v-text-field v-model.number="y1" label="y1" type="number" density="compact" hide-details /></v-col>
    <v-col cols="3"><v-text-field v-model.number="x2" label="x2" type="number" density="compact" hide-details /></v-col>
    <v-col cols="3"><v-text-field v-model.number="y2" label="y2" type="number" density="compact" hide-details /></v-col>
  </v-row>

  <v-row dense class="mt-2">
    <v-col cols="6">
      <v-select v-model="mode" :items="modeItems" item-title="title" item-value="value" label="Mode" density="compact" hide-details />
    </v-col>
    <v-col cols="6">
      <v-select v-model="edgeStyle" :items="edgeItems" item-title="title" item-value="value" label="Edge" density="compact" hide-details />
    </v-col>
  </v-row>

  <v-row dense class="mt-2">
    <v-col cols="6"><v-text-field v-model.number="edgeWidth" label="Edge width" type="number" min="1" max="4" density="compact" hide-details /></v-col>
    <v-col cols="6"><v-text-field v-model.number="edgeOpacity" label="Opacity (0-1)" type="number" min="0" max="1" step="0.1" density="compact" hide-details /></v-col>
  </v-row>

  <v-row v-if="edgeStyle === 'fade'" dense class="mt-2">
    <v-col cols="12"><v-text-field v-model.number="fadeStrength" label="Fade strength (0-1)" type="number" min="0" max="1" step="0.1" density="compact" hide-details /></v-col>
  </v-row>

  <v-row v-if="edgeStyle === 'noted'" dense class="mt-2">
    <v-col cols="12"><v-text-field v-model.number="notePitch" label="Note pitch cells" type="number" min="1" density="compact" hide-details /></v-col>
  </v-row>

  <v-row v-if="edgeStyle === 'bold-major' || edgeStyle === 'noted'" dense class="mt-1">
    <v-col cols="12">
      <v-switch
        v-model="hideInteriorBorder"
        inset
        density="compact"
        hide-details
        label="Hide borders inside adjacent zones"
      />
    </v-col>
  </v-row>

  <v-btn class="mt-3" size="small" color="primary" variant="tonal" @click="submitZone">
    Add Zone
  </v-btn>

  <v-divider class="my-3" />

  <div class="zone-list">
    <div v-for="zone in safeZones" :key="zone.id" class="zone-row">
      <div class="zone-text">
        <div>#{{ zoneShortId(zone) }} &middot; {{ zone.mode }} &middot; {{ zone.edge.style }}</div>
        <div class="zone-coords">({{ zone.x1 }},{{ zone.y1 }}) &rarr; ({{ zone.x2 }},{{ zone.y2 }})</div>
      </div>
      <div class="zone-actions">
        <v-btn size="x-small" variant="text" @click="toggleZone(zone)">{{ zone.enabled ? 'Disable' : 'Enable' }}</v-btn>
        <v-btn size="x-small" variant="text" color="error" @click="emit('remove-zone', zone.id)">Delete</v-btn>
      </div>
    </div>
    <div v-if="safeZones.length === 0" class="zone-empty">No zones.</div>
  </div>

  <v-btn class="mt-3" size="small" color="error" variant="text" :disabled="safeZones.length === 0" @click="emit('clear-zones')">
    Clear All
  </v-btn>
</template>

<style scoped>
.zone-list {
  max-height: 240px;
  overflow: auto;
}

.zone-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.zone-text {
  min-width: 0;
  font-size: 0.76rem;
  line-height: 1.2;
}

.zone-coords {
  opacity: 0.72;
}

.zone-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.zone-empty {
  font-size: 0.8rem;
  opacity: 0.7;
  padding: 6px 0;
}

.zone-preview-text {
  margin-bottom: 8px;
  font-size: 0.75rem;
  opacity: 0.75;
}
</style>
