import { useCamera } from './useCamera';
import { dragPanTarget } from '../space/cameraEasing';

// Movement past this (CSS px, Manhattan) counts as a drag, not a click — so the
// trailing click doesn't toggle a background cell.
const DRAG_THRESHOLD_PX = 4;

export interface DragToPan {
  /** Attach the pointer listeners; returns a detach function. */
  attachListeners(): () => void;
  /** True if the most recent pointer interaction was a pan drag past the
   *  threshold, so the click-to-toggle handler can ignore the trailing click. */
  consumedClick(): boolean;
}

/**
 * Direct-manipulation pan: drag the background to fly the camera (1:1, no
 * easing). Yields to the zone-drawing tool and to interactive content (links,
 * panels) via the supplied guards, so it never hijacks those gestures. Sits
 * beside useDragTools rather than inside its rect/paint registry because a pan
 * is a continuous camera move, not a committed rectangle.
 */
export function useDragToPan(opts: {
  isInteractiveTarget: (t: EventTarget | null) => boolean;
  isToolActive: () => boolean;
}): DragToPan {
  const camera = useCamera();
  let active = false;
  let pointerId = -1;
  let startX = 0;
  let startY = 0;
  let moved = 0;
  let startCam = { x: 0, y: 0, zoom: 1 };
  let clickConsumed = false;

  function onPointerDown(e: PointerEvent): void {
    clickConsumed = false;
    if (e.button !== 0) return;
    if (opts.isToolActive() || opts.isInteractiveTarget(e.target)) return;
    active = true;
    pointerId = e.pointerId;
    startX = e.clientX;
    startY = e.clientY;
    moved = 0;
    startCam = { ...camera.camera.value };
  }

  function onPointerMove(e: PointerEvent): void {
    if (!active || e.pointerId !== pointerId) return;
    moved = Math.max(moved, Math.abs(e.clientX - startX) + Math.abs(e.clientY - startY));
    // Once it's a real drag (not a click), detach from the parked waypoint so a
    // later viewport resize doesn't snap the camera back to it.
    if (moved > DRAG_THRESHOLD_PX) camera.releaseAnchor();
    const tgt = dragPanTarget(startCam, { x: startX, y: startY }, { x: e.clientX, y: e.clientY });
    camera.snapTo(tgt.x, tgt.y, tgt.zoom);
  }

  function onPointerUp(e: PointerEvent): void {
    if (!active || e.pointerId !== pointerId) return;
    active = false;
    clickConsumed = moved > DRAG_THRESHOLD_PX;
  }

  function attachListeners(): () => void {
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }

  return {
    attachListeners,
    consumedClick: () => clickConsumed,
  };
}
