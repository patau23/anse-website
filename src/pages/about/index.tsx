import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import { cn } from '@/shared/lib/utils';

const GLASS_CARD_CLASS =
  'bg-[rgba(46,78,207,0.12)] border border-[#2e4ecf] rounded-[16px] shadow-[0px_-4px_40px_-14.024px_rgba(46,78,207,0.52)]';

function ValueCard(props: {
  title: string;
  description: string;
  className?: string;
  decoClassName?: string;
}) {
  const { title, description, className, decoClassName } = props;

  return (
    <div
      className={cn(
        'relative flex w-full flex-col items-center gap-6 p-6 text-center',
        'max-w-[534px]',
        GLASS_CARD_CLASS,
        className,
      )}
    >
      <p className="text-center text-[28px] font-normal leading-[34px] tracking-[0.38px] text-white">
        {title}
      </p>
      <p className="w-full max-w-[486px] text-center text-[17px] font-normal leading-[22px] tracking-[-0.43px] text-[#c7c7cc]">
        {description}
      </p>

      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute top-[-47px] size-[97px] rounded-2xl',
          'bg-linear-to-br from-white/35 to-white/5',
          'shadow-[0px_10px_40px_-18px_rgba(255,255,255,0.35)]',
          decoClassName,
        )}
      />

      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0px_4px_40px_-14.024px_rgba(46,78,207,0.52)]" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="py-24 text-white">
      <div className={PAGE_CONTAINER_CLASS}>
        <section className="flex flex-col items-center py-10 text-center">
          <div
            aria-hidden="true"
            className={cn(
              'h-[151px] w-32 rounded-3xl',
              'bg-linear-to-b from-white/25 to-white/5',
              'shadow-[0px_20px_80px_-40px_rgba(255,255,255,0.35)]',
            )}
          />

          <h1 className="mt-12 text-center text-[34px] font-bold leading-[41px] tracking-[0.4px]">
            <span className="text-[#2e4ecf]">Краткая </span>
            <span className="text-white">история</span>
          </h1>

          <div className="mt-8 flex w-full max-w-[800px] flex-col gap-6 text-[20px] font-normal leading-7 tracking-[-0.4px] text-white">
            <p>
              Академия научных судебных экспертиз (АНСЭ) была создана с целью
              развития независимой и профессиональной экспертной деятельности на
              территории Казахстана. За годы работы организация сформировала
              сильное экспертное сообщество и стала надёжным партнером для
              государственных органов, юридических компаний, частного сектора и
              международных организаций.
            </p>
            <p>
              Сегодня АНСЭ — это межрегиональная судебно-экспертная организация,
              объединяющая специалистов с многолетней практикой и научным
              подходом к исследованиям.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="min-w-full text-center text-[34px] font-bold leading-[41px] tracking-[0.4px]">
              <span className="text-[#2e4ecf]">Миссия и </span>
              <span className="text-white">ценности</span>
            </h2>
            <p className="w-full max-w-[800px] text-[22px] font-normal leading-7 tracking-[-0.26px] text-white">
              Миссия АНСЭ — проводить частные судебные экспертизы
              профессионально, быстро и качественно, обеспечивая объективность,
              прозрачность и научную достоверность каждого заключения.
            </p>
          </div>

          <div className="relative mx-auto mt-14 w-full max-w-[1878px]">
            <div className="grid justify-items-center gap-10 xl:block xl:min-h-[1032px]">
              <ValueCard
                title="Профессионализм"
                description="Мы работаем только с квалифицированными экспертами и применяем современные методики исследования."
                className="xl:absolute xl:left-[103px] xl:top-[153px]"
                decoClassName="left-[30px]"
              />

              <ValueCard
                title="Скорость и эффективность"
                description="Оптимизация сроков производства экспертиз без ущерба качеству"
                className="xl:absolute xl:left-[1244px] xl:top-[228px]"
                decoClassName="left-[6px]"
              />

              <ValueCard
                title="Объективность и независимость"
                description="Каждое заключение основано на фактах, научных данных и строгом соблюдении законодательства"
                className="xl:absolute xl:left-[250px] xl:top-[682px]"
                decoClassName="left-[-40px]"
              />

              <ValueCard
                title="Индивидуальный подход"
                description="Мы работаем только с квалифицированными экспертами и применяем современные методики исследования."
                className="xl:absolute xl:left-[1069px] xl:top-[781px]"
                decoClassName="left-[10px]"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
