import img1 from '@/shared/assets/imgs/expertise/page1.png';
import img2 from '@/shared/assets/imgs/expertise/page2.png';
import img3 from '@/shared/assets/imgs/expertise/page3.png';
import img4 from '@/shared/assets/imgs/expertise/page4.png';
import img5 from '@/shared/assets/imgs/expertise/page5.png';
import img6 from '@/shared/assets/imgs/expertise/page6.png';
import img7 from '@/shared/assets/imgs/expertise/page7.png';

import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import { cn } from '@/shared/lib/utils';
import { useTranslation } from 'react-i18next';

const CTA_CLASS =
  'rounded-[12px] border border-dashed border-white px-[24px] py-[16px] text-[17px] font-semibold leading-[22px] tracking-[-0.408px] text-white';

function ExpertiseImagePlaceholder({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative h-125 w-full max-w-137.5 overflow-hidden rounded-2xl',
        'bg-linear-to-br from-white/20 to-white/5',
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(46,78,207,0.55),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.25))]" />
    </div>
  );
}

export default function ExpertisePage() {
  const { t } = useTranslation();

  const items = [
    {
      titleKey: 'expertise.items.handwriting.title',
      descriptionKey: 'expertise.items.handwriting.description',
      ctaKey: 'expertise.cta.learnMore',
      image: img1,
    },
    {
      titleKey: 'expertise.items.phonography.title',
      descriptionKey: 'expertise.items.phonography.description',
      ctaKey: 'expertise.cta.learnMore',
      image: img2,
    },
    {
      titleKey: 'expertise.items.phototechnical.title',
      descriptionKey: 'expertise.items.phototechnical.description',
      ctaKey: 'expertise.cta.readAll',
      image: img3,
    },
    {
      titleKey: 'expertise.items.accounting.title',
      descriptionKey: 'expertise.items.accounting.description',
      ctaKey: 'expertise.cta.readAll',
      image: img4,
    },
    {
      titleKey: 'expertise.items.goods.title',
      descriptionKey: 'expertise.items.goods.description',
      ctaKey: 'expertise.cta.readAll',
      image: img5,
    },
    {
      titleKey: 'expertise.items.religion.title',
      descriptionKey: 'expertise.items.religion.description',
      ctaKey: 'expertise.cta.readAll',
      image: img6,
    },
    {
      titleKey: 'expertise.items.psychology.title',
      descriptionKey: 'expertise.items.psychology.description',
      ctaKey: 'expertise.cta.readAll',
      image: img7,
    },
  ];

  return (
    <main className="py-24 text-white">
      <div className={PAGE_CONTAINER_CLASS}>
        <h1 className="sr-only">{t('expertise.title')}</h1>

        <section className="grid gap-16 lg:grid-cols-3">
          {items.map((item: any, index) => (
            <article
              key={item.title}
              className={cn(
                'flex flex-col items-center gap-11.5',
                index === items.length - 1 && 'lg:col-start-2'
              )}
            >
              <img src={item.image} alt={item.title} className="rounded-2xl" />

              <div className="flex flex-col items-center gap-4">
                <h2 className="text-center text-[28px] leading-8.5">
                  {t(item.titleKey)}
                </h2>
                <p className="max-w-121.5 text-center text-[17px] text-[#c7c7cc]">
                  {t(item.descriptionKey)}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
