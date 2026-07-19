// Single source of truth for the DPR used in canvas sizing, coordinate
// mapping, and camera device-offset math. All three MUST agree on the same
// value — the canvas backing store, click-to-cell mapping, and the world
// offset shipped to the GPU uniforms all assume the same "device pixel"
// space — so nothing in the app should read `window.devicePixelRatio`
// directly; call `effectiveDpr()` instead.
//
// Capped below the true ratio on high-DPR mobile displays (iPhone: 3x):
// render.wgsl is not a cheap fragment shader (paper-fiber noise, multiple
// value-noise octaves, up to 10 storage-buffer reads for neighbor-aware cell
// joining), and its cost scales with dpr² pixels. 3x → 2x cuts that fragment
// count from 9x to 4x baseline, with no perceptible sharpness loss for this
// content (soft ink/paper aesthetic, not fine text or line art).
const MAX_EFFECTIVE_DPR = 2;

export function effectiveDpr(): number {
  const raw = typeof window !== 'undefined' ? window.devicePixelRatio : 1;
  return Math.min(raw, MAX_EFFECTIVE_DPR);
}
