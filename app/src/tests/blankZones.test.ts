import { MAX_BLANK_ZONES, type BlankZone } from '../types/blankZones';
import { normalizeZone, normalizeZones } from '../utils/blankZoneNormalization';
import {
  clearBlankZonesStorage,
  loadBlankZones,
  saveBlankZones,
} from '../utils/blankZoneStorage';
import { useBlankZones } from '../composables/useBlankZones';

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

function testNormalizeZone(): void {
  const now = 1000;
  const zone = normalizeZone({
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

function testNormalizeZonesCap(): void {
  const input = Array.from({ length: MAX_BLANK_ZONES + 7 }, (_, idx) => ({
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
  const normalized = normalizeZones(input);
  assertEq(normalized.length, MAX_BLANK_ZONES, 'normalizeZones should cap at MAX_BLANK_ZONES');
}

function testStorageRoundTrip(): void {
  fakeStorage.clear();
  const zones: BlankZone[] = [{
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

  saveBlankZones(zones);
  assertEq(loadBlankZones(), zones, 'loadBlankZones should restore saved payload');

  fakeStorage.setItem('gol.gridBlankZones.v1', JSON.stringify({ version: 999, zones }));
  assertEq(loadBlankZones(), [], 'loadBlankZones should drop unknown versions');
  clearBlankZonesStorage();
}

function testUseBlankZonesCallbacks(): void {
  fakeStorage.clear();
  const events: string[] = [];
  const zoneStore = useBlankZones({
    onSetZones: () => events.push('set'),
    onAddZone: () => events.push('add'),
    onUpdateZone: () => events.push('update'),
    onRemoveZone: () => events.push('remove'),
    onClearZones: () => events.push('clear'),
  });

  const zone: BlankZone = {
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

function run(): void {
  testNormalizeZone();
  testNormalizeZonesCap();
  testStorageRoundTrip();
  testUseBlankZonesCallbacks();
  // eslint-disable-next-line no-console
  console.log('blankZones.test.ts passed');
}

run();
