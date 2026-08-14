export function RiskShieldAnimation() {
  return (
    <svg
      viewBox="0 0 420 340"
      className="w-full text-primary-foreground"
      role="img"
      aria-label="Animated shield illustrating the Tiger Grow controlled risk framework"
    >
      {[150, 120, 90].map((r, i) => (
        <circle
          key={r}
          cx="210"
          cy="170"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          style={{ animation: `tg-ping 3s ease-out ${i * 0.6}s infinite` }}
          className="origin-[210px_170px]"
        />
      ))}

      <path
        d="M210 62 L316 104 V182 C316 244 268 282 210 300 C152 282 104 244 104 182 V104 Z"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="900"
        strokeDashoffset="900"
        style={{ animation: "tg-draw 2.4s ease-out forwards" }}
      />

      <path
        d="M168 178 L198 210 L256 146"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="180"
        strokeDashoffset="180"
        style={{ animation: "tg-draw 1s ease-out 1.6s forwards" }}
      />

      {[
        { x: 118, y: 66, label: "SL" },
        { x: 286, y: 66, label: "TP" },
        { x: 210, y: 318, label: "LOT" },
      ].map((t, i) => (
        <g key={t.label} style={{ opacity: 0, animation: `tg-fade 0.6s ease-out ${2.2 + i * 0.25}s forwards` }}>
          <rect x={t.x - 26} y={t.y - 15} width="52" height="28" rx="14" fill="currentColor" fillOpacity="0.16" />
          <text x={t.x} y={t.y + 5} textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor">
            {t.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
