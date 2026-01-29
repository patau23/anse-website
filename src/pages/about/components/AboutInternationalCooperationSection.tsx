import { cn } from '@/shared/lib/utils';
import img from '@/shared/assets/imgs/enu-full-image.png';
import { GLASS_CARD_CLASS } from '../about.constants';

export function AboutInternationalCooperationSection() {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <img src={img} alt="ENU Full Image" />
        <h2 className="min-w-full text-center text-[34px] leading-10.25 font-bold tracking-[0.4px]">
          <span className="text-[#2e4ecf]">Международное </span>
          <span className="text-white">сотрудничество</span>
        </h2>
        <p className="w-full max-w-200 text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          АНСЭ активно сотрудничает с международными экспертными организациями и
          участвует в обмене опытом с ведущими специалистами из разных стран.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Партнерство с зарубежными организациями
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            АНСЭ сотрудничает с ведущими судебно-экспертными учреждениями
            России, стран СНГ и дальнего зарубежья.
          </p>
        </div>

        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Участие в международных конференциях
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            Эксперты АНСЭ регулярно выступают на международных форумах и делятся
            своими наработками с коллегами.
          </p>
        </div>

        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Обмен опытом и обучение
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            Специалисты АНСЭ проходят стажировки за рубежом и приглашают
            иностранных коллег для проведения мастер-классов.
          </p>
        </div>

        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Трансграничные экспертизы
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            АНСЭ оказывает экспертные услуги по запросам иностранных
            правоохранительных органов и международных организаций.
          </p>
        </div>
      </div>
    </section>
  );
}
