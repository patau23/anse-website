import type { Sheet } from './projects.types';

type BookSheetProps = {
  sheet: Sheet;
  isFlipped: boolean;
  zIndex: number;
};

export function BookSheet({ sheet, isFlipped, zIndex }: BookSheetProps) {
  return (
    <div
      className={`bk-sheet${isFlipped ? ' flipped' : ''}`}
      style={{ zIndex }}
    >
      {/* front */}
      <div className="bk-face">
        <img src={sheet.front} alt="" className="bk-img" />
        <div className="bk-shadow-l" />
        <div className="bk-turn-shadow" />
      </div>
      {/* back */}
      <div className="bk-face bk-face-back">
        {sheet.back ? (
          <img src={sheet.back} alt="" className="bk-img" />
        ) : (
          <div className="bk-blank" />
        )}
        <div className="bk-shadow-r" />
      </div>
    </div>
  );
}
