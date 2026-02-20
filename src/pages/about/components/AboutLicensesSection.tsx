import licenceimg from '@/shared/assets/imgs/certificate.png';
import { cn } from '@/shared/lib/utils';
import { GLASS_CARD_CLASS } from '../about.constants';
import { useTranslation } from 'react-i18next';

export function AboutLicensesSection() {
  const { t } = useTranslation();
  const paragraph = t('about.licenses.paragraph');
  const items = t('about.licenses.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="min-w-full text-center text-[34px] leading-10.25 font-bold tracking-[0.4px]">
          <span className="text-[#2e4ecf]">
            {t('about.licenses.titlePrefix')}
          </span>
          <span className="text-white">{t('about.licenses.title')}</span>
        </h2>
        <p className="w-full max-w-200 text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          {paragraph}
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => (
          <div
            key={idx}
            className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}
          >
            <img src={licenceimg} alt={it.title} />
            <h3 className="text-[24px] leading-8 font-semibold text-white">
              {it.title}
            </h3>
            <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
              {it.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
