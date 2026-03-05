"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBlankZones = useBlankZones;
const vue_1 = require("vue");
const blankZoneNormalization_1 = require("../utils/blankZoneNormalization");
const blankZoneStorage_1 = require("../utils/blankZoneStorage");
function useBlankZones(options = {}) {
    const zones = (0, vue_1.ref)((0, blankZoneStorage_1.loadBlankZones)());
    function commit(next) {
        const normalized = (0, blankZoneNormalization_1.normalizeZones)(next);
        zones.value = normalized;
        (0, blankZoneStorage_1.saveBlankZones)(normalized);
        return normalized;
    }
    function setZones(next) {
        const normalized = commit(next);
        options.onSetZones?.(normalized);
    }
    function addZone(zone) {
        const normalized = (0, blankZoneNormalization_1.normalizeZone)(zone);
        if (!normalized) {
            return;
        }
        commit([...zones.value, normalized]);
        options.onAddZone?.(normalized);
    }
    function updateZone(zone) {
        const normalized = (0, blankZoneNormalization_1.normalizeZone)(zone);
        if (!normalized) {
            return;
        }
        if (!zones.value.some((current) => current.id === normalized.id)) {
            return;
        }
        const next = zones.value.map((current) => current.id === normalized.id ? normalized : current);
        commit(next);
        options.onUpdateZone?.(normalized);
    }
    function removeZone(id) {
        if (!zones.value.some((zone) => zone.id === id)) {
            return;
        }
        const next = zones.value.filter((zone) => zone.id !== id);
        commit(next);
        options.onRemoveZone?.(id);
    }
    function clearZones() {
        if (zones.value.length === 0) {
            return;
        }
        zones.value = [];
        (0, blankZoneStorage_1.clearBlankZonesStorage)();
        options.onClearZones?.();
    }
    function syncFromWorker(next) {
        commit(next);
    }
    return {
        zones,
        setZones,
        addZone,
        updateZone,
        removeZone,
        clearZones,
        syncFromWorker,
    };
}
