import { Youtube, Instagram, Send, MessageCircle, Phone, Mail } from "lucide-react";

const socials = [Youtube, Instagram, Send, MessageCircle];

export function SiteFooter() {
  return (
    <footer id="contact" className="surface-navy text-primary-foreground">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold text-brand-light">Algo Aion</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            A focused MT5 algorithmic trading system for XAUUSD, built around structured strategy rules, controlled
            risk and transparent performance.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#contact"
                aria-label="Social profile"
                className="surface-brand grid h-9 w-9 place-items-center rounded-full transition-transform hover:scale-110"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-widest">QUICK LINKS</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            {["Home", "Products", "Modes", "Prices", "Results"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-brand-light">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-widest">CONTACT</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand-light" /> +91 9030470808
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand-light" /> +91 9030570808
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand-light" /> support@algo-aion.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Algo Aion. Trading involves risk. Past performance is not indicative of future
        results.
      </div>
    </footer>
  );
}
