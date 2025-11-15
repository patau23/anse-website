import clsx from 'clsx';

import { containerClass } from './constants';

const videoUrl = 'https://kinescope.io/embed/9MU9rZ5RWoWjUjAnarVzbt';

const VideoSection = () => {
  return (
    <section id="video" className={clsx('px-0 pt-16 pb-[60px] text-center')}>
      <div className={containerClass}>
        <div
          className={clsx(
            'relative w-full overflow-hidden rounded-none pb-[60px]'
          )}
        >
          <div className="relative pb-[56.25%]">
            <iframe
              src={videoUrl}
              title="Ролик о шоу"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>

        <div className={clsx('flex items-center justify-center px-3')}>
          <a
            className={clsx(
              'font-main visible m-0 box-content h-14 min-w-full origin-[148.497px_23.9974px] cursor-pointer content-center rounded-[30px] border-0 bg-[#685694] bg-cover bg-position-[50%_50%] p-0 text-center align-middle text-[18px] leading-[27.9px] font-semibold text-white antialiased [-webkit-font-smoothing:antialiased] opacity-80 transition-colors duration-200 ease-in-out [text-size-adjust:100%] hover:-translate-y-0.5'
            )}
            href="#tickets"
          >
            Купить билет
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
