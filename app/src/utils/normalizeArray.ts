/**
 * Normalize an array of items: validate each, filter nulls, enforce max count.
 */
export function normalizeArray<T>(
  raw: unknown,
  normalizeOne: (item: unknown, now?: number) => T | null,
  maxItems: number,
  now?: number,
): T[] {
  if (!Array.isArray(raw)) return [];
  const timestamp = now ?? Date.now();
  const out: T[] = [];
  for (const item of raw) {
    if (out.length >= maxItems) break;
    const normalized = normalizeOne(item, timestamp);
    if (normalized) out.push(normalized);
  }
  return out;
}
