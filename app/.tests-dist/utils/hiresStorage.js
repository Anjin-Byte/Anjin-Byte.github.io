"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRegions = loadRegions;
exports.saveRegions = saveRegions;
exports.clearRegionsStorage = clearRegionsStorage;
const hiresRegion_1 = require("../types/hiresRegion");
const hiresNormalization_1 = require("./hiresNormalization");
function storageAvailable() {
    return typeof localStorage !== 'undefined';
}
const V1_KEY = 'gol.hires.v1';
function loadRegions() {
    if (!storageAvailable())
        return [];
    try {
        let raw = localStorage.getItem(hiresRegion_1.HIRES_STORAGE_KEY);
        // Try v1 key if current key has no data
        if (!raw) {
            raw = localStorage.getItem(V1_KEY);
            if (raw)
                localStorage.removeItem(V1_KEY);
        }
        if (!raw)
            return [];
        const parsed = JSON.parse(raw);
        if (typeof parsed.version !== 'number' || parsed.version > hiresRegion_1.HIRES_STORAGE_VERSION)
            return [];
        // v1 migration: single `region` → `regions` array
        if (parsed.version === 1 && parsed.region) {
            const r = (0, hiresNormalization_1.normalizeRegion)(parsed.region);
            return r ? [r] : [];
        }
        return (0, hiresNormalization_1.normalizeRegions)(parsed.regions);
    }
    catch {
        return [];
    }
}
function saveRegions(regions) {
    if (!storageAvailable())
        return;
    const payload = {
        version: hiresRegion_1.HIRES_STORAGE_VERSION,
        regions: (0, hiresNormalization_1.normalizeRegions)(regions),
    };
    localStorage.setItem(hiresRegion_1.HIRES_STORAGE_KEY, JSON.stringify(payload));
}
function clearRegionsStorage() {
    if (!storageAvailable())
        return;
    localStorage.removeItem(hiresRegion_1.HIRES_STORAGE_KEY);
}
