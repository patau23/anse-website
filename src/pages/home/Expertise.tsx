import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import clsx from 'clsx';
import { Hex } from './Hex';

const expertiseItemsTop = [
  'Строительно-\nтехнические',
  'Товароведческие',
  'Компьютерно-\nтехнические',
];

const expertiseItemsBottom = [
  'Психологические',
  'Психологические',
  'Экономические и\nтехнические',
  'Баллистические и др.',
];

export function Expertise() {
  return (
    <section id="expertise" className="relative pt-6 pb-36">
      <div
        className={clsx(
          PAGE_CONTAINER_CLASS,
          'flex flex-col items-center gap-6 self-stretch'
        )}
      >
        <h2 className="self-stretch text-center font-sans text-[34px] leading-10.25 font-bold tracking-[0.4px] text-white">
          54 вида
          <span className="text-(--color-primary)"> судебных экспертиз</span>
        </h2>
        <p className="mx-auto w-200 text-center font-sans text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          АНСЭ проводит комплексные экспертизы и исследования для судов,
          органов, адвокатов, а так же для организаций и частных лиц, опираясь
          на современные мировые стандарты судебной экспертизы{' '}
        </p>
        <br />
        <p className="mx-auto w-200 text-center font-sans text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          Перечень самых сильных наших экспертиз: религия, политология,
          филология, товароведческая, психологическая, строительно-техническая,
          фототехническая, экономическая
        </p>

        <div className="mt-14 flex flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {expertiseItemsTop.map((label) => (
              <Hex key={label} label={label} />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {expertiseItemsBottom.map((label) => (
              <Hex key={label} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
