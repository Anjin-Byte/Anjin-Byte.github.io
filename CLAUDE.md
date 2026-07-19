# CLAUDE.md

## Engineering Codex

This project follows the engineering standards in the Engineering Codex at:

```
./engineering-codex/
```

(Local symlink to `~/Documents/dev_hub/Brynhild/Engineering_Codex/`. The symlink is per-machine and is gitignored — see `consumer-template/README.md` Option C in the vault for the integration pattern.)

### How agents should use it

1. **Read `./engineering-codex/AGENTS.md` first** for any task that overlaps engineering practice — code review, test design, module/crate design, error handling, API design, refactoring, written analysis, CI/tooling. The file's "When to consult what" section maps task triggers to the relevant notes.
2. **For high-frequency tasks, prefer the bundle** at `./engineering-codex/Bundles/<Task>.md` — these inline all relevant notes into one file and save round-trips.
3. **Treat the vault's rules as authoritative** by default. Deviations are allowed, but justify them explicitly when reviewing or writing code.
4. **Do not edit notes in the vault.** If you observe a problem with an existing note during this project's work, file an issue per `./engineering-codex/ISSUES.md` rather than silently working around it or autonomously editing.
5. **Do not add new notes during project work.** New general-knowledge notes go through the contribution process at `./engineering-codex/CONTRIBUTING.md`, separate from project tasks.

---

## Project-specific notes

### Stack
- **Rust/WASM**: Cargo workspace at repo root. Each WASM feature is its own crate under `crates/`.
- **Frontend**: `app/` — Vue 3 (Composition API, `<script setup>`), Vuetify 3, TypeScript, Vite.
- **Package manager**: pnpm (NOT npm). Run `pnpm install` inside `app/`.
- **Deploy**: GitHub Actions on `dev` branch → builds → deploys to `main` (GitHub Pages).
- **Build entry points**: `make dev` (full WASM dev build + Vite dev server), `make build` (release WASM + production Vite build), `make check` (clippy + tests).

### Layout
- `crates/game_of_life_core/` — pure-Rust simulation core (bitpacked `World`, tick rule, pattern stamping, seeding); no GPU/JS deps. Consumed by both adapter crates below. `build.rs` generates pattern constants from `patterns.toml` + the committed `patterns_cache/` RLEs. Native-testable (the only crate `make check` runs tests for).
- `crates/game_of_life/` — CPU Game of Life (fallback renderer); thin wasm-bindgen adapter over the core
- `crates/game_of_life_gpu/` — WebGPU-accelerated renderer + simulation; wasm-only (wgpu/web-sys gated to the wasm32 target). Also hosts the **WebGL2 fallback** (`webgl.rs`, `WebglGameOfLife`): a GPGPU ping-pong reimplementation for browsers with WebGL2 but not WebGPU (WebGL2 has no compute/storage/atomics). The worker auto-selects WebGPU → WebGL2 → static. See the [[webgl2-fallback-tier]] memory.
- `crates/game_of_life_gpu/wgsl/` — shaders: `compute.wgsl` + `render.wgsl` (WebGPU); `gol_tick.wgsl` + `render_gles.wgsl` (WebGL2 tier)
- `app/src/components/layout/AppBackground.vue` — fixed full-viewport canvas, owns the worker bridge
- `app/src/workers/backgroundRenderer.ts` — Web Worker, GPU/CPU renderer hand-off
- `docs/` — design notes; **gitignored and intentionally local-only**. Don't track new docs there. Tabled notes: `methuselah-seeding.md`, `perturbed-cell-fill-origin.md`. Historical record: `hires-removal.md`. The March 2026 audit/overview docs are superseded — see History.

### Gotchas
- **WGSL uniform alignment**: `vec3u` in `var<uniform>` has 16-byte alignment producing a 32-byte struct. Use 4 scalar `u32` fields instead. Same trap applies to any uniform struct that gains a vec3 field.
- **WASM ↔ JS shim drift**: after `wasm-pack build`, Vite can serve a stale JS shim against the new WASM, producing `wasm.wasm_bindgen__convert__closures_____invoke__h… is not a function` errors. Fix: `rm -rf crates/game_of_life_gpu/pkg app/node_modules/.vite`, rebuild WASM in dev profile, restart Vite.
- **Resize canvas opacity**: browsers paint the placeholder canvas opaque black during the gap between `canvas.width = w` (in worker) and the next presented frame. The hide-during-resize logic in `AppBackground.vue` masks this — don't remove it.

### Cross-boundary contracts (2026-07 audit)
Invariants that span modules; each names its owner. Full findings + rationale: `docs/canvas-island-audit-2026-07.md` (local-only).
- **One DPR**: never read `window.devicePixelRatio` raw — use `effectiveDpr()` (`app/src/utils/devicePixelRatio.ts`). Canvas sizing, click→cell mapping, and camera device-offset must agree. *Enforced by `dprDiscipline.test.ts`* (bump its allowlist only for justified raw reads).
- **Frame-lock**: while the camera offset is moving (fly, native scroll, anything), every posted frame renders — throttling applies to static views only. Decision logic: `app/src/workers/frameGate.ts`. *Enforced by `frameGate.test.ts`.*
- **Grid pitch + world dims**: authoritative value is `CELL_PX` (and `WORLD_COLS/ROWS`) in `gpu.rs` (device px), reported via `GridInfo.gridPitch`. Mirrored in `webgl.rs` (WebGL2 tier), `staticRenderer.ts`, and `GRID_CELL_DEVICE_PX` in useCanvasSurface.ts; the TS mirror is cross-checked at runtime on worker `ready`. Keep all four in sync.
- **Mounted ≠ visible**: every WorldPanel stays mounted for the whole session (camera flies past them). Gate any per-panel reactive work (watchers, renders) on the panel's route being active — see `useMermaid.ts` for the pattern.
- **Island footprint**: every panel is clamped to viewport height (WorldPanel), inactive ones clipped; constellation spacing assumes viewport-scale islands. Only the ACTIVE island is pointer-interactive.
- **Theme constants**: `theme.ts` is authoritative. index.html's pre-paint constants are *enforced by `themeParity.test.ts`*; `--cut` is published from `CUT` in theme.ts; vuetify.ts hexes are derived approximations (regenerate on palette change).
- **Uniform offsets**: TS/WGSL/Rust partial-buffer writes guarded by `const` asserts in `renderer/types.rs` — the model for new contracts: make drift uncompilable or test-failing, not comment-guarded.

### History
- The hi-res region feature was removed on 2026-04-25. Pre-removal state is preserved on the [`archive/hires-feature`](https://github.com/Anjin-Byte/Anjin-Byte.github.io/tree/archive/hires-feature) branch + tag `archive/hires-feature-2026-04`.
- **Superseded design docs (March 2026):** `docs/architecture-audit.md`, `docs/audit-1..5`, `docs/solution-1..5`, and `docs/architecture-overview.md` predate the portfolio redesign. They analyze features since removed (hi-res, decals, SDF text) and a since-decomposed `AppBackground.vue` monolith — treat them as historical, not as the current architecture. (`architecture-overview.md` §5, the GPU/struct-alignment note, remains valid.) Current direction: `docs/project_redesign_direction.md`.
