import { cn } from '@/shared/lib/utils';
import MagazinePage from '@/shared/assets/imgs/magazine-page.png';

import { GLASS_CARD_CLASS } from '../about.constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function AboutExpertusProjectsSection() {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="min-w-full text-center text-[34px] leading-10.25 font-bold tracking-[0.4px]">
          <span className="text-[#2e4ecf]">Журнал EXPERTUS </span>
          <span className="text-white">и проекты</span>
        </h2>
        <p className="w-full max-w-200 text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          АНСЭ ведет активную издательскую деятельность и реализует
          образовательные проекты для повышения правовой грамотности общества.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Журнал «EXPERTUS»
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            Периодическое издание, освещающее актуальные вопросы судебной
            экспертизы, правовой практики и научных исследований в области
            криминалистики.
          </p>
        </div>

        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Образовательные проекты
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            АНСЭ проводит семинары, вебинары и курсы повышения квалификации для
            юристов, адвокатов и сотрудников правоохранительных органов.
          </p>
        </div>

        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Научно-исследовательская работа
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            Эксперты АНСЭ участвуют в разработке новых методик исследований и
            публикуют статьи в научных изданиях.
          </p>
        </div>

        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Просветительская деятельность
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            АНСЭ проводит открытые лекции и мероприятия для повышения правовой
            грамотности граждан и понимания роли судебных экспертиз.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-200 overflow-hidden rounded-[36px] border border-white/10 bg-white">
          <div className="grid grid-cols-3 gap-0">
            <img
              src={MagazinePage}
              alt=""
              className="col-span-3 w-full object-cover"
            />

            {/* <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.02))]" />
                <div className="bg-white" />
                <div className="bg-[linear-gradient(180deg,rgba(46,78,207,0.08),rgba(0,0,0,0.02))]" /> */}
          </div>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-medium text-black/70 backdrop-blur">
            <button
              type="button"
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/10"
              aria-label="Предыдущий"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <span>01/24</span>
            <button
              type="button"
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/10"
              aria-label="Следующий"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <a
          href="#"
          className="mt-8 inline-flex h-13.5 items-center justify-center rounded-full bg-(--color-primary) px-10 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Читать все
        </a>
      </div>
    </section>
  );
}
