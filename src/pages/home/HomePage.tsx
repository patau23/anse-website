import { ArrowLeft, ArrowRight } from 'lucide-react';

import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';

type ProjectItem = {
  number: string;
  title: string;
};

const projectItems: ProjectItem[] = [
  {
    number: '01',
    title: 'Журнал «Expertus» о социальной значимости судебных экспертиз',
  },
  {
    number: '02',
    title: 'Программа на основе ИИ для судебной эхспертизы',
  },
  {
    number: '03',
    title: 'Международные форумы',
  },
  {
    number: '04',
    title: 'Скрытый проект (узнаете в будущем)',
  },
];

const expertiseItemsTop = [
  'Строительно-\nтехнические',
  'Товароведческие',
  'Компьютерно-\nтехнические',
];

const expertiseItemsBottom = [
  'Психологические',
  'Психологические',
  'Экономические и\nтехнические',
  'Баллистические и др.',
];

function Hero() {
  return (
    <section className="relative" aria-label="Hero">
      <div className={PAGE_CONTAINER_CLASS}>
        <div className="relative flex min-h-[1080px] items-center justify-center pb-24 pt-[130px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-[140px] hidden h-[360px] w-[360px] rounded-[56px] border border-white/10 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_srgb,var(--color-primary)_22%,transparent)_0%,transparent_60%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.10)_0%,transparent_60%)] shadow-[0_0_60px_rgba(0,0,0,0.45)] lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-[240px] hidden h-[420px] w-[420px] rounded-[60px] border border-white/10 bg-[radial-gradient(circle_at_35%_30%,color-mix(in_srgb,var(--color-primary)_30%,transparent)_0%,transparent_60%),radial-gradient(circle_at_60%_70%,rgba(255,255,255,0.12)_0%,transparent_55%)] shadow-[0_0_80px_rgba(0,0,0,0.55)] lg:block"
          />

          <div className="relative z-10 flex max-w-[760px] flex-col items-center text-center">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              <span className="text-[color:var(--color-primary)]">АНСЭ</span>
              <span className="text-white"> — экспертиза,</span>
              <br />
              <span className="text-white">которой доверяют</span>
            </h1>

            <p className="mt-6 max-w-[520px] text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
              54 вида экспертиз. 5 лет на рынке. Международный уровень.
              Технологии. Тонность. Обьективность
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contacts"
                className="inline-flex h-[54px] items-center justify-center rounded-full bg-[color:var(--color-primary)] px-6 text-sm font-semibold text-white shadow-[0_10px_30px_color-mix(in_srgb,var(--color-primary)_35%,transparent)] transition-transform hover:-translate-y-0.5"
              >
                Назначить экспертизу
              </a>
              <a
                href="#"
                className="inline-flex h-[54px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
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

function Projects() {
  return (
    <section id="projects" className="relative pb-28 pt-6">
      <div className={PAGE_CONTAINER_CLASS}>
        <h2 className="text-center text-sm font-semibold tracking-wide text-[color:var(--color-primary)]">
          Про наши проекты
        </h2>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            {projectItems.map((item, index) => (
              <button
                key={item.number}
                type="button"
                className={
                  'group flex w-full items-center justify-between gap-4 rounded-full border px-5 py-4 text-left backdrop-blur transition-colors ' +
                  (index === 0
                    ? 'border-white/20 bg-white/10'
                    : 'border-white/10 bg-white/5 hover:bg-white/10')
                }
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="text-sm font-semibold text-white/80">
                    {item.number}
                  </span>
                  <span className="min-w-0 truncate text-sm text-white/90 sm:text-base">
                    {item.title}
                  </span>
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/10 text-white/80 transition-colors group-hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[800px] overflow-hidden rounded-[36px] border border-white/10 bg-white">
              <div className="grid h-[520px] grid-cols-3 gap-0">
                <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.02))]" />
                <div className="bg-white" />
                <div className="bg-[linear-gradient(180deg,rgba(46,78,207,0.08),rgba(0,0,0,0.02))]" />
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
              className="mt-8 inline-flex h-[54px] items-center justify-center rounded-full bg-[color:var(--color-primary)] px-10 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Читать все
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hex({ label }: { label: string }) {
  return (
    <div
      className="flex h-[140px] w-[240px] items-center justify-center p-6 text-center text-sm font-medium text-white/90"
      style={{
        clipPath:
          'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
        background:
          'radial-gradient(circle at 30% 25%, color-mix(in srgb, var(--color-primary) 18%, transparent) 0%, transparent 62%), linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
        border: '1px solid color-mix(in srgb, var(--color-primary) 45%, transparent)',
        boxShadow:
          '0 0 30px color-mix(in srgb, var(--color-primary) 28%, transparent)',
      }}
    >
      <span className="whitespace-pre-line leading-snug">{label}</span>
    </div>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="relative pb-36 pt-6">
      <div className={PAGE_CONTAINER_CLASS}>
        <h2 className="text-center text-xl font-semibold text-white sm:text-2xl">
          54 вида судебных экспертиз
        </h2>
        <p className="mx-auto mt-4 max-w-[720px] text-center text-sm leading-relaxed text-white/70 sm:text-base">
          АНСЭ проводит комплексные исследования для суда, органов, адвокатов,
          организаций и частных лиц, опираясь на современные стандарты судебной
          экспертизы в Казахстане
        </p>

        <div className="mt-14 flex flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {expertiseItemsTop.map((label) => (
              <Hex key={label} label={label} />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 lg:translate-x-[60px]">
            {expertiseItemsBottom.map((label) => (
              <Hex key={label} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Expertise />
    </>
  );
}
