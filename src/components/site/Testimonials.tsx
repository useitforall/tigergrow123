import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Rakesh Yadav",
    role: "Full-time trader, Hyderabad",
    text: "I ran Tiger Grow on a demo account for three weeks before going live. The low risk mode kept my drawdown small and the lot sizing rules are exactly as documented. No magic promises, just a disciplined system.",
  },
  {
    name: "Sandeep Reddy",
    role: "Part-time trader, Karimnagar",
    text: "Installation on my VPS took about twenty minutes with their support team on call. What I like most is that I still control the broker, leverage and risk mode — the bot only handles execution.",
  },
  {
    name: "Priya Menon",
    role: "IT professional, Bengaluru",
    text: "I used to over-trade every evening after work. Since switching to the algo I only review the journal. Some weeks are flat, some are good, but the emotional trading is gone.",
  },
  {
    name: "Mohammed Arif",
    role: "Vendor partner, Nizamabad",
    text: "Took the Gold partnership last year. The training and branding support helped me onboard my first eleven clients. Support responses usually come back the same day.",
  },
  {
    name: "Vikram Shetty",
    role: "Swing trader, Mumbai",
    text: "XAUUSD on M5 is fast and I did see a drawdown month. But the equity lock setting saved my capital and the team explained the settings clearly instead of hiding behind jargon.",
  },
  {
    name: "Anitha Rao",
    role: "Trader, Warangal",
    text: "The indicator software alone was worth it for me. Clean signals, no repainting, and the update was pushed to me without extra charge as promised in my licence.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, reviews.length - perView);
  const clamped = Math.min(index, maxIndex);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 5000);
    return () => clearInterval(t);
  }, [maxIndex]);

  return (
    <section id="reviews" className="bg-ice py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-primary">Trader feedback</p>
            <h2 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">
              What Our <span className="border-b-4 border-primary pb-2">Clients Say</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous review"
              onClick={() => setIndex((i) => (i <= 0 ? maxIndex : i - 1))}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-navy transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next review"
              onClick={() => setIndex((i) => (i >= maxIndex ? 0 : i + 1))}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-navy transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${clamped * (100 / perView)}%)` }}
          >
            {reviews.map((r) => (
              <div key={r.name} className="shrink-0 px-3" style={{ width: `${100 / perView}%` }}>
                <article className="card-elevated flex h-full flex-col p-7">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">“{r.text}”</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-accent font-display font-bold text-primary">
                      {r.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold text-navy">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.role}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
