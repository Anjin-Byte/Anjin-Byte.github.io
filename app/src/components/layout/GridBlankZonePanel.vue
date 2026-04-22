<script setup lang="ts">
import { ref } from 'vue';
import type { BlankZone, BlankZoneDraft, BlankZoneRect } from '../../types/blankZones';
import type { HiResRegion } from '../../types/hiresRegion';
import GridZoneTab from './GridZoneTab.vue';
import GridHiResTab from './GridHiResTab.vue';

defineProps<{
  zones: BlankZone[];
  previewRect?: BlankZoneRect | null;
  hiresRegions: HiResRegion[];
}>();

defineEmits<{
  (e: 'add-zone', zone: BlankZone): void;
  (e: 'update-zone', zone: BlankZone): void;
  (e: 'remove-zone', id: string): void;
  (e: 'clear-zones'): void;
  (e: 'tool-change', payload: { enabled: boolean; snapMajor: boolean }): void;
  (e: 'draft-change', draft: BlankZoneDraft): void;
  (e: 'add-hires-region', region: HiResRegion): void;
  (e: 'update-hires-region', region: HiResRegion): void;
  (e: 'remove-hires-region', id: string): void;
  (e: 'clear-hires-regions'): void;
  (e: 'hires-tool-change', payload: { enabled: boolean }): void;
}>();

const activeTab = ref('zones');
const collapsed = ref(false);
const showPanel = import.meta.env.DEV;
</script>

<template>
  <aside
    v-if="showPanel"
    class="zone-panel"
    :class="{ 'is-collapsed': collapsed }"
    data-grid-ignore-click="true"
  >
    <v-card v-if="!collapsed" elevation="6" rounded="lg" class="zone-card">
      <v-card-title class="zone-title">
        <span class="text-subtitle-1">Grid Tools</span>
        <v-btn size="x-small" variant="text" @click="collapsed = true">Collapse</v-btn>
      </v-card-title>

      <v-tabs v-model="activeTab" density="compact" grow>
        <v-tab value="zones">Zones</v-tab>
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

          <v-tabs-window-item value="hires">
            <GridHiResTab
              :regions="hiresRegions"
              @add-region="$emit('add-hires-region', $event)"
              @update-region="$emit('update-hires-region', $event)"
              @remove-region="$emit('remove-hires-region', $event)"
              @clear-regions="$emit('clear-hires-regions')"
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
