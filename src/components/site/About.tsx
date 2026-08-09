import { Target, ShieldCheck, LineChart } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const points = [
  {
    icon: Target,
    title: "Our Mission & Vision",
    body: "To make disciplined algorithmic trading more accessible through structured automation, controlled risk and transparent long-term performance.",
  },
  {
    icon: ShieldCheck,
    title: "Capital Protection First",
    body: "Predefined position controls and exit conditions keep every AION trade inside a clear, repeatable risk framework.",
  },
  {
    icon: LineChart,
    title: "XAUUSD Specialisation",
    body: "One focused MT5 system, engineered around the behaviour of the gold market rather than generic multi-symbol logic.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-ice py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 lg:grid-cols-2">
        <div className="relative">
          <img
            src={aboutTeam}
            alt="Trading team reviewing XAUUSD charts on multiple monitors"
            width={1000}
            height={800}
            loading="lazy"
            className="w-full rounded-sm object-cover shadow-[var(--shadow-card)]"
          />
          <div className="surface-brand absolute -top-8 right-0 grid h-32 w-32 place-items-center text-center text-primary-foreground sm:right-6">
            <div>
              <p className="font-display text-3xl font-bold">24/5</p>
              <p className="mt-1 text-[0.65rem] font-semibold">Automated Operation</p>
            </div>
          </div>
        </div>

        <div>
          <p className="eyebrow flex items-center gap-3 text-primary">
            <span className="h-0.5 w-8 bg-primary" /> About Algo Aion
          </p>
          <h2 className="mt-5 inline-block border-b-4 border-primary pb-3 text-4xl font-bold leading-[1.1] text-navy sm:text-5xl">
            Intelligent Automation.
            <br />
            Built for Discipline.
          </h2>

          <div className="mt-10 space-y-8">
            {points.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
