import clsx from 'clsx';

import { containerClass, pillClass } from './constants';

const heroBadges = ['Грация', 'Сила', 'Эмоции'];

const eventFacts = [
  { label: 'Дата и время', value: '01.05 · 17:00' },
  { label: 'Площадка', value: 'Барыс Арена, Алматы' },
  { label: 'Продолжительность', value: '2,5 часа живого шоу' },
];

const heroPosterImages = {
  desktop:
    'https://optim.tildacdn.com/tild6436-3035-4263-b961-666533323638/-/format/webp/Mask_group.png.webp',
  mobile:
    'https://optim.tildacdn.com/tild3131-6162-4832-b637-356337613363/-/format/webp/Mask_group.png.webp',
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className={clsx(
        'relative isolate overflow-hidden bg-[linear-gradient(180deg,#f6f8fd_0%,#f8fbff_70%,rgba(248,251,255,0))] pt-4 pb-8',
        'sm:pt-16 sm:pb-16',
        'lg:pt-20'
      )}
    >
      <div
        className={clsx(
          'pointer-events-none absolute inset-x-0 -bottom-24 h-60 bg-[linear-gradient(180deg,rgba(246,248,253,0)_0%,#f8fbff_70%)]'
        )}
      />

      <div
        className={clsx(
          containerClass,
          'relative grid',
          'lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center'
        )}
      >
        {/* just image */}
        <div className={clsx('order-1 space-y-4 p-6 pt-0 pb-4')}>
          <div
            className={clsx(
              'min-h-[278.997px] overflow-hidden rounded-[28px] bg-white shadow-[0_20px_45px_rgba(16,45,168,0.15)]',
              'sm:min-h-[360px]',
              'lg:min-h-[460px] lg:rounded-4xl'
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
                className={clsx('h-full w-full object-cover')}
              />
            </picture>
          </div>
        </div>

        {/* title subtitle */}
        <div className={clsx('order-2 space-y-6 p-6 pt-0', '')}>
          <div
            className={clsx('hidden flex-wrap gap-3', 'sm:flex')}
            aria-label="Основные ценности шоу"
          >
            {/* badges */}
            {heroBadges.map((badge) => (
              <span key={badge} className={pillClass}>
                {badge}
              </span>
            ))}

            <p
              className={clsx(
                'rounded-[50px] bg-[#edededd5] p-[6px_12px] text-sm text-[#333333]'
              )}
            >
              Все – на одном льду.
            </p>
          </div>

          <div className={clsx('space-y-5 text-[black]')}>
            <h1
              className={clsx(
                'mb-2 text-[24px] leading-tight font-semibold uppercase',
                'sm:text-4xl',
                'lg:text-[3.2rem]'
              )}
            >
              Ледовое шоу команды Этери Тутберидзе&nbsp;— весенний тур 2026{' '}
              <br />в <span className={''}>Алматы</span>
            </h1>
            <p
              className={clsx(
                'w-[290px] font-["Inter",Arial,sans-serif] text-[13px] leading-[19px]',
                'sm:text-lg'
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
            'sm:flex-row sm:items-center sm:justify-between'
          )}
        >
          <div className={clsx('w-full')}>
            <a
              className={clsx(
                'inline-flex h-12 w-full items-center justify-center rounded-full bg-linear-to-r from-[#685694] to-[#685694] p-0 font-["Inter",Arial,sans-serif] text-[18px] font-semibold text-white [-webkit-font-smoothing:antialiased] transition-transform duration-200 hover:-translate-y-0.5'
              )}
              href="#tickets"
            >
              Купить билет
            </a>
          </div>

          <div
            className={clsx(
              'flex w-full justify-between px-3 font-["Inter",Arial,sans-serif] text-[18px] font-normal text-[#7a8699] [-webkit-font-smoothing:antialiased]'
            )}
          >
            <p
              className={clsx(
                'font-main visible m-0 box-content table-cell h-[27.997px] w-[109.988px] border-0 bg-cover bg-position-[50%_50%] p-0 align-middle text-[18px] leading-7 font-normal text-[#685694] antialiased [unicode-bidi:isolate]'
              )}
            >
              01.05 - 17:00
            </p>

            <p
              className={clsx(
                'font-main visible m-0 box-content table-cell h-[27.997px] w-[120.987px] origin-[60.4935px_13.9985px] border-0 bg-cover bg-position-[50%_50%] p-0 align-middle text-[18px] leading-7 font-normal text-black antialiased [unicode-bidi:isolate]'
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
