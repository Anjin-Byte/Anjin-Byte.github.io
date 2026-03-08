# Audit 5: 4x Code Duplication Across Feature Systems

## Problem Statement

Zones, decals, hi-res regions, and text blocks each have 5 nearly-identical files following the same pattern. That's 20 files with the same structure, differing only in field names and validation rules. Adding a 5th feature means creating 5 more files via copy-paste.

---

## The Repeated File Set

| Layer | Zones | Decals | Hi-Res | Text |
|-------|-------|--------|--------|------|
| Types | `types/blankZone.ts` | `types/decal.ts` | `types/hiResRegion.ts` | `types/textBlock.ts` |
| Normalization | `utils/blankZoneNormalization.ts` | `utils/decalNormalization.ts` | `utils/hiResNormalization.ts` | `utils/textNormalization.ts` |
| Storage | `utils/blankZoneStorage.ts` | `utils/decalStorage.ts` | `utils/hiResStorage.ts` | `utils/textStorage.ts` |
| Composable | `composables/useZones.ts` | `composables/useDecals.ts` | `composables/useHiRes.ts` | `composables/useTextBlocks.ts` |
| Worker State | `workers/BlankZoneState.ts` | `workers/DecalState.ts` | `workers/HiResState.ts` | `workers/TextBlockState.ts` |

**20 files.** Each set follows the same skeleton with domain-specific field names.

---

## Side-by-Side Comparison

### Types (4 files, ~30 lines each)

```typescript
// blankZone.ts                          // decal.ts
export interface BlankZone {             export interface Decal {
  id: string;                              id: string;
  x1: number;                              x1: number;
  y1: number;                              y1: number;
  x2: number;                              x2: number;
  y2: number;                              y2: number;
  enabled: boolean;                        enabled: boolean;
  createdAt: number;                       createdAt: number;
  updatedAt: number;                       updatedAt: number;
}                                          image: string;  // ← only difference
                                           opacity: number;
                                         }
```

**Shared fields**: `id`, `enabled`, `createdAt`, `updatedAt`. Zones and decals also share `x1/y1/x2/y2`. Hi-res adds `multiplier`, `showGrid`, etc. Text adds `font`, `renderMode`, `cellX/cellY/cellsWide`.

### Normalization (4 files, ~80 lines each)

```typescript
// blankZoneNormalization.ts             // decalNormalization.ts
export function normalizeZone(           export function normalizeDecal(
  raw: unknown                             raw: unknown
): BlankZone | null {                    ): Decal | null {
  if (!raw || typeof raw !== 'object')     if (!raw || typeof raw !== 'object')
    return null;                             return null;
  const obj = raw as Record<...>;          const obj = raw as Record<...>;
  const id = typeof obj.id === 'string'    const id = typeof obj.id === 'string'
    ? obj.id : crypto.randomUUID();          ? obj.id : crypto.randomUUID();
  // ... clamp x1/y1/x2/y2 ...            // ... clamp x1/y1/x2/y2 ...
  // ... clamp enabled ...                 // ... clamp enabled ...
  return { id, x1, y1, x2, y2,            return { id, x1, y1, x2, y2,
    enabled, createdAt, updatedAt };         enabled, image, opacity,
}                                              createdAt, updatedAt };
                                           }

export function normalizeZones(          export function normalizeDecals(
  raw: unknown                             raw: unknown
): BlankZone[] {                         ): Decal[] {
  if (!Array.isArray(raw)) return [];      if (!Array.isArray(raw)) return [];
  return raw                               return raw
    .map(normalizeZone)                      .map(normalizeDecal)
    .filter((z): z is BlankZone            .filter((d): d is Decal
      => z !== null);                        => d !== null);
}                                        }
```

The `normalizeArray` function is literally identical except for the item type and normalizer function.

### Storage (4 files, ~40 lines each)

```typescript
// blankZoneStorage.ts                   // decalStorage.ts
const STORAGE_KEY = 'gol_blank_zones';   const STORAGE_KEY = 'gol_decals';

export function loadZones(): BlankZone[] {  export function loadDecals(): Decal[] {
  try {                                       try {
    const raw = localStorage                    const raw = localStorage
      .getItem(STORAGE_KEY);                      .getItem(STORAGE_KEY);
    if (!raw) return [];                        if (!raw) return [];
    return normalizeZones(                      return normalizeDecals(
      JSON.parse(raw));                           JSON.parse(raw));
  } catch { return []; }                      } catch { return []; }
}                                           }

export function saveZones(                export function saveDecals(
  zones: BlankZone[]                        decals: Decal[]
): void {                                 ): void {
  localStorage.setItem(                     localStorage.setItem(
    STORAGE_KEY,                              STORAGE_KEY,
    JSON.stringify(zones));                   JSON.stringify(decals));
}                                         }

export function clearZones(): void {      export function clearDecals(): void {
  localStorage.removeItem(                  localStorage.removeItem(
    STORAGE_KEY);                             STORAGE_KEY);
}                                         }
```

**Identical** except for `STORAGE_KEY`, type name, and normalizer function.

### Composable (4 files, ~60 lines each)

```typescript
// useZones.ts                           // useDecals.ts
export function useZones() {             export function useDecals() {
  const items = ref<BlankZone[]>(          const items = ref<Decal[]>(
    loadZones());                            loadDecals());

  function addItem(zone: BlankZone) {      function addItem(decal: Decal) {
    items.value.push(zone);                  items.value.push(decal);
    saveZones(items.value);                  saveDecals(items.value);
  }                                        }

  function removeItem(id: string) {        function removeItem(id: string) {
    items.value = items.value                items.value = items.value
      .filter(z => z.id !== id);               .filter(d => d.id !== id);
    saveZones(items.value);                  saveDecals(items.value);
  }                                        }

  function updateItem(                     function updateItem(
    id: string,                              id: string,
    patch: Partial<BlankZone>                patch: Partial<Decal>
  ) { /* identical logic */ }              ) { /* identical logic */ }

  function syncFromWorker(                 function syncFromWorker(
    data: unknown                            data: unknown
  ) {                                      ) {
    items.value = normalizeZones(data);      items.value = normalizeDecals(data);
    saveZones(items.value);                  saveDecals(items.value);
  }                                        }

  return { items, addItem,                 return { items, addItem,
    removeItem, updateItem,                  removeItem, updateItem,
    syncFromWorker };                        syncFromWorker };
}                                        }
```

**Identical** CRUD logic. Only type name, normalizer, and storage functions differ.

### Worker State (4 files, ~50 lines each)

```typescript
// BlankZoneState.ts                     // DecalState.ts
export class BlankZoneState {            export class DecalState {
  private items: BlankZone[] = [];         private items: Decal[] = [];

  set(raw: unknown): BlankZone[] {         set(raw: unknown): Decal[] {
    this.items =                              this.items =
      normalizeZones(raw);                     normalizeDecals(raw);
    return this.items;                        return this.items;
  }                                        }

  get(): BlankZone[] {                     get(): Decal[] {
    return this.items;                        return this.items;
  }                                        }

  clear(): void {                          clear(): void {
    this.items = [];                          this.items = [];
  }                                        }
}                                        }
```

**Identical** except for type and normalizer.

---

## Line Count

| File Type | Per Feature | × 4 Features | Total |
|-----------|------------|---------------|-------|
| Types | ~30 | 120 | 120 |
| Normalization | ~80 | 320 | 320 |
| Storage | ~40 | 160 | 160 |
| Composable | ~60 | 240 | 240 |
| Worker State | ~50 | 200 | 200 |
| **Total** | **~260** | | **~1,040** |

Plus ~274 lines of tests that also follow the same pattern across features.

**Total duplicated code: ~1,314 lines.**

---

## What's Actually Different Between Features

| Aspect | Zones | Decals | Hi-Res | Text |
|--------|-------|--------|--------|------|
| Domain fields | x1/y1/x2/y2 | x1/y1/x2/y2, image, opacity | x1/y1/x2/y2, multiplier, showGrid, etc. | cellX/cellY/cellsWide, font, renderMode, color, text |
| Normalization rules | clamp coords to grid | clamp coords, validate image URL, clamp opacity 0–1 | clamp coords, clamp multiplier 1–16, booleans | clamp coords, validate font string, enum renderMode |
| Storage key | `gol_blank_zones` | `gol_decals` | `gol_hires_regions` | `gol_text_blocks` |
| Max items | 32 | 32 | 8 | 8 |

**Everything else is identical.** The CRUD operations, localStorage round-trip, worker state management, composable structure, and array normalization are all the same.

---

## Generic Alternatives

### 1. Generic Storage

```typescript
function createFeatureStorage<T>(
  key: string,
  normalizeArray: (raw: unknown) => T[]
) {
  return {
    load(): T[] {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) return [];
        return normalizeArray(JSON.parse(raw));
      } catch { return []; }
    },
    save(items: T[]): void {
      localStorage.setItem(key, JSON.stringify(items));
    },
    clear(): void {
      localStorage.removeItem(key);
    },
  };
}

// Usage:
const zoneStorage = createFeatureStorage('gol_blank_zones', normalizeZones);
const decalStorage = createFeatureStorage('gol_decals', normalizeDecals);
```

**Eliminates**: 4 storage files (~160 lines) → 1 generic (~20 lines)

### 2. Generic Composable

```typescript
interface HasId { id: string; }

function createFeatureComposable<T extends HasId>(
  storage: ReturnType<typeof createFeatureStorage<T>>,
  normalizeArray: (raw: unknown) => T[]
) {
  const items = ref<T[]>(storage.load()) as Ref<T[]>;

  function addItem(item: T): void {
    items.value.push(item);
    storage.save(items.value);
  }

  function removeItem(id: string): void {
    items.value = items.value.filter(i => i.id !== id);
    storage.save(items.value);
  }

  function updateItem(id: string, patch: Partial<T>): void {
    const idx = items.value.findIndex(i => i.id === id);
    if (idx === -1) return;
    items.value[idx] = { ...items.value[idx], ...patch, updatedAt: Date.now() };
    storage.save(items.value);
  }

  function syncFromWorker(data: unknown): void {
    items.value = normalizeArray(data);
    storage.save(items.value);
  }

  return { items, addItem, removeItem, updateItem, syncFromWorker };
}

// Usage:
export const useZones = () => createFeatureComposable(zoneStorage, normalizeZones);
export const useDecals = () => createFeatureComposable(decalStorage, normalizeDecals);
```

**Eliminates**: 4 composable files (~240 lines) → 1 generic (~40 lines)

### 3. Generic Worker State

```typescript
class FeatureState<T> {
  private items: T[] = [];

  constructor(private normalizeArray: (raw: unknown) => T[]) {}

  set(raw: unknown): T[] {
    this.items = this.normalizeArray(raw);
    return this.items;
  }

  get(): T[] { return this.items; }

  clear(): void { this.items = []; }
}

// Usage:
const zoneState = new FeatureState(normalizeZones);
const decalState = new FeatureState(normalizeDecals);
```

**Eliminates**: 4 worker state files (~200 lines) → 1 generic (~15 lines)

### 4. Generic Array Normalization

```typescript
function normalizeArray<T>(
  raw: unknown,
  normalizeOne: (item: unknown) => T | null,
  maxItems: number = 32
): T[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .slice(0, maxItems)
    .map(normalizeOne)
    .filter((item): item is T => item !== null);
}

// Usage in each normalization file:
export const normalizeZones = (raw: unknown) =>
  normalizeArray(raw, normalizeZone, 32);
```

**Eliminates**: Repeated `normalizeArray` pattern from each normalization file (~10 lines × 4 = 40 lines)

---

## Projected Line Count After Generics

| Component | Before | After | Saved |
|-----------|--------|-------|-------|
| Types (4 files, keep as-is) | 120 | 120 | 0 |
| Normalization (4 files, keep domain logic) | 320 | 240 | 80 |
| Storage (4 files → 1 generic) | 160 | 20 | 140 |
| Composable (4 files → 1 generic) | 240 | 40 | 200 |
| Worker State (4 files → 1 generic) | 200 | 15 | 185 |
| Tests (reduce with generic test helpers) | 274 | 150 | 124 |
| **Total** | **1,314** | **585** | **729** |

**55% reduction** in feature system code. More importantly, adding a 5th feature requires:
- 1 type definition file (~30 lines)
- 1 normalization file (~60 lines, domain-specific validation)
- 3 one-liner instantiations (storage, composable, worker state)

Instead of 5 copy-pasted files.

---

## Migration Path

### Step 1: Create generics (additive, no breaking changes)
- `utils/featureStorage.ts` — generic storage factory
- `composables/createFeatureComposable.ts` — generic composable factory
- `workers/FeatureState.ts` — generic worker state class
- `utils/normalizeArray.ts` — shared array normalizer

### Step 2: Migrate one feature (zones) to generics
- Rewrite `useZones.ts` as a one-liner using `createFeatureComposable`
- Rewrite `BlankZoneState.ts` as a one-liner using `FeatureState`
- Rewrite `blankZoneStorage.ts` as a one-liner using `createFeatureStorage`
- Run existing zone tests — must pass unchanged

### Step 3: Migrate remaining features
- Decals, hi-res, text — same pattern as step 2
- Delete the old boilerplate files

### Step 4: Add generic test helpers
- `createFeatureTests(config)` — generates standard CRUD + normalization tests
- Each feature's test file becomes: config + domain-specific edge cases

Each step is independently shippable. Tests validate at each step.

---

## What NOT to Generalize

**Keep separate**:
- **Type definitions** — each feature has genuinely different fields
- **Normalization logic** — validation rules are domain-specific (clamping ranges, enum validation, URL formats)
- **UI components** — GridZoneTab, GridDecalTab, etc. have different controls and layouts
- **WASM integration** — each feature has different GPU buffer formats and shader bindings

The duplication is in the **plumbing**, not the **domain logic**. Generalize the plumbing, keep the domain files.
