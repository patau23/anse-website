import MagazinePage from '@/shared/assets/imgs/magazine-page.png';
import { cn } from '@/shared/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GLASS_CARD_CLASS } from '../about.constants';

export function AboutExpertusProjectsSection() {
  const { t } = useTranslation();
  const paragraph = t('about.expertus.paragraph');
  const cards = t('about.expertus.cards', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="min-w-full text-center text-[34px] leading-10.25 font-bold tracking-[0.4px]">
          <span className="text-[#2e4ecf]">
            {`${t('about.expertus.titlePrefix')} `}
          </span>
          <span className="text-white">{t('about.expertus.title')}</span>
        </h2>
        <p className="w-full max-w-200 text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          {paragraph}
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {cards.map((c, i) => (
          <div
            key={i}
            className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}
          >
            <h3 className="text-[24px] leading-8 font-semibold text-white">
              {c.title}
            </h3>
            <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
              {c.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-200 overflow-hidden rounded-[36px] border border-white/10 bg-white">
          <div className="grid grid-cols-3 gap-0">
            <img
              src={MagazinePage}
              alt=""
              className="col-span-3 w-full object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-medium text-black/70 backdrop-blur">
            <button
              type="button"
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/10"
              aria-label={t('about.expertus.pager.prev')}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <span>01/24</span>
            <button
              type="button"
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/10"
              aria-label={t('about.expertus.pager.next')}
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <a
          href="#"
          className="mt-8 inline-flex h-13.5 items-center justify-center rounded-full bg-(--color-primary) px-10 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          {t('about.expertus.readAll')}
        </a>
      </div>
    </section>
  );
}
