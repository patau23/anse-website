import clsx from 'clsx';

import { containerClass } from './constants';

const TicketsSection = () => {
  const isDesktop = window.innerWidth >= 1024;
  return (
    <section id="tickets" className={clsx('pt-16 pb-0', 'lg:pt-40')}>
      <div
        className={clsx(
          containerClass,
          'grid gap-8 bg-linear-to-br from-[#685694] to-[#433469] p-8 text-white',
          'md:grid-cols-1',
          'lg:m-0 lg:w-full lg:max-w-none lg:px-20 lg:pt-40'
        )}
      >
        <div className={clsx('flex flex-col gap-6', 'lg:gap-20')}>
          <h2
            className={clsx(
              'text-3xl leading-tight font-semibold uppercase',
              'visible m-0 box-content table-cell w-full origin-[143.998px_44.9952px] border-0 bg-cover bg-position-[50%_50%] p-0 align-middle font-[Kelson,Arial,sans-serif] text-[24px] leading-[30px] font-normal text-[#F1CB9A] uppercase antialiased [text-size-adjust:auto] [unicode-bidi:isolate]',
              'lg:text-[5rem]'
            )}
          >
            Не упустите шанс увидеть легендарных фигуристов вживую
          </h2>
          <p
            className={clsx(
              'font-inter font-main visible m-0 box-content table-cell h-[94.9899px] w-[252px] origin-[126px_47.4949px] border-0 bg-cover bg-position-[50%_50%] p-0 align-middle text-[12px] leading-[19px] font-normal text-white antialiased [text-size-adjust:auto] [unicode-bidi:isolate]',
              'lg:w-auto lg:text-[2.3rem] lg:leading-[33px] lg:font-light'
            )}
          >
            Это больше, чем спорт. Это — искусство на льду.
            <br />
            <br />
            Это — <strong>ледовое шоу команды Этери Тутберидзе</strong>
          </p>

          <div
            className={clsx('flex flex-col items-start gap-6', 'lg:flex-row')}
          >
            <div className={clsx('flex items-center justify-center px-3')}>
              <a
                className={clsx(
                  'font-main visible m-0 box-content h-14 min-w-full origin-[148.497px_23.9974px] cursor-pointer content-center rounded-[30px] border-0 bg-[white] bg-cover bg-position-[50%_50%] p-0 px-6 text-center align-middle text-[18px] leading-[27.9px] font-semibold text-[#685694] antialiased [-webkit-font-smoothing:antialiased] opacity-80 transition-colors duration-200 ease-in-out [text-size-adjust:100%] hover:-translate-y-0.5',
                  'lg:min-w-auto lg:rounded-full lg:p-4 lg:px-20 lg:text-[2.75rem]'
                )}
                href="https://zakazbiletov.kz/ru/5-astana/4-sport/chempiony-na-ldy/71105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Купить билет
              </a>
            </div>
            {isDesktop && (
              <div className={clsx('p-6 text-lg leading-relaxed text-white')}>
                <p className={clsx('text-2xl font-semibold')}>01.05 · 17:00</p>
                <p>Барыс Арена</p>
              </div>
            )}
          </div>
        </div>

        {!isDesktop && (
          <div
            className={clsx(
              'border border-white/30 p-6 text-lg leading-relaxed text-white'
            )}
          >
            <p className={clsx('text-2xl font-semibold')}>01.05 · 17:00</p>
            <p>Барыс Арена</p>
          </div>
        )}
      </div>
      <div
        className={clsx('hidden', 'h-20 w-full bg-[#121212] lg:block')}
      ></div>
    </section>
  );
};

export default TicketsSection;
