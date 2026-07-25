// Branded coordinate units (interface-audit finding B). Every coordinate in the
// app is physically a `number`, but they live in FOUR distinct spaces that must
// never be mixed — the source of the whole "Cross-boundary contracts" section of
// CLAUDE.md (One DPR, grid pitch, click→cell mapping). Branding them makes a
// space mismatch a COMPILE error instead of a runtime bug + a comment + a test.
//
// The spaces (mirrors gridCoords.ts and crates/.../grid.rs):
//   CSS px    — MouseEvent.clientX/Y, DOM/style positions.
//   Device px — CSS × DPR: canvas backing store, camera offsets, grid pitch.
//   World cell— grid cell index / count (toroidal modulus world_cols/rows).
//   Dpr       — device px per CSS px (capped; always effectiveDpr()).
//
// Brands don't compose arithmetically (number × number = number, brand dropped),
// so the CONVERSION functions cast their arithmetic result back to the target
// unit via the constructors below. That is by design: the casts live in the few
// conversion sites, and every OTHER site is space-checked for free.

declare const __unit: unique symbol;
interface Unit<B extends string> { readonly [__unit]: B }

/** CSS pixels — `MouseEvent.clientX/Y`, style/layout positions. */
export type CssPx = number & Unit<'CssPx'>;
/** Device (canvas backing-store) pixels — CSS × DPR. Canvas sizing, camera
 *  offsets shipped to the GPU, and the grid cell pitch all live here. */
export type DevicePx = number & Unit<'DevicePx'>;
/** World grid cell index or count (toroidal, mod world_cols/world_rows). */
export type WorldCell = number & Unit<'WorldCell'>;
/** Device-pixel ratio (device px per CSS px), capped. Always `effectiveDpr()`,
 *  never a raw `window.devicePixelRatio` read. */
export type Dpr = number & Unit<'Dpr'>;

/** Brand a raw number as CSS px (at a DOM/event boundary). */
export const cssPx = (n: number): CssPx => n as CssPx;
/** Brand a raw number as device px (canvas/GPU/grid-pitch boundary). */
export const devicePx = (n: number): DevicePx => n as DevicePx;
/** Brand a raw number as a world cell (grid boundary). */
export const worldCell = (n: number): WorldCell => n as WorldCell;
/** Brand a raw number as a DPR (only `effectiveDpr()` should call this). */
export const dpr = (n: number): Dpr => n as Dpr;
