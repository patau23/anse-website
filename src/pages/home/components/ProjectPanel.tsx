import imglast from '@/shared/assets/imgs/projects/ai-question.jpg';
import aifrimg from '@/shared/assets/imgs/projects/aifr.jpg';
import enuanse from '@/shared/assets/imgs/projects/enu-anse.png';
import pplimg from '@/shared/assets/imgs/projects/people-standing-and-amir-behind-them.jpg';
import aibullshitimg from '@/shared/assets/imgs/projects/some-ai-bullshit.jpg';
import twodudes from '@/shared/assets/imgs/projects/two-dudes-signing-something.jpg';
import { BookViewer } from './BookViewer';
import { ImageSlider } from './ImageSlider';
import type { ProjectItem } from './projects.types';
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
      return <ImageSlider images={[aifrimg, aibullshitimg]} />;

    case 'slider3':
      // Provide 3 empty src strings
      return <ImageSlider images={[enuanse, pplimg, twodudes]} />;

    case 'single':
      return <SingleImage src={imglast} />;
  }
}
