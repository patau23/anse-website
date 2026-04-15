import type { ProjectItem } from './projects.types';
import { BookViewer } from './BookViewer';
import { ImageSlider } from './ImageSlider';
import { SingleImage } from './SingleImage';

type ProjectPanelProps = {
  panel: ProjectItem['panel'];
  pages: string[];
};

export function ProjectPanel({ panel, pages }: ProjectPanelProps) {
  switch (panel) {
    case 'book':
      return <BookViewer pages={pages} />;

    case 'slider2':
      // Provide 2 empty src strings — user will replace with real imports
      return <ImageSlider images={['', '']} />;

    case 'slider3':
      // Provide 3 empty src strings
      return <ImageSlider images={['', '', '']} />;

    case 'single':
      return <SingleImage />;
  }
}
