import type { Ref } from 'vue';

import type { TextBlock } from '../types/text';
import { normalizeTextBlock, normalizeTextBlocks } from '../utils/textNormalization';
import { loadTextBlocks, saveTextBlocks, clearTextStorage } from '../utils/textStorage';
import { createFeatureComposable } from './createFeatureComposable';

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
  const {
    items: blocks, setItems, addItem, updateItem, removeItem, clearItems, syncFromWorker,
  } = createFeatureComposable({
    storage: { load: loadTextBlocks, save: saveTextBlocks, clear: clearTextStorage },
    normalize: normalizeTextBlocks,
    normalizeOne: normalizeTextBlock,
    onSet: options.onSetBlocks,
    onAdd: options.onAddBlock,
    onUpdate: options.onUpdateBlock,
    onRemove: options.onRemoveBlock,
    onClear: options.onClearBlocks,
  });

  return {
    blocks,
    setBlocks: setItems,
    addBlock: addItem,
    updateBlock: updateItem,
    removeBlock: removeItem,
    clearBlocks: clearItems,
    syncFromWorker,
  };
}
