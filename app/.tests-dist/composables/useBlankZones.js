"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBlankZones = useBlankZones;
const blankZoneNormalization_1 = require("../utils/blankZoneNormalization");
const blankZoneStorage_1 = require("../utils/blankZoneStorage");
const createFeatureComposable_1 = require("./createFeatureComposable");
function useBlankZones(options = {}) {
    const { items: zones, setItems, addItem, updateItem, removeItem, clearItems, syncFromWorker, } = (0, createFeatureComposable_1.createFeatureComposable)({
        storage: { load: blankZoneStorage_1.loadBlankZones, save: blankZoneStorage_1.saveBlankZones, clear: blankZoneStorage_1.clearBlankZonesStorage },
        normalize: blankZoneNormalization_1.normalizeZones,
        normalizeOne: blankZoneNormalization_1.normalizeZone,
        onSet: options.onSetZones,
        onAdd: options.onAddZone,
        onUpdate: options.onUpdateZone,
        onRemove: options.onRemoveZone,
        onClear: options.onClearZones,
    });
    return {
        zones,
        setZones: setItems,
        addZone: addItem,
        updateZone: updateItem,
        removeZone: removeItem,
        clearZones: clearItems,
        syncFromWorker,
    };
}
