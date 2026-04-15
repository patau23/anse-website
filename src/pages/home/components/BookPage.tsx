type BookPageProps = {
  src: string | null;
  pageNumber: number;
  side: 'left' | 'right';
};

export function BookPage({ src, pageNumber, side }: BookPageProps) {
  const shadowClass = side === 'left' ? 'bk-shadow-r' : 'bk-shadow-l';

  return (
    <>
      {src ? (
        <img src={src} alt="" className="bk-img" />
      ) : (
        <div className="bk-blank" />
      )}
      <div className={shadowClass} />
      <span
        style={{
          position: 'absolute',
          bottom: '10px',
          [side]: '16px',
          fontSize: '10px',
          color: 'rgba(0,0,0,0.3)',
          fontFamily: 'Georgia, serif',
          letterSpacing: '0.05em',
          zIndex: 40,
        }}
      >
        {pageNumber}
      </span>
    </>
  );
}
