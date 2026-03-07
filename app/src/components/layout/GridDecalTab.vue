<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Decal, DecalKind, DecalBlendMode } from '../../types/decals';
import { DECAL_DEFAULT_TINT } from '../../types/decals';

const props = defineProps<{
  decals: Decal[];
}>();

const emit = defineEmits<{
  (e: 'add-decal', decal: Decal): void;
  (e: 'update-decal', decal: Decal): void;
  (e: 'remove-decal', id: string): void;
  (e: 'clear-decals'): void;
  (e: 'decal-tool-change', payload: { enabled: boolean; snapMajor: boolean }): void;
}>();

const toolEnabled = ref(false);
const snapMajor = ref(false);
const kind = ref<DecalKind>('solid');
const blendMode = ref<DecalBlendMode>('alpha');
const suppressCells = ref(false);
const tintR = ref(DECAL_DEFAULT_TINT[0]);
const tintG = ref(DECAL_DEFAULT_TINT[1]);
const tintB = ref(DECAL_DEFAULT_TINT[2]);
const tintA = ref(DECAL_DEFAULT_TINT[3]);
const coverage = ref(1.0);
const solidR = ref(DECAL_DEFAULT_TINT[0]);
const solidG = ref(DECAL_DEFAULT_TINT[1]);
const solidB = ref(DECAL_DEFAULT_TINT[2]);
const cellSize = ref(2);
const pitchCells = ref(4);
const dotRadius = ref(0.4);
const dotSpacing = ref(3);
const x1 = ref(0);
const y1 = ref(0);
const x2 = ref(4);
const y2 = ref(4);

const kindItems = [
  { title: 'Solid', value: 'solid' },
  { title: 'Checkerboard', value: 'checkerboard' },
  { title: 'Stripes', value: 'stripes' },
  { title: 'Dots', value: 'dots' },
];

const blendModeItems = [
  { title: 'Alpha', value: 'alpha' },
  { title: 'Multiply', value: 'multiply' },
  { title: 'Screen', value: 'screen' },
];

const safeDecals = computed<Decal[]>(() =>
  props.decals.filter((d): d is Decal => (
    !!d
    && typeof d.id === 'string'
    && d.id.length > 0
    && typeof d.x1 === 'number'
    && typeof d.y1 === 'number'
    && typeof d.x2 === 'number'
    && typeof d.y2 === 'number'
    && !!d.pattern
    && typeof d.pattern.kind === 'string'
  )),
);

function shortId(decal: Decal): string {
  return decal.id.slice(0, 6);
}

function buildPattern() {
  const k = kind.value;
  if (k === 'solid') {
    return {
      kind: k,
      coverage: Math.max(0, Math.min(1, coverage.value)),
      solidR: Math.max(0, Math.min(1, solidR.value)),
      solidG: Math.max(0, Math.min(1, solidG.value)),
      solidB: Math.max(0, Math.min(1, solidB.value)),
    };
  }
  if (k === 'checkerboard') return { kind: k, cellSize: Math.max(1, cellSize.value) };
  if (k === 'stripes') return { kind: k, pitchCells: Math.max(2, pitchCells.value) };
  if (k === 'dots') return { kind: k, dotRadius: Math.max(0.1, dotRadius.value), dotSpacing: Math.max(2, dotSpacing.value) };
  return { kind: k };
}

function genId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `decal-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function submit(): void {
  const now = Date.now();
  emit('add-decal', {
    id: genId(),
    x1: Math.min(Math.trunc(x1.value), Math.trunc(x2.value)),
    y1: Math.min(Math.trunc(y1.value), Math.trunc(y2.value)),
    x2: Math.max(Math.trunc(x1.value), Math.trunc(x2.value)),
    y2: Math.max(Math.trunc(y1.value), Math.trunc(y2.value)),
    pattern: buildPattern(),
    tint: [
      Math.max(0, Math.min(1, tintR.value)),
      Math.max(0, Math.min(1, tintG.value)),
      Math.max(0, Math.min(1, tintB.value)),
      Math.max(0, Math.min(1, tintA.value)),
    ],
    blendMode: blendMode.value,
    suppressCells: suppressCells.value,
    enabled: true,
    createdAt: now,
    updatedAt: now,
  });
}

function toggle(decal: Decal): void {
  emit('update-decal', { ...decal, enabled: !decal.enabled, updatedAt: Date.now() });
}

function emitTool(): void {
  emit('decal-tool-change', { enabled: toolEnabled.value, snapMajor: snapMajor.value });
}

watch(toolEnabled, emitTool, { immediate: true });
watch(snapMajor, emitTool, { immediate: true });
</script>

<template>
  <v-switch
    v-model="toolEnabled"
    class="mt-2"
    inset
    density="compact"
    color="primary"
    hide-details
    label="Decal Tool (drag on page)"
  />
  <v-switch
    v-model="snapMajor"
    class="mt-1"
    inset
    density="compact"
    hide-details
    label="Snap to major blocks (5x5)"
  />

  <v-row dense class="mt-2">
    <v-col cols="6">
      <v-select v-model="kind" :items="kindItems" item-title="title" item-value="value" label="Kind" density="compact" hide-details />
    </v-col>
    <v-col cols="6">
      <v-select v-model="blendMode" :items="blendModeItems" item-title="title" item-value="value" label="Blend" density="compact" hide-details />
    </v-col>
  </v-row>

  <template v-if="kind === 'solid'">
    <v-row dense class="mt-2">
      <v-col cols="12"><v-text-field v-model.number="coverage" label="Coverage (0-1)" type="number" min="0" max="1" step="0.1" density="compact" hide-details /></v-col>
    </v-row>
    <v-row dense class="mt-1">
      <v-col cols="4"><v-text-field v-model.number="solidR" label="R" type="number" min="0" max="1" step="0.05" density="compact" hide-details /></v-col>
      <v-col cols="4"><v-text-field v-model.number="solidG" label="G" type="number" min="0" max="1" step="0.05" density="compact" hide-details /></v-col>
      <v-col cols="4"><v-text-field v-model.number="solidB" label="B" type="number" min="0" max="1" step="0.05" density="compact" hide-details /></v-col>
    </v-row>
  </template>

  <v-row v-else-if="kind === 'checkerboard'" dense class="mt-2">
    <v-col cols="12"><v-text-field v-model.number="cellSize" label="Cell size (>=1)" type="number" min="1" density="compact" hide-details /></v-col>
  </v-row>

  <v-row v-else-if="kind === 'stripes'" dense class="mt-2">
    <v-col cols="12"><v-text-field v-model.number="pitchCells" label="Pitch cells (>=2)" type="number" min="2" density="compact" hide-details /></v-col>
  </v-row>

  <template v-else-if="kind === 'dots'">
    <v-row dense class="mt-2">
      <v-col cols="6"><v-text-field v-model.number="dotRadius" label="Radius (>=0.1)" type="number" min="0.1" step="0.1" density="compact" hide-details /></v-col>
      <v-col cols="6"><v-text-field v-model.number="dotSpacing" label="Spacing (>=2)" type="number" min="2" density="compact" hide-details /></v-col>
    </v-row>
  </template>

  <v-row dense class="mt-2">
    <v-col cols="3"><v-text-field v-model.number="tintR" label="TR" type="number" min="0" max="1" step="0.05" density="compact" hide-details /></v-col>
    <v-col cols="3"><v-text-field v-model.number="tintG" label="TG" type="number" min="0" max="1" step="0.05" density="compact" hide-details /></v-col>
    <v-col cols="3"><v-text-field v-model.number="tintB" label="TB" type="number" min="0" max="1" step="0.05" density="compact" hide-details /></v-col>
    <v-col cols="3"><v-text-field v-model.number="tintA" label="TA" type="number" min="0" max="1" step="0.05" density="compact" hide-details /></v-col>
  </v-row>

  <v-switch
    v-model="suppressCells"
    class="mt-1"
    inset
    density="compact"
    hide-details
    label="Suppress cells"
  />

  <v-row dense class="mt-2">
    <v-col cols="3"><v-text-field v-model.number="x1" label="x1" type="number" density="compact" hide-details /></v-col>
    <v-col cols="3"><v-text-field v-model.number="y1" label="y1" type="number" density="compact" hide-details /></v-col>
    <v-col cols="3"><v-text-field v-model.number="x2" label="x2" type="number" density="compact" hide-details /></v-col>
    <v-col cols="3"><v-text-field v-model.number="y2" label="y2" type="number" density="compact" hide-details /></v-col>
  </v-row>

  <v-btn class="mt-3" size="small" color="primary" variant="tonal" @click="submit">
    Add Decal
  </v-btn>

  <v-divider class="my-3" />

  <div class="decal-list">
    <div v-for="decal in safeDecals" :key="decal.id" class="decal-row">
      <div class="decal-text">
        <div>#{{ shortId(decal) }} &middot; {{ decal.pattern.kind }} &middot; {{ decal.blendMode }}</div>
        <div class="decal-coords">({{ decal.x1 }},{{ decal.y1 }}) &rarr; ({{ decal.x2 }},{{ decal.y2 }})</div>
      </div>
      <div class="decal-actions">
        <v-btn size="x-small" variant="text" @click="toggle(decal)">{{ decal.enabled ? 'Disable' : 'Enable' }}</v-btn>
        <v-btn size="x-small" variant="text" color="error" @click="emit('remove-decal', decal.id)">Delete</v-btn>
      </div>
    </div>
    <div v-if="safeDecals.length === 0" class="decal-empty">No decals.</div>
  </div>

  <v-btn class="mt-3" size="small" color="error" variant="text" :disabled="safeDecals.length === 0" @click="emit('clear-decals')">
    Clear All
  </v-btn>
</template>

<style scoped>
.decal-list {
  max-height: 240px;
  overflow: auto;
}

.decal-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.decal-text {
  min-width: 0;
  font-size: 0.76rem;
  line-height: 1.2;
}

.decal-coords {
  opacity: 0.72;
}

.decal-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.decal-empty {
  font-size: 0.8rem;
  opacity: 0.7;
  padding: 6px 0;
}
</style>
