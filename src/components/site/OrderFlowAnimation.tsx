export function OrderFlowAnimation() {
  const bars = [34, 58, 42, 76, 50, 88, 64, 96];

  return (
    <svg
      viewBox="0 0 420 320"
      className="w-full text-primary"
      role="img"
      aria-label="Animated visualisation of the Tiger Grow bot scanning the market and placing orders"
    >
      <defs>
        <linearGradient id="tgBar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect x="6" y="6" width="408" height="308" rx="10" fill="currentColor" fillOpacity="0.05" />
      {[80, 140, 200, 260].map((y) => (
        <line key={y} x1="30" y1={y} x2="392" y2={y} stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      ))}

      {bars.map((h, i) => (
        <rect
          key={i}
          x={44 + i * 44}
          y={284 - h * 2}
          width="22"
          rx="4"
          height={h * 2}
          fill="url(#tgBar)"
          style={{ opacity: 0, animation: `tg-rise 0.7s ease-out ${i * 0.12}s forwards` }}
        />
      ))}

      <g style={{ opacity: 0, animation: "tg-fade 0.6s ease-out 1.2s forwards" }}>
        <line
          x1="30"
          y1="120"
          x2="392"
          y2="120"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          strokeOpacity="0.6"
        />
        <rect x="300" y="104" width="92" height="30" rx="6" fill="currentColor" />
        <text x="346" y="124" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--card)">
          TP HIT
        </text>
      </g>

      <g style={{ animation: "tg-scan 3.6s linear infinite" }}>
        <line x1="40" y1="24" x2="40" y2="296" stroke="currentColor" strokeWidth="2" strokeOpacity="0.55" />
        <circle cx="40" cy="24" r="5" fill="currentColor" />
      </g>
    </svg>
  );
}
