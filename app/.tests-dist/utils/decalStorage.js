"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearDecalsStorage = exports.saveDecals = exports.loadDecals = void 0;
const featureStorage_1 = require("./featureStorage");
const decalNormalization_1 = require("./decalNormalization");
const decals_1 = require("../types/decals");
const storage = (0, featureStorage_1.createFeatureStorage)({
    key: decals_1.DECAL_STORAGE_KEY,
    version: decals_1.DECAL_STORAGE_VERSION,
    normalize: decalNormalization_1.normalizeDecals,
    itemsKey: 'decals',
});
exports.loadDecals = storage.load;
exports.saveDecals = storage.save;
exports.clearDecalsStorage = storage.clear;
