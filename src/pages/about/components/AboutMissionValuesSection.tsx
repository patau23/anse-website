import { ValueCard } from './ValueCard';

export function AboutMissionValuesSection() {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="min-w-full text-center text-[34px] leading-10.25 font-bold tracking-[0.4px]">
          <span className="text-[#2e4ecf]">Миссия и </span>
          <span className="text-white">ценности</span>
        </h2>
        <p className="w-full max-w-200 text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          Миссия АНСЭ — проводить частные судебные экспертизы профессионально,
          быстро и качественно, обеспечивая объективность, прозрачность и
          научную достоверность каждого заключения.
        </p>
      </div>

      <div className="relative mx-auto mt-14 w-full max-w-469.5">
        <div className="grid justify-items-center gap-10 xl:block xl:min-h-258">
          <ValueCard
            title="Профессионализм"
            description="Мы работаем только с квалифицированными экспертами и применяем современные методики исследования."
            className="xl:absolute xl:top-38.25 xl:left-25.75"
            decoClassName="left-[30px]"
          />

          <ValueCard
            title="Скорость и эффективность"
            description="Оптимизация сроков производства экспертиз без ущерба качеству"
            className="xl:absolute xl:top-57 xl:left-311"
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
            description="Мы работаем только с квалифицированными экспертами и применяем современные методики исследования."
            className="xl:absolute xl:top-195.25 xl:left-267.25"
            decoClassName="left-[10px]"
          />
        </div>
      </div>
    </section>
  );
}
