import { ref, type Ref } from 'vue';

import type { TextBlock } from '../types/text';
import { normalizeTextBlock, normalizeTextBlocks } from '../utils/textNormalization';
import { clearTextStorage, loadTextBlocks, saveTextBlocks } from '../utils/textStorage';

export interface UseText {
  blocks: Ref<TextBlock[]>;
  setBlocks(blocks: TextBlock[]): void;
  addBlock(block: TextBlock): void;
  updateBlock(block: TextBlock): void;
  removeBlock(id: string): void;
  clearBlocks(): void;
  syncFromWorker(blocks: TextBlock[]): void;
}

export interface UseTextOptions {
  onSetBlocks?: (blocks: TextBlock[]) => void;
  onAddBlock?: (block: TextBlock) => void;
  onUpdateBlock?: (block: TextBlock) => void;
  onRemoveBlock?: (id: string) => void;
  onClearBlocks?: () => void;
}

export function useText(options: UseTextOptions = {}): UseText {
  const blocks = ref<TextBlock[]>(loadTextBlocks());

  function commit(next: TextBlock[]): TextBlock[] {
    const normalized = normalizeTextBlocks(next);
    blocks.value = normalized;
    saveTextBlocks(normalized);
    return normalized;
  }

  function setBlocks(next: TextBlock[]): void {
    const normalized = commit(next);
    options.onSetBlocks?.(normalized);
  }

  function addBlock(block: TextBlock): void {
    const normalized = normalizeTextBlock(block);
    if (!normalized) return;
    commit([...blocks.value, normalized]);
    options.onAddBlock?.(normalized);
  }

  function updateBlock(block: TextBlock): void {
    const normalized = normalizeTextBlock(block);
    if (!normalized) return;
    if (!blocks.value.some((b) => b.id === normalized.id)) return;
    const next = blocks.value.map((b) => b.id === normalized.id ? normalized : b);
    commit(next);
    options.onUpdateBlock?.(normalized);
  }

  function removeBlock(id: string): void {
    if (!blocks.value.some((b) => b.id === id)) return;
    const next = blocks.value.filter((b) => b.id !== id);
    commit(next);
    options.onRemoveBlock?.(id);
  }

  function clearBlocks(): void {
    if (blocks.value.length === 0) return;
    blocks.value = [];
    clearTextStorage();
    options.onClearBlocks?.();
  }

  function syncFromWorker(next: TextBlock[]): void {
    commit(next);
  }

  return {
    blocks,
    setBlocks,
    addBlock,
    updateBlock,
    removeBlock,
    clearBlocks,
    syncFromWorker,
  };
}
