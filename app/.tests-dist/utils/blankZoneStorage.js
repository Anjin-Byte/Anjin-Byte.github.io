"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearBlankZonesStorage = exports.saveBlankZones = exports.loadBlankZones = void 0;
const featureStorage_1 = require("./featureStorage");
const blankZoneNormalization_1 = require("./blankZoneNormalization");
const blankZones_1 = require("../types/blankZones");
const storage = (0, featureStorage_1.createFeatureStorage)({
    key: blankZones_1.BLANK_ZONE_STORAGE_KEY,
    version: blankZones_1.BLANK_ZONE_STORAGE_VERSION,
    normalize: blankZoneNormalization_1.normalizeZones,
    itemsKey: 'zones',
});
exports.loadBlankZones = storage.load;
exports.saveBlankZones = storage.save;
exports.clearBlankZonesStorage = storage.clear;
