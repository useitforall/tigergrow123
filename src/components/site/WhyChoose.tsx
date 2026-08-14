import { Check } from "lucide-react";
import { RiskShieldAnimation } from "@/components/site/RiskShieldAnimation";

const points = [
  "MT5 Native Execution",
  "Premium Priority Support",
  "Crypto, Forex & Indian Markets",
  "Transparent Performance",
  "Controlled Risk Framework",
  "Lifetime Software Updates",
];

export function WhyChoose() {
  return (
    <section className="surface-brand py-20 text-primary-foreground">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-primary-foreground/80">Why choose Algo Tiger Grow</p>
          <h2 className="mt-4 inline-block border-b-2 border-primary-foreground pb-3 text-4xl font-bold leading-[1.15] sm:text-5xl">
            Built for Smarter,
            <br />
            Disciplined Trading.
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-primary-foreground/85">
            The Tiger Grow AI algo bot brings together structured strategy rules, controlled risk and dependable
            automation so you can pursue consistent profits across every market you trade.
          </p>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-xs font-semibold">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-primary-foreground/60">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <RiskShieldAnimation />
      </div>
    </section>
  );
}
