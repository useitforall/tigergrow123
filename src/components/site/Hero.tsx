import { Check, Bitcoin, IndianRupee, LineChart, Globe } from "lucide-react";
import { TradingAnimation } from "@/components/site/TradingAnimation";

const features = [
  "1 Approved MT5 Account",
  "Lifetime Licence Duration",
  "Access To All Risk Modes",
  "Full Tiger Grow Access",
  "Installation Assistance Included",
  "Premium Priority Technical Support",
  "Lifetime Software Updates",
];

const markets = [
  { icon: Bitcoin, label: "Crypto Market" },
  { icon: IndianRupee, label: "Indian Market" },
  { icon: Globe, label: "Forex Market" },
  { icon: LineChart, label: "Commodities" },
];

export function Hero() {
  return (
    <section className="surface-navy relative overflow-hidden py-24 text-primary-foreground">
      <div className="pointer-events-none absolute -left-40 -top-24 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <p className="eyebrow flex items-center gap-3 text-brand-light">
            <span className="h-0.5 w-8 bg-brand-light" /> Tiger Grow AI Algo Bot
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-6xl">
            The Next Generation
            <br />
            <span className="text-brand-light">AI Trading Software.</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/80">
            Algo Tiger Grow builds trading algo software and trading indicator software that automate your strategy end
            to end. Our AI bot scans the market, executes with strict risk control and helps traders work towards
            consistent, disciplined profits instead of emotional guesswork.
          </p>

          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-xs font-semibold">
                <span className="surface-brand grid h-5 w-5 shrink-0 place-items-center rounded-full">
                  <Check className="h-3 w-3" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#prices" className="surface-brand rounded-sm px-6 py-3 text-sm font-semibold">
              View Licence Plans
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-primary-foreground/30 px-6 py-3 text-sm font-semibold transition-colors hover:border-brand-light hover:text-brand-light"
            >
              Talk To Our Team
            </a>
          </div>
        </div>

        <div>
          <div className="relative mx-auto w-full max-w-md rounded-sm border border-primary-foreground/15 bg-primary-foreground/[0.04] p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between text-[0.6rem] font-bold tracking-[0.2em] text-primary-foreground/60">
              <span>TIGER GROW AI BOT</span>
              <span className="flex items-center gap-2 text-brand-light">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-light" /> LIVE
              </span>
            </div>
            <TradingAnimation />
            <div className="mt-2 grid grid-cols-3 gap-2 text-center">
              {[
                ["Win Rate", "78%"],
                ["Risk Modes", "3"],
                ["Uptime", "24/5"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-sm bg-primary-foreground/[0.06] py-2">
                  <p className="font-display text-lg font-bold text-brand-light">{v}</p>
                  <p className="text-[0.55rem] tracking-widest text-primary-foreground/60">{k}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="eyebrow mt-10 text-center text-primary-foreground/60">Works on</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {markets.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-sm border border-primary-foreground/15 px-3 py-4 text-center text-[0.7rem] font-semibold"
              >
                <Icon className="mx-auto mb-2 h-5 w-5 text-brand-light" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
