import { MAX_HIRES_REGIONS, HIRES_STORAGE_KEY, type HiResRegion } from '../types/hiresRegion';
import { normalizeRegion, normalizeRegions } from '../utils/hiresNormalization';
import { clearRegionsStorage, loadRegions, saveRegions } from '../utils/hiresStorage';
import { HiResState } from '../workers/HiResState';

class FakeStorage {
  private readonly map = new Map<string, string>();
  getItem(key: string): string | null { return this.map.has(key) ? this.map.get(key)! : null; }
  setItem(key: string, value: string): void { this.map.set(key, value); }
  removeItem(key: string): void { this.map.delete(key); }
  clear(): void { this.map.clear(); }
}

const fakeStorage = new FakeStorage();
(globalThis as unknown as { localStorage: Storage }).localStorage = fakeStorage as unknown as Storage;

function assert(condition: unknown, message: string): void {
  if (!condition) throw new Error(message);
}

function assertEq<T>(actual: T, expected: T, message: string): void {
  const a = JSON.stringify(actual);
  const b = JSON.stringify(expected);
  if (a !== b) throw new Error(`${message}\nexpected: ${b}\nactual:   ${a}`);
}

function makeRegion(overrides: Partial<HiResRegion> = {}): HiResRegion {
  const now = Date.now();
  return {
    id: 'r-1', x1: 0, y1: 0, x2: 9, y2: 9, multiplier: 4,
    enabled: true, showGrid: true, showBaseGrid: true, showBorder: true,
    createdAt: now, updatedAt: now,
    ...overrides,
  };
}

let passed = 0;

function test(name: string, fn: () => void): void {
  fakeStorage.clear();
  try { fn(); passed++; }
  catch (err) { console.error(`FAIL: ${name}`); throw err; }
}

// ── normalizeRegion ──────────────────────────────────────────────────────────
test('normalizeRegion — valid region', () => {
  const r = normalizeRegion(makeRegion());
  assert(r !== null, 'should return region');
  assertEq(r!.x1, 0, 'x1');
  assertEq(r!.multiplier, 4, 'multiplier');
});

test('normalizeRegion — null for invalid', () => {
  assertEq(normalizeRegion(null), null, 'null');
  assertEq(normalizeRegion({}), null, 'empty obj');
  assertEq(normalizeRegion({ x1: 'a', y1: 0, x2: 5, y2: 5 }), null, 'non-numeric x1');
});

test('normalizeRegion — swaps coords', () => {
  const r = normalizeRegion(makeRegion({ x1: 10, x2: 5 }))!;
  assertEq(r.x1, 5, 'x1 should be min');
  assertEq(r.x2, 10, 'x2 should be max');
});

test('normalizeRegion — defaults for boolean flags', () => {
  const r = normalizeRegion({ x1: 0, y1: 0, x2: 5, y2: 5 })!;
  assert(r.enabled === true, 'enabled default');
  assert(r.showGrid === true, 'showGrid default');
  assert(r.showBorder === true, 'showBorder default');
});

// ── normalizeRegions ─────────────────────────────────────────────────────────
test('normalizeRegions — caps at MAX', () => {
  const input = Array.from({ length: MAX_HIRES_REGIONS + 3 }, (_, i) =>
    makeRegion({ id: `r-${i}`, x1: i * 20, x2: i * 20 + 9 }),
  );
  const result = normalizeRegions(input);
  assertEq(result.length, MAX_HIRES_REGIONS, 'capped');
});

test('normalizeRegions — rejects overlapping', () => {
  const a = makeRegion({ id: 'a', x1: 0, y1: 0, x2: 10, y2: 10 });
  const b = makeRegion({ id: 'b', x1: 5, y1: 5, x2: 15, y2: 15 });
  const result = normalizeRegions([a, b]);
  assertEq(result.length, 1, 'only first accepted');
  assertEq(result[0].id, 'a', 'first wins');
});

test('normalizeRegions — allows adjacency', () => {
  const a = makeRegion({ id: 'a', x1: 0, y1: 0, x2: 9, y2: 9 });
  const b = makeRegion({ id: 'b', x1: 10, y1: 0, x2: 19, y2: 9 });
  const result = normalizeRegions([a, b]);
  assertEq(result.length, 2, 'both accepted');
});

// ── Storage ──────────────────────────────────────────────────────────────────
test('storage — round-trip', () => {
  const r = makeRegion();
  saveRegions([r]);
  const loaded = loadRegions();
  assertEq(loaded.length, 1, 'loaded one');
  assertEq(loaded[0].id, r.id, 'id matches');
});

test('storage — v1 migration', () => {
  const v1 = { version: 1, region: makeRegion({ id: 'legacy' }) };
  fakeStorage.setItem(HIRES_STORAGE_KEY, JSON.stringify(v1));
  const loaded = loadRegions();
  assertEq(loaded.length, 1, 'migrated one');
  assertEq(loaded[0].id, 'legacy', 'id preserved');
});

test('storage — clear', () => {
  saveRegions([makeRegion()]);
  clearRegionsStorage();
  assertEq(loadRegions().length, 0, 'cleared');
});

// ── HiResState CRUD ──────────────────────────────────────────────────────────
test('HiResState — add + remove', () => {
  const state = new HiResState();
  state.add(makeRegion({ id: 'a' }));
  assertEq(state.getAll().length, 1, 'added');
  state.remove('a');
  assertEq(state.getAll().length, 0, 'removed');
});

test('HiResState — update', () => {
  const state = new HiResState();
  state.add(makeRegion({ id: 'a', enabled: true }));
  state.update(makeRegion({ id: 'a', enabled: false }));
  assert(state.getAll()[0].enabled === false, 'updated');
});

test('HiResState — clear', () => {
  const state = new HiResState();
  state.add(makeRegion({ id: 'a' }));
  state.add(makeRegion({ id: 'b', x1: 20, x2: 29 }));
  state.clear();
  assertEq(state.getAll().length, 0, 'cleared');
});

console.log(`hires.test.ts passed (${passed} tests)`);
