import type { Sheet } from './projects.types';

export function buildSheets(pages: string[]): Sheet[] {
  const result: Sheet[] = [];
  for (let i = 1; i < pages.length; i += 2) {
    result.push({ front: pages[i]!, back: pages[i + 1] ?? null });
  }
  return result;
}
