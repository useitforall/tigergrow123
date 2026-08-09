import { Youtube, Instagram, Send, MessageCircle, ChevronDown, ArrowDown } from "lucide-react";

const nav = ["Home", "Products", "Modes", "Prices", "Results", "Contact"];

const socials = [
  { icon: Youtube, label: "YouTube" },
  { icon: Instagram, label: "Instagram" },
  { icon: Send, label: "Telegram" },
  { icon: MessageCircle, label: "WhatsApp" },
];

export function SiteHeader() {
  return (
    <header className="surface-navy sticky top-0 z-50">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-8 gap-y-3 px-5 py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-brand-light/50 text-brand-light">
            <BrainMark />
          </span>
          <span className="font-display text-2xl font-bold text-brand-light">Algo Aion</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-primary-foreground/85 lg:flex">
          {nav.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`flex items-center gap-1 pb-1 transition-colors hover:text-brand-light ${
                i === 0 ? "border-b-2 border-brand-light text-primary-foreground" : ""
              }`}
            >
              {item}
              {i === 0 && <ChevronDown className="h-3.5 w-3.5" />}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <p className="hidden font-display text-sm font-bold text-primary-foreground md:block">
            +91 9030470808 <span className="mx-1 text-primary-foreground/40">|</span> +91 9030570808
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="surface-brand grid h-8 w-8 place-items-center rounded-full text-primary-foreground transition-transform hover:scale-110"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4">
          <span className="eyebrow flex items-center gap-3 text-primary-foreground/70">
            Scroll to explore <ArrowDown className="h-4 w-4 animate-bounce" />
          </span>
          <span className="eyebrow flex items-center gap-2 rounded-full border border-brand-light/40 px-4 py-1.5 text-brand-light">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Aion system active
          </span>
        </div>
      </div>
    </header>
  );
}

function BrainMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M12 7c-3 0-4 2-4 5s1 5 4 5M12 7c3 0 4 2 4 5s-1 5-4 5" />
    </svg>
  );
}
