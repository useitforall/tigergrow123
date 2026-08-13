import { ArrowRight } from "lucide-react";
import { BacktestGallery } from "@/components/site/BacktestGallery";

const settings: [string, string][] = [
  ["Expert", "Tiger Grow AI Algo Bot"],
  ["Symbol", "XAUUSD"],
  ["Period", "M5 (2026.01.01 - 2026.01.31)"],
  ["Company", "Vantage Markets (Pty) Ltd"],
  ["Currency", "USD"],
  ["Initial Deposit", "200 000.00"],
  ["Leverage", "1:2000"],
];

const results: [string, string][] = [
  ["History Quality", "100% real ticks"],
  ["Bars", "5 766"],
  ["Total Net Profit", "90 418.52"],
  ["Gross Profit", "264 243.32"],
  ["Gross Loss", "-173 824.80"],
  ["Profit Factor", "1.52"],
  ["Recovery Factor", "0.90"],
  ["Expected Payoff", "324.08"],
  ["Sharpe Ratio", "4.24"],
  ["Balance Drawdown Maximal", "79 435.10 (33.99%)"],
  ["Equity Drawdown Maximal", "99 914.30 (39.38%)"],
  ["Margin Level", "9901.62%"],
];

export function Backtest() {
  return (
    <section id="results" className="bg-background py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-muted-foreground">Tiger Grow strategy performance</p>
            <h2 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">
              Backtest <span className="border-b-4 border-primary pb-2">Results</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
          >
            Request More Details <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="card-elevated mt-12 bg-ice p-6 sm:p-10">
          <div className="rounded-sm bg-card p-6 sm:p-10">
            <h3 className="text-center text-xl font-bold text-navy">Strategy Tester Report</h3>
            <p className="mt-1 text-center text-sm text-muted-foreground">VantageMarkets-Live 19 (Build 6090)</p>

            <h4 className="mt-10 text-center text-sm font-bold tracking-widest text-navy">SETTINGS</h4>
            <dl className="mx-auto mt-4 grid max-w-2xl gap-2 text-sm">
              {settings.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 border-b border-border/60 py-1.5">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-semibold text-navy">{v}</dd>
                </div>
              ))}
            </dl>

            <h4 className="mt-12 text-center text-sm font-bold tracking-widest text-navy">RESULTS</h4>
            <dl className="mt-4 grid gap-x-10 gap-y-2 text-sm sm:grid-cols-2">
              {results.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 border-b border-border/60 py-1.5">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-semibold text-navy">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-center text-xs text-muted-foreground">
              Past backtest performance does not guarantee future results. Trading involves risk.
            </p>
          </div>
        </div>

        <BacktestGallery />
      </div>
    </section>
  );
}
