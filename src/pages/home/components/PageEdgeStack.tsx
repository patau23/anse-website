const EDGE_LINES_COUNT = 6;

export function PageEdgeStack() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '3%',
        bottom: '3%',
        left: '50%',
        right: '-2px',
        zIndex: -1,
        borderRadius: '0 10px 10px 0',
        background: 'linear-gradient(90deg,#d4cfc8,#c8c3bb)',
        boxShadow: '2px 0 8px rgba(0,0,0,0.25)',
      }}
    >
      {[...Array(EDGE_LINES_COUNT)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${i * 2}px`,
            width: '1px',
            background: 'rgba(255,255,255,0.3)',
          }}
        />
      ))}
    </div>
  );
}
