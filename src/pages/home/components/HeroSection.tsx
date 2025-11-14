import clsx from 'clsx';

import { containerClass, pillClass, primaryButtonClass } from './constants';

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
        'relative isolate overflow-hidden bg-[linear-gradient(180deg,#f6f8fd_0%,#f8fbff_70%,rgba(248,251,255,0))] pt-4 pb-14',
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
          'relative grid gap-10',
          'lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center'
        )}
      >
        <div className={clsx('order-2 space-y-6', 'lg:order-1')}>
          <div
            className={clsx('hidden flex-wrap gap-3', 'sm:flex')}
            aria-label="Основные ценности шоу"
          >
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

          <div className={clsx('space-y-5 uppercase')}>
            <h1
              className={clsx(
                'text-3xl leading-tight font-semibold text-[#0c1420]',
                'sm:text-4xl',
                'lg:text-[3.2rem]'
              )}
            >
              Ледовое шоу команды Этери Тутберидзе&nbsp;— весенний тур 2026 в{' '}
              <span className={clsx('text-[#1847ff]')}>Алматы</span>
            </h1>
            <p className={clsx('text-base text-[#1d2b3f]', 'sm:text-lg')}>
              Окунитесь в мир, где спорт становится искусством: номера,
              созданные специально для казахстанской сцены, зазвучат всего один
              вечер.
            </p>
          </div>
          <div className={clsx('flex flex-wrap items-center gap-4')}>
            <a className={primaryButtonClass} href="#tickets">
              Купить билет
            </a>
            <div className={clsx('text-sm font-semibold text-[#7a8699]')}>
              <p>01 мая · 17:00</p>
              <p>Барыс Арена</p>
            </div>
          </div>
          <dl
            className={clsx('grid gap-4', 'sm:grid-cols-2', 'lg:grid-cols-3')}
          >
            {eventFacts.map((fact) => (
              <div
                key={fact.label}
                className={clsx(
                  'rounded-2xl border border-[#e1e7f0] bg-white/70 p-4 backdrop-blur'
                )}
              >
                <dt
                  className={clsx(
                    'text-xs font-semibold tracking-[0.08em] text-[#7a8699] uppercase'
                  )}
                >
                  {fact.label}
                </dt>
                <dd
                  className={clsx('mt-1 text-lg font-semibold text-[#0c1420]')}
                >
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={clsx('order-1 space-y-4', 'lg:order-2')}>
          <div
            className={clsx(
              'min-h-[280px] overflow-hidden rounded-[28px] bg-white shadow-[0_20px_45px_rgba(16,45,168,0.15)]',
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
      </div>
    </section>
  );
};

export default HeroSection;
