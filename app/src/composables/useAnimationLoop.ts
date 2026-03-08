export interface AnimationLoop {
  start(onFrame: () => void): void;
  stop(): void;
}

export function useAnimationLoop(): AnimationLoop {
  let animFrameId = 0;

  function start(onFrame: () => void): void {
    function loop(): void {
      onFrame();
      animFrameId = requestAnimationFrame(loop);
    }
    animFrameId = requestAnimationFrame(loop);
  }

  function stop(): void {
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = 0;
    }
  }

  return { start, stop };
}
