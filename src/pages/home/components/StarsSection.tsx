import akatyevaImg from '@/shared/assets/imgs/person-stars/akatyeva.png';
import bazylyukImg from '@/shared/assets/imgs/person-stars/bazylyuk.png';
import boykovaKozlovskiyImg from '@/shared/assets/imgs/person-stars/boykova-kozlovskiy.png';
import dudakovImg from '@/shared/assets/imgs/person-stars/dudakov.png';
import dvoeglazovaImg from '@/shared/assets/imgs/person-stars/dvoeglazova.png';
import fedotovImg from '@/shared/assets/imgs/person-stars/fedotov.png';
import gleikhenhausImg from '@/shared/assets/imgs/person-stars/gleikhenhaus.png';
import kvitelashviliImg from '@/shared/assets/imgs/person-stars/kvitelashvili.png';
import medvedevaImg from '@/shared/assets/imgs/person-stars/medvedeva.png';
import mozalevImg from '@/shared/assets/imgs/person-stars/mozalev.png';
import petrosyanImg from '@/shared/assets/imgs/person-stars/petrosyan.png';
import sadkovaImg from '@/shared/assets/imgs/person-stars/sadkova.png';
import samsonovImg from '@/shared/assets/imgs/person-stars/samsonov.png';
import tuktamyshevaImg from '@/shared/assets/imgs/person-stars/tuktamysheva.png';
import tutberidzeImg from '@/shared/assets/imgs/person-stars/tutberidze.png';
// import valievaImg from '@/shared/assets/imgs/person-stars/valieva.png';
import arrowImg from '@/shared/assets/imgs/arrow-image.png';
import volosozharTrankovImg from '@/shared/assets/imgs/person-stars/volosozhar-trankov.png';
import zagitovaImg from '@/shared/assets/imgs/person-stars/zagitova.png';

import clsx from 'clsx';
import { useCallback, useRef } from 'react';
import { containerClass } from './constants';

type StarSlide = {
  id: string;
  name: string;
  role: string;
  description: string;
  category: string;
  image: string;
};

const stars: StarSlide[] = [
  {
    id: 'tutberidze',
    name: 'Этери Тутберидзе',
    role: 'Главный тренер',
    description:
      'Создательница школы, которая воспитала чемпионов и изменила мировое фигурное катание.',
    category: 'Тренер',
    image: tutberidzeImg,
  },
  {
    id: 'gleikhenhaus',
    name: 'Даниил Глейхенгауз',
    role: 'Хореограф и постановщик',
    description:
      'Создаёт узнаваемый стиль школы: музыкальные образы, которые становятся вирусными.',
    category: 'Тренер',
    image: gleikhenhausImg,
  },
  {
    id: 'dudakov',
    name: 'Сергей Дудаков',
    role: 'Главный тренер',
    description:
      'Отвечает за отточенную технику прыжков и скорость, формируя чемпионский характер у каждого спортсмена.',
    category: 'Тренер',
    image: dudakovImg,
  },
  {
    id: 'medvedeva',
    name: 'Евгения Медведева',
    role: 'Двукратная чемпионка мира',
    description:
      'Её истории на льду и сложнейшие каскады принесли школе Тутберидзе мировую славу.',
    category: 'Легенда',
    image: medvedevaImg,
  },
  // {
  //   id: 'valieva',
  //   name: 'Камила Валиева',
  //   role: 'Олимпийская чемпионка',
  //   description:
  //     'Её программы задают стандарты для женского одиночного катания и продолжают вдохновлять новое поколение.',
  //   category: 'Чемпион',
  //   image: valievaImg,
  // },
  {
    id: 'zagitova',
    name: 'Алина Загитова',
    role: 'Олимпийская чемпионка',
    description:
      'Одна из самых ярких звёзд школы Тутберидзе, известная идеальной точностью элементов и артистизмом.',
    category: 'Чемпион',
    image: zagitovaImg,
  },

  {
    id: 'tuktamysheva',
    name: 'Елизавета Туктамышева',
    role: 'Чемпионка мира',
    description:
      'Символ взрослой школы Тутберидзе: силовые тройные аксели и фирменный стиль.',
    category: 'Легенда',
    image: tuktamyshevaImg,
  },
  {
    id: 'petrosyan',
    name: 'Аделия Петросян',
    role: 'Победительница Гран-при',
    description:
      'Самая юная звезда, открывшая новую эру сложнейших вращений и прыжков в два акселя.',
    category: 'Ученик',
    image: petrosyanImg,
  },
  {
    id: 'akatyeva',
    name: 'Софья Акатьева',
    role: 'Чемпионка юниорского Гран-при',
    description:
      'Юная ученица хрустального катка с характерными каскадами, которая уверенно собирает международные титулы.',
    category: 'Ученик',
    image: akatyevaImg,
  },
  {
    id: 'sadkova',
    name: 'Дарья Садкова',
    role: 'Чемпионка Европы среди юниоров',
    description:
      'Выдающаяся юниорская фигуристка с уникальным стилем и сложными элементами.',
    category: 'Ученик',
    image: sadkovaImg,
  },
  {
    id: 'bazylyuk',
    name: 'Маргарита Базылюк',
    role: 'Лидер юниорской сборной',
    description:
      'Демонстрирует чистейшие каскады и стабильность, за которые школу ценят по всему миру.',
    category: 'Ученик',
    image: bazylyukImg,
  },
  {
    id: 'dvoeglazova',
    name: 'Александра Двоеглазова',
    role: 'Хореограф',
    description:
      'Подчёркивает женственность и добавляет современную пластику в короткие программы учениц.',
    category: 'Тренер',
    image: dvoeglazovaImg,
  },
  {
    id: 'volosozhar-trankov',
    name: 'Волосожар / Траньков',
    role: 'Олимпийские чемпионы',
    description:
      'Легендарные наставники, помогая молодым парам раскрывать артистизм и осваивать сложные поддержки.',
    category: 'Тренеры',
    image: volosozharTrankovImg,
  },
  {
    id: 'boykova-kozlovskiy',
    name: 'Бойкова / Козловский',
    role: 'Чемпионы Европы',
    description:
      'Спортивная пара, которая демонстрирует, как работают идеальные синхронность и техника парного катания.',
    category: 'Ученики',
    image: boykovaKozlovskiyImg,
  },
  {
    id: 'kvitelashvili',
    name: 'Морис Квителашвили',
    role: 'Бронзовый призёр Европы',
    description:
      'Один из самых стабильных учеников группы, который прославился фирменными четверными прыжками.',
    category: 'Ученик',
    image: kvitelashviliImg,
  },
  {
    id: 'mozalev',
    name: 'Андрей Мозалёв',
    role: 'Чемпион Европы',
    description:
      'Убедительный лидер мужской сборной школы, задающий планку по сложности контента.',
    category: 'Ученик',
    image: mozalevImg,
  },
  {
    id: 'samsonov',
    name: 'Александр Самсонов',
    role: 'Победитель юниорского финала',
    description:
      'Обладает невероятным чувством музыки, сочетая сложные элементы с тонкой пластикой.',
    category: 'Ученик',
    image: samsonovImg,
  },
  {
    id: 'fedotov',
    name: 'Илья Федотов',
    role: 'Призёр юниорских турниров',
    description:
      'Быстро прогрессирует в мужской команде, подтверждая силу школы на международной арене.',
    category: 'Ученик',
    image: fedotovImg,
  },
];

const StarsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleArrowClick = useCallback(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const firstCard = container.querySelector('article');
    const cardWidth = firstCard?.clientWidth ?? 0;
    const gap = parseFloat(getComputedStyle(container).columnGap) || 0;
    const fallbackScroll = container.clientWidth * 0.8;

    container.scrollBy({
      left: cardWidth + gap || fallbackScroll,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section id="stars" className="py-16 md:py-24">
      <div
        className={clsx(
          containerClass,
          'align-center flex flex-col justify-center gap-6'
        )}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2
            className={clsx(
              'cursor-pointer px-6 text-left text-3xl font-semibold tracking-tight text-[#151826] uppercase md:text-[34px]',
              '',
              'lg:text-[5rem]'
            )}
          >
            Главные звёзды льда
          </h2>
        </div>

        <div className={clsx('flex w-full justify-end px-6')}>
          <button
            type="button"
            onClick={handleArrowClick}
            className="transition-opacity duration-200 hover:opacity-80 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#151826]"
            aria-label="Прокрутить слайдер со звёздами"
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

        <div className="mt-8 select-none">
          <div
            className={clsx(
              'flex gap-3 overflow-x-auto scroll-smooth py-2',
              'lg:gap-10'
            )}
            aria-label="Звёзды Тутберидзе"
            ref={scrollContainerRef}
          >
            {stars.map((star) => (
              <article
                key={star.id}
                className={clsx(
                  'w-fit shrink-0 snap-start', // тут магия
                  'first:ml-10 last:mr-10 lg:first:ml-30 lg:last:mr-30'
                )}
              >
                <img
                  src={star.image}
                  alt={star.name}
                  loading="lazy"
                  className={clsx(
                    'visible m-0 box-content block h-[404px] w-[302px] overflow-clip rounded-[28px] border-0 object-[50%_50%] p-0 antialiased [overflow-clip-margin:content-box] [text-size-adjust:100%]',
                    'aspect-auto lg:h-[72vh] lg:w-auto lg:rounded-[41px]'
                  )}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarsSection;
