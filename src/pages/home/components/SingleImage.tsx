type SingleImageProps = {
  src?: string;
};

export function SingleImage({ src }: SingleImageProps) {
  return (
    <div
      className="flex w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      style={{ aspectRatio: '16/12' }}
    >
      {src ? (
        <img src={src} alt="Project" className="h-full w-full object-cover" />
      ) : (
        <div className="flex flex-col items-center gap-3 text-white/20">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span className="text-sm">Image</span>
        </div>
      )}
    </div>
  );
}
