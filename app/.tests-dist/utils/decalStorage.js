"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDecals = loadDecals;
exports.saveDecals = saveDecals;
exports.clearDecalsStorage = clearDecalsStorage;
const decals_1 = require("../types/decals");
const decalNormalization_1 = require("./decalNormalization");
function storageAvailable() {
    return typeof localStorage !== 'undefined';
}
function loadDecals() {
    if (!storageAvailable()) {
        return [];
    }
    try {
        const raw = localStorage.getItem(decals_1.DECAL_STORAGE_KEY);
        if (!raw) {
            return [];
        }
        const parsed = JSON.parse(raw);
        if (parsed.version !== decals_1.DECAL_STORAGE_VERSION) {
            return [];
        }
        return (0, decalNormalization_1.normalizeDecals)(parsed.decals);
    }
    catch {
        return [];
    }
}
function saveDecals(decals) {
    if (!storageAvailable()) {
        return;
    }
    const payload = {
        version: decals_1.DECAL_STORAGE_VERSION,
        decals: (0, decalNormalization_1.normalizeDecals)(decals),
    };
    localStorage.setItem(decals_1.DECAL_STORAGE_KEY, JSON.stringify(payload));
}
function clearDecalsStorage() {
    if (!storageAvailable()) {
        return;
    }
    localStorage.removeItem(decals_1.DECAL_STORAGE_KEY);
}
