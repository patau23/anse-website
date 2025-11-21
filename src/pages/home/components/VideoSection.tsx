import clsx from 'clsx';
import { useCallback, useRef } from 'react';

import arrowImg from '@/shared/assets/imgs/arrow-image.png';
import { containerClass } from './constants';

const video1 = 'https://kinescope.io/embed/9MU9rZ5RWoWjUjAnarVzbt';
const video2 = 'https://kinescope.io/embed/6bqkRYSRidUfN3fpwuJv4Q';
const video3 = 'https://kinescope.io/embed/cXoTYrpKrADSTM2Qj95cPg';

const videos = [
  { id: 'video-1', src: video1, title: 'Ролик о шоу 1' },
  { id: 'video-2', src: video2, title: 'Ролик о шоу 2' },
  { id: 'video-3', src: video3, title: 'Ролик о шоу 3' },
];

const VideoSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleArrowClick = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const firstCard =
      container.querySelector<HTMLDivElement>('[data-video-card]');
    const cardWidth = firstCard?.clientWidth ?? 0;
    const gap =
      parseFloat(
        getComputedStyle(container).columnGap || getComputedStyle(container).gap
      ) || 0;
    const fallbackScroll = container.clientWidth * 0.8;

    container.scrollBy({
      left: cardWidth + gap || fallbackScroll,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section id="video" className={clsx('px-0 pt-16 pb-[60px] text-center')}>
      <div className={containerClass}>
        {/* Кнопка со стрелкой справа, как в StarsSection */}
        <div className="flex w-full justify-end px-3 lg:px-0">
          <button
            type="button"
            onClick={handleArrowClick}
            className="transition-opacity duration-200 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#151826]"
            aria-label="Прокрутить видео"
          >
            <img
              src={arrowImg}
              alt="Arrow"
              className={clsx(
                'visible m-0 box-content block h-[25.6173px] w-[40.9956px] overflow-clip border-0 object-[50%_50%] p-0 antialiased [overflow-clip-margin:content-box] [text-size-adjust:100%]'
              )}
            />
          </button>
        </div>

        {/* Скролл-контейнер для видосов */}
        <div className="mt-4">
          <div
            ref={scrollContainerRef}
            aria-label="Видео о шоу"
            className={clsx(
              'flex gap-3 overflow-x-auto scroll-smooth py-2',
              'lg:gap-10'
            )}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                data-video-card
                className={clsx(
                  // ОРИГИНАЛЬНЫЕ стили контейнера видео — не меняем
                  'relative w-full overflow-hidden rounded-none pb-[60px]',
                  'lg:mx-auto lg:h-[540px] lg:w-[960px] lg:pb-0',
                  // Добавлено только для горизонтального скролла:
                  'shrink-0'
                )}
              >
                <div className="relative pb-[56.25%]">
                  <iframe
                    src={video.src}
                    title={video.title}
                    loading="lazy"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Кнопка "Купить билет" — оставил как было */}
        <div
          className={clsx(
            'mt-2 flex items-center justify-center px-3',
            'lg:mt-6 lg:h-[100px]'
          )}
        >
          <a
            className={clsx(
              'font-main visible m-0 box-content h-14 min-w-full origin-[148.497px_23.9974px] cursor-pointer content-center rounded-[30px] border-0 bg-[#685694] bg-cover bg-position-[50%_50%] p-0 text-center align-middle text-[18px] leading-[27.9px] font-semibold text-white antialiased [-webkit-font-smoothing:antialiased] opacity-80 transition-colors duration-200 ease-in-out [text-size-adjust:100%] hover:-translate-y-0.5',
              'md:',
              'lg:min-w-auto lg:rounded-full lg:p-4 lg:px-20 lg:text-[2.75rem]'
            )}
            href="https://zakazbiletov.kz/ru/5-astana/4-sport/chempiony-na-ldy/71105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Купить билет
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
