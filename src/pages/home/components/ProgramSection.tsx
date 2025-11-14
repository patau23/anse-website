import clsx from 'clsx';

import { containerClass, eyebrowClass } from './constants';

const timeline = [
  {
    title: 'Встреча гостей',
    time: '16:00',
    description: 'Фойе арены открывается за час до шоу: фотозона, мерч и бар.',
  },
  {
    title: 'I отделение',
    time: '17:00',
    description:
      'Премьерные сольные программы и дуэты ведущих фигуристов мира.',
  },
  {
    title: 'Антракт',
    time: '18:10',
    description:
      'Время, чтобы перевести дух, обсудить увиденное и сделать фото.',
  },
  {
    title: 'II отделение',
    time: '18:30',
    description: 'Большие массовые постановки, финал с участием всех звёзд.',
  },
];

const ProgramSection = () => {
  return (
    <section
      id="program"
      className={clsx(
        'bg-[linear-gradient(180deg,rgba(24,71,255,0.05),transparent)] py-16'
      )}
    >
      <div
        className={clsx(
          containerClass,
          'grid gap-8',
          'md:grid-cols-2 md:items-start'
        )}
      >
        <div>
          <p className={eyebrowClass}>Маршрут вечера</p>
          <h2 className={clsx('text-3xl font-semibold')}>Как проходит шоу</h2>
          <p className={clsx('mt-3 text-[#1d2b3f]')}>
            Лёд, свет и музыка объединяются в цельный спектакль. Приезжайте
            заранее, чтобы успеть насладиться атмосферой тура.
          </p>
        </div>
        <ol
          className={clsx(
            'space-y-4',
            'md:border-l-2 md:border-[rgba(24,71,255,0.2)] md:pl-6'
          )}
        >
          {timeline.map((item) => (
            <li
              key={item.title}
              className={clsx(
                'relative rounded-2xl border border-[#e1e7f0] p-4 text-left',
                'md:border-none md:p-0 md:pl-6'
              )}
            >
              <span
                className={clsx(
                  'absolute top-4 left-4 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-[#1847ff] shadow-[0_0_0_6px_rgba(24,71,255,0.15)]',
                  'md:top-2 md:left-0 md:block'
                )}
              />
              <div
                className={clsx(
                  'text-sm font-bold tracking-[0.08em] text-[#1847ff] uppercase'
                )}
              >
                {item.time}
              </div>
              <h3 className={clsx('text-lg font-semibold')}>{item.title}</h3>
              <p className={clsx('mt-1 text-[#1d2b3f]')}>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProgramSection;
