import { useTranslation } from 'react-i18next';

type HexProps = {
  // either a fully translated label string
  label?: string;
  // or an i18next key (e.g. 'home.expertise.itemsTop.0')
  labelKey?: string;
};

export function Hex({ label, labelKey }: HexProps) {
  const { t } = useTranslation();
  const raw = label ?? (labelKey ? t(labelKey) : '');
  // accept both actual newlines and escaped "\\n" sequences from JSON
  const lines = raw.split(/\\n|\n/);

  const fontSize = 24;
  const lineHeight = 28;
  const centerX = 199;
  const centerY = 176;

  const firstLineY = centerY - ((lines.length - 1) * lineHeight) / 2;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="398"
      height="352"
      viewBox="0 0 398 352"
      fill="none"
    >
      <path
        d="M112.477 29.9766L285.477 29.9766L371.977 179.977L285.477 329.977H112.477L25.9766 179.977L112.477 29.9766Z"
        fill="#2E4ECF"
        fillOpacity="0.08"
      />

      <path
        d="M285.188 30.4766L371.398 179.977L285.188 329.477H112.766L26.5537 179.977L112.766 30.4766H285.188Z"
        stroke="#2E4ECF"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#hexGlow)"
        opacity="0.9"
      />

      <path
        d="M285.188 30.4766L371.398 179.977L285.188 329.477H112.766L26.5537 179.977L112.766 30.4766H285.188Z"
        stroke="url(#paint0_linear_4653_8296)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        shapeRendering="crispEdges"
      />

      <text
        x={centerX}
        y={firstLineY}
        textAnchor="middle"
        fill="white"
        fontSize={fontSize}
        fontWeight={600}
        fontFamily="SF Pro, system-ui, sans-serif"
      >
        {lines.map((line, i) => (
          <tspan key={i} x={centerX} dy={i === 0 ? 0 : lineHeight}>
            {line}
          </tspan>
        ))}
      </text>

      <defs>
        <filter
          id="hexGlow"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur stdDeviation="18" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
              0 0 0 0 0
              0 0 0 0 0
              0 0 1 0 0
              0 0 0 1 0"
            result="colored"
          />
          <feMerge>
            <feMergeNode in="colored" />
          </feMerge>
        </filter>

        <linearGradient
          id="paint0_linear_4653_8296"
          x1="371.977"
          y1="179.447"
          x2="25.9766"
          y2="179.447"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2E4ECF" />
          <stop offset="1" stopColor="#2E4ECF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
