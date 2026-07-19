import { computed, onMounted, watch, nextTick, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import { useThemePreference } from './useThemePreference';

// Render any ```mermaid fenced blocks (emitted by data/notebook.ts as
// <pre class="mermaid">…) inside a host element. Mermaid is a heavy dependency,
// so it is dynamically imported the first time a diagram is actually on the
// page the user is looking at — notes without diagrams, and notes that are
// merely MOUNTED but not the active route, never pull it in or pay a render.
//
// That "active route" qualifier is load-bearing here, not incidental: every
// NotebookPage instance stays mounted for the whole session (WorldStage flies
// the camera PAST panels rather than mounting/unmounting them — see
// router/index.ts), so a naive `watch(theme, render)` inside this composable
// would fire in every note simultaneously on every toggle, re-laying-out
// every diagram in every note regardless of whether it's on screen. Gating
// both the initial render and the theme-driven re-render on `isActive` is
// what keeps this composable's cost proportional to what the user is
// actually looking at, matching how every other per-panel concern in this
// app (WorldPanel's focus/scroll-capture, useLaneScroll) is already scoped.

type MermaidApi = typeof import('mermaid').default;

let mermaidPromise: Promise<MermaidApi> | null = null;

function loadMermaid(): Promise<MermaidApi> {
  if (!mermaidPromise) {
    mermaidPromise = import('mermaid').then((m) => m.default);
  }
  return mermaidPromise;
}

// Map the site's active theme onto a mermaid config. The cut-paper palette is
// muted ink-on-paper, so mermaid's grayscale `neutral` (light) and `dark`
// built-ins sit closest; the surrounding figure frame (styled in NotebookPage)
// carries the cut-paper vocabulary. Font follows the mono token so diagram
// labels read as technical, matching the code blocks.
function themeConfig(): { theme: 'neutral' | 'dark'; fontFamily: string } {
  const root = document.documentElement;
  const dark = root.dataset.themeMode === 'dark';
  const mono = getComputedStyle(root).getPropertyValue('--font-mono').trim();
  return {
    theme: dark ? 'dark' : 'neutral',
    fontFamily: mono || 'ui-monospace, monospace',
  };
}

/**
 * Render (and re-render on theme change) the mermaid diagrams inside `host`,
 * but only while `nodeRoute` is the active route. Safe to call for notes with
 * no diagrams — it no-ops without importing mermaid.
 */
export function useMermaid(host: Ref<HTMLElement | null>, nodeRoute: string): void {
  const { theme } = useThemePreference();
  const route = useRoute();
  const isActive = computed(() => route.path === nodeRoute);

  async function render(): Promise<void> {
    const el = host.value;
    if (!el) return;
    const blocks = Array.from(el.querySelectorAll<HTMLElement>('pre.mermaid'));
    if (blocks.length === 0) return;

    // Stash the source on first pass, then restore it each render so mermaid
    // (which replaces the block with SVG and flags data-processed) can be run
    // again from scratch after a theme flip.
    for (const block of blocks) {
      const src = block.getAttribute('data-src') ?? block.textContent ?? '';
      block.setAttribute('data-src', src);
      block.removeAttribute('data-processed');
      block.textContent = src;
    }

    const mermaid = await loadMermaid();
    mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', ...themeConfig() });
    try {
      await mermaid.run({ nodes: blocks });
    } catch (err) {
      // A malformed local diagram is an authoring error — surface it in dev,
      // but never let it take down the article page.
      // eslint-disable-next-line no-console
      console.error('[mermaid] diagram render failed', err);
    }
  }

  // Covers landing directly on this note (deep link) with it already active.
  onMounted(() => {
    if (isActive.value) void nextTick(render);
  });

  // Covers navigating INTO this note, whether for the first time (lazy
  // initial render) or returning to it later — including catching up a theme
  // change that happened while this note was inactive and therefore skipped.
  watch(isActive, (active) => {
    if (active) void render();
  });

  // Only re-render for the note currently on screen; an inactive note's stale
  // diagrams get refreshed by the `isActive` watcher above the next time the
  // user actually navigates to it, not the instant the toggle fires.
  watch(theme, () => {
    if (isActive.value) void render();
  });
}
