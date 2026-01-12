import mainLogo from '@/shared/assets/imgs/main-logo.png';
import { cn } from '@/shared/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <img src={mainLogo} alt="АНСЭ" className={cn('h-7 w-auto', className)} />
  );
}
