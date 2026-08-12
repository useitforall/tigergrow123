export function TradingAnimation() {
  const candles = [
    { x: 20, y: 150, h: 46, up: true },
    { x: 60, y: 128, h: 38, up: false },
    { x: 100, y: 138, h: 54, up: true },
    { x: 140, y: 104, h: 42, up: true },
    { x: 180, y: 118, h: 34, up: false },
    { x: 220, y: 88, h: 50, up: true },
    { x: 260, y: 96, h: 30, up: false },
    { x: 300, y: 62, h: 58, up: true },
  ];

  return (
    <svg viewBox="0 0 360 230" className="w-full" role="img" aria-label="Animated trading chart showing the Tiger Grow AI bot tracking price action">
      <defs>
        <linearGradient id="tgFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* grid */}
      {[40, 80, 120, 160, 200].map((y) => (
        <line key={y} x1="10" y1={y} x2="350" y2={y} stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
      ))}

      {/* candles */}
      {candles.map((c, i) => (
        <g key={c.x} className="text-brand-light" style={{ opacity: 0, animation: `tg-rise 0.6s ease-out ${i * 0.14}s forwards` }}>
          <line
            x1={c.x + 7}
            y1={c.y - 12}
            x2={c.x + 7}
            y2={c.y + c.h + 12}
            stroke={c.up ? "currentColor" : "#ffffff"}
            strokeOpacity={c.up ? 1 : 0.45}
            strokeWidth="1.5"
          />
          <rect
            x={c.x}
            y={c.y}
            width="14"
            height={c.h}
            rx="2"
            fill={c.up ? "currentColor" : "transparent"}
            stroke="currentColor"
            strokeOpacity={c.up ? 1 : 0.5}
            strokeWidth="1.5"
          />
        </g>
      ))}

      {/* trend line */}
      <g className="text-primary-foreground">
        <path
          d="M20 176 L60 158 L100 166 L140 132 L180 140 L220 116 L260 112 L300 82 L340 58"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="600"
          strokeDashoffset="600"
          style={{ animation: "tg-draw 2.4s ease-out 0.4s forwards" }}
        />
        <path
          d="M20 176 L60 158 L100 166 L140 132 L180 140 L220 116 L260 112 L300 82 L340 58 L340 220 L20 220 Z"
          fill="url(#tgFill)"
          style={{ opacity: 0, animation: "tg-fade 1.2s ease-out 2s forwards" }}
        />
        <circle cx="340" cy="58" r="5" fill="currentColor" style={{ opacity: 0, animation: "tg-fade 0.4s ease-out 2.6s forwards" }} />
        <circle cx="340" cy="58" r="5" fill="currentColor" className="origin-[340px_58px]" style={{ animation: "tg-ping 2s ease-out 2.8s infinite" }} />
      </g>
    </svg>
  );
}
