// Structured, level-filtered logger. Works identically on the main thread and in Web Workers.
// In production builds all levels below 'warn' are compiled out via import.meta.env.DEV.

type Level = 'debug' | 'info' | 'warn' | 'error';

const RANK: Record<Level, number> = { debug: 0, info: 1, warn: 2, error: 3 };
const MIN_RANK: number = import.meta.env.DEV ? RANK.debug : RANK.warn;

export interface Logger {
  debug(...args: unknown[]): void;
  info(...args: unknown[]): void;
  warn(...args: unknown[]): void;
  error(...args: unknown[]): void;
}

export function createLogger(tag: string): Logger {
  const emit = (level: Level, args: unknown[]): void => {
    if (RANK[level] < MIN_RANK) return;
    console[level](`[${tag}]`, ...args);
  };
  return {
    debug: (...args) => emit('debug', args),
    info:  (...args) => emit('info',  args),
    warn:  (...args) => emit('warn',  args),
    error: (...args) => emit('error', args),
  };
}
