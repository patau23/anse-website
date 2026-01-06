import { cn } from '@/shared/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap text-base font-semibold leading-none tracking-wide text-white/90',
        className,
      )}
    >
      Логотип
    </span>
  );
}
