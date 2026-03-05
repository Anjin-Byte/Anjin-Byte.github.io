"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadBlankZones = loadBlankZones;
exports.saveBlankZones = saveBlankZones;
exports.clearBlankZonesStorage = clearBlankZonesStorage;
const blankZones_1 = require("../types/blankZones");
const blankZoneNormalization_1 = require("./blankZoneNormalization");
function storageAvailable() {
    return typeof localStorage !== 'undefined';
}
function loadBlankZones() {
    if (!storageAvailable()) {
        return [];
    }
    try {
        const raw = localStorage.getItem(blankZones_1.BLANK_ZONE_STORAGE_KEY);
        if (!raw) {
            return [];
        }
        const parsed = JSON.parse(raw);
        if (parsed.version !== blankZones_1.BLANK_ZONE_STORAGE_VERSION) {
            return [];
        }
        return (0, blankZoneNormalization_1.normalizeZones)(parsed.zones);
    }
    catch {
        return [];
    }
}
function saveBlankZones(zones) {
    if (!storageAvailable()) {
        return;
    }
    const payload = {
        version: blankZones_1.BLANK_ZONE_STORAGE_VERSION,
        zones: (0, blankZoneNormalization_1.normalizeZones)(zones),
    };
    localStorage.setItem(blankZones_1.BLANK_ZONE_STORAGE_KEY, JSON.stringify(payload));
}
function clearBlankZonesStorage() {
    if (!storageAvailable()) {
        return;
    }
    localStorage.removeItem(blankZones_1.BLANK_ZONE_STORAGE_KEY);
}
