import { ref, type Ref } from 'vue';

// The ONE motion-preference signal. Module-scope singleton, the same shape as
// useThemePreference: every caller gets a reference to the same underlying ref,
// and the OS preference is tracked live.
//
// Why this exists as its own module (responsive R11). `prefers-reduced-motion`
// used to be read in two places that did not know about each other, and the
// worker was not one of them. The result was backwards: the camera fly — brief,
// and started BY the user by clicking a destination — was disabled, while the
// Game of Life underneath every page kept animating forever without anyone
// asking. For a reader with a vestibular disorder that is exactly the wrong way
// round; the perpetual, unsolicited motion is the one that matters.
//
// CSS is deliberately NOT a consumer. It can already ask the platform directly
// with `@media (prefers-reduced-motion: reduce)`, so publishing a data attribute
// for it would be a second source of the same truth. This module exists for the
// two consumers that cannot use a media query: JS (the camera) and the render
// worker (via `set_motion`, mirroring how the theme crosses that boundary).

function query(): MediaQueryList | null {
  if (typeof window === 'undefined' || !window.matchMedia) return null;
  return window.matchMedia('(prefers-reduced-motion: reduce)');
}

const reducedMotionRef = ref(query()?.matches ?? false);

const mql = query();
if (mql) {
  const onChange = (e: MediaQueryListEvent): void => {
    reducedMotionRef.value = e.matches;
  };
  if (typeof mql.addEventListener === 'function') {
    mql.addEventListener('change', onChange);
  } else {
    // Safari < 14 fallback (MediaQueryList lacked EventTarget methods there) —
    // the same shim useThemePreference carries for prefers-color-scheme.
    (mql as unknown as { addListener: (cb: (e: MediaQueryListEvent) => void) => void })
      .addListener(onChange);
  }
}

export function useMotionPreference(): { reducedMotion: Ref<boolean> } {
  return { reducedMotion: reducedMotionRef };
}
