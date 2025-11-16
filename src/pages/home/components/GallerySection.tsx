import arrowImg from '@/shared/assets/imgs/arrow-image.png';
import clsx from 'clsx';
import * as ScrollArea from '@radix-ui/react-scroll-area';

import img1 from '@/shared/assets/imgs/gallery/image1.png';
import img2 from '@/shared/assets/imgs/gallery/image2.png';
import img3 from '@/shared/assets/imgs/gallery/image3.png';
import img4 from '@/shared/assets/imgs/gallery/image4.png';
import img5 from '@/shared/assets/imgs/gallery/image5.png';
import img6 from '@/shared/assets/imgs/gallery/image6.png';
import img7 from '@/shared/assets/imgs/gallery/image7.png';
import img8 from '@/shared/assets/imgs/gallery/image8.png';
import img9 from '@/shared/assets/imgs/gallery/image9.png';
import img10 from '@/shared/assets/imgs/gallery/image10.png';
import img11 from '@/shared/assets/imgs/gallery/image11.png';
import img12 from '@/shared/assets/imgs/gallery/image12.png';
import img13 from '@/shared/assets/imgs/gallery/image13.png';

import { containerClass, eyebrowClass } from './constants';

const gallery = [
  { src: img1, caption: 'Картинка из шоу №1' },
  { src: img2, caption: 'Картинка из шоу №2' },
  { src: img3, caption: 'Картинка из шоу №3' },
  { src: img4, caption: 'Картинка из шоу №4' },
  { src: img5, caption: 'Картинка из шоу №5' },
  { src: img6, caption: 'Картинка из шоу №6' },
  { src: img7, caption: 'Картинка из шоу №7' },
  { src: img8, caption: 'Картинка из шоу №8' },
  { src: img9, caption: 'Картинка из шоу №9' },
  { src: img10, caption: 'Картинка из шоу №10' },
  { src: img11, caption: 'Картинка из шоу №11' },
  { src: img12, caption: 'Картинка из шоу №12' },
  { src: img13, caption: 'Картинка из шоу №13' },
];

const GallerySection = () => {
  return (
    <section id="gallery" className={clsx('py-16')}>
      <div className={clsx(containerClass, 'flex flex-col gap-6')}>
        <div className={clsx('flex w-full justify-end px-6 md:px-0')}>
          <img
            src={arrowImg}
            alt="Arrow"
            className={clsx(
              'visible m-0 box-content block h-[25.6173px] w-[40.9956px] overflow-clip border-0 object-[50%_50%] p-0 antialiased',
              '[overflow-clip-margin:content-box] [text-size-adjust:100%]'
            )}
          />
        </div>

        <ScrollArea.Root
          type="scroll"
          scrollHideDelay={0}
          className="w-full px-3 select-none md:px-0"
        >
          <ScrollArea.Viewport className="w-full">
            <div
              className="flex h-[525px] gap-4 py-2"
              aria-label="Галерея тура"
            >
              {gallery.map((item) => (
                <figure
                  key={item.caption}
                  className="flex h-full shrink-0 snap-start items-center bg-white shadow-[0_12px_30px_rgba(12,20,32,0.08)] first:ml-4 last:mr-4"
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="lazy"
                    className="'select-none [-webkit-user-drag:none]' block h-full w-auto object-contain [user-drag:none]"
                  />
                </figure>
              ))}
            </div>
          </ScrollArea.Viewport>

          {/* Горизонтальный кастомный скроллбар */}
          <ScrollArea.Scrollbar
            orientation="horizontal"
            className={clsx(
              'mt-4 flex h-2 touch-none items-center select-none',
              'px-6 md:px-0',
              'rounded-full bg-slate-200'
            )}
          >
            <ScrollArea.Thumb
              className={clsx(
                'relative h-1 flex-1 rounded-full bg-slate-500',
                'cursor-grab active:cursor-grabbing'
              )}
            />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
    </section>
  );
};

export default GallerySection;
