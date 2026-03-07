import { MAX_TEXT_BLOCKS, DEFAULT_TEXT_COLOR, type TextBlock } from '../types/text';
import { normalizeTextBlock, normalizeTextBlocks } from '../utils/textNormalization';
import { clearTextStorage, loadTextBlocks, saveTextBlocks } from '../utils/textStorage';

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

function makeBlock(overrides: Partial<TextBlock> = {}): TextBlock {
  const now = Date.now();
  return {
    id: 'txt-1',
    text: 'Hello',
    font: 'bold 24px monospace',
    cellX: 10,
    cellY: 5,
    cellsWide: 40,
    renderMode: 'sdf',
    color: '#ff0000',
    enabled: true,
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}

// ── Normalization ────────────────────────────────────────────────────────────

function testNormalizeValid(): void {
  const block = normalizeTextBlock(makeBlock());
  assert(block !== null, 'should accept valid block');
  assertEq(block!.text, 'Hello', 'text preserved');
  assertEq(block!.cellX, 10, 'cellX preserved');
  assertEq(block!.cellY, 5, 'cellY preserved');
  assertEq(block!.cellsWide, 40, 'cellsWide preserved');
  assertEq(block!.renderMode, 'sdf', 'renderMode preserved');
  assertEq(block!.color, '#ff0000', 'color preserved');
}

function testNormalizeRejectsInvalid(): void {
  assertEq(normalizeTextBlock(null), null, 'null → null');
  assertEq(normalizeTextBlock(undefined), null, 'undefined → null');
  assertEq(normalizeTextBlock(42), null, 'number → null');
  assertEq(normalizeTextBlock({ text: '' }), null, 'empty text → null');
  assertEq(normalizeTextBlock({ cellX: 0, cellY: 0 }), null, 'missing text → null');
}

function testNormalizeDefaultsFont(): void {
  const block = normalizeTextBlock(makeBlock({ font: '' }));
  assert(block !== null, 'should normalize');
  assertEq(block!.font, 'bold 24px monospace', 'empty font → default');
}

function testNormalizeClampsCellsWide(): void {
  const block = normalizeTextBlock(makeBlock({ cellsWide: -5 }));
  assert(block !== null, 'should normalize');
  assertEq(block!.cellsWide, 1, 'negative cellsWide → clamped to 1');
}

function testNormalizeRenderModeFallback(): void {
  const block = normalizeTextBlock(makeBlock({ renderMode: 'invalid' as any }));
  assert(block !== null, 'should normalize');
  assertEq(block!.renderMode, 'cells', 'unknown renderMode → cells');
}

function testNormalizeColorFallback(): void {
  const noColor = normalizeTextBlock(makeBlock({ color: undefined as any }));
  assert(noColor !== null, 'should normalize');
  assertEq(noColor!.color, DEFAULT_TEXT_COLOR, 'missing color → default');

  const badColor = normalizeTextBlock(makeBlock({ color: 'red' }));
  assert(badColor !== null, 'should normalize');
  assertEq(badColor!.color, DEFAULT_TEXT_COLOR, 'non-hex color → default');

  const shortHex = normalizeTextBlock(makeBlock({ color: '#f00' }));
  assert(shortHex !== null, 'should normalize');
  assertEq(shortHex!.color, DEFAULT_TEXT_COLOR, 'short hex → default');
}

function testNormalizeBlocksCap(): void {
  const input = Array.from({ length: MAX_TEXT_BLOCKS + 5 }, (_, i) =>
    makeBlock({ id: `t-${i}` }),
  );
  const result = normalizeTextBlocks(input);
  assertEq(result.length, MAX_TEXT_BLOCKS, `cap at ${MAX_TEXT_BLOCKS}`);
}

// ── Storage ──────────────────────────────────────────────────────────────────

function testStorageRoundTrip(): void {
  fakeStorage.clear();
  const blocks = [makeBlock({ id: 'rt-1' }), makeBlock({ id: 'rt-2', color: '#00ff00' })];
  saveTextBlocks(blocks);
  const loaded = loadTextBlocks();
  assertEq(loaded.length, 2, 'round trip count');
  assertEq(loaded[0].id, 'rt-1', 'first id');
  assertEq(loaded[1].color, '#00ff00', 'second color preserved');
}

function testStorageVersionMismatch(): void {
  fakeStorage.clear();
  fakeStorage.setItem('gol.text.v1', JSON.stringify({ version: 999, blocks: [makeBlock()] }));
  const loaded = loadTextBlocks();
  assertEq(loaded.length, 0, 'future version → empty');
}

function testStorageMigrationFromOlderVersion(): void {
  fakeStorage.clear();
  // Simulate v1 data without color field
  const oldBlock = { id: 'old-1', text: 'Legacy', font: 'bold 24px monospace', cellX: 0, cellY: 0, cellsWide: 20, renderMode: 'sdf', enabled: true, createdAt: 1, updatedAt: 1 };
  fakeStorage.setItem('gol.text.v1', JSON.stringify({ version: 1, blocks: [oldBlock] }));
  const loaded = loadTextBlocks();
  assertEq(loaded.length, 1, 'v1 data loads');
  assertEq(loaded[0].color, DEFAULT_TEXT_COLOR, 'missing color → default via normalization');
}

function testStorageClear(): void {
  fakeStorage.clear();
  saveTextBlocks([makeBlock()]);
  clearTextStorage();
  const loaded = loadTextBlocks();
  assertEq(loaded.length, 0, 'clear removes data');
}

// ── Runner ───────────────────────────────────────────────────────────────────

function run(): void {
  testNormalizeValid();
  testNormalizeRejectsInvalid();
  testNormalizeDefaultsFont();
  testNormalizeClampsCellsWide();
  testNormalizeRenderModeFallback();
  testNormalizeColorFallback();
  testNormalizeBlocksCap();
  testStorageRoundTrip();
  testStorageVersionMismatch();
  testStorageMigrationFromOlderVersion();
  testStorageClear();
  console.log('text.test.ts passed');
}

run();
