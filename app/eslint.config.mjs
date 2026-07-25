// Typed ESLint flat config (interface-audit Part 2 finding A).
//
// Uses the maintained Vue + typed-TypeScript path (@vue/eslint-config-typescript)
// so type-aware rules work inside .vue <script setup> blocks, not just .ts. The
// three rules the audit specifically calls out — no-floating-promises,
// no-misused-promises, switch-exhaustiveness-check (finding D) — REQUIRE type
// information and are exactly what untyped linting cannot catch.
import pluginVue from 'eslint-plugin-vue';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import globals from 'globals';

export default defineConfigWithVueTs(
  {
    name: 'app/ignores',
    // Never lint build output or generated wasm-bindgen glue (gpu-pkg/ is a
    // generated copy of the crate's pkg/; the .js glue is codegen, not source).
    ignores: ['dist/**', 'node_modules/**', '.tests-dist/**', 'gpu-pkg/**', '**/pkg/**', '**/*.d.ts'],
  },
  {
    name: 'app/files',
    files: ['src/**/*.{ts,vue}'],
  },
  // Correctness-only Vue rules — Prettier owns formatting (the `format` script),
  // so we do NOT enable eslint-plugin-vue's formatting layer (flat/recommended).
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommendedTypeChecked,
  vueTsConfigs.strictTypeChecked,
  vueTsConfigs.stylisticTypeChecked,
  {
    name: 'app/language',
    files: ['src/**/*.{ts,vue}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.worker },
    },
  },
  {
    name: 'app/rules',
    files: ['src/**/*.{ts,vue}'],
    rules: {
      // Audit-mandated safety rules (Part 2 A/C/D) — errors, non-negotiable.
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',

      // Justified deviations from strict/stylistic-type-checked defaults (codex
      // allows deviation when justified). These are over-strict for this app:
      // interpolating numbers/booleans/nullish into log + template strings is
      // fine (we never stringify a raw object), and arrow shorthand returning a
      // void call (`() => gpu.tick()`) is idiomatic, not "confusing".
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowNumber: true, allowBoolean: true, allowNullish: true },
      ],
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        { ignoreArrowShorthand: true },
      ],

      // `_` is the codebase's intentional throwaway (unused params/vars/catches);
      // ignore it, error on genuine unused.
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],

      // Incremental adoption (interface-audit A): burning down the legacy-violation
      // backlog rule-by-rule and promoting each to 'error' as it clears. Remaining
      // (2026-07) — still WARN until reviewed and fixed:
      // Kept at WARN, not error, deliberately. Reviewed 2026-07: all ~15
      // instances are legitimate load-bearing code that this rule mislabels,
      // NOT removable dead code — (1) browser-API guards where the lib type
      // over-claims non-nullability (`navigator.gpu?.` absent off WebGPU,
      // `devicePixelContentBoxSize?.` absent on Safari), (2) SSR / old-browser
      // guards (`window.matchMedia`, `document?.`, `localStorage?.`), (3) runtime
      // validation of untrusted persisted data (GridZoneTab `safeZones`), and
      // (4) the `GESTURE_NAV_ENABLED` feature flag. Removing any would introduce
      // real crashes; promoting to error would pressure exactly that. WARN so a
      // genuinely-new unnecessary condition still surfaces for review.
      '@typescript-eslint/no-unnecessary-condition': 'warn',
    },
  },
);
