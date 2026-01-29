import { cn } from '@/shared/lib/utils';
import img from '@/shared/assets/imgs/enu-full-image.png';
import { GLASS_CARD_CLASS } from '../about.constants';

export function AboutInternationalCooperationSection() {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <img src={img} alt="ENU Full Image" />
        <h2 className="min-w-full text-center text-[34px] leading-10.25 font-bold tracking-[0.4px]">
          <span className="text-[#2e4ecf]">Международное сотрудничество</span>
          <span className="text-white">и профессиональные достижения </span>
        </h2>
        <p className="w-full max-w-200 text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          АНСЭ выстраивает профессиональные связи не формально, а через реальную
          экспертную, образовательную и методическую работу на национальном и
          международном уровнях.{' '}
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Экспертные выступления и образовательная деятельность
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            Специалисты АНСЭ регулярно выступают с лекциями и практическими
            занятиями для сотрудников правоохранительных и надзорных органов, а
            также в рамках профессиональных образовательных программ (включая
            форматы уровня Next MBA), делясь прикладным опытом
            судебно-экспертной практики.{' '}
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
            Взаимодействие с органами правоприменени{' '}
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            АНСЭ участвует в профессиональном диалоге с органами прокуратуры и
            следственными структурами, в том числе в части повышения качества
            назначения экспертиз, формулирования вопросов и оценки
            доказательств.{' '}
          </p>
        </div>

        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Международные профессиональные связи{' '}
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            Альянс развивает сотрудничество с зарубежными экспертами и
            криминалистами, включая профессиональные контакты с турецкими и
            европейскими специалистами. Экспертные материалы и подходы АНСЭ
            представлены и обсуждаются на международных профессиональных
            платформах и профильных ресурсах.{' '}
          </p>
        </div>

        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Меморандумы и партнёрские соглашения{' '}
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            Заключаются меморандумы о сотрудничестве с образовательными,
            научными и экспертными организациями, направленные на обмен
            методиками, совместные исследования и развитие экспертных
            компетенций.{' '}
          </p>
        </div>

        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Интеграция в международное экспертное сообщество{' '}
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            АНСЭ ориентирован на участие в деятельности европейских и
            международных профессиональных объединений, включая EPWS, с целью
            методического обмена, профессиональной экспертизы и соответствия
            лучшим международным стандартам судебных наук.
          </p>
        </div>
      </div>
    </section>
  );
}
