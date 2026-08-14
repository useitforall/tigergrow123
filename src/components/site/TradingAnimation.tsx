export function TradingAnimation() {
  const candles = [
    { x: 18, y: 152, h: 40, up: true },
    { x: 54, y: 132, h: 34, up: false },
    { x: 90, y: 140, h: 48, up: true },
    { x: 126, y: 108, h: 38, up: true },
    { x: 162, y: 120, h: 30, up: false },
    { x: 198, y: 92, h: 46, up: true },
    { x: 234, y: 100, h: 28, up: false },
    { x: 270, y: 66, h: 52, up: true },
    { x: 306, y: 54, h: 34, up: true },
  ];

  return (
    <svg
      viewBox="0 0 360 240"
      className="w-full"
      role="img"
      aria-label="Live animated chart of the Tiger Grow AI bot scanning price action and firing a buy signal"
    >
      <defs>
        <linearGradient id="tgFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[50, 90, 130, 170, 210].map((y) => (
        <line key={y} x1="10" y1={y} x2="350" y2={y} stroke="currentColor" strokeOpacity="0.07" strokeWidth="1" />
      ))}

      {/* scanning beam */}
      <g className="text-brand-light" style={{ animation: "tg-scan 4s linear infinite" }}>
        <rect x="10" y="14" width="2" height="212" fill="currentColor" opacity="0.5" />
      </g>

      {/* candles */}
      {candles.map((c, i) => (
        <g
          key={c.x}
          className="text-brand-light"
          style={{ opacity: 0, animation: `tg-rise 0.55s ease-out ${i * 0.12}s forwards` }}
        >
          <line
            x1={c.x + 6}
            y1={c.y - 11}
            x2={c.x + 6}
            y2={c.y + c.h + 11}
            stroke={c.up ? "currentColor" : "#ffffff"}
            strokeOpacity={c.up ? 1 : 0.45}
            strokeWidth="1.5"
          />
          <rect
            x={c.x}
            y={c.y}
            width="12"
            height={c.h}
            rx="2"
            fill={c.up ? "currentColor" : "transparent"}
            stroke="currentColor"
            strokeOpacity={c.up ? 1 : 0.5}
            strokeWidth="1.5"
          />
        </g>
      ))}

      {/* entry / target bands */}
      <g className="text-primary-foreground" style={{ opacity: 0, animation: "tg-fade 0.8s ease-out 1.5s forwards" }}>
        <line x1="14" y1="176" x2="346" y2="176" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="5 5" />
        <text x="346" y="172" textAnchor="end" fontSize="8" fill="currentColor" opacity="0.7">
          ENTRY
        </text>
        <line x1="14" y1="52" x2="346" y2="52" stroke="currentColor" strokeOpacity="0.35" strokeDasharray="5 5" />
        <text x="346" y="48" textAnchor="end" fontSize="8" fill="currentColor" opacity="0.7">
          TP4
        </text>
      </g>

      {/* trend path */}
      <g className="text-primary-foreground">
        <path
          d="M18 182 L54 164 L90 172 L126 138 L162 146 L198 118 L234 114 L270 84 L306 60 L342 44"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="620"
          strokeDashoffset="620"
          style={{ animation: "tg-draw 2.4s ease-out 0.4s forwards" }}
        />
        <path
          d="M18 182 L54 164 L90 172 L126 138 L162 146 L198 118 L234 114 L270 84 L306 60 L342 44 L342 230 L18 230 Z"
          fill="url(#tgFill)"
          style={{ opacity: 0, animation: "tg-fade 1.2s ease-out 2s forwards" }}
        />
        <circle cx="342" cy="44" r="4.5" fill="currentColor" style={{ opacity: 0, animation: "tg-fade 0.4s ease-out 2.6s forwards" }} />
        <circle
          cx="342"
          cy="44"
          r="4.5"
          fill="currentColor"
          className="origin-[342px_44px]"
          style={{ animation: "tg-ping 2s ease-out 2.8s infinite" }}
        />
      </g>

      {/* buy signal tag */}
      <g style={{ opacity: 0, animation: "tg-fade 0.5s ease-out 1.1s forwards" }}>
        <rect x="120" y="196" width="46" height="18" rx="4" fill="#10b981" />
        <text x="143" y="209" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ffffff">
          BUY
        </text>
      </g>
    </svg>
  );
}
