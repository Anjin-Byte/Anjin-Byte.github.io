"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearRegionsStorage = exports.saveRegions = void 0;
exports.loadRegions = loadRegions;
const featureStorage_1 = require("./featureStorage");
const hiresNormalization_1 = require("./hiresNormalization");
const hiresRegion_1 = require("../types/hiresRegion");
const V1_KEY = 'gol.hires.v1';
const storage = (0, featureStorage_1.createFeatureStorage)({
    key: hiresRegion_1.HIRES_STORAGE_KEY,
    version: hiresRegion_1.HIRES_STORAGE_VERSION,
    normalize: hiresNormalization_1.normalizeRegions,
    itemsKey: 'regions',
    migrate(raw) {
        // v1 had a single 'region' field instead of 'regions' array
        if (raw.region && !raw.regions) {
            const r = (0, hiresNormalization_1.normalizeRegion)(raw.region);
            return { ...raw, regions: r ? [r] : [], version: hiresRegion_1.HIRES_STORAGE_VERSION };
        }
        return { ...raw, version: hiresRegion_1.HIRES_STORAGE_VERSION };
    },
});
// Wrap load to also check the legacy v1 key
const baseLoad = storage.load;
function loadRegions() {
    const result = baseLoad();
    if (result.length > 0)
        return result;
    if (typeof localStorage === 'undefined')
        return [];
    try {
        const raw = localStorage.getItem(V1_KEY);
        if (!raw)
            return [];
        localStorage.removeItem(V1_KEY);
        const parsed = JSON.parse(raw);
        if (parsed.region) {
            const r = (0, hiresNormalization_1.normalizeRegion)(parsed.region);
            return r ? [r] : [];
        }
        return (0, hiresNormalization_1.normalizeRegions)(parsed.regions);
    }
    catch {
        return [];
    }
}
exports.saveRegions = storage.save;
exports.clearRegionsStorage = storage.clear;
