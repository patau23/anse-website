import CrhomeImg from '@/shared/assets/imgs/chrome-circles.png';
import { cn } from '@/shared/lib/utils';
import { useTranslation } from 'react-i18next';

export function AboutHistorySection() {
  const { t } = useTranslation();
  const paragraphs = t('about.history.paragraphs', {
    returnObjects: true,
  }) as string[];

  return (
    <section className="flex flex-col items-center py-10 text-center">
      <img
        src={CrhomeImg}
        alt={t('about.history.imgAlt', 'Chrome Circles')}
        className={cn('mt-80 h-37.75 w-32 rounded-3xl')}
      />

      <h1 className="mt-12 text-center text-[34px] leading-10.25 font-bold tracking-[0.4px]">
        <span className="text-[#2e4ecf]">{`${t('about.history.titlePrefix')} `}</span>
        <span className="text-white">{t('about.history.title')}</span>
      </h1>

      <div className="mt-8 flex w-full max-w-200 flex-col gap-6 text-[20px] leading-7 font-normal tracking-[-0.4px] text-white">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
