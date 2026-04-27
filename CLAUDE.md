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
- `crates/game_of_life/` — CPU Game of Life (fallback renderer)
- `crates/game_of_life_gpu/` — WebGPU-accelerated renderer + simulation
- `crates/game_of_life_gpu/wgsl/` — shaders (`compute.wgsl`, `render.wgsl`)
- `app/src/components/layout/AppBackground.vue` — fixed full-viewport canvas, owns the worker bridge
- `app/src/workers/backgroundRenderer.ts` — Web Worker, GPU/CPU renderer hand-off
- `docs/` — design notes; **gitignored and intentionally local-only**. Don't track new docs there. Active design notes for tabled work live there (`methuselah-seeding.md`, `perturbed-cell-fill-origin.md`, `hires-removal.md`).

### Gotchas
- **WGSL uniform alignment**: `vec3u` in `var<uniform>` has 16-byte alignment producing a 32-byte struct. Use 4 scalar `u32` fields instead. Same trap applies to any uniform struct that gains a vec3 field.
- **WASM ↔ JS shim drift**: after `wasm-pack build`, Vite can serve a stale JS shim against the new WASM, producing `wasm.wasm_bindgen__convert__closures_____invoke__h… is not a function` errors. Fix: `rm -rf crates/game_of_life_gpu/pkg app/node_modules/.vite`, rebuild WASM in dev profile, restart Vite.
- **Resize canvas opacity**: browsers paint the placeholder canvas opaque black during the gap between `canvas.width = w` (in worker) and the next presented frame. The hide-during-resize logic in `AppBackground.vue` masks this — don't remove it.

### History
- The hi-res region feature was removed on 2026-04-25. Pre-removal state is preserved on the [`archive/hires-feature`](https://github.com/Anjin-Byte/Anjin-Byte.github.io/tree/archive/hires-feature) branch + tag `archive/hires-feature-2026-04`.
