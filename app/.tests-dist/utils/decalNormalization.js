"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeDecal = normalizeDecal;
exports.normalizeDecals = normalizeDecals;
const decals_1 = require("../types/decals");
const normalizeArray_1 = require("./normalizeArray");
const VALID_KINDS = new Set(['solid', 'checkerboard', 'stripes', 'dots', 'bitmap']);
const VALID_BLEND_MODES = new Set(['alpha', 'multiply', 'screen']);
function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}
function asFinite(value) {
    if (typeof value !== 'number' || !Number.isFinite(value))
        return null;
    return value;
}
function asInteger(value) {
    const n = asFinite(value);
    return n === null ? null : Math.trunc(n);
}
function fallbackDecalId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return `decal-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function normalizeKind(value) {
    return typeof value === 'string' && VALID_KINDS.has(value)
        ? value
        : 'solid';
}
function normalizeBlendMode(value) {
    return typeof value === 'string' && VALID_BLEND_MODES.has(value)
        ? value
        : 'alpha';
}
function normalizePattern(source) {
    const p = (source && typeof source === 'object') ? source : {};
    const kind = normalizeKind(p.kind);
    const base = { kind };
    if (kind === 'solid') {
        base.coverage = clamp(asFinite(p.coverage) ?? 1.0, 0, 1);
        base.solidR = clamp(asFinite(p.solidR) ?? decals_1.DECAL_DEFAULT_TINT[0], 0, 1);
        base.solidG = clamp(asFinite(p.solidG) ?? decals_1.DECAL_DEFAULT_TINT[1], 0, 1);
        base.solidB = clamp(asFinite(p.solidB) ?? decals_1.DECAL_DEFAULT_TINT[2], 0, 1);
    }
    else if (kind === 'checkerboard') {
        base.cellSize = Math.max(1, asFinite(p.cellSize) ?? 2);
    }
    else if (kind === 'stripes') {
        base.pitchCells = Math.max(2, asFinite(p.pitchCells) ?? 4);
    }
    else if (kind === 'dots') {
        base.dotRadius = Math.max(0.1, asFinite(p.dotRadius) ?? 0.4);
        base.dotSpacing = Math.max(2, asFinite(p.dotSpacing) ?? 3);
    }
    return base;
}
function normalizeTint(value) {
    if (!Array.isArray(value) || value.length < 4)
        return [...decals_1.DECAL_DEFAULT_TINT];
    return [
        clamp(asFinite(value[0]) ?? decals_1.DECAL_DEFAULT_TINT[0], 0, 1),
        clamp(asFinite(value[1]) ?? decals_1.DECAL_DEFAULT_TINT[1], 0, 1),
        clamp(asFinite(value[2]) ?? decals_1.DECAL_DEFAULT_TINT[2], 0, 1),
        clamp(asFinite(value[3]) ?? decals_1.DECAL_DEFAULT_TINT[3], 0, 1),
    ];
}
function normalizeEnabled(value) {
    return typeof value === 'boolean' ? value : true;
}
function normalizeTimestamp(value, fallback) {
    return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}
function normalizeDecal(decal, now = Date.now()) {
    if (!decal || typeof decal !== 'object')
        return null;
    const source = decal;
    const x1 = asInteger(source.x1);
    const y1 = asInteger(source.y1);
    const x2 = asInteger(source.x2);
    const y2 = asInteger(source.y2);
    if (x1 === null || y1 === null || x2 === null || y2 === null)
        return null;
    return {
        id: typeof source.id === 'string' && source.id.length > 0 ? source.id : fallbackDecalId(),
        x1: Math.min(x1, x2),
        y1: Math.min(y1, y2),
        x2: Math.max(x1, x2),
        y2: Math.max(y1, y2),
        pattern: normalizePattern(source.pattern),
        tint: normalizeTint(source.tint),
        blendMode: normalizeBlendMode(source.blendMode),
        suppressCells: typeof source.suppressCells === 'boolean' ? source.suppressCells : false,
        enabled: normalizeEnabled(source.enabled),
        createdAt: normalizeTimestamp(source.createdAt, now),
        updatedAt: normalizeTimestamp(source.updatedAt, now),
    };
}
function normalizeDecals(decals, now = Date.now()) {
    return (0, normalizeArray_1.normalizeArray)(decals, normalizeDecal, decals_1.MAX_DECALS, now);
}
