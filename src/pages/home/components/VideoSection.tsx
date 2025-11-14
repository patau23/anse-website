import clsx from 'clsx';

import { containerClass } from './constants';

const videoPreview =
  'https://static.tildacdn.com/tild6634-3766-4135-a639-323230373931/Frame_9.png';

const VideoSection = () => {
  return (
    <section id="video" className={clsx('py-16 text-center')}>
      <div className={containerClass}>
        <div
          className={clsx(
            'relative overflow-hidden rounded-3xl shadow-[0_20px_45px_rgba(16,45,168,0.15)]'
          )}
        >
          <img
            src={videoPreview}
            alt="Превью шоу"
            loading="lazy"
            className={clsx('h-full w-full object-cover')}
          />
          <button
            type="button"
            aria-label="Смотреть ролик"
            className={clsx(
              'absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1847ff]/90 text-2xl text-white'
            )}
          >
            ▶
          </button>
        </div>
        <p className={clsx('mt-4 text-[#7a8699]')}>
          2 минуты, чтобы почувствовать атмосферу
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
