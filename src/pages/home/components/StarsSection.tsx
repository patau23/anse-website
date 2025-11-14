import clsx from 'clsx';

import { containerClass, eyebrowClass } from './constants';

const stars = [
  {
    name: 'Даниил Глейхенгауз',
    role: 'Постановщик программ',
    image:
      'https://static.tildacdn.com/tild3033-3030-4162-b332-336130643464/89F18050-E8BF-43A3-9.jpeg',
  },
  {
    name: 'Сергей Дудаков',
    role: 'Главный тренер',
    image:
      'https://static.tildacdn.com/tild3763-3562-4261-b533-653064343232/6204FCBD-2252-45CB-9.jpeg',
  },
  {
    name: 'Евгения Медведева',
    role: 'Двукратная чемпионка мира',
    image:
      'https://static.tildacdn.com/tild6362-3165-4634-a634-366330373965/44164402-41A2-4484-A.jpeg',
  },
  {
    name: 'Алина Загитова',
    role: 'Олимпийская чемпионка',
    image:
      'https://static.tildacdn.com/tild3435-6364-4666-b231-636362306236/15530058-F2AC-4322-A.jpeg',
  },
];

const StarsSection = () => {
  return (
    <section id="stars" className={clsx('py-16 text-center')}>
      <div className={containerClass}>
        <header className={clsx('mx-auto mb-10 max-w-2xl space-y-2')}>
          <p className={eyebrowClass}>Состав</p>
          <h2 className={clsx('text-3xl font-semibold')}>
            Главные звёзды льда
          </h2>
          <p className={clsx('text-[#7a8699]')}>
            На лед выходят чемпионы Олимпийских игр, мира и Европы, а также юные
            открытия школы «Хрустальный».
          </p>
        </header>
        <div className={clsx('grid gap-6', 'sm:grid-cols-2', 'lg:grid-cols-4')}>
          {stars.map((star) => (
            <article
              key={star.name}
              className={clsx(
                'rounded-[20px] bg-white p-6 text-left shadow-[0_10px_30px_rgba(12,20,32,0.08)]'
              )}
            >
              <img
                src={star.image}
                alt={star.name}
                loading="lazy"
                className={clsx('mb-4 h-56 w-full rounded-[18px] object-cover')}
              />
              <h3 className={clsx('text-lg font-semibold')}>{star.name}</h3>
              <p className={clsx('mt-1 text-[#7a8699]')}>{star.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarsSection;
