import clsx from 'clsx';

import { containerClass } from './constants';

const video1 = 'https://kinescope.io/embed/9MU9rZ5RWoWjUjAnarVzbt';
const video2 = 'https://kinescope.io/embed/6bqkRYSRidUfN3fpwuJv4Q';
const video3 = 'https://kinescope.io/embed/cXoTYrpKrADSTM2Qj95cPg';

const VideoSection = () => {
  return (
    <section id="video" className={clsx('px-0 pt-16 pb-[60px] text-center')}>
      <div className={containerClass}>
        <div
          className={clsx(
            'relative w-full overflow-hidden rounded-none pb-[60px]',
            'lg:mx-auto lg:h-[540px] lg:w-[960px] lg:pb-0'
          )}
        >
          <div className="relative pb-[56.25%]">
            <iframe
              src={video1}
              title="Ролик о шоу"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>

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
