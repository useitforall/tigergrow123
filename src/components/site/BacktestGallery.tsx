import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const shots = [
  { src: "/images/backtest-1.png", label: "XAUUSD M5 — July 2026", note: "Total net profit 146 341.64" },
  { src: "/images/backtest-2.png", label: "XAUUSD M5 — January 2026", note: "Total net profit 90 418.52" },
  { src: "/images/backtest-3.png", label: "XAUUSD M5 — February 2026", note: "Total net profit 78 890.58" },
];

export function BacktestGallery() {
  const [i, setI] = useState(0);
  const current = shots[i]!;

  return (
    <div className="mt-14">
      <div className="card-elevated overflow-hidden bg-card">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-6 py-4">
          <div>
            <p className="font-display text-sm font-bold text-navy">{current.label}</p>
            <p className="text-xs text-muted-foreground">{current.note}</p>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous report"
              onClick={() => setI((v) => (v === 0 ? shots.length - 1 : v - 1))}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-navy transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next report"
              onClick={() => setI((v) => (v === shots.length - 1 ? 0 : v + 1))}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-navy transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden bg-ice">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
            {shots.map((s) => (
              <div key={s.src} className="w-full shrink-0 p-4 sm:p-8">
                <img
                  src={s.src}
                  alt={`Tiger Grow strategy tester report — ${s.label}`}
                  loading="lazy"
                  className="mx-auto w-full max-w-3xl rounded-sm bg-card shadow-[var(--shadow-card)]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 py-5">
          {shots.map((s, idx) => (
            <button
              key={s.src}
              aria-label={`Show ${s.label}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
