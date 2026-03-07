"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeTextBlock = normalizeTextBlock;
exports.normalizeTextBlocks = normalizeTextBlocks;
const text_1 = require("../types/text");
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
    if (!Array.isArray(blocks))
        return [];
    const normalized = [];
    for (const block of blocks) {
        if (normalized.length >= text_1.MAX_TEXT_BLOCKS)
            break;
        const next = normalizeTextBlock(block, now);
        if (next)
            normalized.push(next);
    }
    return normalized;
}
