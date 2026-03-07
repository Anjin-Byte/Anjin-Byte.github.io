"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDecals = useDecals;
const vue_1 = require("vue");
const decalNormalization_1 = require("../utils/decalNormalization");
const decalStorage_1 = require("../utils/decalStorage");
function useDecals(options = {}) {
    const decals = (0, vue_1.ref)((0, decalStorage_1.loadDecals)());
    function commit(next) {
        const normalized = (0, decalNormalization_1.normalizeDecals)(next);
        decals.value = normalized;
        (0, decalStorage_1.saveDecals)(normalized);
        return normalized;
    }
    function setDecals(next) {
        const normalized = commit(next);
        options.onSetDecals?.(normalized);
    }
    function addDecal(decal) {
        const normalized = (0, decalNormalization_1.normalizeDecal)(decal);
        if (!normalized) {
            return;
        }
        commit([...decals.value, normalized]);
        options.onAddDecal?.(normalized);
    }
    function updateDecal(decal) {
        const normalized = (0, decalNormalization_1.normalizeDecal)(decal);
        if (!normalized) {
            return;
        }
        if (!decals.value.some((current) => current.id === normalized.id)) {
            return;
        }
        const next = decals.value.map((current) => current.id === normalized.id ? normalized : current);
        commit(next);
        options.onUpdateDecal?.(normalized);
    }
    function removeDecal(id) {
        if (!decals.value.some((decal) => decal.id === id)) {
            return;
        }
        const next = decals.value.filter((decal) => decal.id !== id);
        commit(next);
        options.onRemoveDecal?.(id);
    }
    function clearDecals() {
        if (decals.value.length === 0) {
            return;
        }
        decals.value = [];
        (0, decalStorage_1.clearDecalsStorage)();
        options.onClearDecals?.();
    }
    function syncFromWorker(next) {
        commit(next);
    }
    return {
        decals,
        setDecals,
        addDecal,
        updateDecal,
        removeDecal,
        clearDecals,
        syncFromWorker,
    };
}
