"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeRegion = normalizeRegion;
exports.normalizeRegions = normalizeRegions;
const hiresRegion_1 = require("../types/hiresRegion");
function asInteger(value) {
    if (typeof value !== 'number' || !Number.isFinite(value))
        return null;
    return Math.trunc(value);
}
function fallbackId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return `hires-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function normalizeTimestamp(value, fallback) {
    return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}
function normalizeRegion(region, now = Date.now()) {
    if (!region || typeof region !== 'object')
        return null;
    const source = region;
    const x1 = asInteger(source.x1);
    const y1 = asInteger(source.y1);
    const x2 = asInteger(source.x2);
    const y2 = asInteger(source.y2);
    if (x1 === null || y1 === null || x2 === null || y2 === null)
        return null;
    return {
        id: typeof source.id === 'string' && source.id.length > 0 ? source.id : fallbackId(),
        x1: Math.min(x1, x2),
        y1: Math.min(y1, y2),
        x2: Math.max(x1, x2),
        y2: Math.max(y1, y2),
        multiplier: typeof source.multiplier === 'number' && Number.isFinite(source.multiplier)
            ? Math.trunc(Math.max(hiresRegion_1.MIN_HIRES_MULTIPLIER, Math.min(hiresRegion_1.MAX_HIRES_MULTIPLIER, source.multiplier)))
            : hiresRegion_1.HIRES_MULTIPLIER,
        enabled: typeof source.enabled === 'boolean' ? source.enabled : true,
        showGrid: typeof source.showGrid === 'boolean' ? source.showGrid : true,
        showBaseGrid: typeof source.showBaseGrid === 'boolean' ? source.showBaseGrid : true,
        showBorder: typeof source.showBorder === 'boolean' ? source.showBorder : true,
        tickMultiplier: typeof source.tickMultiplier === 'number' && Number.isFinite(source.tickMultiplier) && source.tickMultiplier >= 1
            ? Math.trunc(source.tickMultiplier)
            : 1,
        createdAt: normalizeTimestamp(source.createdAt, now),
        updatedAt: normalizeTimestamp(source.updatedAt, now),
    };
}
function rectsOverlap(a, b) {
    return a.x1 <= b.x2 && a.x2 >= b.x1 && a.y1 <= b.y2 && a.y2 >= b.y1;
}
function normalizeRegions(input, now = Date.now()) {
    if (!Array.isArray(input))
        return [];
    const out = [];
    for (const raw of input) {
        if (out.length >= hiresRegion_1.MAX_HIRES_REGIONS)
            break;
        const r = normalizeRegion(raw, now);
        if (!r)
            continue;
        const overlaps = out.some((existing) => rectsOverlap(existing, r));
        if (overlaps)
            continue;
        out.push(r);
    }
    return out;
}
