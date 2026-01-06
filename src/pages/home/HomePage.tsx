import { ArrowLeft, ArrowRight } from 'lucide-react';

import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import clsx from 'clsx';

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
        <div className="relative flex min-h-[1080px] items-center justify-center pt-[130px] pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[140px] left-0 hidden h-[360px] w-[360px] rounded-[56px] border border-white/10 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_srgb,var(--color-primary)_22%,transparent)_0%,transparent_60%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.10)_0%,transparent_60%)] shadow-[0_0_60px_rgba(0,0,0,0.45)] lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-60 right-0 hidden h-[420px] w-[420px] rounded-[60px] border border-white/10 bg-[radial-gradient(circle_at_35%_30%,color-mix(in_srgb,var(--color-primary)_30%,transparent)_0%,transparent_60%),radial-gradient(circle_at_60%_70%,rgba(255,255,255,0.12)_0%,transparent_55%)] shadow-[0_0_80px_rgba(0,0,0,0.55)] lg:block"
          />

          <div className="relative z-10 flex max-w-[760px] flex-col items-center text-center">
            <h1 className="text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl">
              <span className="text-(--color-primary)">АНСЭ</span>
              <span className="text-white"> — экспертиза,</span>
              <br />
              <span className="text-white">которой доверяют</span>
            </h1>

            <p className="mt-6 max-w-[520px] text-sm leading-relaxed text-pretty text-white/70 sm:text-base">
              54 вида экспертиз. 5 лет на рынке. Международный уровень.
              Технологии. Тонность. Обьективность
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contacts"
                className="inline-flex h-[54px] items-center justify-center rounded-full bg-(--color-primary) px-6 text-sm font-semibold text-white shadow-[0_10px_30px_color-mix(in_srgb,var(--color-primary)_35%,transparent)] transition-transform hover:-translate-y-0.5"
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
    <section id="projects" className="relative pt-6 pb-28">
      <div className={PAGE_CONTAINER_CLASS}>
        <h2 className="self-stretch text-center font-sans text-[34px] leading-[41px] font-bold tracking-[0.4px] text-white">
          <span className="text-(--color-primary)">Про наши </span>
          проектыПро наши проекты
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
              className="mt-8 inline-flex h-[54px] items-center justify-center rounded-full bg-(--color-primary) px-10 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
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
  const lines = label.split('\n');

  const fontSize = 24;
  const lineHeight = 28; // межстрочный интервал в px (можешь крутить)
  const centerX = 199; // viewBox width / 2 (398 / 2)
  const centerY = 176; // viewBox height / 2 (352 / 2)

  // чтобы многострочный текст оказался по центру вертикально:
  const firstLineY = centerY - ((lines.length - 1) * lineHeight) / 2;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="398"
      height="352"
      viewBox="0 0 398 352"
      fill="none"
    >
      <path
        d="M112.477 29.9766L285.477 29.9766L371.977 179.977L285.477 329.977H112.477L25.9766 179.977L112.477 29.9766Z"
        fill="#2E4ECF"
        fillOpacity="0.08"
      />

      <path
        d="M285.188 30.4766L371.398 179.977L285.188 329.477H112.766L26.5537 179.977L112.766 30.4766H285.188Z"
        stroke="#2E4ECF"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#hexGlow)"
        opacity="0.9"
      />

      <path
        d="M285.188 30.4766L371.398 179.977L285.188 329.477H112.766L26.5537 179.977L112.766 30.4766H285.188Z"
        stroke="url(#paint0_linear_4653_8296)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        shapeRendering="crispEdges"
      />

      {/* НАДПИСЬ (поддержка \n) */}
      <text
        x={centerX}
        y={firstLineY}
        textAnchor="middle"
        fill="white"
        fontSize={fontSize}
        fontWeight={600}
        fontFamily="SF Pro, system-ui, sans-serif"
      >
        {lines.map((line, i) => (
          <tspan key={i} x={centerX} dy={i === 0 ? 0 : lineHeight}>
            {line}
          </tspan>
        ))}
      </text>

      <defs>
        <filter
          id="hexGlow"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur stdDeviation="18" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
              0 0 0 0 0
              0 0 0 0 0
              0 0 1 0 0
              0 0 0 1 0"
            result="colored"
          />
          <feMerge>
            <feMergeNode in="colored" />
          </feMerge>
        </filter>

        <linearGradient
          id="paint0_linear_4653_8296"
          x1="371.977"
          y1="179.447"
          x2="25.9766"
          y2="179.447"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2E4ECF" />
          <stop offset="1" stopColor="#2E4ECF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="relative pt-6 pb-36">
      <div
        className={clsx(
          PAGE_CONTAINER_CLASS,
          'flex flex-col items-center gap-6 self-stretch'
        )}
      >
        <h2 className="self-stretch text-center font-sans text-[34px] leading-[41px] font-bold tracking-[0.4px] text-white">
          54 вида
          <span className="text-(--color-primary)">судебных экспертиз</span>
        </h2>
        <p className="mx-auto w-[800px] text-center font-sans text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
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
