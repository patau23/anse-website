import clsx from 'clsx';

import { containerClass, eyebrowClass } from './constants';

const reasons = [
  {
    title: 'Формат для всей семьи',
    text: 'Музыка, свет и ледовая пластика объединяют поколения зрителей.',
    image:
      'https://static.tildacdn.com/tild3961-3561-4731-a430-376531653035/1-4.png',
  },
  {
    title: 'Новая программа',
    text: 'Премьеры 2026 года с уникальными номерами и неожиданными дуэтами.',
    image:
      'https://static.tildacdn.com/tild3263-6639-4130-b736-623464366266/1-2.png',
  },
  {
    title: 'Живые эмоции',
    text: 'Каждая история рассказывается здесь и сейчас — без дублей и монтажа.',
    image:
      'https://static.tildacdn.com/tild6535-3038-4632-b238-633836616635/1-3.png',
  },
  {
    title: 'Звёздный состав',
    text: 'На одном льду выступают олимпийские чемпионы и юные таланты школы.',
    image:
      'https://static.tildacdn.com/tild6331-6131-4930-a533-613035343330/1-1.png',
  },
];

const ReasonsSection = () => {
  return (
    <section id="reasons" className={clsx('py-16')}>
      <div className={containerClass}>
        <header className={clsx('mb-10 max-w-xl')}>
          <p className={eyebrowClass}>Эмоции</p>
          <h2 className={clsx('text-3xl font-semibold')}>Почему стоит пойти</h2>
        </header>
        <div className={clsx('grid gap-4', 'sm:grid-cols-2')}>
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className={clsx(
                'flex items-center gap-4 rounded-3xl border border-[#e1e7f0] bg-white p-5 text-left shadow-sm transition-transform duration-200 hover:-translate-y-0.5',
                'max-sm:flex-col max-sm:text-center'
              )}
            >
              <img
                src={reason.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className={clsx('h-16 w-16 object-contain')}
              />
              <div>
                <h3 className={clsx('text-lg font-semibold')}>
                  {reason.title}
                </h3>
                <p className={clsx('mt-1 text-[#1d2b3f]')}>{reason.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
