"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hiresRegion_1 = require("../types/hiresRegion");
const hiresNormalization_1 = require("../utils/hiresNormalization");
const hiresStorage_1 = require("../utils/hiresStorage");
const HiResState_1 = require("../workers/HiResState");
class FakeStorage {
    constructor() {
        Object.defineProperty(this, "map", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
    }
    getItem(key) { return this.map.has(key) ? this.map.get(key) : null; }
    setItem(key, value) { this.map.set(key, value); }
    removeItem(key) { this.map.delete(key); }
    clear() { this.map.clear(); }
}
const fakeStorage = new FakeStorage();
globalThis.localStorage = fakeStorage;
function assert(condition, message) {
    if (!condition)
        throw new Error(message);
}
function assertEq(actual, expected, message) {
    const a = JSON.stringify(actual);
    const b = JSON.stringify(expected);
    if (a !== b)
        throw new Error(`${message}\nexpected: ${b}\nactual:   ${a}`);
}
function makeRegion(overrides = {}) {
    const now = Date.now();
    return {
        id: 'r-1', x1: 0, y1: 0, x2: 9, y2: 9, multiplier: 4,
        enabled: true, showGrid: true, showBaseGrid: true, showBorder: true, tickMultiplier: 1,
        createdAt: now, updatedAt: now,
        ...overrides,
    };
}
let passed = 0;
function test(name, fn) {
    fakeStorage.clear();
    try {
        fn();
        passed++;
    }
    catch (err) {
        console.error(`FAIL: ${name}`);
        throw err;
    }
}
// ── normalizeRegion ──────────────────────────────────────────────────────────
test('normalizeRegion — valid region', () => {
    const r = (0, hiresNormalization_1.normalizeRegion)(makeRegion());
    assert(r !== null, 'should return region');
    assertEq(r.x1, 0, 'x1');
    assertEq(r.multiplier, 4, 'multiplier');
});
test('normalizeRegion — null for invalid', () => {
    assertEq((0, hiresNormalization_1.normalizeRegion)(null), null, 'null');
    assertEq((0, hiresNormalization_1.normalizeRegion)({}), null, 'empty obj');
    assertEq((0, hiresNormalization_1.normalizeRegion)({ x1: 'a', y1: 0, x2: 5, y2: 5 }), null, 'non-numeric x1');
});
test('normalizeRegion — swaps coords', () => {
    const r = (0, hiresNormalization_1.normalizeRegion)(makeRegion({ x1: 10, x2: 5 }));
    assertEq(r.x1, 5, 'x1 should be min');
    assertEq(r.x2, 10, 'x2 should be max');
});
test('normalizeRegion — defaults for boolean flags', () => {
    const r = (0, hiresNormalization_1.normalizeRegion)({ x1: 0, y1: 0, x2: 5, y2: 5 });
    assert(r.enabled === true, 'enabled default');
    assert(r.showGrid === true, 'showGrid default');
    assert(r.showBorder === true, 'showBorder default');
});
test('normalizeRegion — tickMultiplier defaults and clamps', () => {
    const def = (0, hiresNormalization_1.normalizeRegion)({ x1: 0, y1: 0, x2: 5, y2: 5 });
    assertEq(def.tickMultiplier, 1, 'default to 1');
    const explicit = (0, hiresNormalization_1.normalizeRegion)(makeRegion({ tickMultiplier: 4 }));
    assertEq(explicit.tickMultiplier, 4, 'explicit 4');
    const zero = (0, hiresNormalization_1.normalizeRegion)(makeRegion({ tickMultiplier: 0 }));
    assertEq(zero.tickMultiplier, 1, 'zero clamps to 1');
    const neg = (0, hiresNormalization_1.normalizeRegion)(makeRegion({ tickMultiplier: -3 }));
    assertEq(neg.tickMultiplier, 1, 'negative clamps to 1');
});
// ── normalizeRegions ─────────────────────────────────────────────────────────
test('normalizeRegions — caps at MAX', () => {
    const input = Array.from({ length: hiresRegion_1.MAX_HIRES_REGIONS + 3 }, (_, i) => makeRegion({ id: `r-${i}`, x1: i * 20, x2: i * 20 + 9 }));
    const result = (0, hiresNormalization_1.normalizeRegions)(input);
    assertEq(result.length, hiresRegion_1.MAX_HIRES_REGIONS, 'capped');
});
test('normalizeRegions — rejects overlapping', () => {
    const a = makeRegion({ id: 'a', x1: 0, y1: 0, x2: 10, y2: 10 });
    const b = makeRegion({ id: 'b', x1: 5, y1: 5, x2: 15, y2: 15 });
    const result = (0, hiresNormalization_1.normalizeRegions)([a, b]);
    assertEq(result.length, 1, 'only first accepted');
    assertEq(result[0].id, 'a', 'first wins');
});
test('normalizeRegions — allows adjacency', () => {
    const a = makeRegion({ id: 'a', x1: 0, y1: 0, x2: 9, y2: 9 });
    const b = makeRegion({ id: 'b', x1: 10, y1: 0, x2: 19, y2: 9 });
    const result = (0, hiresNormalization_1.normalizeRegions)([a, b]);
    assertEq(result.length, 2, 'both accepted');
});
// ── Storage ──────────────────────────────────────────────────────────────────
test('storage — round-trip', () => {
    const r = makeRegion();
    (0, hiresStorage_1.saveRegions)([r]);
    const loaded = (0, hiresStorage_1.loadRegions)();
    assertEq(loaded.length, 1, 'loaded one');
    assertEq(loaded[0].id, r.id, 'id matches');
});
test('storage — v1 migration', () => {
    const v1 = { version: 1, region: makeRegion({ id: 'legacy' }) };
    fakeStorage.setItem(hiresRegion_1.HIRES_STORAGE_KEY, JSON.stringify(v1));
    const loaded = (0, hiresStorage_1.loadRegions)();
    assertEq(loaded.length, 1, 'migrated one');
    assertEq(loaded[0].id, 'legacy', 'id preserved');
});
test('storage — clear', () => {
    (0, hiresStorage_1.saveRegions)([makeRegion()]);
    (0, hiresStorage_1.clearRegionsStorage)();
    assertEq((0, hiresStorage_1.loadRegions)().length, 0, 'cleared');
});
// ── HiResState CRUD ──────────────────────────────────────────────────────────
test('HiResState — add + remove', () => {
    const state = new HiResState_1.HiResState();
    state.add(makeRegion({ id: 'a' }));
    assertEq(state.getAll().length, 1, 'added');
    state.remove('a');
    assertEq(state.getAll().length, 0, 'removed');
});
test('HiResState — update', () => {
    const state = new HiResState_1.HiResState();
    state.add(makeRegion({ id: 'a', enabled: true }));
    state.update(makeRegion({ id: 'a', enabled: false }));
    assert(state.getAll()[0].enabled === false, 'updated');
});
test('HiResState — clear', () => {
    const state = new HiResState_1.HiResState();
    state.add(makeRegion({ id: 'a' }));
    state.add(makeRegion({ id: 'b', x1: 20, x2: 29 }));
    state.clear();
    assertEq(state.getAll().length, 0, 'cleared');
});
console.log(`hires.test.ts passed (${passed} tests)`);
