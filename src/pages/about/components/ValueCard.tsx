import Img from '@/shared/assets/imgs/glass-abstract.png';
import { cn } from '@/shared/lib/utils';

import { GLASS_CARD_CLASS } from '../about.constants';

export function ValueCard(props: {
  title: string;
  description: string;
  className?: string;
  decoClassName?: string;
}) {
  const { title, description, className, decoClassName } = props;

  return (
    <div
      className={cn(
        'relative flex w-full flex-col items-center gap-6 p-6 text-center',
        'max-w-133.5',
        GLASS_CARD_CLASS,
        className
      )}
    >
      <p className="text-center text-[28px] leading-8.5 font-normal tracking-[0.38px] text-white">
        {title}
      </p>
      <p className="w-full max-w-121.5 text-center text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">
        {description}
      </p>

      {/* <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -top-11.75 size-24.25 rounded-2xl',
          'bg-linear-to-br from-white/35 to-white/5',
          'shadow-[0px_10px_40px_-18px_rgba(255,255,255,0.35)]',
          decoClassName
        )}
      /> */}
      <img
        src={Img}
        alt="Glass Abstract"
        className={cn(
          'pointer-events-none absolute -top-11.75 size-24.25 rounded-2xl',
          decoClassName
        )}
      />

      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0px_4px_40px_-14.024px_rgba(46,78,207,0.52)]" />
    </div>
  );
}
