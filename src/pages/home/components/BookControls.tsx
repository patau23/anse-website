import { ArrowLeft, ArrowRight } from 'lucide-react';

type BookControlsProps = {
  canPrev: boolean;
  canNext: boolean;
  isFlipping: boolean;
  pageLabel: string;
  onPrev: () => void;
  onNext: () => void;
};

export function BookControls({
  canPrev,
  canNext,
  isFlipping,
  pageLabel,
  onPrev,
  onNext,
}: BookControlsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 z-70 flex -translate-x-1/2 items-center gap-3 rounded-full border border-black/12 bg-white/80 px-4 py-1.5 text-xs font-medium text-black/60 backdrop-blur">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev || isFlipping}
        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/10 transition hover:bg-black/5 disabled:opacity-30"
        aria-label="Previous page"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
      </button>
      <span style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.08em' }}>
        {pageLabel}
      </span>
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext || isFlipping}
        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/10 transition hover:bg-black/5 disabled:opacity-30"
        aria-label="Next page"
      >
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
