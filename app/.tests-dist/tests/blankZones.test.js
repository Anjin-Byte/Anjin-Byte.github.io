"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blankZones_1 = require("../types/blankZones");
const blankZoneNormalization_1 = require("../utils/blankZoneNormalization");
const blankZoneStorage_1 = require("../utils/blankZoneStorage");
const useBlankZones_1 = require("../composables/useBlankZones");
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
function testNormalizeZone() {
    const now = 1000;
    const zone = (0, blankZoneNormalization_1.normalizeZone)({
        id: 'z-1',
        x1: 10,
        y1: 7,
        x2: 2,
        y2: 1,
        mode: 'major',
        edge: {
            style: 'fade',
            widthCells: 12,
            opacity: -2,
            fadeStrength: 4,
        },
        enabled: true,
        createdAt: now,
        updatedAt: now,
    }, now);
    assert(zone !== null, 'normalizeZone should accept valid payload');
    assertEq(zone?.x1, 2, 'normalizeZone should sort x coords');
    assertEq(zone?.y1, 1, 'normalizeZone should sort y coords');
    assertEq(zone?.edge.widthCells, 4, 'normalizeZone should clamp widthCells');
    assertEq(zone?.edge.opacity, 0, 'normalizeZone should clamp opacity');
    assertEq(zone?.edge.fadeStrength, 1, 'normalizeZone should clamp fadeStrength');
}
function testNormalizeZonesCap() {
    const input = Array.from({ length: blankZones_1.MAX_BLANK_ZONES + 7 }, (_, idx) => ({
        id: `z-${idx}`,
        x1: idx,
        y1: idx,
        x2: idx,
        y2: idx,
        mode: 'both',
        edge: { style: 'none', widthCells: 1, opacity: 1 },
        enabled: true,
        createdAt: idx,
        updatedAt: idx,
    }));
    const normalized = (0, blankZoneNormalization_1.normalizeZones)(input);
    assertEq(normalized.length, blankZones_1.MAX_BLANK_ZONES, 'normalizeZones should cap at MAX_BLANK_ZONES');
}
function testStorageRoundTrip() {
    fakeStorage.clear();
    const zones = [{
            id: 'z-storage',
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 1,
            mode: 'both',
            edge: { style: 'none', widthCells: 1, opacity: 1 },
            enabled: true,
            createdAt: 1,
            updatedAt: 1,
        }];
    (0, blankZoneStorage_1.saveBlankZones)(zones);
    assertEq((0, blankZoneStorage_1.loadBlankZones)(), zones, 'loadBlankZones should restore saved payload');
    fakeStorage.setItem('gol.gridBlankZones.v1', JSON.stringify({ version: 999, zones }));
    assertEq((0, blankZoneStorage_1.loadBlankZones)(), [], 'loadBlankZones should drop unknown versions');
    (0, blankZoneStorage_1.clearBlankZonesStorage)();
}
function testUseBlankZonesCallbacks() {
    fakeStorage.clear();
    const events = [];
    const zoneStore = (0, useBlankZones_1.useBlankZones)({
        onSetZones: () => events.push('set'),
        onAddZone: () => events.push('add'),
        onUpdateZone: () => events.push('update'),
        onRemoveZone: () => events.push('remove'),
        onClearZones: () => events.push('clear'),
    });
    const zone = {
        id: 'z-store',
        x1: 1,
        y1: 2,
        x2: 3,
        y2: 4,
        mode: 'minor',
        edge: { style: 'bold-major', widthCells: 2, opacity: 0.8 },
        enabled: true,
        createdAt: 10,
        updatedAt: 10,
    };
    zoneStore.addZone(zone);
    zoneStore.updateZone({ ...zone, mode: 'major', updatedAt: 11 });
    zoneStore.removeZone(zone.id);
    zoneStore.setZones([zone]);
    zoneStore.clearZones();
    assertEq(events, ['add', 'update', 'remove', 'set', 'clear'], 'useBlankZones should emit incremental callbacks');
}
function run() {
    testNormalizeZone();
    testNormalizeZonesCap();
    testStorageRoundTrip();
    testUseBlankZonesCallbacks();
    // eslint-disable-next-line no-console
    console.log('blankZones.test.ts passed');
}
run();
