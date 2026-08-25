import founderPhoto from "@/assets/founder-tiger-narendra.jpg.asset.json";

export function Founder() {
  return (
    <section id="founder" className="bg-ice py-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-sm border border-primary/30" aria-hidden />
          <img
            src={founderPhoto.url}
            alt="Tiger Narendra, Founder & CEO of Algo Tiger Grow"
            className="relative w-full rounded-sm object-cover shadow-lg"
            loading="lazy"
          />
        </div>

        <div>
          <p className="eyebrow text-primary">Founder &amp; CEO</p>
          <h2 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">Tiger Narendra</h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Founder &amp; CEO of Algo Tiger Grow. Tiger Narendra leads the development of our AI algo trading software
            and indicator tools, focusing on disciplined, rule-based execution and strict risk control so traders can
            follow a structured process instead of emotional guesswork.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Every product we ship — from the Tiger Grow AI Algo Bot to the Tiger Grow Premium indicator — is built
            around the same principle: clear rules, controlled risk, and full transparency with our customers.
          </p>
        </div>
      </div>
    </section>
  );
}
