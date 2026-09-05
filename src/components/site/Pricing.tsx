import { Check } from "lucide-react";
import { whatsappLink } from "@/lib/site-links";

const plans = [
  {
    letter: "F",
    name: "Free",
    sub: "14 Days Trial Access for Beginners",
    now: "0",
    features: [
      "1 Approved MT5 Account",
      "14 Days Trial Period",
      "Access To All Risk Modes",
      "Full Algo Access",
      "Installation Assistance Included",
      "Free Technical Support",
      "Software Updates During Licence Period",
    ],
    trial: true,
  },
  {
    letter: "P",
    name: "Standard",
    sub: "Permanent Access For Serious Traders",
  
    now: "749",
    features: [
      "1 Approved MT5 Account",
      "1 year Licence Duration",
      "Access To All Risk Modes",
      "Full Tiger Grow Access",
      "Lifetime Software Updates",
    ],
  },
  {
    letter: "F",
    name: "Premium",
    sub: "Complete Branded Business Solution",
    
    now: "1299",
    features: ["Welcome Gift","Lifetime Licence Duration", "Own Branding", "Approved Vendor Partnership", "IB Partner Code", "Technical Training"],
    featured: true,
  },
  {
    letter: "Pro",
    name: "Pro",
    sub: "Complete Branded Business Solution",
    was: "$4,999/-",
    now: "2,499",
    features: ["Welcome Gift", "Own Branding", "Lifetime 4 Licence Duration", "Approved Vendor Partnership", "IB Partner Code", "Technical Training"],
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="prices" className="relative overflow-hidden bg-ice py-24">
      <div className="pointer-events-none absolute -left-40 top-16 h-[520px] w-[520px] rounded-full bg-accent/40" aria-hidden />
      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="text-center">
          <p className="eyebrow text-primary">Tiger Grow licence pricing</p>
          <h2 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">
            Choose Your <span className="text-primary underline decoration-4 underline-offset-8">Licence Plan</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground">
            Compare Tiger Grow licence packages and select the plan that best matches your trading-account requirements and
            preferred licence duration.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col p-8 ${
                p.featured
                  ? "surface-navy rounded-sm text-primary-foreground shadow-[var(--shadow-card)]"
                  : "card-elevated"
              }`}
            >
              {p.featured && (
                <span className="surface-brand eyebrow absolute right-6 top-6 rounded-full px-3 py-1 text-[0.6rem] text-primary-foreground">
                  Best value
                </span>
              )}
              <span
                className={`grid h-12 w-12 place-items-center rounded-sm font-display text-xl font-bold ${
                  p.featured ? "bg-primary-foreground/15 text-brand-light" : "bg-accent text-primary"
                }`}
              >
                {p.letter}
              </span>
              <h3 className={`mt-8 text-2xl font-bold ${p.featured ? "" : "text-navy"}`}>{p.name}</h3>
              <p className={`mt-1 text-xs ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {p.sub}
              </p>

              {!p.trial && (
                <>
                  <p className={`mt-7 text-sm font-semibold ${p.featured ? "" : "text-navy"}`}>
                    Actual Price: <span className="text-destructive line-through">{p.was}</span>
                  </p>
                  <span
                    className={`eyebrow mt-3 w-fit rounded-full px-3 py-1 ${
                      p.featured ? "surface-brand text-primary-foreground" : "bg-accent text-primary"
                    }`}
                  >
                    50% OFF
                  </span>
                </>
              )}
              <p className="mt-3 flex items-end gap-2">
                <span className={`pb-1 text-xs font-semibold ${p.featured ? "" : "text-navy"}`}>
                  {p.trial ? "Trial" : "Now"}
                </span>
                <span className={`font-display text-5xl font-bold ${p.featured ? "" : "text-primary"}`}>
                  ${p.now}
                </span>
              </p>

              <ul className={`mt-7 space-y-3 border-t pt-7 text-sm ${p.featured ? "border-primary-foreground/15" : "border-border"}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-brand-light" : "text-primary"}`} />
                    <span className={p.featured ? "text-primary-foreground/90" : "text-navy"}>{f}</span>
                  </li>
                ))}
              </ul>

              {p.trial ? (
                <span className="mt-8 inline-flex items-center justify-center rounded-sm border border-primary/30 bg-accent px-5 py-3 text-sm font-semibold text-primary">
                  Start Free Trial
                </span>
              ) : (
                <a
                  href={whatsappLink(`Hi Tiger Grow, I'm interested in the ${p.name} licence plan.`)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`mt-8 inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
                    p.featured ? "surface-brand text-primary-foreground" : "bg-navy text-primary-foreground"
                  }`}
                >
                  Get {p.name}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
