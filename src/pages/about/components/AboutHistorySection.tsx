import { cn } from '@/shared/lib/utils';
import CrhomeImg from '@/shared/assets/imgs/chrome-circles.png';

export function AboutHistorySection() {
  return (
    <section className="flex flex-col items-center py-10 text-center">
      {/* <div
        aria-hidden="true"
        className={cn(
          'h-37.75 w-32 rounded-3xl',
          'bg-linear-to-b from-white/25 to-white/5',
          'shadow-[0px_20px_80px_-40px_rgba(255,255,255,0.35)]'
        )}
      /> */}
      <img
        src={CrhomeImg}
        alt="Chrome Circles"
        className={cn('mt-80 h-37.75 w-32 rounded-3xl')}
      />

      <h1 className="mt-12 text-center text-[34px] leading-10.25 font-bold tracking-[0.4px]">
        <span className="text-[#2e4ecf]">Краткая </span>
        <span className="text-white">история</span>
      </h1>

      <div className="mt-8 flex w-full max-w-200 flex-col gap-6 text-[20px] leading-7 font-normal tracking-[-0.4px] text-white">
        <p>
          Академия научных судебных экспертиз (АНСЭ) была создана с целью
          развития независимой и профессиональной экспертной деятельности на
          территории Казахстана. За годы работы организация сформировала сильное
          экспертное сообщество и стала надёжным партнером для государственных
          органов, юридических компаний, частного сектора и международных
          организаций.
        </p>
        <p>
          Сегодня АНСЭ — это межрегиональная судебно-экспертная организация,
          объединяющая специалистов с многолетней практикой и научным подходом к
          исследованиям.
        </p>
      </div>
    </section>
  );
}
