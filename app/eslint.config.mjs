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

      // Incremental adoption (interface-audit A): the safety rules above are
      // ERRORS and enforced now. These strict/stylistic-type-checked rules have
      // legacy violations from a 9k-line codebase that was never linted — WARN
      // now so `pnpm lint` is green on errors and can gate CI, then burn the
      // backlog down and promote each to 'error'. Counts at adoption (2026-07):
      // `_` is the codebase's intentional throwaway (unused params/vars/catches);
      // ignore it (correct regardless of severity), warn on genuine unused.
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],
      '@typescript-eslint/no-unnecessary-condition': 'warn',  // ~14 (defensive boundary code trips this)
      '@typescript-eslint/no-empty-function': 'warn',         // ~9 (intentional no-op adapter stubs)
      '@typescript-eslint/no-non-null-assertion': 'warn',     // ~7
      '@typescript-eslint/unbound-method': 'warn',            // ~12 (functional-style object methods; no `this`)
      '@typescript-eslint/unified-signatures': 'warn',        // 2
      '@typescript-eslint/restrict-plus-operands': 'warn',    // 2
      '@typescript-eslint/prefer-nullish-coalescing': 'warn', // 1
      '@typescript-eslint/no-invalid-void-type': 'warn',      // 1
      '@typescript-eslint/no-explicit-any': 'warn',           // 1
    },
  },
);
