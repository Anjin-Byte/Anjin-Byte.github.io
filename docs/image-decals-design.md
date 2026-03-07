# Image Decals (Phase 2) — Design Document

**Status:** Draft
**Last updated:** 2026-03-05
**Depends on:** [decal-system-requirements.md](decal-system-requirements.md) (Phase 1 complete)

---

## 1. Goal

Extend the decal system to support bitmap/image-based decals. Users upload or select an image, which is decoded, packed into a GPU texture atlas, and rendered as a decal on the grid.

---

## 2. Architecture

### 2.1 Data Flow

```
User selects image
       │
       ▼
Browser decodes (createImageBitmap)
       │
       ▼
Resize / crop to atlas slot (OffscreenCanvas)
       │
       ▼
Pack into atlas layer (shelf packer)
       │
       ▼
Upload to GPU (queue.copyExternalImageToTexture)
       │
       ▼
Decal entry references atlas layer + UV coords
       │
       ▼
Fragment shader samples atlas in decal compositing loop
```

### 2.2 New GPU Resources

| Binding | Name | Type | Content |
|---------|------|------|---------|
| 10 | `decal_atlas` | Texture2DArray | RGBA8, 512x512 per layer, up to 16 layers |
| 11 | `decal_smp` | Sampler | Bilinear filtering, clamp-to-edge |

### 2.3 DecalEntryGpu — Bitmap Kind

For `kind = 4` (bitmap), the `params` field encodes atlas coordinates:

```
params[0] = atlas_layer    (f32, cast to u32 in shader)
params[1] = u_offset       (normalized [0..1] within the atlas layer)
params[2] = v_offset       (normalized [0..1])
params[3] = uv_scale       (maps decal rect to atlas region)
```

---

## 3. Image Decoding Strategy

### 3.1 Browser-Native Formats

`createImageBitmap()` supports these formats natively in all modern browsers with zero additional dependencies:

| Format | MIME Type | Notes |
|--------|-----------|-------|
| PNG | image/png | Lossless, transparency |
| JPEG | image/jpeg | Lossy, no transparency |
| WebP | image/webp | Both lossy and lossless |
| GIF | image/gif | First frame only for decals |
| SVG | image/svg+xml | Rasterized at target resolution |
| BMP | image/bmp | Uncompressed |
| AVIF | image/avif | Chrome 85+, Firefox 93+, Safari 16.1+ |

**Recommendation:** Use `createImageBitmap()` as the primary decoding path. It is:
- Async and non-blocking
- Hardware-accelerated on most platforms
- Returns an `ImageBitmap` directly uploadable to WebGPU via `queue.copyExternalImageToTexture()`
- No external dependencies required

### 3.2 Extended Format Support (Libraries)

For formats not natively supported by browsers, JS libraries can decode to raw pixel data:

| Format | Library | npm Package | Bundle Size | Raw RGBA Output | Notes |
|--------|---------|-------------|:-----------:|:---------------:|-------|
| ICO/CUR | decode-ico | `decode-ico` | ~5 KB | Yes (`{ data: Uint8Array }`) | Tiny, single-purpose |
| TIFF | utif | `utif` | ~25 KB | Yes (`UTIF.toRGBA8()`) | Best standalone TIFF decoder |
| TGA | tga-js | `tga-js` | ~3 KB | Yes (`.pixels` Uint8Array) | Common in game assets |
| PSD | psd.js | `psd.js` | ~200 KB | Yes (`.image.pixelData`) | Flattened composite |
| Multi-format | Jimp | `jimp` | ~150-200 KB | Yes (`bitmap.data`) | Pure JS, modular in v1; broadest coverage but slowest |
| Multi-format | image-js | `image-js` | ~80 KB | Yes (`.getRGBAData()`) | Good TIFF support, academic-quality |

**Not browser-compatible:** `sharp` (Node.js only, libvips native binding — no WASM build available).

**Recommended approach:** Start with browser-native formats only. Add library-based decoders on demand. Each decoder is a small, isolated module.

### 3.3 Rust/WASM Decoding (Alternative)

The `image` crate compiles to WASM and can serve as a single fallback decoder for exotic formats:

- Supports PNG, JPEG, WebP, GIF, BMP, TIFF, TGA, ICO, HDR, EXR, PSD, DDS
- WASM binary size increase: ~300-500 KB (gzipped ~100-150 KB); mitigate with feature flags:
  ```toml
  image = { version = "0.25", default-features = false, features = ["png", "jpeg", "webp", "gif", "bmp", "tiff", "ico"] }
  ```
- JPEG decoding in WASM is ~2-5x slower than the browser's native decoder (which uses SIMD/hardware acceleration). For 512x512 images this is still under 50ms.
- Outputs `ImageBuffer<Rgba<u8>>` — already the RGBA8 layout needed for `writeTexture()`

**Recommended hybrid approach:**
```
User uploads file
  |
  +--> Is format browser-native? (check MIME type / extension)
  |      |
  |      Yes --> createImageBitmap() --> copyExternalImageToTexture()  [fastest]
  |      |
  |      No  --> Send ArrayBuffer to WASM --> image crate decode -->
  |              Return Uint8Array RGBA --> queue.writeTexture()       [fallback]
```

This avoids adding multiple small JS libraries while leveraging the existing Rust/WASM infrastructure.

### 3.4 Format Coverage Matrix

| Format | Browser Native | `createImageBitmap` | Fallback Option | Recommended |
|--------|:-:|:-:|---|:-:|
| **PNG** | Yes | Yes | -- | Yes |
| **JPEG** | Yes | Yes | -- | Yes |
| **WebP** | Yes | Yes | -- | Yes |
| **GIF** (1st frame) | Yes | Yes | -- | Yes |
| **SVG** | Yes | Yes (rasterized) | -- | Yes |
| **BMP** | Yes | Yes | -- | Yes |
| **AVIF** | Yes (modern) | Yes | -- | Yes |
| **ICO** | Partial | Unreliable | `decode-ico` (5 KB) or `image` crate | Optional |
| **TIFF** | No | No | `utif` (25 KB) or `image` crate | Optional |
| **TGA** | No | No | `tga-js` (3 KB) or `image` crate | Skip |
| **HDR/EXR** | No | No | `image` crate | Skip |
| **PSD** | No | No | `psd.js` (200 KB) or `image` crate | Skip |

### 3.5 Performance Comparison (512x512 PNG)

| Method | Decode Time | Notes |
|--------|------------|-------|
| Browser-native `createImageBitmap` | ~1-5 ms | Hardware-accelerated, fastest |
| Rust `image` crate in WASM | ~10-30 ms | Acceptable for exotic formats |
| Jimp (pure JS) | ~20-50 ms | Slowest, but broadest JS-only coverage |

---

## 4. Atlas Architecture

### 4.1 Texture Atlas Layout

```
Texture2DArray (RGBA8unorm)
├── Layer 0:  512x512  ─── shelves packed with decal images
├── Layer 1:  512x512  ─── overflow images
├── ...
└── Layer N:  512x512  ─── max 16 layers (16 MB total)
```

Each layer is 512x512 pixels, RGBA8 = 1 MB per layer. At 16 layers, total GPU memory is 16 MB (within the N-06 budget from the spec).

### 4.2 Shelf Packing

Images are packed into atlas layers using a shelf-packing algorithm:

```
┌──────────────────────────────────┐
│ [img1]  [img2]  [img3]          │  ← shelf 0 (height = max of row)
│─────────────────────────────────│
│ [img4]      [img5]              │  ← shelf 1
│─────────────────────────────────│
│                                  │  ← free space
└──────────────────────────────────┘
```

**Algorithm:**
1. Sort incoming images by height (tallest first)
2. For each image, find the first shelf where it fits
3. If no shelf fits, create a new shelf
4. If no space in the current layer, allocate a new layer
5. Record the (layer, u_offset, v_offset, uv_scale) for the decal entry

**Library options:**

| Library | npm Package | Algorithm | Bundle Size | Notes |
|---------|------------|-----------|:-----------:|-------|
| shelf-pack | `@mapbox/shelf-pack` | Shelf (online) | ~4 KB | By Mapbox. Supports dynamic alloc/dealloc. Battle-tested in Mapbox GL. |
| potpack | `potpack` | Shelf (offline/batch) | ~1 KB | By Mapbox. Packs all rects at once into power-of-two texture. |
| maxrects-packer | `maxrects-packer` | MaxRects | ~8 KB | More sophisticated, supports multiple bins and rotation. |
| rectpack2D | -- | MaxRects | -- | Rust crate, could compile to WASM alongside existing crates. |

**Recommendation:** Start with one-image-per-layer (no packing library needed — the layer index IS the atlas slot). If layer count becomes a concern, add `@mapbox/shelf-pack` (~4 KB) for sub-layer packing.

### 4.3 Image Preparation Pipeline

Before packing into the atlas, images are preprocessed:

```typescript
async function prepareImageForAtlas(
  file: File | Blob,
  maxSize: number = 512,
): Promise<ImageBitmap> {
  // 1. Decode the image
  const bitmap = await createImageBitmap(file);

  // 2. Compute target size (fit within maxSize, preserve aspect ratio)
  const scale = Math.min(1, maxSize / Math.max(bitmap.width, bitmap.height));
  const w = Math.round(bitmap.width * scale);
  const h = Math.round(bitmap.height * scale);

  // 3. Resize if needed (createImageBitmap supports resizing)
  if (scale < 1) {
    const resized = await createImageBitmap(file, {
      resizeWidth: w,
      resizeHeight: h,
      resizeQuality: 'high',
    });
    bitmap.close();
    return resized;
  }

  return bitmap;
}
```

### 4.4 GPU Upload

Two upload paths depending on the decode method:

```typescript
// Path A: Browser-native decode (fastest — GPU-to-GPU blit in many cases)
const bitmap = await createImageBitmap(file, {
  resizeWidth: targetWidth,
  resizeHeight: targetHeight,
  resizeQuality: 'high',
  premultiplyAlpha: 'none',  // keep straight alpha for RGBA8
});
device.queue.copyExternalImageToTexture(
  { source: bitmap },
  { texture: atlasTexture, origin: { x: uOffset, y: vOffset, z: layerIndex } },
  { width: bitmap.width, height: bitmap.height },
);
bitmap.close();

// Path B: Library/WASM decode (for exotic formats — raw pixel upload)
const rgbaData: Uint8Array = decodeExoticFormat(arrayBuffer);
device.queue.writeTexture(
  { texture: atlasTexture, origin: { x: uOffset, y: vOffset, z: layerIndex } },
  rgbaData,
  { bytesPerRow: targetWidth * 4 },
  { width: targetWidth, height: targetHeight },
);
```

---

## 5. Shader Changes

### 5.1 New Bindings

```wgsl
@group(0) @binding(10) var decal_atlas: texture_2d_array<f32>;
@group(0) @binding(11) var decal_smp:   sampler;
```

### 5.2 Bitmap Pattern Function

```wgsl
fn decal_bitmap(d: DecalEntry, cx: u32, world_row: i32) -> vec4f {
    let layer = u32(d.params.x);
    // Map cell-space position to atlas UV
    let local_x = f32(cx - u32(d.rect.x)) / f32(u32(d.rect.z) - u32(d.rect.x) + 1u);
    let local_y = f32(world_row - d.rect.y) / f32(d.rect.w - d.rect.y + 1);
    let uv = vec2f(
        d.params.y + local_x * d.params.w,
        d.params.z + local_y * d.params.w,
    );
    return textureSampleLevel(decal_atlas, decal_smp, uv, layer, 0.0);
}
```

### 5.3 Modified Compositing

For bitmap decals, the sampled RGBA replaces the pattern coverage + tint approach:

```wgsl
// In the decal compositing loop:
if d.flags.x == 4u {
    let tex_col = decal_bitmap(d, zone_cx, zone_world_row);
    let blended = tex_col.rgb * d.tint.rgb;  // tint still applies
    let alpha = tex_col.a * d.tint.a * in_rect;
    surface_colour = mix(surface_colour, blended, alpha);
} else {
    // existing procedural pattern path
}
```

---

## 6. TypeScript Changes

### 6.1 AtlasManager Class

```typescript
interface AtlasSlot {
  layer: number;
  x: number;      // pixel offset in atlas layer
  y: number;
  width: number;
  height: number;
  uOffset: number; // normalized [0..1]
  vOffset: number;
  uvScale: number;
}

class AtlasManager {
  private slots: Map<string, AtlasSlot>;  // decal ID → slot
  private shelves: ShelfPacker[];          // one per layer
  private texture: GPUTexture;

  async addImage(id: string, source: File | Blob): Promise<AtlasSlot>;
  removeImage(id: string): void;
  getSlot(id: string): AtlasSlot | undefined;
  destroy(): void;
}
```

### 6.2 DecalPattern Extension

```typescript
// Additional fields in DecalPattern (from types/decals.ts):
export interface DecalPattern {
  // ... existing fields ...
  atlasLayer?: number;          // bitmap: atlas layer index
  uvOffset?: [number, number];  // bitmap: [u, v] offset in atlas
  uvScale?: number;             // bitmap: UV scale factor
  imageData?: string;           // bitmap: base64 or object URL (for storage)
}
```

### 6.3 UI Additions

The Decals tab gains an image upload section when `kind = 'bitmap'`:

- File picker (`<input type="file" accept="image/*">`)
- Image preview thumbnail
- Optional: drag-and-drop zone
- Optional: paste from clipboard (`navigator.clipboard.read()`)

---

## 7. Persistence

Image data for bitmap decals needs special handling since raw pixel data is too large for localStorage.

### 7.1 Storage Options

| Approach | Pros | Cons |
|----------|------|------|
| **IndexedDB** | Large storage (hundreds of MB), binary-friendly | Async API, more complex |
| **Base64 in localStorage** | Simple, matches existing pattern | ~33% size overhead, 5-10 MB limit |
| **Object URLs** | Zero overhead | Lost on page reload |

**Recommendation:** Use IndexedDB for image blob storage, with a reference ID in the localStorage decal payload. This keeps the existing localStorage pattern for decal metadata while handling large binary data appropriately.

### 7.2 Storage Schema

```typescript
// IndexedDB store: "decal_images"
interface DecalImageRecord {
  id: string;        // matches decal.id
  blob: Blob;        // original image file
  width: number;
  height: number;
  mimeType: string;
}

// In localStorage DecalStoragePayload, bitmap decals store:
// pattern.atlasLayer, pattern.uvOffset, pattern.uvScale
// On page load: re-decode from IndexedDB → re-pack atlas → re-upload to GPU
```

---

## 8. Implementation Phases

### Phase 2a: Core Image Support
1. Add `Texture2DArray` creation + bindings 10-11 in Rust renderer
2. Implement `AtlasManager` with shelf packing
3. Add `kind = 'bitmap'` to shader with `textureSampleLevel`
4. Add file picker UI in decal panel
5. Wire `createImageBitmap()` → atlas → GPU upload

### Phase 2b: Persistence & Polish
1. Add IndexedDB storage for image blobs
2. Implement atlas rebuild on page load
3. Add clipboard paste support
4. Add drag-and-drop to decal panel

### Phase 2c: Extended Formats (On Demand)
1. Add `decode-ico` for ICO/CUR files
2. Add `utif2` for TIFF files
3. Add other format decoders as requested

---

## 9. Performance Considerations

- Atlas texture sampling adds one `textureSampleLevel` per bitmap decal per fragment
- Bilinear filtering is essentially free on modern GPUs
- The `Texture2DArray` approach avoids rebinding textures per decal
- Atlas upload (`copyExternalImageToTexture`) is a one-time cost per image, not per frame
- Image decoding via `createImageBitmap()` is async and hardware-accelerated
- Total atlas memory budget: 16 MB (16 layers x 512x512 x 4 bytes)

---

## 10. Open Questions

| # | Question | Status |
|---|----------|--------|
| Q1 | Should bitmap decals support per-pixel transparency from the source image? | Likely yes — RGBA8 atlas preserves alpha channel |
| Q2 | Maximum image resolution before downscaling? | Proposed: 512x512 (matches atlas layer size) |
| Q3 | Should we support animated GIF/WebP (multiple frames)? | Deferred — single frame for Phase 2 |
| Q4 | Preset library of built-in stamps/icons? | Deferred to after core bitmap support works |
