import { Youtube, Instagram, Send, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/tiger-grow-logo.jpg.asset.json";

const socials = [Youtube, Instagram, Send, MessageCircle];

export function SiteFooter() {
  return (
    <footer id="contact" className="surface-navy text-primary-foreground">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-primary-foreground">
              <img src={logo.url} alt="Algo Tiger Grow logo" width={44} height={44} className="h-full w-full object-contain" />
            </span>
            <p className="font-display text-2xl font-bold text-primary-foreground">
              Algo <span className="text-brand-light">Tiger Grow</span>
            </p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            Tiger Grow AI Algo Bot — next generation AI trading software and indicator software for crypto, forex and
            Indian markets, built around structured strategy rules and controlled risk.
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
            {["Home", "Software", "Models", "Modes", "Prices", "Results"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-brand-light">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-display text-base font-bold">Tiger Narendra</p>
          <p className="text-xs tracking-widest text-primary-foreground/60">FOUNDER &amp; CEO</p>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-widest">CONTACT</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand-light" />
              <a href="tel:+919182630158" className="hover:text-brand-light">+91 9182630158</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand-light" />
              <a href="tel:+917989930158" className="hover:text-brand-light">+91 7989930158</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand-light" />
              <a href="mailto:tigergrow1122@gmail.com" className="hover:text-brand-light">tigergrow1122@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand-light" />
              <a href="mailto:tigernarendra1415@gmail.com" className="hover:text-brand-light">tigernarendra1415@gmail.com</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
              <span>
                Metpally, opposite SBI, ADB Bank &amp; Canara Bank, 505325, Telangana, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-4 w-4 text-center text-xs font-bold text-brand-light">T</span>
              <a href="https://tigergrow.in" className="hover:text-brand-light">tigergrow.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Algo Tiger Grow. Trading involves risk. Past performance is not indicative of
        future results.
      </div>
    </footer>
  );
}
