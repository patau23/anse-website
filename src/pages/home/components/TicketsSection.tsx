import clsx from 'clsx';

import {
  containerClass,
  eyebrowClass,
  secondaryButtonClass,
} from './constants';

const TicketsSection = () => {
  return (
    <section id="tickets" className={clsx('py-16')}>
      <div
        className={clsx(
          containerClass,
          'grid gap-8 rounded-[28px] bg-linear-to-br from-[#1847ff] to-[#102da8] p-8 text-white shadow-[0_25px_80px_rgba(16,45,168,0.25)]',
          'md:grid-cols-2'
        )}
      >
        <div>
          <p className={clsx(eyebrowClass, 'text-white/80')}>
            Билеты в продаже
          </p>
          <h2 className={clsx('text-3xl leading-tight font-semibold')}>
            Не упустите шанс увидеть легендарных фигуристов вживую
          </h2>
          <p className={clsx('mt-4 text-white/80')}>
            Это больше, чем спорт. Это искусство на льду, созданное командой,
            которая вдохновляет целое поколение.
          </p>
          <a
            className={clsx(secondaryButtonClass, 'mt-4 inline-flex')}
            href="#hero"
          >
            Выбрать места
          </a>
        </div>
        <div
          className={clsx(
            'rounded-[22px] border border-white/30 p-6 text-lg leading-relaxed text-white'
          )}
        >
          <p className={clsx('text-2xl font-semibold')}>01.05 · 17:00</p>
          <p>Барыс Арена · Алматы</p>
          <p>Количество мест ограничено</p>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
