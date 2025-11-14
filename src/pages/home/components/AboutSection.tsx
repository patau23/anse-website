import clsx from 'clsx';

import { containerClass } from './constants';

const infoImage =
  'https://static.tildacdn.com/tild3963-3531-4363-b936-643132363764/FD29F7AE-0F3D-498B-9.jpeg';

const AboutSection = () => {
  return (
    <section
      id="about"
      className={clsx(
        '-mt-16 rounded-t-4xl bg-[#f8fbff] pt-10 pb-14 shadow-[0_-30px_80px_rgba(16,45,168,0.08)]',
        'sm:-mt-20 sm:rounded-t-[36px]',
        'lg:-mt-24 lg:rounded-t-[48px]'
      )}
    >
      <div
        className={clsx(
          containerClass,
          'grid gap-8',
          'md:grid-cols-2 md:items-center'
        )}
      >
        <div className={clsx('order-1', 'md:order-0')}>
          <img
            src={infoImage}
            alt="Хореографический номер"
            loading="lazy"
            className={clsx(
              'w-full rounded-[28px] shadow-[0_20px_45px_rgba(16,45,168,0.15)]'
            )}
          />
        </div>
        <div className={clsx('order-2 space-y-4 text-[#1d2b3f]', 'md:order-0')}>
          <p>
            Весной 2026 года легендарная команда Этери Тутберидзе выходит на лёд
            с новым грандиозным шоу, которое обещает стать главным событием
            сезона.
          </p>
          <p>
            На вас ждёт вечер, где каждая программа&nbsp;— маленькая история о
            мечтах, победах и вдохновении. Сложнейшие элементы сочетаются с
            хореографией, светом и музыкой, создавая магию, от которой
            невозможно отвести взгляд.
          </p>
          <p>
            Программа подготовлена специально для весеннего тура и будет
            показана только в нескольких городах. Алматы&nbsp;— один из них.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
