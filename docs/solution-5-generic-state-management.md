# Solution 5: Generic State Management

## Goal

Replace 20 near-identical files (4 features × 5 layers) with generic factories. Adding a new feature should require only a type definition and normalization rules — not 5 copy-pasted files.

---

## What Gets Generalized

| Layer | Current (per feature) | Generic replacement |
|-------|----------------------|-------------------|
| Storage | `blankZoneStorage.ts`, `decalStorage.ts`, `hiresStorage.ts`, `textStorage.ts` | `createFeatureStorage<T>()` |
| Composable | `useBlankZones.ts`, `useDecals.ts`, `useHiRes.ts`, `useText.ts` | `createFeatureComposable<T>()` |
| Worker State | `BlankZoneState.ts`, `DecalState.ts`, `HiResState.ts`, `TextState.ts` | `FeatureState<T>` |
| Array normalization | Repeated `normalizeArray` in each normalization file | `normalizeArray<T>()` |

**What stays separate** (domain-specific, not duplicated):
- Type definitions (`types/*.ts`)
- Normalization logic (`utils/*Normalization.ts` — field-specific validation)
- UI components (`Grid*Tab.vue` — unique controls)

---

## Implementation

### 1. Generic Storage Factory

**File:** `app/src/utils/featureStorage.ts` (~35 lines)

```typescript
export interface FeatureStorageConfig<T> {
  /** localStorage key. */
  key: string;
  /** Current storage format version. */
  version: number;
  /** Normalize raw data from storage into validated items. */
  normalize: (raw: unknown) => T[];
  /** Property name in the storage payload (e.g., 'zones', 'decals'). */
  itemsKey: string;
  /** Optional migration from older versions. */
  migrate?: (raw: Record<string, unknown>) => Record<string, unknown>;
}

export interface FeatureStorage<T> {
  load(): T[];
  save(items: T[]): void;
  clear(): void;
}

export function createFeatureStorage<T>(config: FeatureStorageConfig<T>): FeatureStorage<T> {
  return {
    load(): T[] {
      try {
        const json = localStorage.getItem(config.key);
        if (!json) return [];
        let parsed = JSON.parse(json) as Record<string, unknown>;
        if (config.migrate && (parsed.version as number) < config.version) {
          parsed = config.migrate(parsed);
        }
        return config.normalize(parsed[config.itemsKey]);
      } catch {
        return [];
      }
    },

    save(items: T[]): void {
      const payload: Record<string, unknown> = {
        version: config.version,
        [config.itemsKey]: items,
      };
      localStorage.setItem(config.key, JSON.stringify(payload));
    },

    clear(): void {
      localStorage.removeItem(config.key);
    },
  };
}
```

**Usage:**

```typescript
// blankZoneStorage.ts — becomes ~10 lines
import { createFeatureStorage } from './featureStorage';
import { normalizeZones } from './blankZoneNormalization';
import { BLANK_ZONE_STORAGE_KEY, BLANK_ZONE_STORAGE_VERSION } from '../types/blankZones';

export const blankZoneStorage = createFeatureStorage({
  key: BLANK_ZONE_STORAGE_KEY,
  version: BLANK_ZONE_STORAGE_VERSION,
  normalize: normalizeZones,
  itemsKey: 'zones',
});
```

```typescript
// hiresStorage.ts — with migration
import { createFeatureStorage } from './featureStorage';
import { normalizeRegions } from './hiresNormalization';
import { HIRES_STORAGE_VERSION } from '../types/hiresRegion';

export const hiresStorage = createFeatureStorage({
  key: 'gol_hires_regions',
  version: HIRES_STORAGE_VERSION,
  normalize: normalizeRegions,
  itemsKey: 'regions',
  migrate(raw) {
    // v1 had a single 'region' field
    if (raw.region && !raw.regions) {
      return { ...raw, regions: [raw.region], version: HIRES_STORAGE_VERSION };
    }
    return raw;
  },
});
```

### 2. Generic Composable Factory

**File:** `app/src/composables/createFeatureComposable.ts` (~60 lines)

```typescript
import { ref, type Ref } from 'vue';
import type { FeatureStorage } from '../utils/featureStorage';

interface HasId {
  id: string;
  updatedAt: number;
}

export interface FeatureComposableOptions<T extends HasId> {
  storage: FeatureStorage<T>;
  normalize: (raw: unknown) => T[];
  normalizeOne: (raw: unknown) => T | null;
  maxItems: number;
  /** Optional callbacks fired after mutations (for posting to worker). */
  onChange?: (items: T[]) => void;
}

export interface FeatureComposable<T extends HasId> {
  items: Ref<T[]>;
  setItems(items: T[]): void;
  addItem(item: T): void;
  updateItem(item: T): void;
  removeItem(id: string): void;
  clearItems(): void;
  syncFromWorker(items: T[]): void;
}

export function createFeatureComposable<T extends HasId>(
  options: FeatureComposableOptions<T>,
): FeatureComposable<T> {
  const items = ref<T[]>(options.storage.load()) as Ref<T[]>;

  function commit(): void {
    options.storage.save(items.value);
    options.onChange?.(items.value);
  }

  function setItems(newItems: T[]): void {
    items.value = options.normalize(newItems).slice(0, options.maxItems);
    commit();
  }

  function addItem(item: T): void {
    const normalized = options.normalizeOne(item);
    if (!normalized) return;
    if (items.value.length >= options.maxItems) return;
    items.value = [...items.value, normalized];
    commit();
  }

  function updateItem(item: T): void {
    const normalized = options.normalizeOne(item);
    if (!normalized) return;
    const idx = items.value.findIndex(i => i.id === normalized.id);
    if (idx === -1) return;
    const updated = [...items.value];
    updated[idx] = { ...normalized, updatedAt: Date.now() };
    items.value = updated;
    commit();
  }

  function removeItem(id: string): void {
    items.value = items.value.filter(i => i.id !== id);
    commit();
  }

  function clearItems(): void {
    items.value = [];
    commit();
  }

  function syncFromWorker(workerItems: T[]): void {
    items.value = options.normalize(workerItems);
    options.storage.save(items.value);
    // No onChange — this came FROM the worker, don't echo back
  }

  return { items, setItems, addItem, updateItem, removeItem, clearItems, syncFromWorker };
}
```

**Usage:**

```typescript
// useBlankZones.ts — becomes ~15 lines
import { createFeatureComposable } from './createFeatureComposable';
import { blankZoneStorage } from '../utils/blankZoneStorage';
import { normalizeZone, normalizeZones } from '../utils/blankZoneNormalization';
import { MAX_BLANK_ZONES } from '../types/blankZones';

export function useBlankZones() {
  return createFeatureComposable({
    storage: blankZoneStorage,
    normalize: normalizeZones,
    normalizeOne: normalizeZone,
    maxItems: MAX_BLANK_ZONES,
  });
}
```

### 3. Generic Worker State

**File:** `app/src/workers/FeatureState.ts` (~35 lines)

```typescript
interface HasId {
  id: string;
}

export class FeatureState<T extends HasId> {
  private items: T[] = [];

  constructor(
    private normalizeOne: (raw: unknown) => T | null,
    private normalizeAll: (raw: unknown) => T[],
    private maxItems: number,
  ) {}

  getAll(): T[] {
    return this.items;
  }

  setAll(raw: unknown): T[] {
    this.items = this.normalizeAll(raw).slice(0, this.maxItems);
    return this.items;
  }

  add(raw: unknown): { items: T[]; error?: string } {
    if (this.items.length >= this.maxItems) {
      return { items: this.items, error: `Maximum ${this.maxItems} items reached` };
    }
    const item = this.normalizeOne(raw);
    if (!item) return { items: this.items, error: 'Invalid item data' };
    this.items = [...this.items, item];
    return { items: this.items };
  }

  update(raw: unknown): { items: T[]; error?: string } {
    const item = this.normalizeOne(raw);
    if (!item) return { items: this.items, error: 'Invalid item data' };
    const idx = this.items.findIndex(i => i.id === item.id);
    if (idx === -1) return { items: this.items, error: `Item ${item.id} not found` };
    const updated = [...this.items];
    updated[idx] = item;
    this.items = updated;
    return { items: this.items };
  }

  remove(id: string): T[] {
    this.items = this.items.filter(i => i.id !== id);
    return this.items;
  }

  clear(): T[] {
    this.items = [];
    return this.items;
  }
}
```

**Usage:**

```typescript
// In backgroundRenderer.ts
const zoneState = new FeatureState(normalizeZone, normalizeZones, MAX_BLANK_ZONES);
const decalState = new FeatureState(normalizeDecal, normalizeDecals, MAX_DECALS);
const hiresState = new FeatureState(normalizeRegion, normalizeRegions, MAX_HIRES_REGIONS);
const textState = new FeatureState(normalizeTextBlock, normalizeTextBlocks, MAX_TEXT_BLOCKS);
```

### 4. Generic Array Normalizer

**File:** `app/src/utils/normalizeArray.ts` (~15 lines)

```typescript
/**
 * Normalize an array of items: validate each, filter nulls, enforce max count.
 */
export function normalizeArray<T>(
  raw: unknown,
  normalizeOne: (item: unknown, now?: number) => T | null,
  maxItems: number,
  now?: number,
): T[] {
  if (!Array.isArray(raw)) return [];
  const timestamp = now ?? Date.now();
  return raw
    .slice(0, maxItems)
    .map(item => normalizeOne(item, timestamp))
    .filter((item): item is T => item !== null);
}
```

**Usage in normalization files:**

```typescript
// blankZoneNormalization.ts
import { normalizeArray } from './normalizeArray';

export function normalizeZones(raw: unknown, now?: number): BlankZone[] {
  return normalizeArray(raw, normalizeZone, MAX_BLANK_ZONES, now);
}
```

Each normalization file keeps its domain-specific `normalizeOne()` function (field validation, clamping, defaults) but delegates the array iteration to the generic helper.

---

## Worker Message Routing

The worker currently has duplicated message handling for each feature. Generalize with a routing table:

```typescript
// In backgroundRenderer.ts

interface FeatureRoute<T extends HasId> {
  state: FeatureState<T>;
  setType: string;
  addType: string;
  updateType: string;
  removeType: string;
  clearType: string;
  echoType: string;
  errorType: string;
  applyToRenderer: (items: T[]) => void;
}

function createRoute<T extends HasId>(route: FeatureRoute<T>) {
  return (msg: WorkerInMsg) => {
    let result: { items: T[]; error?: string } | null = null;

    switch (msg.type) {
      case route.setType:
        result = { items: route.state.setAll(msg.data) };
        break;
      case route.addType:
        result = route.state.add(msg.data);
        break;
      case route.updateType:
        result = route.state.update(msg.data);
        break;
      case route.removeType:
        result = { items: route.state.remove(msg.id) };
        break;
      case route.clearType:
        result = { items: route.state.clear() };
        break;
      default:
        return false; // not handled
    }

    if (result) {
      route.applyToRenderer(result.items);
      if (result.error) {
        post({ type: route.errorType, error: result.error });
      } else {
        post({ type: route.echoType, items: result.items });
      }
    }
    return true; // handled
  };
}

// Register routes
const routes = [
  createRoute({
    state: zoneState,
    setType: 'set_zones', addType: 'add_zone', updateType: 'update_zone',
    removeType: 'remove_zone', clearType: 'clear_zones',
    echoType: 'zones_state', errorType: 'zones_error',
    applyToRenderer: (items) => applyZonesToRenderer(items),
  }),
  createRoute({
    state: decalState,
    setType: 'set_decals', addType: 'add_decal', updateType: 'update_decal',
    removeType: 'remove_decal', clearType: 'clear_decals',
    echoType: 'decals_state', errorType: 'decals_error',
    applyToRenderer: (items) => applyDecalsToRenderer(items),
  }),
  // ... hires, text
];

// In message handler:
self.onmessage = (e) => {
  const msg = e.data;
  for (const route of routes) {
    if (route(msg)) return;
  }
  // Handle non-feature messages (init, frame, resize, etc.)
};
```

This eliminates ~200 lines of duplicated switch/case handling in the worker.

---

## Generic Test Helpers

**File:** `app/src/tests/featureTestHelpers.ts` (~60 lines)

```typescript
import { FakeStorage } from './fakeStorage';

interface FeatureTestConfig<T extends { id: string }> {
  name: string;
  normalizeOne: (raw: unknown) => T | null;
  normalizeAll: (raw: unknown) => T[];
  maxItems: number;
  validItem: T;
  invalidItem: Record<string, unknown>;
  storageKey: string;
  storageVersion: number;
}

export function runFeatureTests<T extends { id: string }>(config: FeatureTestConfig<T>) {
  const { name, normalizeOne, normalizeAll, maxItems, validItem, invalidItem } = config;

  // Normalization tests
  console.log(`[${name}] normalizeOne: valid item`);
  const result = normalizeOne(validItem);
  assert(result !== null, 'valid item should normalize');
  assert(result!.id === validItem.id, 'id should be preserved');

  console.log(`[${name}] normalizeOne: null input`);
  assert(normalizeOne(null) === null, 'null should return null');

  console.log(`[${name}] normalizeOne: invalid input`);
  // Test depends on what makes an item invalid for this type
  // Some types may normalize invalid items by applying defaults

  console.log(`[${name}] normalizeAll: array input`);
  const arr = normalizeAll([validItem, validItem]);
  assert(arr.length === 2, 'should normalize two items');

  console.log(`[${name}] normalizeAll: non-array`);
  assert(normalizeAll('not an array').length === 0, 'non-array should return empty');

  console.log(`[${name}] normalizeAll: max items`);
  const many = Array(maxItems + 5).fill(validItem);
  assert(normalizeAll(many).length <= maxItems, `should cap at ${maxItems}`);

  // Storage tests
  console.log(`[${name}] storage: round-trip`);
  const storage = new FakeStorage();
  // ... storage round-trip tests

  console.log(`[${name}] FeatureState: CRUD`);
  // ... FeatureState CRUD tests
}
```

**Usage:**

```typescript
// zones.test.ts — becomes ~30 lines
import { runFeatureTests } from './featureTestHelpers';
import { normalizeZone, normalizeZones } from '../utils/blankZoneNormalization';
import { MAX_BLANK_ZONES, BLANK_ZONE_STORAGE_KEY, BLANK_ZONE_STORAGE_VERSION } from '../types/blankZones';

runFeatureTests({
  name: 'BlankZone',
  normalizeOne: normalizeZone,
  normalizeAll: normalizeZones,
  maxItems: MAX_BLANK_ZONES,
  validItem: { id: 'test-1', x1: 0, y1: 0, x2: 5, y2: 5, mode: 'minor', edge: { style: 'none', widthCells: 1, opacity: 1 }, enabled: true, createdAt: 1, updatedAt: 1 },
  invalidItem: {},
  storageKey: BLANK_ZONE_STORAGE_KEY,
  storageVersion: BLANK_ZONE_STORAGE_VERSION,
});

// Domain-specific edge cases (not in generic helper):
console.log('[BlankZone] zone rect clamping');
const clamped = normalizeZone({ ...validItem, x1: -999, x2: 999 });
assert(clamped !== null);
// ... zone-specific validations
```

---

## File Impact Summary

### Files Removed (replaced by generics)

| File | Lines | Replaced By |
|------|-------|-------------|
| `blankZoneStorage.ts` | 50 | 10-line wrapper around `createFeatureStorage` |
| `decalStorage.ts` | 50 | 10-line wrapper |
| `hiresStorage.ts` | 51 | 12-line wrapper (with migration) |
| `textStorage.ts` | 40 | 10-line wrapper |
| `useBlankZones.ts` | 94 | 15-line wrapper around `createFeatureComposable` |
| `useDecals.ts` | 94 | 15-line wrapper |
| `useHiRes.ts` | 70 | 15-line wrapper |
| `useText.ts` | 84 | 15-line wrapper |
| `BlankZoneState.ts` | 51 | 1-line instantiation of `FeatureState` |
| `DecalState.ts` | 45 | 1-line instantiation |
| `HiResState.ts` | 45 | 1-line instantiation |
| `TextState.ts` | 45 | 1-line instantiation |
| **Total removed** | **719** | |

### Files Added (generics)

| File | Lines |
|------|-------|
| `utils/featureStorage.ts` | ~35 |
| `composables/createFeatureComposable.ts` | ~60 |
| `workers/FeatureState.ts` | ~35 |
| `utils/normalizeArray.ts` | ~15 |
| `tests/featureTestHelpers.ts` | ~60 |
| **Total added** | **~205** |

### Remaining Per-Feature Files (wrappers)

| File | Lines |
|------|-------|
| 4 storage wrappers | ~42 total |
| 4 composable wrappers | ~60 total |
| 4 worker state instantiations | ~4 total (inline in backgroundRenderer.ts) |
| **Total wrappers** | **~106** |

### Net Impact

| | Before | After | Saved |
|---|--------|-------|-------|
| Generic infrastructure | 0 | 205 | — |
| Per-feature boilerplate | 719 | 106 | 613 |
| **Total** | **719** | **311** | **408 lines (57%)** |

---

## Migration Steps

### Step 1: Create generic infrastructure (additive)
- Write `featureStorage.ts`, `createFeatureComposable.ts`, `FeatureState.ts`, `normalizeArray.ts`
- No existing code changes — just new files

### Step 2: Migrate zones (lowest risk feature)
- Rewrite `blankZoneStorage.ts` as wrapper
- Rewrite `useBlankZones.ts` as wrapper
- Replace `BlankZoneState` instantiation in worker
- Run `pnpm test:zones` — must pass unchanged

### Step 3: Migrate decals
- Same pattern as zones
- Run `pnpm test:decals`

### Step 4: Migrate hires
- Include migration function in storage config
- Run `pnpm test` (if hires tests exist)

### Step 5: Migrate text
- Same pattern
- Run all tests

### Step 6: Create generic test helpers
- Write `featureTestHelpers.ts`
- Refactor existing test files to use generic helpers + domain-specific additions
- Verify all tests pass

### Step 7: Simplify worker message routing
- Replace switch/case blocks with routing table
- Verify all worker messages handled correctly

Each step is independently deployable. Existing tests validate at each step.

---

## Adding a 5th Feature (After Migration)

**Before generics — 5 new files:**
1. `types/newFeature.ts` (~30 lines) — type definition
2. `utils/newFeatureNormalization.ts` (~80 lines) — validation
3. `utils/newFeatureStorage.ts` (~50 lines) — localStorage
4. `composables/useNewFeature.ts` (~70 lines) — composable
5. `workers/NewFeatureState.ts` (~45 lines) — worker state

**After generics — 2 new files + 3 one-liners:**
1. `types/newFeature.ts` (~30 lines) — type definition (same)
2. `utils/newFeatureNormalization.ts` (~60 lines) — validation (smaller: uses `normalizeArray`)
3. Storage: 10-line wrapper in existing or new file
4. Composable: 15-line wrapper
5. Worker state: 1-line instantiation

**Total: ~116 lines vs ~275 lines — 58% less code per feature.**
