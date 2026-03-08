"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearTextStorage = exports.saveTextBlocks = exports.loadTextBlocks = void 0;
const featureStorage_1 = require("./featureStorage");
const textNormalization_1 = require("./textNormalization");
const text_1 = require("../types/text");
const storage = (0, featureStorage_1.createFeatureStorage)({
    key: text_1.TEXT_STORAGE_KEY,
    version: text_1.TEXT_STORAGE_VERSION,
    normalize: textNormalization_1.normalizeTextBlocks,
    itemsKey: 'blocks',
});
exports.loadTextBlocks = storage.load;
exports.saveTextBlocks = storage.save;
exports.clearTextStorage = storage.clear;
