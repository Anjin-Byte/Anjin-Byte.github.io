"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeArray = normalizeArray;
/**
 * Normalize an array of items: validate each, filter nulls, enforce max count.
 */
function normalizeArray(raw, normalizeOne, maxItems, now) {
    if (!Array.isArray(raw))
        return [];
    const timestamp = now ?? Date.now();
    const out = [];
    for (const item of raw) {
        if (out.length >= maxItems)
            break;
        const normalized = normalizeOne(item, timestamp);
        if (normalized)
            out.push(normalized);
    }
    return out;
}
