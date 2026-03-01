SHELL := /bin/bash

APP_DIR  := app
PNPM     := pnpm --dir $(APP_DIR)
WASM_PACK := wasm-pack

CRATE_CPU := crates/game_of_life
CRATE_GPU := crates/game_of_life_gpu

.PHONY: setup dev build typecheck check fmt clean

# =============================================================================
# Targets:
#   make setup      install Rust WASM target, wasm-pack, pnpm, and JS deps
#   make dev        pre-build WASM (dev profile), then start Vite dev server
#                   Rust changes are not watched automatically in this repo yet
#   make build      wasm-pack + vue-tsc type check + Vite production build -> app/dist/
#   make typecheck  TypeScript / Vue type check only (no build)
#   make check      Rust clippy + unit tests
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
	cargo test

fmt:
	cargo fmt
	$(PNPM) format

clean:
	rm -rf target crates/*/pkg $(APP_DIR)/dist
