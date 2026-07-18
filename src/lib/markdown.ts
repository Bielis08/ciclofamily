import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import type { MarkdownRenderer } from "@astrojs/markdown-remark";

let processorPromise: Promise<MarkdownRenderer> | null = null;

export function getMarkdownProcessor(): Promise<MarkdownRenderer> {
  if (!processorPromise) {
    processorPromise = createMarkdownProcessor();
  }
  return processorPromise;
}
