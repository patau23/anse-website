import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';

import page1 from '@/shared/assets/imgs/journal/page-1.jpg';
import page2 from '@/shared/assets/imgs/journal/page-2.jpg';
import page3 from '@/shared/assets/imgs/journal/page-3.jpg';
import page4 from '@/shared/assets/imgs/journal/page-4.jpg';
import page5 from '@/shared/assets/imgs/journal/page-5.jpg';

type ProjectItem = { number: string; title: string };

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
  { number: '04', title: 'Скоро новый проект следите за обновлениями!' },
];

const PAGES: string[] = [page1, page2, page3, page4, page5];

export function Projects() {
  const pages = useMemo(() => PAGES, []);
  const totalPages = pages.length;

  // Flip-book: “листы” (sheet) — это правая страница (odd) + её оборот (even)
  const sheets = useMemo(() => {
    const result: Array<{ front: string; back: string | null }> = [];
    for (let i = 1; i < pages.length; i += 2) {
      result.push({ front: pages[i]!, back: pages[i + 1] ?? null });
    }
    return result;
  }, [pages]);

  const [flippedSheets, setFlippedSheets] = useState(0); // сколько листов уже “перелистнули”
  const [isFlipping, setIsFlipping] = useState(false);

  const canPrev = flippedSheets > 0;
  const canNext = flippedSheets < sheets.length;

  const startFlip = useCallback(
    (dir: 'next' | 'prev') => {
      if (isFlipping) return;
      if (dir === 'next' && !canNext) return;
      if (dir === 'prev' && !canPrev) return;

      setIsFlipping(true);
      setFlippedSheets((v) =>
        dir === 'next' ? Math.min(sheets.length, v + 1) : Math.max(0, v - 1)
      );

      window.setTimeout(() => {
        setIsFlipping(false);
      }, 900);
    },
    [isFlipping, canNext, canPrev, sheets.length]
  );

  const goNext = () => startFlip('next');
  const goPrev = () => startFlip('prev');

  // Текущий разворот
  const currentLeftSrc =
    flippedSheets === 0
      ? (pages[0] ?? null)
      : (sheets[flippedSheets - 1]?.back ?? null);
  // В конце (когда листов больше нет) показываем пустую правую страницу
  const currentRightSrc = sheets[flippedSheets]?.front ?? null;

  // “левая” страница в текущем развороте (1-based): 1, 3, 5, ...
  const leftPageNumber = Math.min(totalPages, 1 + flippedSheets * 2);
  const pageLabel = `${String(leftPageNumber).padStart(2, '0')}/${String(totalPages).padStart(2, '0')}`;

  return (
    <section id="projects" className="relative pt-6 pb-28">
      <style>{`
        .journalScene {
          perspective: 1200px;
        }

        .journalCover {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 36px;
          overflow: hidden;
          box-shadow: 0 30px 120px rgba(0,0,0,0.30);
        }

        .journalBook {
          position: absolute;
          inset: 0;
          display: flex;
          background: #fff;
          transform-style: preserve-3d;
        }

        .journalHalf {
          position: relative;
          width: 50%;
          height: 100%;
          background: #fff;
        }

        .journalHalfLeft {
          overflow: hidden;
        }

        .journalHalfRight {
          overflow: visible;
        }

        .journalImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .journalBlank {
          width: 100%;
          height: 100%;
          background: #fff;
        }

        /* корешок */
        .journalSpine {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          transform: translateX(-0.5px);
          background: rgba(0,0,0,0.08);
          pointer-events: none;
          z-index: 30;
        }

        /* стек листов справа */
        .journalStack {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
        }

        .journalSheet {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          transform-style: preserve-3d;
          transform-origin: 0% 50%;
          transition: transform 900ms cubic-bezier(0.645, 0.045, 0.355, 1);
          will-change: transform;
          pointer-events: none;
        }

        .journalSheet.isFlipped {
          transform: rotateY(-180deg);
        }

        .journalFace {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          background: #fff;
          overflow: hidden;
          pointer-events: none;
        }

        .journalFaceBack {
          transform: rotateY(180deg);
        }

        .shadowEdge {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 40px;
          pointer-events: none;
          z-index: 2;
        }
        .shadowEdgeLeft {
          left: 0;
          background: linear-gradient(90deg, rgba(0,0,0,0.10), rgba(0,0,0,0));
        }
        .shadowEdgeRight {
          right: 0;
          background: linear-gradient(-90deg, rgba(0,0,0,0.10), rgba(0,0,0,0));
        }

        /* клики по половинам */
        .journalClickOverlay {
          position: absolute;
          inset: 0;
          z-index: 60;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .journalZone {
          background: transparent;
          border: 0;
          padding: 0;
          cursor: pointer;
        }

        .journalZone:disabled { cursor: default; }
      `}</style>

      <div className={PAGE_CONTAINER_CLASS}>
        <h2 className="self-stretch text-center font-sans text-[34px] leading-10.25 font-bold tracking-[0.4px] text-white">
          <span className="text-(--color-primary)">Про наши </span>
          проекты
        </h2>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            {projectItems.map((item, idx) => (
              <button
                key={item.number}
                type="button"
                className={
                  'group flex items-center gap-11.5 rounded-2xl p-6 text-left backdrop-blur transition-colors ' +
                  (idx === 0
                    ? 'rounded-2xl border border-[#2E4ECF] bg-[rgba(46,78,207,0.12)] shadow-[0_-4px_40px_-14.024px_rgba(46,78,207,0.52),inset_0_4px_40px_-14.024px_rgba(46,78,207,0.52)]'
                    : 'border border-white/10 bg-[linear-gradient(0deg,#1A1A1A_0%,#1A1A1A_100%)] hover:bg-white/10')
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
            <div className="journalScene relative w-full max-w-200">
              <div className="journalCover border border-white/10 bg-white">
                <div className="journalBook">
                  {/* Левая базовая страница (первая) */}
                  <div className="journalHalf journalHalfLeft">
                    {currentLeftSrc ? (
                      <img src={currentLeftSrc} alt="" className="journalImg" />
                    ) : (
                      <div className="journalBlank" />
                    )}
                    <div className="shadowEdge shadowEdgeRight" />
                  </div>

                  {/* Правая половина + листы */}
                  <div className="journalHalf journalHalfRight">
                    <div className="journalStack">
                      {/* базовая правая страница под листами */}
                      {currentRightSrc ? (
                        <img
                          src={currentRightSrc}
                          alt=""
                          className="journalImg"
                          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
                        />
                      ) : (
                        <div
                          className="journalBlank"
                          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
                        />
                      )}
                      <div className="shadowEdge shadowEdgeLeft" />

                      {sheets.map((sheet, sheetIndex) => {
                        const isFlipped = sheetIndex < flippedSheets;
                        const total = sheets.length;
                        const zIndex = isFlipped
                          ? sheetIndex + 1
                          : total + (total - sheetIndex);
                        return (
                          <div
                            key={sheetIndex}
                            className={
                              'journalSheet' + (isFlipped ? ' isFlipped' : '')
                            }
                            style={{ zIndex }}
                          >
                            {/* front (правая страница) */}
                            <div className="journalFace">
                              <img
                                src={sheet.front}
                                alt=""
                                className="journalImg"
                              />
                              <div className="shadowEdge shadowEdgeLeft" />
                            </div>

                            {/* back (левая следующая страница) */}
                            <div className="journalFace journalFaceBack">
                              {sheet.back ? (
                                <img
                                  src={sheet.back}
                                  alt=""
                                  className="journalImg"
                                />
                              ) : (
                                <div className="journalBlank" />
                              )}
                              <div className="shadowEdge shadowEdgeRight" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="journalSpine" />
                </div>

                {/* Клик по половинам */}
                <div className="journalClickOverlay">
                  <button
                    type="button"
                    className="journalZone"
                    onClick={goPrev}
                    disabled={!canPrev || isFlipping}
                    aria-label="Предыдущая страница"
                  />
                  <button
                    type="button"
                    className="journalZone"
                    onClick={goNext}
                    disabled={!canNext || isFlipping}
                    aria-label="Следующая страница"
                  />
                </div>

                {/* Controls */}
                <div className="absolute bottom-6 left-1/2 z-70 flex -translate-x-1/2 items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-medium text-black/70 backdrop-blur">
                  <button
                    type="button"
                    onClick={goPrev}
                    disabled={!canPrev || isFlipping}
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/10 disabled:opacity-40"
                    aria-label="Предыдущий"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>

                  <span>{pageLabel}</span>

                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!canNext || isFlipping}
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/10 disabled:opacity-40"
                    aria-label="Следующий"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
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
