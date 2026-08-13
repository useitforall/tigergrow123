import { useState } from "react";

const features = [
  "Upfront Payment",
  "Primary Service",
  "Algo Location",
  "Trading Account",
  "Upfront Licence Fee",
  "Profit Sharing",
  "Customer Receives EA",
  "Trade Generation",
  "Strategy Updates",
  "Result Similarity",
  "Customer Involvement",
  "Tiger Grow Operational Support",
  "Best Suited For",
];

const models = [
  {
    id: "license",
    label: "License Model",
    tagline: "Own the software licence and run Tiger Grow on your own MT5 terminal.",
    values: [
      "YES",
      "Software licence",
      "Customer's MT5/VPS",
      "Customer's account",
      "Normally applicable",
      "No",
      "Usually yes, protected version",
      "EA runs locally",
      "May require customer-side update",
      "Based on customer account execution",
      "Higher",
      "Technical support",
      "Independent customers",
    ],
  },
  {
    id: "profit",
    label: "Profit Sharing",
    tagline: "Performance-linked model with managed integration and monitoring.",
    values: [
      "NO",
      "Direct algo integration",
      "Customer's MT5/VPS",
      "Customer's account",
      "Optional or lower",
      "Yes",
      "Usually no unrestricted file access",
      "EA runs locally",
      "Updated during managed support",
      "Based on customer account execution",
      "Medium",
      "Integration and monitoring",
      "Performance-linked customers",
    ],
  },
  {
    id: "copy",
    label: "Copy Trading",
    tagline: "Connect your account and mirror trades from the Tiger Grow master account.",
    values: [
      "NO",
      "Trade-copying access",
      "Master account plus copy system",
      "Customer's connected account",
      "Usually subscription or connection fee",
      "Yes",
      "No",
      "Master account generates trades",
      "Updated centrally",
      "May differ from master due to copying delays",
      "Lower",
      "Master and copy-system monitoring",
      "Customers seeking simple trade replication",
    ],
  },
];

export function ProductModels() {
  const [active, setActive] = useState(models[0].id);
  const model = models.find((m) => m.id === active)!;

  return (
    <section id="models" className="surface-navy relative overflow-hidden py-24 text-primary-foreground">
      <div className="pointer-events-none absolute -right-32 top-0 h-[640px] w-[640px] rounded-full border border-primary-foreground/10" aria-hidden />
      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="text-center">
          <p className="eyebrow text-brand-light">Tiger Grow business models</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Choose the Right{" "}
            <span className="border-b-4 border-brand-light pb-2 text-brand-light">Product Model</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-primary-foreground/75">
            Compare how each Tiger Grow product works, where the algorithm operates, and the level of support and
            involvement provided.
          </p>
        </div>

        <div className="mt-12 -mx-5 overflow-x-auto px-5">
          <div role="tablist" aria-label="Product models" className="mx-auto flex w-max gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/[0.05] p-1.5">
            {models.map((m) => (
              <button
                key={m.id}
                role="tab"
                aria-selected={active === m.id}
                onClick={() => setActive(m.id)}
                className={`whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                  active === m.id
                    ? "surface-brand text-primary-foreground"
                    : "text-primary-foreground/70 hover:text-brand-light"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-sm border border-primary-foreground/10 bg-primary-foreground/[0.03] p-6 sm:p-10">
          <h3 className="font-display text-2xl font-bold text-brand-light">{model.label}</h3>
          <p className="mt-2 text-sm text-primary-foreground/75">{model.tagline}</p>

          <dl className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {features.map((f, i) => (
              <div key={f} className="flex justify-between gap-6 border-t border-primary-foreground/10 py-3 text-sm">
                <dt className="font-semibold text-brand-light">{f}</dt>
                <dd className="text-right text-primary-foreground/85">{model.values[i]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
