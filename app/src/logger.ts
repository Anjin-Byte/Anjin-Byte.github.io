// Structured, level-filtered logger. Works identically on the main thread and in Web Workers.
//
// Production builds: debug() and info() are no-op functions. Vite's minifier
// inlines the empty function bodies, eliminating the call overhead entirely.
// Only warn() and error() survive in production output.

const IS_DEV: boolean = import.meta.env.DEV;

const noop = (): void => {};

export interface Logger {
  debug(...args: unknown[]): void;
  info(...args: unknown[]): void;
  warn(...args: unknown[]): void;
  error(...args: unknown[]): void;
}

export function createLogger(tag: string): Logger {
  const prefix = `[${tag}]`;
  return {
    debug: IS_DEV ? (...args: unknown[]) => console.debug(prefix, ...args) : noop,
    info:  IS_DEV ? (...args: unknown[]) => console.info(prefix, ...args)  : noop,
    warn:  (...args: unknown[]) => console.warn(prefix, ...args),
    error: (...args: unknown[]) => console.error(prefix, ...args),
  };
}
