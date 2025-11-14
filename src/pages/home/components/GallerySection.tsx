import clsx from 'clsx';

import { containerClass, eyebrowClass } from './constants';

const gallery = [
  {
    src: 'https://static.tildacdn.com/tild3033-3030-4162-b332-336130643464/89F18050-E8BF-43A3-9.jpeg',
    caption: 'Эмоции на льду',
  },
  {
    src: 'https://static.tildacdn.com/tild3763-3562-4261-b533-653064343232/6204FCBD-2252-45CB-9.jpeg',
    caption: 'Движение света и льда',
  },
  {
    src: 'https://static.tildacdn.com/tild6362-3165-4634-a634-366330373965/44164402-41A2-4484-A.jpeg',
    caption: 'Погружение в атмосферу',
  },
  {
    src: 'https://static.tildacdn.com/tild3435-6364-4666-b231-636362306236/15530058-F2AC-4322-A.jpeg',
    caption: 'Финальный аккорд',
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className={clsx('py-16')}>
      <div className={containerClass}>
        <header className={clsx('mb-10 max-w-2xl')}>
          <p className={eyebrowClass}>Фото</p>
          <h2 className={clsx('text-3xl font-semibold')}>
            Как это было в прошлых городах
          </h2>
        </header>
        <div
          className={clsx(
            'flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2',
            'sm:grid sm:snap-none sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0',
            'lg:grid-cols-4'
          )}
        >
          {gallery.map((item) => (
            <figure
              key={item.caption}
              className={clsx(
                'min-w-[70%] shrink-0 snap-center rounded-[20px] bg-white shadow-[0_12px_30px_rgba(12,20,32,0.08)]',
                'sm:min-w-0'
              )}
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className={clsx('h-60 w-full rounded-t-[20px] object-cover')}
              />
              <figcaption className={clsx('px-4 py-3 font-semibold')}>
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
