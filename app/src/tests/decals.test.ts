import { MAX_DECALS, DECAL_DEFAULT_TINT, type Decal } from '../types/decals';
import { normalizeDecal, normalizeDecals } from '../utils/decalNormalization';
import {
  clearDecalsStorage,
  loadDecals,
  saveDecals,
} from '../utils/decalStorage';
import { useDecals } from '../composables/useDecals';

class FakeStorage {
  private readonly map = new Map<string, string>();

  getItem(key: string): string | null {
    return this.map.has(key) ? this.map.get(key)! : null;
  }

  setItem(key: string, value: string): void {
    this.map.set(key, value);
  }

  removeItem(key: string): void {
    this.map.delete(key);
  }

  clear(): void {
    this.map.clear();
  }
}

const fakeStorage = new FakeStorage();
(globalThis as unknown as { localStorage: Storage }).localStorage = fakeStorage as unknown as Storage;

function assert(condition: unknown, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}

function assertEq<T>(actual: T, expected: T, message: string): void {
  const a = JSON.stringify(actual);
  const b = JSON.stringify(expected);
  if (a !== b) {
    throw new Error(`${message}\nexpected: ${b}\nactual:   ${a}`);
  }
}

function makeDecal(overrides: Partial<Decal> = {}): Decal {
  const now = Date.now();
  return {
    id: 'd-1',
    x1: 0, y1: 0, x2: 4, y2: 4,
    pattern: { kind: 'solid', coverage: 1, solidR: 0.5, solidG: 0.5, solidB: 0.5 },
    tint: [1, 1, 1, 1],
    blendMode: 'alpha',
    suppressCells: false,
    enabled: true,
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}

// ── Normalization ────────────────────────────────────────────────────────────

function testNormalizeDecalSortsCoords(): void {
  const decal = normalizeDecal({
    id: 'd-sort',
    x1: 10, y1: 7, x2: 2, y2: 1,
    pattern: { kind: 'solid' },
    tint: [1, 1, 1, 1],
    blendMode: 'alpha',
    suppressCells: false,
    enabled: true,
    createdAt: 1, updatedAt: 1,
  }, 1);

  assert(decal !== null, 'normalizeDecal should accept valid payload');
  assertEq(decal?.x1, 2, 'should sort x coords (min)');
  assertEq(decal?.y1, 1, 'should sort y coords (min)');
  assertEq(decal?.x2, 10, 'should sort x coords (max)');
  assertEq(decal?.y2, 7, 'should sort y coords (max)');
}

function testNormalizeDecalRejectsInvalid(): void {
  assertEq(normalizeDecal(null), null, 'null should be rejected');
  assertEq(normalizeDecal(undefined), null, 'undefined should be rejected');
  assertEq(normalizeDecal(42), null, 'non-object should be rejected');
  assertEq(normalizeDecal({ id: 'd-1' }), null, 'missing coords should be rejected');
  assertEq(normalizeDecal({ id: 'd-1', x1: NaN, y1: 0, x2: 1, y2: 1 }), null, 'NaN coords should be rejected');
}

function testNormalizeDecalDefaultsPattern(): void {
  const decal = normalizeDecal({
    id: 'd-pat',
    x1: 0, y1: 0, x2: 1, y2: 1,
    pattern: { kind: 'solid' },
    tint: [1, 1, 1, 1],
    blendMode: 'alpha',
    suppressCells: false,
    enabled: true,
    createdAt: 1, updatedAt: 1,
  }, 1);

  assert(decal !== null, 'should normalize');
  assertEq(decal?.pattern.coverage, 1, 'solid coverage should default to 1');
  assertEq(decal?.pattern.solidR, DECAL_DEFAULT_TINT[0], 'solidR should default to tint[0]');
}

function testNormalizeDecalClampsTint(): void {
  const decal = normalizeDecal({
    id: 'd-tint',
    x1: 0, y1: 0, x2: 1, y2: 1,
    pattern: { kind: 'solid' },
    tint: [-0.5, 2.0, 0.5, -1],
    blendMode: 'alpha',
    suppressCells: false,
    enabled: true,
    createdAt: 1, updatedAt: 1,
  }, 1);

  assert(decal !== null, 'should normalize');
  assertEq(decal?.tint[0], 0, 'tint[0] should clamp to 0');
  assertEq(decal?.tint[1], 1, 'tint[1] should clamp to 1');
  assertEq(decal?.tint[2], 0.5, 'tint[2] should pass through');
  assertEq(decal?.tint[3], 0, 'tint[3] should clamp to 0');
}

function testNormalizeDecalKindFallback(): void {
  const decal = normalizeDecal({
    id: 'd-kind',
    x1: 0, y1: 0, x2: 1, y2: 1,
    pattern: { kind: 'unknown-kind' },
    tint: [1, 1, 1, 1],
    blendMode: 'alpha',
    suppressCells: false,
    enabled: true,
    createdAt: 1, updatedAt: 1,
  }, 1);

  assert(decal !== null, 'should normalize');
  assertEq(decal?.pattern.kind, 'solid', 'unknown kind should default to solid');
}

function testNormalizeDecalBlendModeFallback(): void {
  const decal = normalizeDecal({
    id: 'd-blend',
    x1: 0, y1: 0, x2: 1, y2: 1,
    pattern: { kind: 'solid' },
    tint: [1, 1, 1, 1],
    blendMode: 'additive' as any,
    suppressCells: false,
    enabled: true,
    createdAt: 1, updatedAt: 1,
  }, 1);

  assert(decal !== null, 'should normalize');
  assertEq(decal?.blendMode, 'alpha', 'unknown blend mode should default to alpha');
}

function testNormalizeDecalKindSpecificParams(): void {
  const checker = normalizeDecal({
    id: 'd-check', x1: 0, y1: 0, x2: 1, y2: 1,
    pattern: { kind: 'checkerboard', cellSize: -5 },
    tint: [1, 1, 1, 1], blendMode: 'alpha',
    suppressCells: false, enabled: true, createdAt: 1, updatedAt: 1,
  }, 1);
  assertEq(checker?.pattern.cellSize, 1, 'checkerboard cellSize should clamp to >= 1');

  const stripes = normalizeDecal({
    id: 'd-stripes', x1: 0, y1: 0, x2: 1, y2: 1,
    pattern: { kind: 'stripes', pitchCells: 0 },
    tint: [1, 1, 1, 1], blendMode: 'alpha',
    suppressCells: false, enabled: true, createdAt: 1, updatedAt: 1,
  }, 1);
  assertEq(stripes?.pattern.pitchCells, 2, 'stripes pitch should clamp to >= 2');

  const dots = normalizeDecal({
    id: 'd-dots', x1: 0, y1: 0, x2: 1, y2: 1,
    pattern: { kind: 'dots', dotRadius: -1, dotSpacing: 0 },
    tint: [1, 1, 1, 1], blendMode: 'alpha',
    suppressCells: false, enabled: true, createdAt: 1, updatedAt: 1,
  }, 1);
  assertEq(dots?.pattern.dotRadius, 0.1, 'dots radius should clamp to >= 0.1');
  assertEq(dots?.pattern.dotSpacing, 2, 'dots spacing should clamp to >= 2');
}

function testNormalizeDecalsCap(): void {
  const input = Array.from({ length: MAX_DECALS + 10 }, (_, idx) => ({
    id: `d-${idx}`,
    x1: idx, y1: idx, x2: idx, y2: idx,
    pattern: { kind: 'solid' },
    tint: [1, 1, 1, 1],
    blendMode: 'alpha',
    suppressCells: false,
    enabled: true,
    createdAt: idx,
    updatedAt: idx,
  }));
  const normalized = normalizeDecals(input);
  assertEq(normalized.length, MAX_DECALS, 'normalizeDecals should cap at MAX_DECALS');
}

// ── Storage ──────────────────────────────────────────────────────────────────

function testStorageRoundTrip(): void {
  fakeStorage.clear();
  const decals: Decal[] = [makeDecal({ id: 'd-storage' })];

  saveDecals(decals);
  assertEq(loadDecals(), decals, 'loadDecals should restore saved payload');

  fakeStorage.setItem('gol.decals.v1', JSON.stringify({ version: 999, decals }));
  assertEq(loadDecals(), [], 'loadDecals should drop unknown versions');
  clearDecalsStorage();
}

// ── Composable ───────────────────────────────────────────────────────────────

function testUseDecalsCallbacks(): void {
  fakeStorage.clear();
  const events: string[] = [];
  const store = useDecals({
    onSetDecals: () => events.push('set'),
    onAddDecal: () => events.push('add'),
    onUpdateDecal: () => events.push('update'),
    onRemoveDecal: () => events.push('remove'),
    onClearDecals: () => events.push('clear'),
  });

  const decal = makeDecal({ id: 'd-store' });

  store.addDecal(decal);
  store.updateDecal({ ...decal, blendMode: 'multiply', updatedAt: Date.now() });
  store.removeDecal(decal.id);
  store.setDecals([decal]);
  store.clearDecals();

  assertEq(events, ['add', 'update', 'remove', 'set', 'clear'], 'useDecals should emit incremental callbacks');
}

function testUseDecalsDuplicateGuards(): void {
  fakeStorage.clear();
  const store = useDecals();
  const decal = makeDecal({ id: 'd-dup' });

  store.addDecal(decal);
  assertEq(store.decals.value.length, 1, 'addDecal should add one decal');

  store.updateDecal({ ...decal, id: 'nonexistent' });
  assertEq(store.decals.value.length, 1, 'updateDecal should ignore unknown id');

  store.removeDecal('nonexistent');
  assertEq(store.decals.value.length, 1, 'removeDecal should ignore unknown id');

  store.clearDecals();
  store.clearDecals();
  assertEq(store.decals.value.length, 0, 'clearDecals on empty should be no-op');
}

// ── Runner ───────────────────────────────────────────────────────────────────

function run(): void {
  testNormalizeDecalSortsCoords();
  testNormalizeDecalRejectsInvalid();
  testNormalizeDecalDefaultsPattern();
  testNormalizeDecalClampsTint();
  testNormalizeDecalKindFallback();
  testNormalizeDecalBlendModeFallback();
  testNormalizeDecalKindSpecificParams();
  testNormalizeDecalsCap();
  testStorageRoundTrip();
  testUseDecalsCallbacks();
  testUseDecalsDuplicateGuards();
  // eslint-disable-next-line no-console
  console.log('decals.test.ts passed');
}

run();
