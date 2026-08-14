import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { MONTHLY_REPORT, REPORT_TOTALS } from "@/lib/monthly-report";

const headers = [
  "Month",
  "Base Capital",
  "Locking Capital",
  "Trading Capital",
  "No. of Trades",
  "Profit & Loss",
  "ROI",
  "Total Capital",
  "Withdraw",
  "P&L Status",
];

const dailyHeaders = ["Date", "Base Capital", "Lock Capital", "Trading Capital", "No. of Trades", "Profit & Loss", "ROI"];

export function MonthlyReport() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="report" className="bg-ice py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <p className="eyebrow text-primary">Tiger Grow performance overview</p>
        <h2 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">
          Monthly Performance <span className="border-b-4 border-primary pb-2">Report</span>
        </h2>
        <p className="mt-5 max-w-2xl text-sm text-muted-foreground">
          Tiger Grow AI Algo Bot monthly results for 2026. Click any month to expand the day-by-day breakdown.
        </p>

        <div className="card-elevated mt-10 overflow-x-auto bg-card">
          <table className="w-full min-w-[900px] border-collapse text-sm">
            <thead>
              <tr className="surface-navy text-primary-foreground">
                {headers.map((h) => (
                  <th key={h} className="whitespace-nowrap px-4 py-3 text-left text-xs font-bold tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MONTHLY_REPORT.map((m) => (
                <>
                  <tr key={m.month} className="border-b border-border/70">
                    <th scope="row" className="px-4 py-3 text-left">
                      <button
                        type="button"
                        aria-expanded={open === m.month}
                        onClick={() => setOpen(open === m.month ? null : m.month)}
                        className="flex items-center gap-2 font-bold text-navy transition-colors hover:text-primary"
                      >
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${open === m.month ? "rotate-90" : ""}`}
                        />
                        {m.month}
                      </button>
                    </th>
                    <td className="px-4 py-3 text-muted-foreground">{m.base}</td>
                    <td className="px-4 py-3 text-muted-foreground">{m.lock}</td>
                    <td className="px-4 py-3 text-muted-foreground">{m.trading}</td>
                    <td className="px-4 py-3 text-muted-foreground">{m.trades}</td>
                    <td className="px-4 py-3 font-semibold text-emerald-600">{m.pnl}</td>
                    <td className="px-4 py-3 font-semibold text-emerald-600">{m.roi}</td>
                    <td className="px-4 py-3 text-navy">{m.total}</td>
                    <td className="px-4 py-3 text-muted-foreground">{m.withdraw}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-emerald-500/12 px-3 py-1 text-[0.65rem] font-bold tracking-wide text-emerald-700">
                        {m.status}
                      </span>
                    </td>
                  </tr>
                  {open === m.month && (
                    <tr key={`${m.month}-daily`}>
                      <td colSpan={headers.length} className="bg-ice px-4 py-5">
                        <p className="font-display text-sm font-bold text-navy">{m.month} daily performance</p>
                        <div className="mt-3 overflow-x-auto">
                          <table className="w-full min-w-[720px] border-collapse text-xs">
                            <thead>
                              <tr className="bg-accent text-navy">
                                {dailyHeaders.map((h) => (
                                  <th key={h} className="whitespace-nowrap px-3 py-2 text-left font-bold">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {m.daily.map((d) => (
                                <tr key={d[0]} className="border-b border-border/60">
                                  <td className="px-3 py-2 font-semibold text-navy">{d[0]}</td>
                                  <td className="px-3 py-2 text-muted-foreground">{d[1]}</td>
                                  <td className="px-3 py-2 text-muted-foreground">{d[2]}</td>
                                  <td className="px-3 py-2 text-muted-foreground">{d[3]}</td>
                                  <td className="px-3 py-2 text-muted-foreground">{d[4]}</td>
                                  <td
                                    className={`px-3 py-2 font-semibold ${
                                      d[5].startsWith("-") ? "text-destructive" : "text-emerald-600"
                                    }`}
                                  >
                                    {d[5]}
                                  </td>
                                  <td
                                    className={`px-3 py-2 font-semibold ${
                                      d[6].startsWith("-") ? "text-destructive" : "text-emerald-600"
                                    }`}
                                  >
                                    {d[6]}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-accent font-bold text-navy">
                <td className="px-4 py-3">Total</td>
                <td colSpan={3} />
                <td className="px-4 py-3">{REPORT_TOTALS.trades}</td>
                <td className="px-4 py-3 text-emerald-700">{REPORT_TOTALS.pnl}</td>
                <td className="px-4 py-3 text-emerald-700">{REPORT_TOTALS.roi}</td>
                <td />
                <td className="px-4 py-3 text-emerald-700">{REPORT_TOTALS.withdraw}</td>
                <td />
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="mt-5 text-xs text-muted-foreground">
          Figures are historical records and do not guarantee future results. Trading involves market risk.
        </p>
      </div>
    </section>
  );
}
