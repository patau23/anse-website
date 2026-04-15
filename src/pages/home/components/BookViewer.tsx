import { useCallback, useMemo, useState } from 'react';
import { buildSheets } from './projects.utils';
import { BOOK_FLIP_DURATION } from './book.constants';
import { BookPage } from './BookPage';
import { BookSheet } from './BookSheet';
import { BookControls } from './BookControls';
import { PageEdgeStack } from './PageEdgeStack';
import './BookViewer.styles.css';

type BookViewerProps = {
  pages: string[];
};

export function BookViewer({ pages }: BookViewerProps) {
  const sheets = useMemo(() => buildSheets(pages), [pages]);
  const totalPages = pages.length;
  const [flippedSheets, setFlippedSheets] = useState(0);
  const [targetFlippedSheets, setTargetFlippedSheets] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const canPrev = targetFlippedSheets > 0;
  const canNext = targetFlippedSheets < sheets.length;

  const startFlip = useCallback(
    (dir: 'next' | 'prev') => {
      if (isFlipping) return;
      if (dir === 'next' && !canNext) return;
      if (dir === 'prev' && !canPrev) return;

      setIsFlipping(true);
      const newTarget =
        dir === 'next'
          ? Math.min(sheets.length, targetFlippedSheets + 1)
          : Math.max(0, targetFlippedSheets - 1);

      setTargetFlippedSheets(newTarget);

      // Если переходим на первую или последнюю страницу - обновляем сразу
      const isFirstOrLastPage = newTarget === 0 || newTarget === sheets.length;

      if (isFirstOrLastPage) {
        setFlippedSheets(newTarget);
      }

      window.setTimeout(() => {
        if (!isFirstOrLastPage) {
          setFlippedSheets(newTarget);
        }
        setIsFlipping(false);
      }, BOOK_FLIP_DURATION);
    },
    [isFlipping, canNext, canPrev, sheets.length, targetFlippedSheets]
  );

  const goNext = () => startFlip('next');
  const goPrev = () => startFlip('prev');

  const currentLeftSrc =
    flippedSheets === 0
      ? (pages[0] ?? null)
      : (sheets[flippedSheets - 1]?.back ?? null);
  const currentRightSrc = sheets[flippedSheets]?.front ?? null;

  const leftPageNumber = Math.min(totalPages, 1 + flippedSheets * 2);
  const rightPageNumber = Math.min(totalPages, leftPageNumber + 1);
  const pageLabel = `${String(leftPageNumber).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}`;

  return (
    <div className="flex w-full flex-col items-center">
      <div className="bk-scene relative w-full max-w-4xl">
        <PageEdgeStack />

        <div className="bk-cover border border-black/20">
          <div className="bk-book">
            {/* Left page */}
            <div className="bk-half bk-half-left">
              <BookPage
                src={currentLeftSrc}
                pageNumber={leftPageNumber}
                side="left"
              />
            </div>

            {/* Right half + sheets */}
            <div className="bk-half bk-half-right">
              <div className="bk-stack">
                {/* Base right page */}
                <BookPage
                  src={currentRightSrc}
                  pageNumber={rightPageNumber}
                  side="right"
                />

                {/* Flippable sheets */}
                {sheets.map((sheet, sheetIdx) => {
                  const isFlipped = sheetIdx < targetFlippedSheets;
                  const total = sheets.length;
                  const zIndex = isFlipped
                    ? sheetIdx + 1
                    : total + (total - sheetIdx);

                  return (
                    <BookSheet
                      key={sheetIdx}
                      sheet={sheet}
                      isFlipped={isFlipped}
                      zIndex={zIndex}
                    />
                  );
                })}
              </div>
            </div>

            {/* Spine */}
            <div className="bk-spine" />
          </div>

          {/* Click zones */}
          <div className="bk-zones">
            <button
              type="button"
              className="bk-zone"
              onClick={goPrev}
              disabled={!canPrev || isFlipping}
              aria-label="Previous page"
            />
            <button
              type="button"
              className="bk-zone"
              onClick={goNext}
              disabled={!canNext || isFlipping}
              aria-label="Next page"
            />
          </div>

          {/* Controls bar */}
          <BookControls
            canPrev={canPrev}
            canNext={canNext}
            isFlipping={isFlipping}
            pageLabel={pageLabel}
            onPrev={goPrev}
            onNext={goNext}
          />
        </div>
      </div>
    </div>
  );
}
