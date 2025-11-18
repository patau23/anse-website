import clsx from 'clsx';

import { containerClass } from './constants';

const infoImage =
  'https://static.tildacdn.com/tild3963-3531-4363-b936-643132363764/FD29F7AE-0F3D-498B-9.jpeg';

const AboutSection = () => {
  const isDesktop = window.innerWidth >= 768;
  return (
    <section
      id="about"
      className={clsx(
        'px-6 pt-10 pb-8',
        'sm:rounded-t-[36px] sm:px-0',
        'lg:rounded-t-[48px]'
      )}
    >
      <div
        className={clsx(
          containerClass,
          'grid gap-6',
          'md:mx-auto md:max-w-3xl md:grid-cols-2 md:items-center',
          'lg:max-w-[1664px] lg:gap-16'
        )}
      >
        {/*  */}

        {/* image */}
        <div className={clsx('order-1', 'md:order-0')}>
          <img
            src={infoImage}
            alt="Хореографический номер"
            loading="lazy"
            className={clsx(
              'h-[221px] w-full rounded-[15px] shadow-[0_20px_45px_rgba(16,45,168,0.15)]',
              'lg:h-[533px] lg:rounded-3xl'
            )}
          />
        </div>

        {/* text */}
        <div
          className={clsx(
            'order-2 flex flex-col gap-6 space-y-4 text-[#1d2b3f]',
            'md:order-0',
            'lg:gap-18 lg:text-[18px] lg:leading-7'
          )}
        >
          <p
            className={clsx(
              'font-main visible m-0 box-content w-full origin-[138.499px_34.9963px] border-0 bg-cover bg-position-[50%_50%] p-0 px-1 align-middle font-["Inter",Arial,sans-serif] text-[14px] leading-[17.5px] font-normal text-black antialiased [text-size-adjust:auto] [unicode-bidi:isolate]',
              'lg:text-[28px] lg:leading-9'
            )}
          >
            Весной 2026 года легендарная команда {!isDesktop && <br />}
            <strong> Этери Тутберидзе </strong>выходит на лёд с новым
            грандиозным шоу, которое обещает стать главным
            спортивно-эмоциональным {!isDesktop && <br />} событием сезона.
          </p>

          <div
            className={clsx(
              'visible z-3 m-0 box-border table h-[2.99968px] w-[99.996px] border-0 p-0 antialiased [unicode-bidi:isolate] [zoom:1.172]'
            )}
          >
            <div
              className={clsx(
                'visible m-0 box-content table-cell h-[2.99968px] w-[99.996px] origin-[49.998px_1.49984px] border-0 bg-[#685694] bg-position-[50%_50%] p-0 align-middle antialiased [text-size-adjust:100%] [unicode-bidi:isolate]'
              )}
            />
          </div>

          <div
            className={clsx(
              'visible z-3 m-0 box-border table h-[111.988px] w-[264.998px] border-0 p-0 font-["Inter",Arial,sans-serif] text-black antialiased [text-size-adjust:100%] [unicode-bidi:isolate] [zoom:1.172]',
              'lg:w-auto'
            )}
          >
            <div
              className={clsx(
                'font-main visible m-0 box-content table-cell h-[111.988px] w-[264.998px] origin-[132.499px_55.994px] border-0 bg-cover bg-position-[50%_50%] p-0 align-middle text-[12px] leading-3.5 font-normal text-black antialiased [text-size-adjust:auto] [unicode-bidi:isolate]',
                'lg:w-auto lg:text-[26px] lg:leading-7'
              )}
            >
              На вас ждёт вечер, где каждая программа&nbsp;— маленькая история о
              мечтах, победах и вдохновении.
              <br />
              <br />
              Сложнейшие элементы сочетаются с хореографией, светом и музыкой,
              создавая магию, от которой невозможно отвести взгляд.
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </section>
  );
};

export default AboutSection;
