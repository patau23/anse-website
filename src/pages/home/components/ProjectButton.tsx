import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { ProjectItem } from './projects.types';

type ProjectButtonProps = {
  item: ProjectItem;
  isActive: boolean;
  onClick: () => void;
};

export function ProjectButton({
  item,
  isActive,
  onClick,
}: ProjectButtonProps) {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'group flex w-full items-center gap-11.5 rounded-2xl p-6 text-left backdrop-blur transition-colors',
        isActive
          ? 'rounded-2xl border border-[#2E4ECF] bg-[rgba(46,78,207,0.12)] shadow-[0_-4px_40px_-14.024px_rgba(46,78,207,0.52),inset_0_4px_40px_-14.024px_rgba(46,78,207,0.52)]'
          : 'border border-white/10 bg-[linear-gradient(0deg,#1A1A1A_0%,#1A1A1A_100%)] hover:bg-white/10',
      ].join(' ')}
    >
      <span className="flex min-w-0 flex-1 items-center gap-4">
        <span className="text-sm font-semibold text-white/80">
          {item.number}
        </span>
        <span className="min-w-0 truncate text-sm text-white/90 sm:text-base">
          {t(item.title)}
        </span>
      </span>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/10 text-white/80 transition-colors group-hover:text-white">
        <ArrowRight className="h-4 w-4" />
      </span>
    </button>
  );
}
