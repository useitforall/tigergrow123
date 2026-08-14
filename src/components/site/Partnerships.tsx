import { Check, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site-links";

const tiers = [
  {
    level: "Entry Level",
    name: "Gold Partnership",
    blurb: "Ideal for new and small vendors beginning their Tiger Grow partnership journey.",
    price: "$1,499/-",
    period: "1 Year",
    features: [
      "Unlimited Licences (Terms & Conditions Apply)",
      "Standard Welcome Gift",
      "Approved Vendor Partnership",
      "Technical Training",
      "Installation Assistance",
      "Standard Technical Support",
      "Software Updates as per the Licence Plan",
    ],
  },
  {
    level: "Advanced Level",
    name: "Platinum Partnership",
    blurb: "Designed for growing vendors who need greater licence capacity and priority assistance.",
    price: "$1,999/-",
    period: "2 Years",
    featured: true,
    features: [
      "Unlimited Licences (Terms & Conditions Apply)",
      "Premium Welcome Gift",
      "Approved Vendor Partnership",
      "Partner Own Branding",
      "IB Partner Code",
      "Advanced Technical Training",
      "Priority Installation Assistance",
      "Priority Technical Support",
      "Software Updates as per the Licence Plan",
    ],
  },
  {
    level: "Premium Level",
    name: "Diamond Partnership",
    blurb: "Created for established vendors seeking maximum scale and long-term business support.",
    price: "$2,499/-",
    period: "3 Years",
    features: [
      "Unlimited Licences (Terms & Conditions Apply)",
      "Exclusive Welcome Gift",
      "Approved Vendor Partnership",
      "Partner Own Branding",
      "IB Partner Code",
      "Complete Technical Training",
      "Dedicated Installation Assistance",
      "Highest-Priority Technical Support",
      "Software Updates as per the Licence Plan",
    ],
  },
];

export function Partnerships() {
  return (
    <section id="partnership" className="bg-background py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center">
          <p className="eyebrow text-primary">Tiger Grow partner programme</p>
          <h2 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">
            Build Your Business With Our{" "}
            <span className="text-primary underline decoration-4 underline-offset-8">Partnership</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm text-muted-foreground">
            A complete business-support package for partners who want to offer Tiger Grow under their own brand, build a
            customer network, and receive ongoing technical and operational assistance.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`flex flex-col p-8 ${
                t.featured ? "surface-navy rounded-sm text-primary-foreground shadow-[var(--shadow-card)]" : "card-elevated"
              }`}
            >
              <span
                className={`eyebrow w-fit rounded-full px-3 py-1 text-[0.6rem] ${
                  t.featured ? "surface-brand text-primary-foreground" : "bg-accent text-primary"
                }`}
              >
                {t.level}
              </span>
              <h3 className={`mt-6 text-2xl font-bold ${t.featured ? "" : "text-navy"}`}>{t.name}</h3>
              <p className={`mt-2 text-xs leading-relaxed ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {t.blurb}
              </p>

              <div className={`mt-6 flex items-end justify-between border-t pt-6 ${t.featured ? "border-primary-foreground/15" : "border-border"}`}>
                <div>
                  <p className={`text-xs font-semibold ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    Partner Price
                  </p>
                  <p className={`font-display text-4xl font-bold ${t.featured ? "" : "text-primary"}`}>{t.price}</p>
                </div>
                <div className="text-right">
                  <p className={`text-xs font-semibold ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    Agreement Period
                  </p>
                  <p className={`font-display text-lg font-bold ${t.featured ? "" : "text-navy"}`}>{t.period}</p>
                </div>
              </div>

              <ul className={`mt-6 space-y-3 border-t pt-6 text-sm ${t.featured ? "border-primary-foreground/15" : "border-border"}`}>
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-brand-light" : "text-primary"}`} />
                    <span className={t.featured ? "text-primary-foreground/90" : "text-navy"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(`Hi Tiger Grow, I'd like to enquire about the ${t.name}.`)}
                target="_blank"
                rel="noreferrer noopener"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
                  t.featured ? "surface-brand text-primary-foreground" : "bg-navy text-primary-foreground"
                }`}
              >
                Enquire About {t.name.split(" ")[0]} <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          Partnership pricing is available on request. All licence allocations and partnership benefits are subject to
          applicable terms, eligibility, and approval. Trading involves market risk and returns are not guaranteed.
        </p>
      </div>
    </section>
  );
}
