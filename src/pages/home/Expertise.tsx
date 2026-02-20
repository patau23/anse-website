import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Hex } from './Hex';

const expertiseItemsTop = [
  'home.expertiseSection.itemsTop.0',
  'home.expertiseSection.itemsTop.1',
  'home.expertiseSection.itemsTop.2',
];

const expertiseItemsBottom = [
  'home.expertiseSection.itemsBottom.0',
  'home.expertiseSection.itemsBottom.1',
  'home.expertiseSection.itemsBottom.2',
  'home.expertiseSection.itemsBottom.3',
];

export function Expertise() {
  const { t } = useTranslation();
  return (
    <section id="expertise" className="relative pt-6 pb-36">
      <div
        className={clsx(
          PAGE_CONTAINER_CLASS,
          'flex flex-col items-center gap-6 self-stretch'
        )}
      >
        <h2 className="self-stretch text-center font-sans text-[34px] leading-10.25 font-bold tracking-[0.4px] text-white">
          {t('home.expertiseSection.headerNumber')}
          <span className="text-(--color-primary)">
            {' '}
            {t('home.expertiseSection.headerText')}
          </span>
        </h2>
        <p className="mx-auto w-200 text-center font-sans text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          {t('home.expertiseSection.paragraph1')}
        </p>
        <br />
        <p className="mx-auto w-200 text-center font-sans text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          {t('home.expertiseSection.paragraph2')}
        </p>

        <div className="mt-14 flex flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {expertiseItemsTop.map((labelKey) => (
              <Hex key={labelKey} labelKey={labelKey} />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {expertiseItemsBottom.map((labelKey) => (
              <Hex key={labelKey} labelKey={labelKey} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
