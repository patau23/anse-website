import clsx from 'clsx';

export const containerClass = clsx(
  'mx-auto w-full max-w-[1120px] px-5',
  'sm:px-6',
  'lg:px-8'
);

export const eyebrowClass =
  'mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[#1847ff]';

export const pillClass =
  'inline-flex items-center rounded-full border border-[#d7e1ff] bg-[rgba(24,71,255,0.08)] px-3 py-1 text-sm font-semibold text-[#1847ff]';

export const primaryButtonClass =
  'inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1847ff] to-[#6290ff] px-7 py-3 font-semibold text-white shadow-[0_20px_45px_rgba(16,45,168,0.15)] transition-transform duration-200 hover:-translate-y-0.5';

export const secondaryButtonClass =
  'inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur';
