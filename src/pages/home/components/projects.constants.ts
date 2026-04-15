import page1 from '@/shared/assets/imgs/journal/page-1.jpg';
import page2 from '@/shared/assets/imgs/journal/page-2.jpg';
import page3 from '@/shared/assets/imgs/journal/page-3.jpg';
import page4 from '@/shared/assets/imgs/journal/page-4.jpg';
import page5 from '@/shared/assets/imgs/journal/page-5.jpg';
import type { ProjectItem } from './projects.types';

export const PAGES: string[] = [page1, page2, page3, page4, page5];

export const PROJECT_ITEMS: ProjectItem[] = [
  { number: '01', title: 'home.projects.items.0.title', panel: 'book' },
  { number: '02', title: 'home.projects.items.1.title', panel: 'slider2' },
  { number: '03', title: 'home.projects.items.2.title', panel: 'slider3' },
  { number: '04', title: 'home.projects.items.3.title', panel: 'single' },
];
