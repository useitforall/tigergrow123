import { Activity, Diamond, ArrowUpRight, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Activity,
    title: "Intelligent Trade Execution",
    body: "AION continuously evaluates its defined strategy conditions and executes qualified opportunities without emotional interference.",
    cta: "Explore approach",
  },
  {
    icon: Diamond,
    title: "Controlled Risk Management",
    body: "Every trading decision follows structured risk parameters designed to protect capital and support consistent long-term operation.",
    cta: "View risk framework",
    featured: true,
  },
  {
    icon: ArrowUpRight,
    title: "Transparent Performance",
    body: "Review live-account activity and historical backtest results clearly, with practical information instead of unrealistic promises.",
    cta: "View results",
  },
];

export function WhatWeDo() {
  return (
    <section id="products" className="relative overflow-hidden bg-background py-24">
      <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-ice" aria-hidden />
      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow flex items-center gap-3 text-primary">
              <span className="h-0.5 w-8 bg-primary" /> What we do
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-[1.1] text-navy sm:text-5xl">
              A Smarter Way to
              <br />
              <span className="text-primary">Trade with Discipline.</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground lg:pb-3">
            Algo AION brings strategy, risk controls and automated execution together in one focused MT5 trading
            system built for the XAUUSD market.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body, cta, featured }) => (
            <article
              key={title}
              className={
                featured
                  ? "surface-brand rounded-sm p-8 text-primary-foreground shadow-[var(--shadow-card)]"
                  : "card-elevated p-8"
              }
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-sm ${
                  featured ? "bg-primary-foreground/20 text-primary-foreground" : "bg-accent text-primary"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3 className={`mt-14 text-xl font-bold ${featured ? "" : "text-navy"}`}>{title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${featured ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                {body}
              </p>
              <a
                href="#contact"
                className={`eyebrow mt-8 inline-flex items-center gap-3 ${featured ? "" : "text-primary"}`}
              >
                {cta} <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
