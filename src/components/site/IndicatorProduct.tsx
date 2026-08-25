import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site-links";

const shots = [
  { src: "/images/indicator-1.png", label: "BTCUSDT — Bullish signal with TP1–TP4" },
  { src: "/images/indicator-2.png", label: "XAUUSD — Bearish signal with stop loss" },
  { src: "/images/indicator-3.png", label: "NIFTY options — trend & trail exits" },
  { src: "/images/indicator-4.png", label: "SENSEX options — entry and targets" },
];

const features = [
  "1 Approved TradingView Account",
  "Lifetime Indicator Licence",
  "Futures Trading Indicator",
  "Buy & Sell Signals",
  "Entry Price & Stop Loss Levels",
  "Multiple Target Levels – TP1, TP2, TP3, TP4",
  "Advanced Trend Analysis",
  "Risk Management Tools",
  "Real-Time Alerts & Notifications",
  "Lifetime Software Updates",
  "Dedicated Support",
];

export function IndicatorProduct() {
  const [i, setI] = useState(0);
  const current = shots[i]!;

  return (
    <section id="indicator" className="surface-navy py-24 text-primary-foreground">
      <div className="mx-auto max-w-[1200px] px-5">
        <p className="eyebrow text-brand-light">Tiger Grow Premium</p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
          Premium Indicator for <span className="text-brand-light">Futures Trading</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-primary-foreground/80">
          Lifetime access for serious futures traders — buy and sell signals, entry, stop loss and four target levels
          right on your TradingView chart.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-sm border border-primary-foreground/15 bg-primary-foreground/[0.04]">
            <div className="flex items-center justify-between gap-4 border-b border-primary-foreground/15 px-5 py-4">
              <p className="text-xs font-semibold text-primary-foreground/85">{current.label}</p>
              <div className="flex gap-2">
                <button
                  aria-label="Previous indicator screenshot"
                  onClick={() => setI((v) => (v === 0 ? shots.length - 1 : v - 1))}
                  className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/30 transition-colors hover:border-brand-light hover:text-brand-light"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  aria-label="Next indicator screenshot"
                  onClick={() => setI((v) => (v === shots.length - 1 ? 0 : v + 1))}
                  className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/30 transition-colors hover:border-brand-light hover:text-brand-light"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${i * 100}%)` }}
              >
                {shots.map((s) => (
                  <div key={s.src} className="w-full shrink-0 p-4">
                    <img
                      src={s.src}
                      alt={`Tiger Grow Premium indicator on TradingView — ${s.label}`}
                      loading="lazy"
                      className="w-full rounded-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 pb-5">
              {shots.map((s, idx) => (
                <button
                  key={s.src}
                  aria-label={`Show ${s.label}`}
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === i ? "w-8 bg-brand-light" : "w-2 bg-primary-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="rounded-sm border border-brand-light/40 bg-primary-foreground/[0.05] p-8">
            <p className="eyebrow text-brand-light">Lifetime access</p>
            
            <p className="mt-1 text-[0.7rem] tracking-widest text-primary-foreground/60">
              ONE-TIME PAYMENT • PAY ONCE, USE FOR LIFETIME
            </p>

            <ul className="mt-7 space-y-2.5">
              {features.map((f) => (
                <li key={f} className="flex gap-3 text-xs font-medium text-primary-foreground/85">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-light" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(
                "Hi Tiger Grow, I want to get the Tiger Grow Premium indicator ($350 lifetime access) for futures trading.",
              )}
              target="_blank"
              rel="noreferrer noopener"
              className="surface-brand mt-8 flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-bold"
            >
              Get Indicator <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-center text-[0.65rem] text-primary-foreground/60">
              For futures traders | TradingView indicator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
