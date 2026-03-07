import type { TextBlock } from '../types/text';
import { normalizeTextBlock, normalizeTextBlocks } from '../utils/textNormalization';

export class TextState {
  private blocks: TextBlock[] = [];

  getAll(): TextBlock[] {
    return this.blocks;
  }

  setAll(blocks: unknown): TextBlock[] {
    this.blocks = normalizeTextBlocks(blocks);
    return this.blocks;
  }

  add(block: unknown): { blocks: TextBlock[]; error?: string } {
    const next = normalizeTextBlock(block);
    if (!next) return { blocks: this.blocks, error: 'Invalid text block payload' };
    const withoutSameId = this.blocks.filter((b) => b.id !== next.id);
    this.blocks = normalizeTextBlocks([...withoutSameId, next]);
    return { blocks: this.blocks };
  }

  update(block: unknown): { blocks: TextBlock[]; error?: string } {
    const next = normalizeTextBlock(block);
    if (!next) return { blocks: this.blocks, error: 'Invalid text block payload' };
    const idx = this.blocks.findIndex((b) => b.id === next.id);
    if (idx < 0) return { blocks: this.blocks, error: `Text block not found: ${next.id}` };
    const updated = this.blocks.slice();
    updated[idx] = next;
    this.blocks = normalizeTextBlocks(updated);
    return { blocks: this.blocks };
  }

  remove(id: string): TextBlock[] {
    this.blocks = this.blocks.filter((b) => b.id !== id);
    return this.blocks;
  }

  clear(): TextBlock[] {
    this.blocks = [];
    return this.blocks;
  }
}
