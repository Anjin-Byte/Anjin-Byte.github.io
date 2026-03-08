import TinySDF from '@mapbox/tiny-sdf';
import type { TextBlock } from '../types/text';
import { DEFAULT_TEXT_COLOR } from '../types/text';

// tiny-sdf internally calls document.createElement('canvas') for text metrics.
// In a Web Worker, `document` doesn't exist — shim it with OffscreenCanvas.
if (typeof document === 'undefined' && typeof OffscreenCanvas !== 'undefined') {
  (globalThis as any).document = {
    createElement: (tag: string) => {
      if (tag === 'canvas') return new OffscreenCanvas(1, 1);
      throw new Error(`Cannot create <${tag}> in a Worker`);
    },
  };
}

const ATLAS_SIZE = 512;
const SDF_FONT_SIZE = 48;
const SDF_BUFFER = 6;
const SDF_RADIUS = 16;
const SDF_CUTOFF = 0.25;

export interface GlyphGpu {
  cellX: number;
  cellY: number;
  cellW: number;
  cellH: number;
  uvX: number;
  uvY: number;
  uvW: number;
  uvH: number;
  colorR: number;
  colorG: number;
  colorB: number;
  pad0: number;
}

function parseHexColor(hex: string): [number, number, number] {
  const h = hex.startsWith('#') ? hex.slice(1) : hex;
  const n = parseInt(h, 16);
  return [(n >> 16 & 0xff) / 255, (n >> 8 & 0xff) / 255, (n & 0xff) / 255];
}

export interface SdfResult {
  glyphs: GlyphGpu[];
  atlas: Uint8Array;
  atlasWidth: number;
  atlasHeight: number;
}

interface CachedGlyph {
  data: Uint8ClampedArray;
  width: number;
  height: number;
  glyphWidth: number;
  glyphHeight: number;
  glyphTop: number;
  glyphLeft: number;
  glyphAdvance: number;
}

interface PackedGlyph {
  atlasX: number;
  atlasY: number;
  width: number;
  height: number;
}

function parseFontString(font: string): { weight: string; style: string; family: string } {
  const parts = font.trim().split(/\s+/);
  let weight = 'normal';
  let style = 'normal';
  const familyParts: string[] = [];
  for (const p of parts) {
    if (/^\d+$/.test(p) || ['bold', 'bolder', 'lighter', 'normal'].includes(p.toLowerCase())) {
      weight = p;
    } else if (['italic', 'oblique'].includes(p.toLowerCase())) {
      style = p;
    } else if (!/^\d+px$/i.test(p)) {
      familyParts.push(p);
    }
  }
  return { weight, style, family: familyParts.join(' ') || 'monospace' };
}

// ── Persistent glyph cache ──────────────────────────────────────────────────
// TinySDF.draw() is expensive. Cache raw glyph bitmaps per font+char so they
// survive across generateSdf() calls. Bounded by unique (font × char) pairs
// which is tiny (max 8 blocks × ~50 unique chars = ~400 entries).
const persistentGlyphCache = new Map<string, CachedGlyph>();
const sdfInstances = new Map<string, InstanceType<typeof TinySDF>>();

function getSdfInstance(weight: string, style: string, family: string): InstanceType<typeof TinySDF> {
  const key = `${weight}|${style}|${family}`;
  let inst = sdfInstances.get(key);
  if (!inst) {
    inst = new TinySDF({
      fontSize: SDF_FONT_SIZE,
      buffer: SDF_BUFFER,
      radius: SDF_RADIUS,
      cutoff: SDF_CUTOFF,
      fontFamily: family,
      fontWeight: weight,
      fontStyle: style,
    });
    sdfInstances.set(key, inst);
  }
  return inst;
}

function getCachedGlyph(fontKey: string, ch: string, sdf: InstanceType<typeof TinySDF>): CachedGlyph {
  const cacheKey = `${fontKey}|${ch}`;
  let glyph = persistentGlyphCache.get(cacheKey);
  if (!glyph) {
    glyph = sdf.draw(ch);
    persistentGlyphCache.set(cacheKey, glyph);
  }
  return glyph;
}

export function generateSdf(blocks: TextBlock[]): SdfResult | null {
  const enabled = blocks.filter((b) => b.enabled && b.renderMode !== 'cells');
  if (enabled.length === 0) return null;

  // Collect unique chars per font key
  const fontKeyMap = new Map<string, { weight: string; style: string; family: string; chars: Set<string> }>();
  for (const block of enabled) {
    const parsed = parseFontString(block.font);
    const key = `${parsed.weight}|${parsed.style}|${parsed.family}`;
    let entry = fontKeyMap.get(key);
    if (!entry) {
      entry = { ...parsed, chars: new Set() };
      fontKeyMap.set(key, entry);
    }
    for (const ch of block.text) {
      entry.chars.add(ch);
    }
  }

  // Resolve glyphs from persistent cache (only draws new chars)
  const glyphCache = new Map<string, CachedGlyph>();
  for (const [key, { weight, style, family, chars }] of fontKeyMap) {
    const sdf = getSdfInstance(weight, style, family);
    for (const ch of chars) {
      const glyph = getCachedGlyph(key, ch, sdf);
      glyphCache.set(`${key}|${ch}`, glyph);
    }
  }

  // Shelf-pack into atlas
  const atlas = new Uint8Array(ATLAS_SIZE * ATLAS_SIZE);
  const packed = new Map<string, PackedGlyph>();
  let shelfY = 0;
  let shelfX = 0;
  let shelfHeight = 0;

  for (const [cacheKey, glyph] of glyphCache) {
    if (glyph.width === 0 || glyph.height === 0) continue;
    // Need new shelf?
    if (shelfX + glyph.width > ATLAS_SIZE) {
      shelfY += shelfHeight;
      shelfX = 0;
      shelfHeight = 0;
    }
    if (shelfY + glyph.height > ATLAS_SIZE) break; // Atlas full

    // Copy glyph data into atlas
    for (let row = 0; row < glyph.height; row++) {
      const srcOffset = row * glyph.width;
      const dstOffset = (shelfY + row) * ATLAS_SIZE + shelfX;
      for (let col = 0; col < glyph.width; col++) {
        atlas[dstOffset + col] = glyph.data[srcOffset + col];
      }
    }

    packed.set(cacheKey, {
      atlasX: shelfX,
      atlasY: shelfY,
      width: glyph.width,
      height: glyph.height,
    });

    shelfX += glyph.width;
    shelfHeight = Math.max(shelfHeight, glyph.height);
  }

  // Layout glyphs in cell-space per text block
  const glyphs: GlyphGpu[] = [];
  for (const block of enabled) {
    const parsed = parseFontString(block.font);
    const fontKey = `${parsed.weight}|${parsed.style}|${parsed.family}`;

    // Measure total text advance to compute scale
    let totalAdvance = 0;
    const charGlyphs: { ch: string; cached: CachedGlyph; pack: PackedGlyph }[] = [];
    for (const ch of block.text) {
      const cacheKey = `${fontKey}|${ch}`;
      const cached = glyphCache.get(cacheKey);
      const pack = packed.get(cacheKey);
      if (!cached || !pack) continue;
      charGlyphs.push({ ch, cached, pack });
      totalAdvance += cached.glyphAdvance;
    }
    if (totalAdvance === 0) continue;

    // Scale: cellsWide cells maps to totalAdvance SDF units.
    // Height follows naturally from the font's proportions (no stretching).
    const scale = block.cellsWide / totalAdvance;

    const [colorR, colorG, colorB] = parseHexColor(block.color || DEFAULT_TEXT_COLOR);

    let cursorX = 0;
    for (const { cached, pack } of charGlyphs) {
      const cellX = block.cellX + cursorX * scale + cached.glyphLeft * scale;
      const cellY = block.cellY + (SDF_FONT_SIZE - cached.glyphTop) * scale;
      const cellW = cached.glyphWidth * scale;
      const cellH = cached.glyphHeight * scale;

      if (cellW > 0 && cellH > 0) {
        const insetPx = 0.5;
        glyphs.push({
          cellX,
          cellY,
          cellW,
          cellH,
          uvX: (pack.atlasX + insetPx) / ATLAS_SIZE,
          uvY: (pack.atlasY + insetPx) / ATLAS_SIZE,
          uvW: (pack.width - insetPx * 2) / ATLAS_SIZE,
          uvH: (pack.height - insetPx * 2) / ATLAS_SIZE,
          colorR,
          colorG,
          colorB,
          pad0: 0,
        });
      }
      cursorX += cached.glyphAdvance;
    }
  }

  if (glyphs.length === 0) return null;

  return { glyphs, atlas, atlasWidth: ATLAS_SIZE, atlasHeight: ATLAS_SIZE };
}
