import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PAGES, PROJECT_ITEMS } from './components/projects.constants';
import { ProjectButton } from './components/ProjectButton';
import { ProjectPanel } from './components/ProjectPanel';

export function Projects() {
  const { t } = useTranslation();
  const pages = useMemo(() => PAGES, []);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = PROJECT_ITEMS[activeIndex]!;

  return (
    <section id="projects" className="relative pt-6 pb-28">
      <div className={PAGE_CONTAINER_CLASS}>
        {/* Heading */}
        <h2 className="self-stretch text-center font-sans text-[34px] leading-10.25 font-bold tracking-[0.4px] text-white">
          <span className="text-(--color-primary)">
            {t('home.projects.titlePrefix')}{' '}
          </span>
          {t('home.projects.title')}
        </h2>

        {/* Grid */}
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2">
          {/* Left: project list */}
          <div className="space-y-4">
            {PROJECT_ITEMS.map((item, idx) => (
              <ProjectButton
                key={item.number}
                item={item}
                isActive={idx === activeIndex}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>

          {/* Right: content panel */}
          <div className="flex flex-col items-center">
            <ProjectPanel panel={activeItem.panel} pages={pages} />
          </div>
        </div>
      </div>
    </section>
  );
}
