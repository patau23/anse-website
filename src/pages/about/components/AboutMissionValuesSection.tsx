import { cn } from '@/shared/lib/utils';
import { useTranslation } from 'react-i18next';
import { ValueCard } from './ValueCard';

export function AboutMissionValuesSection() {
  const { t } = useTranslation();
  const intro = t('about.mission.intro');
  const values = t('about.mission.values', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="mb-75 py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="min-w-full text-center text-[34px] leading-10.25 font-bold tracking-[0.4px]">
          <span className="text-[#2e4ecf]">
            {`${t('about.mission.titlePrefix')} `}
          </span>
          <span className="text-white">{t('about.mission.title')}</span>
        </h2>
        <p className="w-full max-w-200 text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          {intro}
        </p>
      </div>

      <div className="relative mx-auto mt-14 w-full max-w-469.5">
        <div className="grid justify-items-center gap-10 xl:block xl:min-h-258">
          <ValueCard
            title={values[0].title}
            description={values[0].description}
            className="xl:absolute xl:top-38.25 xl:left-25.75"
            decoClassName="left-[30px]"
          />

          <ValueCard
            title={values[1].title}
            description={values[1].description}
            className={cn(
              'xl:absolute xl:top-57 xl:left-311',
              '[@media(min-width:1280px)_and_(max-width:1560px)]:top-100 [@media(min-width:1280px)_and_(max-width:1560px)]:right-20 [@media(min-width:1280px)_and_(max-width:1560px)]:left-auto'
            )}
            decoClassName="left-[6px]"
          />

          <ValueCard
            title={values[2].title}
            description={values[2].description}
            className="xl:absolute xl:top-170.5 xl:left-62.5"
            decoClassName="left-[-40px]"
          />

          <ValueCard
            title={values[3].title}
            description={values[3].description}
            className={cn(
              'xl:absolute xl:top-195.25 xl:left-267.25',
              '[@media(min-width:1280px)_and_(max-width:1560px)]:top-230 [@media(min-width:1280px)_and_(max-width:1560px)]:right-20 [@media(min-width:1280px)_and_(max-width:1560px)]:left-auto'
            )}
            decoClassName="left-[10px]"
          />
        </div>
      </div>
    </section>
  );
}
