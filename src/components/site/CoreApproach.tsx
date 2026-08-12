import { ChevronRight } from "lucide-react";

const items = [
  { pct: 78, label: "Execution", title: "Strategy Execution", body: "The AI bot identifies qualified market conditions and executes predefined trading rules with speed, precision and discipline." },
  { pct: 65, label: "Risk Control", title: "Risk Management", body: "Structured position controls and predefined exit conditions help Tiger Grow keep capital protection central to every trade." },
  { pct: 50, label: "Analysis", title: "Market Analysis", body: "The system continuously evaluates price behaviour and strategy conditions without emotional decision-making." },
  { pct: 69, label: "Automation", title: "24/5 Automation", body: "The bot stays ready across crypto, forex and Indian market sessions, applying the same rules consistently whenever valid setups appear." },
];

function Ring({ pct, label }: { pct: number; label: string }) {
  const r = 46;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-28 w-28 shrink-0">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeWidth="4" className="text-primary-foreground/10" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${(pct / 100) * c} ${c}`}
          className="text-brand-light"
        />
      </svg>
      <div className="absolute inset-0 grid place-content-center text-center">
        <p className="font-display text-xl font-bold text-primary-foreground">{pct}%</p>
        <p className="text-[0.55rem] tracking-wider text-primary-foreground/60">{label}</p>
      </div>
    </div>
  );
}

export function CoreApproach() {
  return (
    <section className="surface-navy relative overflow-hidden py-24 text-primary-foreground">
      <div className="pointer-events-none absolute -right-24 top-8 h-[560px] w-[560px] rounded-full border border-primary-foreground/10" aria-hidden />
      <div className="relative mx-auto max-w-[1100px] px-5">
        <div className="text-center">
          <p className="eyebrow text-brand-light">Tiger Grow capabilities</p>
          <h2 className="relative mt-4 inline-block border-b-2 border-brand-light pb-3 text-4xl font-bold sm:text-5xl">
            Core Approach
            <span className="surface-brand absolute -right-8 -top-2 grid h-7 w-7 place-items-center rounded-full text-[0.6rem] font-bold">
              04
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="flex gap-6">
              <Ring pct={it.pct} label={it.label} />
              <div>
                <h3 className="text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{it.body}</p>
                <a href="#contact" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary-foreground/80">
                  <ChevronRight className="h-3.5 w-3.5" /> Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
