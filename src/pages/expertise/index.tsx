import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import { cn } from '@/shared/lib/utils';

const CTA_CLASS =
  'rounded-[12px] border border-dashed border-white px-[24px] py-[16px] text-[17px] font-semibold leading-[22px] tracking-[-0.408px] text-white';

function ExpertiseImagePlaceholder({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative h-[500px] w-full max-w-[550px] overflow-hidden rounded-2xl',
        'bg-linear-to-br from-white/20 to-white/5',
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(46,78,207,0.55),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.25))]" />
    </div>
  );
}

export default function ExpertisePage() {
  const items = [
    {
      title: 'Компьютерно-техническая экспертиза',
      description:
        'Краткое исследование цифровых данных, устройств и информационных систем для установления фактов и обстоятельств.',
      cta: 'Подробнее',
    },
    {
      title: 'Строительно-техническая экспертиза',
      description:
        'Определение соответствия строительных объектов нормам, выявление дефектов, оценка качества работ и сметной документации.',
      cta: 'Подробнее',
    },
    {
      title: 'Экономическая экспертиза',
      description:
        'Анализ финансовых операций, документов, бухгалтерских данных и расчётов для установления убытков, нарушений или фактов мошенничества.',
      cta: 'Читать все',
    },
  ];

  return (
    <main className="py-24 text-white">
      <div className={PAGE_CONTAINER_CLASS}>
        <h1 className="sr-only">Виды экспертиз</h1>

        <section className="grid items-center justify-center gap-16 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="flex flex-col items-center gap-[46px]">
              <ExpertiseImagePlaceholder />

              <div className="flex flex-col items-center gap-4">
                <h2 className="text-center text-[28px] font-normal leading-[34px] tracking-[0.38px] text-white">
                  {item.title}
                </h2>
                <p className="w-full max-w-[486px] text-center text-[17px] font-normal leading-[22px] tracking-[-0.43px] text-[#c7c7cc]">
                  {item.description}
                </p>
                <button type="button" className={CTA_CLASS}>
                  {item.cta}
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
