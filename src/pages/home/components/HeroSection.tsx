import clsx from 'clsx';

import { containerClass } from '../../../shared/lib/constants';

const heroBadges = ['Грация', 'Сила', 'Эмоции'];

const heroPosterImages = {};

const HeroSection = () => {
  const isDesktop = window.innerWidth >= 1024;

  return (
    <section
      id="hero"
      className={clsx(
        'relative isolate overflow-hidden bg-[linear-gradient(180deg,#f6f8fd_0%,#f8fbff_70%,rgba(248,251,255,0))] pt-4',
        'sm:pt-16',
        'lg:h-screen lg:min-h-[970px] lg:pt-16 lg:pb-0'
      )}
    >
      <div className={clsx(containerClass, 'relative grid', '')}>
        {/*  */}

        {/* just image */}
        {/* <div
          className={clsx('order-1 space-y-4 p-6 pt-0 pb-4', 'lg:px-0 lg:pb-6')}
        >
          <div
            className={clsx(
              'overflow-hidden rounded-3xl',
              'lg:min-h-[278.997px] lg:rounded-4xl'
            )}
            role="presentation"
          >
            <picture className={clsx('block h-full w-full')}>
              <source
                srcSet={heroPosterImages.mobile}
                media="(max-width: 767px)"
              />
              <img
                src={heroPosterImages.desktop}
                alt="Tutberidze"
                loading="lazy"
                className={clsx(
                  'h-full w-full transform-[scale(1.3)] rounded-2xl object-cover object-[50%_0px]',
                  'lg:max-h-[300px] lg:object-[50%_-70px]'
                )}
              />
            </picture>
          </div>
        </div> */}

        {/* title subtitle */}
        <div className={clsx('order-2 space-y-6 p-6 pt-0', 'lg:p-0')}>
          <div
            className={clsx('font-main hidden flex-wrap gap-3', 'sm:flex')}
            aria-label="Основные ценности шоу"
          >
            {/* badges */}
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className={clsx(
                  'inline-flex items-center rounded-full border border-[#333333] px-3 py-1 text-sm font-semibold text-[#333333]',
                  'lg:border-2 lg:px-8 lg:py-2 lg:text-[28px] lg:font-medium'
                )}
              >
                {badge}
              </span>
            ))}

            <p
              className={clsx(
                'rounded-[50px] bg-[#edededd5] p-[6px_12px] text-sm text-[#333333]',
                'inline-flex items-center rounded-[50px] bg-[#edededd5] p-[6px_12px] px-3 py-1 text-sm font-semibold text-[#333333]',
                'lg:px-8 lg:py-2 lg:text-[28px] lg:font-medium'
              )}
            >
              Всё – на одном льду.
            </p>
          </div>

          <div className={clsx('space-y-5 text-[black]')}>
            <h1
              className={clsx(
                'mb-2 text-[24px] leading-tight font-semibold uppercase',
                'sm:text-4xl',
                'lg:text-[4rem]'
              )}
            >
              Ледовое шоу команды Этери Тутберидзе – "Чемпионы на льду"{' '}
              {!isDesktop && <br />}в{' '}
              <span className={'md:text-[#685694]'}>Астане</span>
              {/* Ледовое шоу команды Этери Тутберидзе — весенний тур 2026{' '}
              {!isDesktop && <br />}в{' '}
              <span className={'md:text-[#685694]'}>Астану</span> */}
            </h1>
            <p
              className={clsx(
                'font-main w-[290px] text-[13px] leading-[19px]',
                'sm:w-auto sm:text-lg',
                'lg:px-3 lg:text-[2.3rem] lg:leading-[33px] lg:font-light'
              )}
            >
              Окунитесь в мир, где спорт становится искусством{' '}
            </p>
          </div>
        </div>

        {/* button time place */}
        <div
          className={clsx(
            'order-3 flex flex-col gap-4 px-3',
            'sm:flex-row sm:items-center sm:justify-between',
            'lg:mt-12 lg:justify-start'
          )}
        >
          <div className={clsx('h-12 w-full', 'lg:h-[100px] lg:w-1/3')}>
            <a
              className={clsx(
                'font-main inline-flex h-full w-full items-center justify-center rounded-full bg-linear-to-r from-[#685694] to-[#685694] p-0 text-[18px] font-semibold text-white [-webkit-font-smoothing:antialiased] transition-transform duration-200 hover:-translate-y-0.5',
                'md:',
                'lg:p-4 lg:text-[2.75rem]'
              )}
              href="https://zakazbiletov.kz/ru/5-astana/4-sport/chempiony-na-ldy/71105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Купить билет
            </a>
          </div>

          <div
            className={clsx(
              'font-main flex w-full justify-between px-3 text-[18px] leading-7 font-normal [-webkit-font-smoothing:antialiased]',
              '',
              'lg:w-1/3 lg:flex-col lg:gap-5 lg:text-[38px]'
            )}
          >
            <p
              className={clsx(
                'font-main visible m-0 box-content p-0 font-normal text-[#685694] antialiased [unicode-bidi:isolate]'
              )}
            >
              01.05 - 17:00
            </p>

            <p
              className={clsx(
                'font-main visible m-0 h-[27.997px] p-0 font-normal text-black antialiased [unicode-bidi:isolate]',
                'lg:text-[#685694]'
              )}
            >
              Барыс Арена
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
