import clsx from 'clsx';

export const containerClass = clsx(
  'mx-auto w-full max-w-[1120px] ',
  'sm',
  'md',
  'lg:max-w-[88.7vw]'
);

export const eyebrowClass =
  'mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[#1847ff]';

export const pillClass =
  'inline-flex items-center rounded-full border border-[#d7e1ff] bg-[rgba(24,71,255,0.08)] px-3 py-1 text-sm font-semibold text-[#1847ff]';

export const primaryButtonClass =
  'w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#685694] to-[#685694] px-7 py-3 font-semibold text-white  transition-transform duration-200 hover:-translate-y-0.5 text-[18px]';

export const secondaryButtonClass =
  'inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur';
