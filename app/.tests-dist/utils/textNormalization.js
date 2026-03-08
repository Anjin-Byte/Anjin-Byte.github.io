"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeTextBlock = normalizeTextBlock;
exports.normalizeTextBlocks = normalizeTextBlocks;
const text_1 = require("../types/text");
const normalizeArray_1 = require("./normalizeArray");
const VALID_RENDER_MODES = new Set(['sdf', 'cells', 'both']);
const HEX_COLOR_RE = /^#[0-9a-fA-F]{6}$/;
function asFinite(value) {
    if (typeof value !== 'number' || !Number.isFinite(value))
        return null;
    return value;
}
function asInteger(value) {
    const n = asFinite(value);
    return n === null ? null : Math.trunc(n);
}
function fallbackId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return `text-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function normalizeTimestamp(value, fallback) {
    return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}
function normalizeTextBlock(block, now = Date.now()) {
    if (!block || typeof block !== 'object')
        return null;
    const source = block;
    if (typeof source.text !== 'string' || source.text.length === 0)
        return null;
    const cellX = asInteger(source.cellX);
    const cellY = asInteger(source.cellY);
    if (cellX === null || cellY === null)
        return null;
    const cellsWide = Math.max(1, asInteger(source.cellsWide) ?? 100);
    const rawCellsHigh = asInteger(source.cellsHigh);
    const cellsHigh = rawCellsHigh !== null && rawCellsHigh >= 1 ? rawCellsHigh : undefined;
    const renderMode = typeof source.renderMode === 'string' && VALID_RENDER_MODES.has(source.renderMode)
        ? source.renderMode
        : 'cells';
    return {
        id: typeof source.id === 'string' && source.id.length > 0 ? source.id : fallbackId(),
        text: source.text,
        font: typeof source.font === 'string' && source.font.length > 0 ? source.font : text_1.DEFAULT_FONT,
        cellX,
        cellY,
        cellsWide,
        ...(cellsHigh !== undefined ? { cellsHigh } : {}),
        renderMode,
        color: typeof source.color === 'string' && HEX_COLOR_RE.test(source.color)
            ? source.color
            : text_1.DEFAULT_TEXT_COLOR,
        enabled: typeof source.enabled === 'boolean' ? source.enabled : true,
        createdAt: normalizeTimestamp(source.createdAt, now),
        updatedAt: normalizeTimestamp(source.updatedAt, now),
    };
}
function normalizeTextBlocks(blocks, now = Date.now()) {
    return (0, normalizeArray_1.normalizeArray)(blocks, normalizeTextBlock, text_1.MAX_TEXT_BLOCKS, now);
}
