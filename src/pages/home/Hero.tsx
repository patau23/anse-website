import ChromeCube from '@/shared/assets/imgs/chrome-cube.png';
import MagnifierImg from '@/shared/assets/imgs/magnifier.png';
import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import clsx from 'clsx';

export function Hero() {
  return (
    <section className="relative" aria-label="Hero">
      <div className={PAGE_CONTAINER_CLASS}>
        <div className="relative flex min-h-270 items-center justify-center pt-32.5 pb-24">
          <img
            src={MagnifierImg}
            alt=""
            aria-hidden="true"
            className={clsx(
              'pointer-events-none absolute top-35 left-0 hidden h-90 w-90 rounded-[56px]',
              'shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_80px_color-mix(in_srgb,var(--color-primary)_15%,transparent)] lg:block'
            )}
          />

          <img
            src={ChromeCube}
            alt=""
            aria-hidden="true"
            className={clsx(
              'pointer-events-none absolute top-60 right-0 hidden h-105 w-105 rounded-[60px]',
              'shadow-[0_25px_70px_rgba(0,0,0,0.6),0_0_100px_color-mix(in_srgb,var(--color-primary)_20%,transparent)] lg:block'
            )}
          />

          <div className="relative z-10 flex max-w-190 flex-col items-center text-center">
            <h1 className="text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl">
              <span className="text-(--color-primary)">АНСЭ</span>
              <span className="text-white"> — экспертиза,</span>
              <br />
              <span className="text-white">которой доверяют</span>
            </h1>

            <p className="mt-6 max-w-130 text-sm leading-relaxed text-pretty text-white/70 sm:text-base">
              54 вида экспертиз. 5 лет на рынке. Международный уровень.
              Технологии. Тонность. Обьективность
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contacts"
                className="inline-flex h-13.5 items-center justify-center rounded-full bg-(--color-primary) px-6 text-sm font-semibold text-white shadow-[0_10px_30px_color-mix(in_srgb,var(--color-primary)_35%,transparent)] transition-transform hover:-translate-y-0.5"
              >
                Назначить экспертизу
              </a>
              <a
                href="#"
                className="inline-flex h-13.5 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
              >
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
