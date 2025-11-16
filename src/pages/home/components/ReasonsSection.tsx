import img1 from '@/shared/assets/imgs/reasons/image-1.png';
import img2 from '@/shared/assets/imgs/reasons/image-2.png';
import clsx from 'clsx';

import { containerClass } from './constants';

const reasons = [
  {
    title: 'Новая программа',
    text: 'Музыка, свет, костюмы и постановки создают атмосферу праздника',
    image: img1,
  },
  {
    title: 'Живые эмоции',
    text: 'Все, что вы видели на экранах, теперь в реальности – на расстоянии вытянутой руки',
    image: img2,
  },
];

const ReasonsSection = () => {
  return (
    <section id="reasons" className={clsx('py-16')}>
      <div className={containerClass}>
        <header className={clsx('mb-10 max-w-xl')}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="px-6 text-left text-3xl font-semibold tracking-tight text-[#151826] uppercase md:text-[34px]">
              Почему стоит пойти
            </h2>
          </div>
        </header>

        <div className={clsx('grid gap-5 px-4', 'sm:grid-cols-2')}>
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className={clsx(
                'flex items-center gap-4 rounded-[13px] border-[1.5px] border-[#685697] bg-white text-left transition-transform duration-200 hover:-translate-y-0.5',
                'max-sm:flex-col max-sm:text-center'
              )}
            >
              <img
                src={reason.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className={clsx(
                  'box-border h-[170px] min-w-[calc(100%+3px)] rounded-xl object-cover'
                )}
              />

              <div className="p-3 pt-0 text-left text-[#685697]">
                <h3
                  className={clsx('text-lg leading-5 font-semibold uppercase')}
                >
                  {reason.title}
                </h3>
                <p className={clsx('font-inter text-[10px] leading-3')}>
                  {reason.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
