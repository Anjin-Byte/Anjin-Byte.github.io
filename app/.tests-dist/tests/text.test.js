"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const text_1 = require("../types/text");
const textNormalization_1 = require("../utils/textNormalization");
const textStorage_1 = require("../utils/textStorage");
class FakeStorage {
    constructor() {
        Object.defineProperty(this, "map", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
    }
    getItem(key) {
        return this.map.has(key) ? this.map.get(key) : null;
    }
    setItem(key, value) {
        this.map.set(key, value);
    }
    removeItem(key) {
        this.map.delete(key);
    }
    clear() {
        this.map.clear();
    }
}
const fakeStorage = new FakeStorage();
globalThis.localStorage = fakeStorage;
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
function assertEq(actual, expected, message) {
    const a = JSON.stringify(actual);
    const b = JSON.stringify(expected);
    if (a !== b) {
        throw new Error(`${message}\nexpected: ${b}\nactual:   ${a}`);
    }
}
function makeBlock(overrides = {}) {
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
function testNormalizeValid() {
    const block = (0, textNormalization_1.normalizeTextBlock)(makeBlock());
    assert(block !== null, 'should accept valid block');
    assertEq(block.text, 'Hello', 'text preserved');
    assertEq(block.cellX, 10, 'cellX preserved');
    assertEq(block.cellY, 5, 'cellY preserved');
    assertEq(block.cellsWide, 40, 'cellsWide preserved');
    assertEq(block.renderMode, 'sdf', 'renderMode preserved');
    assertEq(block.color, '#ff0000', 'color preserved');
}
function testNormalizeRejectsInvalid() {
    assertEq((0, textNormalization_1.normalizeTextBlock)(null), null, 'null → null');
    assertEq((0, textNormalization_1.normalizeTextBlock)(undefined), null, 'undefined → null');
    assertEq((0, textNormalization_1.normalizeTextBlock)(42), null, 'number → null');
    assertEq((0, textNormalization_1.normalizeTextBlock)({ text: '' }), null, 'empty text → null');
    assertEq((0, textNormalization_1.normalizeTextBlock)({ cellX: 0, cellY: 0 }), null, 'missing text → null');
}
function testNormalizeDefaultsFont() {
    const block = (0, textNormalization_1.normalizeTextBlock)(makeBlock({ font: '' }));
    assert(block !== null, 'should normalize');
    assertEq(block.font, 'bold 24px monospace', 'empty font → default');
}
function testNormalizeClampsCellsWide() {
    const block = (0, textNormalization_1.normalizeTextBlock)(makeBlock({ cellsWide: -5 }));
    assert(block !== null, 'should normalize');
    assertEq(block.cellsWide, 1, 'negative cellsWide → clamped to 1');
}
function testNormalizeRenderModeFallback() {
    const block = (0, textNormalization_1.normalizeTextBlock)(makeBlock({ renderMode: 'invalid' }));
    assert(block !== null, 'should normalize');
    assertEq(block.renderMode, 'cells', 'unknown renderMode → cells');
}
function testNormalizeColorFallback() {
    const noColor = (0, textNormalization_1.normalizeTextBlock)(makeBlock({ color: undefined }));
    assert(noColor !== null, 'should normalize');
    assertEq(noColor.color, text_1.DEFAULT_TEXT_COLOR, 'missing color → default');
    const badColor = (0, textNormalization_1.normalizeTextBlock)(makeBlock({ color: 'red' }));
    assert(badColor !== null, 'should normalize');
    assertEq(badColor.color, text_1.DEFAULT_TEXT_COLOR, 'non-hex color → default');
    const shortHex = (0, textNormalization_1.normalizeTextBlock)(makeBlock({ color: '#f00' }));
    assert(shortHex !== null, 'should normalize');
    assertEq(shortHex.color, text_1.DEFAULT_TEXT_COLOR, 'short hex → default');
}
function testNormalizeBlocksCap() {
    const input = Array.from({ length: text_1.MAX_TEXT_BLOCKS + 5 }, (_, i) => makeBlock({ id: `t-${i}` }));
    const result = (0, textNormalization_1.normalizeTextBlocks)(input);
    assertEq(result.length, text_1.MAX_TEXT_BLOCKS, `cap at ${text_1.MAX_TEXT_BLOCKS}`);
}
// ── Storage ──────────────────────────────────────────────────────────────────
function testStorageRoundTrip() {
    fakeStorage.clear();
    const blocks = [makeBlock({ id: 'rt-1' }), makeBlock({ id: 'rt-2', color: '#00ff00' })];
    (0, textStorage_1.saveTextBlocks)(blocks);
    const loaded = (0, textStorage_1.loadTextBlocks)();
    assertEq(loaded.length, 2, 'round trip count');
    assertEq(loaded[0].id, 'rt-1', 'first id');
    assertEq(loaded[1].color, '#00ff00', 'second color preserved');
}
function testStorageVersionMismatch() {
    fakeStorage.clear();
    fakeStorage.setItem('gol.text.v1', JSON.stringify({ version: 999, blocks: [makeBlock()] }));
    const loaded = (0, textStorage_1.loadTextBlocks)();
    assertEq(loaded.length, 0, 'future version → empty');
}
function testStorageMigrationFromOlderVersion() {
    fakeStorage.clear();
    // Simulate v1 data without color field
    const oldBlock = { id: 'old-1', text: 'Legacy', font: 'bold 24px monospace', cellX: 0, cellY: 0, cellsWide: 20, renderMode: 'sdf', enabled: true, createdAt: 1, updatedAt: 1 };
    fakeStorage.setItem('gol.text.v1', JSON.stringify({ version: 1, blocks: [oldBlock] }));
    const loaded = (0, textStorage_1.loadTextBlocks)();
    assertEq(loaded.length, 1, 'v1 data loads');
    assertEq(loaded[0].color, text_1.DEFAULT_TEXT_COLOR, 'missing color → default via normalization');
}
function testStorageClear() {
    fakeStorage.clear();
    (0, textStorage_1.saveTextBlocks)([makeBlock()]);
    (0, textStorage_1.clearTextStorage)();
    const loaded = (0, textStorage_1.loadTextBlocks)();
    assertEq(loaded.length, 0, 'clear removes data');
}
// ── Runner ───────────────────────────────────────────────────────────────────
function run() {
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
