import { cn } from '@/shared/lib/utils';
import { ValueCard } from './ValueCard';

export function AboutMissionValuesSection() {
  return (
    <section className="mb-75 py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="min-w-full text-center text-[34px] leading-10.25 font-bold tracking-[0.4px]">
          <span className="text-[#2e4ecf]">Философия и </span>
          <span className="text-white">миссия</span>
        </h2>
        <p className="w-full max-w-200 text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          Альянс — это профессиональное сообщество, для которого истина — не
          юридическая категория, а ценность, лежащая в основе профессии. Это
          среда, где профессионализм, методика и этика образуют единый фундамент
          новой культуры доказательности в судебно-экспертной деятельности.
          Корпоративная культура АНСЭ строится на личной ответственности
          эксперта за каждый вывод, уважении к научной методологии и
          нетерпимости к формализму и шаблонности. Мы рассматриваем экспертизу
          как коллективную интеллектуальную работу, где качество результата
          важнее статуса, а репутация организации формируется через устойчивые
          профессиональные стандарты и внутреннюю дисциплину мышления.{' '}
        </p>
      </div>

      <div className="relative mx-auto mt-14 w-full max-w-469.5">
        <div className="grid justify-items-center gap-10 xl:block xl:min-h-258">
          <ValueCard
            title="Профессионализм"
            description="Широкий профессионализм, нацеленный на расширение компетенций за счёт разностороннего сотрудничества, в том числе с высшими учебными заведениями, иностранными партнёрами и профильными профессиональными сообществами. "
            className="xl:absolute xl:top-38.25 xl:left-25.75"
            decoClassName="left-[30px]"
          />

          <ValueCard
            title="Скорость и эффективность"
            description="Оптимизация сроков производства экспертиз без ущерба качеству"
            className={cn(
              'xl:absolute xl:top-57 xl:left-311',
              '[@media(min-width:1280px)_and_(max-width:1560px)]:top-100 [@media(min-width:1280px)_and_(max-width:1560px)]:right-20 [@media(min-width:1280px)_and_(max-width:1560px)]:left-auto'
            )}
            decoClassName="left-[6px]"
          />

          <ValueCard
            title="Объективность и независимость"
            description="Каждое заключение основано на фактах, научных данных и строгом соблюдении законодательства"
            className="xl:absolute xl:top-170.5 xl:left-62.5"
            decoClassName="left-[-40px]"
          />

          <ValueCard
            title="Индивидуальный подход"
            description="Мы учитываем особенности каждого дела, специфику поставленных вопросов, представленные материалы при формировании экспертного исследования. "
            className={cn(
              'xl:absolute xl:top-195.25 xl:left-267.25',
              '[@media(min-width:1280px)_and_(max-width:1560px)]:top-230 [@media(min-width:1280px)_and_(max-width:1560px)]:right-20 [@media(min-width:1280px)_and_(max-width:1560px)]:left-auto'
            )}
            decoClassName="left-[10px]"
          />
        </div>
      </div>
    </section>
  );
}
