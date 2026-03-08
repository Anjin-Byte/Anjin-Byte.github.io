"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDecals = useDecals;
const decalNormalization_1 = require("../utils/decalNormalization");
const decalStorage_1 = require("../utils/decalStorage");
const createFeatureComposable_1 = require("./createFeatureComposable");
function useDecals(options = {}) {
    const { items: decals, setItems, addItem, updateItem, removeItem, clearItems, syncFromWorker, } = (0, createFeatureComposable_1.createFeatureComposable)({
        storage: { load: decalStorage_1.loadDecals, save: decalStorage_1.saveDecals, clear: decalStorage_1.clearDecalsStorage },
        normalize: decalNormalization_1.normalizeDecals,
        normalizeOne: decalNormalization_1.normalizeDecal,
        onSet: options.onSetDecals,
        onAdd: options.onAddDecal,
        onUpdate: options.onUpdateDecal,
        onRemove: options.onRemoveDecal,
        onClear: options.onClearDecals,
    });
    return {
        decals,
        setDecals: setItems,
        addDecal: addItem,
        updateDecal: updateItem,
        removeDecal: removeItem,
        clearDecals: clearItems,
        syncFromWorker,
    };
}
