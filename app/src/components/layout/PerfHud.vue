<script setup lang="ts">
// DEV-ONLY live performance HUD. Mounted from App.vue behind
// `import.meta.env.DEV`, so it is never present in a production build.
//
// Why a live overlay rather than the existing console summaries: the question
// "is scrolling smooth" can only be answered WHILE scrolling, and the console
// summary lands every 300 frames (~5s) after the fact. This shows the frame
// budget being spent as you move.
//
// The headline number is deliberately the LATE-FRAME percentage, not the
// average frame time. Averages hide exactly the failure we care about — a run
// averaging 6ms with one 40ms spike per second reads as fine and feels broken.
//
// Toggle with the `\` key (and `?perf=1` to start open).
//
// The renderer-backend switcher lives here too, rather than as its own
// permanently-visible overlay in the corner. Two reasons: the tier you are on
// and the cost of a frame are the same question asked twice — you switch tiers
// in order to compare these numbers — and a debug control that is always on
// screen is a debug control that is always in a screenshot.
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { RafMonitor } from '../../perf/RafMonitor';
import {
  TARGET_UTILISATION,
  SMOOTH_JANK_RATIO,
  type SmoothnessReport,
} from '../../perf/frameBudget';
import type { RenderCostStats } from '../../workers/rendererProtocol';
import { onRenderCost } from '../../composables/useRenderCost';
import {
  useRendererBackend,
  currentForcedSelection,
  type ForcedSelection,
} from '../../composables/useRendererBackend';

const open = ref(new URLSearchParams(window.location.search).get('perf') === '1');
const report = ref<SmoothnessReport | null>(null);
const cost = ref<RenderCostStats | null>(null);

const monitor = new RafMonitor();
let rafId = 0;
let lastPaint = 0;

// The HUD samples rAF itself rather than piggybacking on the background's
// animation loop, so it keeps measuring even if that loop stalls — a stalled
// render loop is precisely the condition worth seeing.
function loop(t: number): void {
  rafId = requestAnimationFrame(loop);
  monitor.sample(t);
  // Repaint the readout ~4Hz; re-rendering this overlay every frame would make
  // the HUD a measurable part of the frame cost it reports.
  if (t - lastPaint >= 250) {
    lastPaint = t;
    report.value = monitor.report(cost.value?.sustainedMs ?? 0, cost.value?.moving ?? false);
  }
}

function onKey(e: KeyboardEvent): void {
  if (e.key === '\\' && !e.metaKey && !e.ctrlKey && !e.altKey) {
    open.value = !open.value;
  }
}

let offCost: (() => void) | null = null;

onMounted(() => {
  rafId = requestAnimationFrame(loop);
  window.addEventListener('keydown', onKey);
  document.addEventListener('visibilitychange', onVisibility);
  offCost = onRenderCost((s) => { cost.value = s; });
});

// A hidden tab produces one multi-second "frame"; drop history so the tail
// percentiles on return describe the live page, not the gap.
function onVisibility(): void {
  if (!document.hidden) monitor.reset();
}

onUnmounted(() => {
  cancelAnimationFrame(rafId);
  window.removeEventListener('keydown', onKey);
  document.removeEventListener('visibilitychange', onVisibility);
  offCost?.();
});

const pct = (v: number): string => `${(v * 100).toFixed(1)}%`;
const ms = (v: number): string => `${v.toFixed(1)}ms`;

// Utilisation bar: our measured cost as a share of the frame slot. Amber once
// past the headroom target, red once we are eating the whole slot.
const utilPct = computed(() => Math.min(100, (report.value?.utilisation ?? 0) * 100));
const utilState = computed(() => {
  const u = report.value?.utilisation ?? 0;
  if (u >= 1) return 'bad';
  if (u > TARGET_UTILISATION) return 'warn';
  return 'good';
});
// `smooth` is the model's verdict (frameBudget.ts owns the thresholds — the HUD
// must not invent a second, drifting definition). The extra step here is only
// severity: clearly-bad vs marginal, for colour.
const smoothState = computed(() => {
  const r = report.value;
  if (!r) return 'good';
  if (r.smooth) return 'good';
  return r.jankRatio > SMOOTH_JANK_RATIO * 4 || r.lateRatio > 0.08 ? 'bad' : 'warn';
});
// Shed rate: frames the worker's gate declined because it could not sustain
// them. Non-zero here means the device is at its limit and the adaptive gate is
// doing its job — the grid stays current, just at a lower rate.
const shedPct = computed(() => {
  const c = cost.value;
  if (!c || c.received === 0) return 0;
  return ((c.received - c.rendered) / c.received) * 100;
});

// ── Renderer backend ────────────────────────────────────────────────────────
// Backend selection is one-shot at worker init (a canvas context is claimed
// once and permanently), so choosing a tier RELOADS with `?renderer=` applied
// rather than hot-swapping. `forced` is what the URL pins; `activeLabel` is what
// the worker actually reported — they differ in Auto, which is the interesting
// case, since it shows which rung the WebGPU → WebGL2 → static probe landed on.
const { activeBackend, forceBackendReload } = useRendererBackend();

const BACKENDS: { id: ForcedSelection; label: string }[] = [
  { id: 'auto', label: 'Auto' },
  { id: 'webgpu', label: 'WebGPU' },
  { id: 'webgl2', label: 'WebGL2' },
  { id: 'static', label: 'Static' },
];

const forced = currentForcedSelection();

const ACTIVE_LABEL: Record<string, string> = { gpu: 'WebGPU', webgl2: 'WebGL2', cpu: 'Static' };
const activeLabel = computed(() =>
  activeBackend.value ? ACTIVE_LABEL[activeBackend.value] ?? activeBackend.value : '…',
);
</script>

<template>
  <div v-if="open" class="perf-hud" role="status" aria-live="off">
    <div class="hud-head">
      <strong>perf</strong>
      <span v-if="report" class="hud-hz">
        {{ report.refreshHz }}Hz<template v-if="report.capableHz > report.refreshHz">
          / {{ report.capableHz }} peak</template>
        · {{ ms(report.budgetMs) }} slot
      </span>
      <button class="hud-x" type="button" title="Close (\)" @click="open = false">×</button>
    </div>

    <template v-if="report">
      <div class="hud-row hud-headline" :class="smoothState">
        <span>{{ report.smooth ? 'smooth' : 'not smooth' }}</span>
        <span>{{ report.fps.toFixed(0) }} fps</span>
      </div>
      <!-- Downclocking is expected while static (the OS saves power on a
           motionless view) and a genuine fault while moving, so it is labelled
           rather than silently folded into the verdict. -->
      <div v-if="report.downclocked" class="hud-row hud-note" :class="cost?.moving ? 'bad' : 'warn'">
        <span>{{ cost?.moving ? 'downclocked while moving' : 'downclocked (static, expected)' }}</span>
        <span>{{ report.refreshHz }}/{{ report.capableHz }}Hz</span>
      </div>
      <!-- Capability is OBSERVATIONAL: it can only be learned from intervals we
           actually saw. A rate capped since the first frame (OS low-power mode,
           a half-rate vsync lock, a 30Hz external panel) is indistinguishable
           from real hardware unless we say so — which is exactly how a pinned
           30fps once read as "30Hz display, smooth". -->
      <div v-else-if="report.capableHz < 60" class="hud-row hud-note warn">
        <span>never saw faster — rate may be capped</span>
        <span>{{ report.capableHz }}Hz max</span>
      </div>

      <div class="hud-bar" :class="utilState">
        <div class="hud-bar-fill" :style="{ width: `${utilPct}%` }" />
        <div class="hud-bar-target" :style="{ left: `${TARGET_UTILISATION * 100}%` }" />
      </div>
      <div class="hud-row hud-dim">
        <span>render / slot</span>
        <span>{{ pct(report.utilisation) }}</span>
      </div>

      <hr class="hud-hr" />

      <div class="hud-row"><span>late frames</span><span :class="smoothState">{{ pct(report.lateRatio) }}</span></div>
      <div class="hud-row"><span>jank frames</span><span :class="smoothState">{{ pct(report.jankRatio) }}</span></div>
      <div class="hud-row hud-dim"><span>frame p50 / p95</span><span>{{ ms(report.medianDeltaMs) }} / {{ ms(report.p95DeltaMs) }}</span></div>
      <div class="hud-row hud-dim"><span>worst frame</span><span>{{ ms(report.worstDeltaMs) }}</span></div>

      <template v-if="cost">
        <hr class="hud-hr" />
        <div class="hud-row"><span>worker render</span><span>{{ ms(cost.sustainedMs) }}</span></div>
        <div class="hud-row hud-dim"><span>render p95 / worst</span><span>{{ ms(cost.p95Ms) }} / {{ ms(cost.worstMs) }}</span></div>
        <div class="hud-row hud-dim">
          <span>shed</span>
          <span>{{ shedPct.toFixed(0) }}% <em v-if="cost.moving">moving</em><em v-else>static</em></span>
        </div>
      </template>
    </template>
    <div v-else class="hud-dim">sampling…</div>

    <!-- Outside the `report` block on purpose: the tier is worth seeing (and
         switchable) before the first sample lands, which is exactly when you
         are diagnosing a renderer that failed to start. -->
    <hr class="hud-hr" />
    <div class="hud-row hud-dim">
      <span>renderer</span>
      <span>active <strong class="hud-active">{{ activeLabel }}</strong></span>
    </div>
    <div class="hud-backends" role="group" aria-label="Renderer backend (reloads the page)">
      <button
        v-for="b in BACKENDS"
        :key="b.id"
        type="button"
        class="hud-be"
        :class="{ 'hud-be--on': forced === b.id }"
        :aria-pressed="forced === b.id"
        :title="`Reload with ${b.label}`"
        @click="forceBackendReload(b.id)"
      >{{ b.label }}</button>
    </div>
  </div>
</template>

<style scoped>
.perf-hud {
  position: fixed;
  right: 12px;
  bottom: 12px;
  z-index: 9999;
  min-width: 226px;
  padding: 8px 10px 9px;
  border-radius: 8px;
  /* Self-contained dark chip: the HUD must stay legible over either theme and
     must not depend on app tokens, which it may be used to debug. */
  background: rgba(18, 20, 24, 0.9);
  color: rgba(240, 243, 247, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.34);
  font: 11px/1.45 ui-monospace, SFMono-Regular, Menlo, monospace;
  pointer-events: auto;
  user-select: none;
  backdrop-filter: blur(6px);
}

.hud-head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}
.hud-head strong { letter-spacing: 0.08em; text-transform: uppercase; font-size: 10px; opacity: 0.75; }
.hud-hz { margin-left: auto; opacity: 0.6; font-size: 10px; }
.hud-x {
  background: none; border: 0; color: inherit; opacity: 0.55;
  cursor: pointer; font-size: 14px; line-height: 1; padding: 0 2px;
}
.hud-x:hover { opacity: 1; }

.hud-row { display: flex; justify-content: space-between; gap: 12px; }
.hud-dim { opacity: 0.62; }
.hud-headline {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 6px;
}
.hud-headline.good { color: #6ee7a8; }
.hud-headline.warn { color: #f7c96b; }
.hud-headline.bad  { color: #ff8b7a; }
.good { color: #6ee7a8; }
.warn { color: #f7c96b; }
.bad  { color: #ff8b7a; }

.hud-bar {
  position: relative;
  height: 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
  margin-bottom: 3px;
}
.hud-bar-fill { height: 100%; border-radius: 3px; transition: width 120ms linear; }
.hud-bar.good .hud-bar-fill { background: #4ade80; }
.hud-bar.warn .hud-bar-fill { background: #fbbf24; }
.hud-bar.bad  .hud-bar-fill { background: #f87171; }
/* Headroom marker: our work should sit left of this. */
.hud-bar-target {
  position: absolute; top: 0; bottom: 0; width: 1px;
  background: rgba(255, 255, 255, 0.5);
}

.hud-note { font-size: 10px; margin: -3px 0 5px; }
.hud-hr { border: 0; border-top: 1px solid rgba(255, 255, 255, 0.1); margin: 6px 0; }
em { font-style: normal; opacity: 0.5; }

/* ── Renderer backend switcher ─────────────────────────────────────────────
   Styled from literal values like the rest of this overlay, NOT from the app's
   theme tokens. That is the same rule the panel background follows and it is
   deliberate: this HUD is used to debug the renderer that paints those tokens,
   so a readout that changes appearance with them is a readout that can lie
   about the thing it is diagnosing. (As its own overlay this control did read
   --theme-surface / --island-edge; folding it in drops that dependency.) */
.hud-active { color: rgba(240, 243, 247, 0.94); font-weight: 600; }

.hud-backends {
  display: flex;
  gap: 3px;
  margin-top: 5px;
}

.hud-be {
  flex: 1;
  padding: 3px 4px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: transparent;
  color: rgba(240, 243, 247, 0.7);
  cursor: pointer;
  font: inherit;
  font-size: 10px;
}
.hud-be:hover {
  border-color: rgba(255, 255, 255, 0.34);
  color: rgba(240, 243, 247, 0.98);
}
.hud-be:focus-visible {
  outline: 2px solid rgba(126, 190, 255, 0.9);
  outline-offset: 1px;
}
/* The pinned tier. Reads as "this is forced", distinct from `active` above,
   which is what the worker actually got — in Auto those differ, and that
   difference is the whole reason the readout exists. */
.hud-be--on {
  background: rgba(126, 190, 255, 0.9);
  border-color: transparent;
  color: #10141a;
  font-weight: 600;
}
</style>
