import { BookOpen, Wallet, TrendingDown, UserCheck, AlertTriangle, Ban } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Software & Education",
    text: "We provide digital trading tools and educational content with clearly stated product information.",
  },
  {
    icon: Wallet,
    title: "No Client Funds",
    text: "We do not receive trading capital, deposits, or investment funds from customers.",
  },
  {
    icon: TrendingDown,
    title: "No Guaranteed Returns",
    text: "We do not promise profit, fixed income, loss recovery, or any guaranteed trading outcome.",
  },
  {
    icon: UserCheck,
    title: "Customer Responsibility",
    text: "Customers independently choose their broker, account, settings, leverage, lot size, and risk controls.",
  },
];

export function Responsibility() {
  return (
    <>
      <section id="responsibility" className="bg-ice py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="text-center">
            <p className="eyebrow text-primary">Our role &amp; responsibility</p>
            <h2 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">
              Software Provider, <span className="text-primary">Not an Investment Service</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm text-muted-foreground">
              Our website provides digital software products, technical support, and educational resources. Trading
              decisions and account risk remain under the customer’s control.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map(({ icon: Icon, title, text }) => (
              <article key={title} className="card-elevated flex flex-col p-7">
                <span className="grid h-12 w-12 place-items-center rounded-sm bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="disclaimer" className="surface-navy py-20 text-primary-foreground">
        <div className="mx-auto max-w-[1000px] px-5">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-brand-light" />
            <h2 className="font-display text-2xl font-bold">Risk Disclaimer</h2>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-primary-foreground/75">
            Forex, CFD, leveraged, algorithmic, and automated trading involve a high risk of financial loss. Algo Tiger
            Grow provides trading software, technical setup assistance, and educational information only. We are not a
            broker, financial adviser, portfolio manager, fund manager, or investment company. We do not accept client
            trading funds, operate customer trading accounts, or guarantee profit, fixed returns, income, loss recovery,
            or any specific result. Backtests, screenshots, demonstrations, simulations, and past performance are
            illustrative or historical and do not guarantee future live-market results. Actual results may differ because
            of spreads, slippage, liquidity, execution delays, broker conditions, news volatility, leverage, lot size,
            software settings, internet or VPS performance, and individual trading decisions. Customers remain
            responsible for checking product compatibility, selecting a broker, configuring risk settings, and deciding
            whether to trade. Test the software on a demo account before live use and never trade with money you cannot
            afford to lose.
          </p>
        </div>
      </section>
    </>
  );
}
