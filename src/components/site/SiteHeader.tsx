import { Youtube, Instagram, Send, MessageCircle, ChevronDown, ArrowDown } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/site-links";

const nav = ["Home", "Software", "Models", "Modes", "Prices", "Indicator", "Results", "Report", "Contact"];

const socials = [
  { icon: Youtube, label: "YouTube", href: SOCIAL_LINKS.youtube },
  { icon: Instagram, label: "Instagram", href: SOCIAL_LINKS.instagram },
  { icon: Send, label: "Telegram", href: SOCIAL_LINKS.telegram },
  { icon: MessageCircle, label: "WhatsApp", href: SOCIAL_LINKS.whatsapp },
];

export function SiteHeader() {
  return (
    <header className="surface-navy relative">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-8 gap-y-3 px-5 py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-primary-foreground">
            <img src="/images/tiger-grow-mark.png" alt="Algo Tiger Grow logo" width={44} height={44} className="h-full w-full object-contain" />
          </span>
          <span className="font-display text-2xl font-bold text-primary-foreground">
            Algo <span className="text-brand-light">Tiger Grow</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-primary-foreground/85 lg:flex">
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
            +91 9182630158 <span className="mx-1 text-primary-foreground/40">|</span> +91 7989930158
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
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
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Tiger Grow AI bot active
          </span>
        </div>
      </div>
    </header>
  );
}
