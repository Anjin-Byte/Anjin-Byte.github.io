"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTextBlocks = loadTextBlocks;
exports.saveTextBlocks = saveTextBlocks;
exports.clearTextStorage = clearTextStorage;
const text_1 = require("../types/text");
const textNormalization_1 = require("./textNormalization");
function storageAvailable() {
    return typeof localStorage !== 'undefined';
}
function loadTextBlocks() {
    if (!storageAvailable())
        return [];
    try {
        const raw = localStorage.getItem(text_1.TEXT_STORAGE_KEY);
        if (!raw)
            return [];
        const parsed = JSON.parse(raw);
        if (typeof parsed.version !== 'number' || parsed.version > text_1.TEXT_STORAGE_VERSION)
            return [];
        return (0, textNormalization_1.normalizeTextBlocks)(parsed.blocks);
    }
    catch {
        return [];
    }
}
function saveTextBlocks(blocks) {
    if (!storageAvailable())
        return;
    const payload = {
        version: text_1.TEXT_STORAGE_VERSION,
        blocks: (0, textNormalization_1.normalizeTextBlocks)(blocks),
    };
    localStorage.setItem(text_1.TEXT_STORAGE_KEY, JSON.stringify(payload));
}
function clearTextStorage() {
    if (!storageAvailable())
        return;
    localStorage.removeItem(text_1.TEXT_STORAGE_KEY);
}
