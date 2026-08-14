import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { z } from "zod";
import { whatsappLink } from "@/lib/site-links";

const schema = z.object({
  name: z.string().trim().nonempty("Please enter your name").max(100),
  mobile: z.string().trim().min(7, "Please enter a valid mobile number").max(20),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  message: z.string().trim().nonempty("Please tell us how we can help").max(1000),
});

const cards = [
  {
    icon: MapPin,
    title: "Head Office",
    lines: ["Metpally, new SBI Bank and", "ADP Canara Bank opposite, 505325", "Jagityal district, Telangana state"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 9182630158", "+91 7989930158"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["tigergrow1122@gmail.com", "tigernarendra1415@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Monday to Friday", "10:00 A.M. to 06:00 P.M. IST"],
  },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setError(null);
    const d = parsed.data;
    const text = `New enquiry — Algo Tiger Grow\n\nName: ${d.name}\nMobile: ${d.mobile}\nEmail: ${d.email}\n\nMessage: ${d.message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const field =
    "mt-2 w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-accent/50 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-secondary blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, lines }) => (
            <article key={title} className="card-elevated p-7">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{title}</h3>
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                {lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="card-elevated mt-8 grid gap-6 p-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-primary">
            <Landmark className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-lg font-bold text-navy">Bank Details</h3>
            <div className="mt-3 grid gap-x-10 gap-y-1 text-sm text-muted-foreground sm:grid-cols-2">
              <p>Telangana Grameen Bank</p>
              <p>A/C No: <span className="font-semibold text-navy">79111969586</span></p>
              <p>IFSC Code: <span className="font-semibold text-navy">TGRB0000177</span></p>
              <p>Name: Tiger Grow Software Service</p>
              <p>Metpally – 505325</p>
            </div>
          </div>
        </div>

        </div>

        <div className="card-elevated mt-14 grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-primary">Contact Algo Tiger Grow</p>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
              Message Us and We’ll Get Back to You Shortly
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Share your enquiry with our team. We’ll respond using the email address or mobile number you provide.
            </p>
            <div className="mt-8 rounded-sm bg-ice p-6">
              <p className="text-sm font-semibold text-navy">Prefer instant chat?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Your enquiry opens directly in WhatsApp with our support team.
              </p>
            </div>
          </div>

          <form onSubmit={submit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-xs font-semibold text-navy">Full Name</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your full name"
                maxLength={100}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="mobile" className="text-xs font-semibold text-navy">Mobile Number</label>
              <input
                id="mobile"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                placeholder="+91 00000 00000"
                maxLength={20}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold text-navy">Email Address</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter your email address"
                maxLength={255}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-semibold text-navy">Message</label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us how we can help you"
                maxLength={1000}
                className={field}
              />
            </div>

            {error && <p className="text-sm font-medium text-destructive">{error}</p>}

            <button
              type="submit"
              className="surface-brand inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Submit Enquiry <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
