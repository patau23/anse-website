import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import MagazinePage from '@/shared/assets/imgs/magazine-page.png';

type ProjectItem = {
  number: string;
  title: string;
};

const projectItems: ProjectItem[] = [
  {
    number: '01',
    title: 'Журнал «Expertus» о современной судебной экспертизе.',
  },
  {
    number: '02',
    title: 'Масштабный проект: ИИ как помощник в судебной экспертизе.',
  },
  {
    number: '03',
    title:
      'Международное сотрудничество (встречи, семинары, конференции, форумы)',
  },
  {
    number: '04',
    title: 'Скоро новый проект следите за обновлениями!',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative pt-6 pb-28">
      <div className={PAGE_CONTAINER_CLASS}>
        <h2 className="self-stretch text-center font-sans text-[34px] leading-10.25 font-bold tracking-[0.4px] text-white">
          <span className="text-(--color-primary)">Про наши </span>
          проекты
        </h2>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            {projectItems.map((item, index) => (
              <button
                key={item.number}
                type="button"
                className={
                  'group flex items-center gap-11.5 rounded-2xl p-6 text-left backdrop-blur transition-colors' +
                  (index === 0
                    ? 'rounded-2xl border border-[#2E4ECF] bg-[rgba(46,78,207,0.12)] shadow-[0_-4px_40px_-14.024px_rgba(46,78,207,0.52),inset_0_4px_40px_-14.024px_rgba(46,78,207,0.52)]'
                    : 'border-white/10 bg-[linear-gradient(0deg,#1A1A1A_0%,#1A1A1A_100%)] hover:bg-white/10')
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
        </div>
      </div>
    </section>
  );
}
