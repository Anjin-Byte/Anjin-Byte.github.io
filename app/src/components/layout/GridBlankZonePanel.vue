<script setup lang="ts">
import { ref } from 'vue';
import type { BlankZone, BlankZoneDraft, BlankZoneRect } from '../../types/blankZones';
import type { Decal } from '../../types/decals';
import type { HiResRegion } from '../../types/hiresRegion';
import GridZoneTab from './GridZoneTab.vue';
import GridDecalTab from './GridDecalTab.vue';
import GridHiResTab from './GridHiResTab.vue';

defineProps<{
  zones: BlankZone[];
  previewRect?: BlankZoneRect | null;
  decals: Decal[];
  hiresRegion?: HiResRegion | null;
}>();

defineEmits<{
  (e: 'add-zone', zone: BlankZone): void;
  (e: 'update-zone', zone: BlankZone): void;
  (e: 'remove-zone', id: string): void;
  (e: 'clear-zones'): void;
  (e: 'tool-change', payload: { enabled: boolean; snapMajor: boolean }): void;
  (e: 'draft-change', draft: BlankZoneDraft): void;
  (e: 'add-decal', decal: Decal): void;
  (e: 'update-decal', decal: Decal): void;
  (e: 'remove-decal', id: string): void;
  (e: 'clear-decals'): void;
  (e: 'decal-tool-change', payload: { enabled: boolean; snapMajor: boolean }): void;
  (e: 'set-hires-region', region: HiResRegion): void;
  (e: 'clear-hires-region'): void;
  (e: 'hires-tool-change', payload: { enabled: boolean }): void;
}>();

const activeTab = ref('zones');
const collapsed = ref(false);
</script>

<template>
  <aside class="zone-panel" :class="{ 'is-collapsed': collapsed }" data-grid-ignore-click="true">
    <v-card v-if="!collapsed" elevation="6" rounded="lg" class="zone-card">
      <v-card-title class="zone-title">
        <span class="text-subtitle-1">Grid Tools</span>
        <v-btn size="x-small" variant="text" @click="collapsed = true">Collapse</v-btn>
      </v-card-title>

      <v-tabs v-model="activeTab" density="compact" grow>
        <v-tab value="zones">Zones</v-tab>
        <v-tab value="decals">Decals</v-tab>
        <v-tab value="hires">Hi-Res</v-tab>
      </v-tabs>

      <v-card-text class="pt-2">
        <v-tabs-window v-model="activeTab">
          <v-tabs-window-item value="zones">
            <GridZoneTab
              :zones="zones"
              :preview-rect="previewRect"
              @add-zone="$emit('add-zone', $event)"
              @update-zone="$emit('update-zone', $event)"
              @remove-zone="$emit('remove-zone', $event)"
              @clear-zones="$emit('clear-zones')"
              @tool-change="$emit('tool-change', $event)"
              @draft-change="$emit('draft-change', $event)"
            />
          </v-tabs-window-item>

          <v-tabs-window-item value="decals">
            <GridDecalTab
              :decals="decals"
              @add-decal="$emit('add-decal', $event)"
              @update-decal="$emit('update-decal', $event)"
              @remove-decal="$emit('remove-decal', $event)"
              @clear-decals="$emit('clear-decals')"
              @decal-tool-change="$emit('decal-tool-change', $event)"
            />
          </v-tabs-window-item>

          <v-tabs-window-item value="hires">
            <GridHiResTab
              :region="hiresRegion ?? null"
              @set-region="$emit('set-hires-region', $event)"
              @clear-region="$emit('clear-hires-region')"
              @hires-tool-change="$emit('hires-tool-change', $event)"
            />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
    <v-btn
      v-else
      class="zone-expand-btn"
      size="small"
      color="primary"
      variant="tonal"
      @click="collapsed = false"
    >
      Grid Tools
    </v-btn>
  </aside>
</template>

<style scoped>
.zone-panel {
  position: fixed;
  top: calc(64px + 12px);
  right: 12px;
  width: min(360px, calc(100vw - 24px));
  z-index: 20;
  pointer-events: auto;
}

.zone-card {
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 64px - 24px);
}

.zone-card :deep(.v-card-text) {
  overflow-y: auto;
  min-height: 0;
}

.zone-panel.is-collapsed {
  width: auto;
}

.zone-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.zone-expand-btn {
  height: 36px;
}
</style>
