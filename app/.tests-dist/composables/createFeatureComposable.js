"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFeatureComposable = createFeatureComposable;
const vue_1 = require("vue");
function createFeatureComposable(config) {
    const items = (0, vue_1.ref)(config.storage.load());
    function commit(next) {
        const normalized = config.normalize(next);
        items.value = normalized;
        config.storage.save(normalized);
        return normalized;
    }
    function setItems(next) {
        const normalized = commit(next);
        config.onSet?.(normalized);
    }
    function addItem(item) {
        const normalized = config.normalizeOne(item);
        if (!normalized)
            return;
        commit([...items.value.filter((i) => i.id !== normalized.id), normalized]);
        config.onAdd?.(normalized);
    }
    function updateItem(item) {
        const normalized = config.normalizeOne(item);
        if (!normalized)
            return;
        if (!items.value.some((i) => i.id === normalized.id))
            return;
        const next = items.value.map((i) => i.id === normalized.id ? normalized : i);
        commit(next);
        config.onUpdate?.(normalized);
    }
    function removeItem(id) {
        if (!items.value.some((i) => i.id === id))
            return;
        commit(items.value.filter((i) => i.id !== id));
        config.onRemove?.(id);
    }
    function clearItems() {
        if (items.value.length === 0)
            return;
        items.value = [];
        config.storage.clear();
        config.onClear?.();
    }
    function syncFromWorker(next) {
        commit(next);
    }
    return { items, setItems, addItem, updateItem, removeItem, clearItems, syncFromWorker };
}
