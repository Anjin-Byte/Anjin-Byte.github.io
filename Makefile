SHELL := /bin/bash

APP_DIR  := app
PNPM     := pnpm --dir $(APP_DIR)
WASM_PACK := wasm-pack

CRATE_CPU := crates/game_of_life
CRATE_GPU := crates/game_of_life_gpu

# Host triple, e.g. aarch64-apple-darwin.  .cargo/config.toml pins the default
# target to wasm32 (for rust-analyzer + clippy on the wasm-only GPU crate), so
# a bare `cargo test` tries to *execute* wasm test binaries natively and fails.
# We pass --target $(HOST_TRIPLE) to run the pure-core tests on the host.
HOST_TRIPLE := $(shell rustc -vV | sed -n 's/^host: //p')

.PHONY: setup dev build typecheck check test-wasm fmt clean

# =============================================================================
# Targets:
#   make setup      install Rust WASM target, wasm-pack, pnpm, and JS deps
#   make dev        pre-build WASM (dev profile), then start Vite dev server
#                   Rust changes are not watched automatically in this repo yet
#   make build      wasm-pack + vue-tsc type check + Vite production build -> app/dist/
#   make typecheck  TypeScript / Vue type check only (no build)
#   make check      Rust clippy + native core unit tests (on the host target)
#   make test-wasm  browser wasm-bindgen tests (requires a headless browser)
#   make fmt        format Rust + TS/Vue sources
#   make clean      remove build artefacts
# =============================================================================

setup:
	rustup target add wasm32-unknown-unknown
	@if ! command -v $(WASM_PACK) >/dev/null 2>&1; then \
		curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh -s -- -f; \
	fi
	@if ! command -v pnpm >/dev/null 2>&1; then \
		corepack enable; \
		corepack prepare pnpm@latest --activate; \
	fi
	$(PNPM) install

dev:
	$(WASM_PACK) build --dev --target bundler $(CRATE_CPU)
	$(WASM_PACK) build --dev --target bundler $(CRATE_GPU)
	$(PNPM) dev

build:
	$(WASM_PACK) build --release --target bundler $(CRATE_CPU)
	$(WASM_PACK) build --release --target bundler $(CRATE_GPU)
	$(PNPM) typecheck
	$(PNPM) build

typecheck:
	$(PNPM) typecheck

check:
	cargo clippy --all-targets -- -D warnings
	cargo test -p game-of-life-core --target $(HOST_TRIPLE)

# Browser-targeted wasm-bindgen tests (game_of_life/tests/web.rs runs in-browser).
# Needs a headless browser + driver (e.g. geckodriver).  The GPU crate's tests
# additionally require a WebGPU-capable browser, so they are not wired here.
test-wasm:
	$(WASM_PACK) test --headless --firefox $(CRATE_CPU)

fmt:
	cargo fmt
	$(PNPM) format

clean:
	rm -rf target crates/*/pkg $(APP_DIR)/dist
