import { useState } from "react";

type TradingStatus = "profit" | "loss";

type CalculatorSettings = {
  initialCapital: number;
  months: number;
  lockRate: number;
  tradeRate: number;
  profitRoi: number;
  lossRoi: number;
  profitWithdraw: number;
  lossWithdraw: number;
  withdrawalStart: number;
};

type ProjectionRow = CalculatorSettings & {
  month: number;
  lockEquity: number;
  tradeEquity: number;
  roi: number;
  totalEquity: number;
  withdrawal: number;
  balance: number;
  status: TradingStatus;
};

const defaults: CalculatorSettings = {
  initialCapital: 500000,
  months: 12,
  lockRate: 50,
  tradeRate: 50,
  profitRoi: 50,
  lossRoi: -25,
  profitWithdraw: 12,
  lossWithdraw: 8,
  withdrawalStart: 0,
};

const formatMoney = (value: number) => Math.round(value).toLocaleString("en-IN");
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function buildProjection(settings: CalculatorSettings, statuses: TradingStatus[]) {
  const rows: ProjectionRow[] = [];
  let balance = settings.initialCapital;

  for (let month = 0; month < settings.months; month += 1) {
    const status = statuses[month] ?? "profit";
    const lockEquity = Math.round((balance * settings.lockRate) / 100);
    const tradeEquity = Math.round((balance * settings.tradeRate) / 100);
    const roiRate = status === "profit" ? settings.profitRoi : settings.lossRoi;
    const withdrawalRate = status === "profit" ? settings.profitWithdraw : settings.lossWithdraw;
    const roi = Math.round((tradeEquity * roiRate) / 100);
    const totalEquity = balance + roi;
    const withdrawal = month >= settings.withdrawalStart ? Math.round((totalEquity * withdrawalRate) / 100) : 0;
    const nextBalance = totalEquity - withdrawal;

    rows.push({
      ...settings,
      month: month + 1,
      lockEquity,
      tradeEquity,
      roi,
      totalEquity,
      withdrawal,
      balance: nextBalance,
      status,
    });
    balance = nextBalance;
  }

  return rows;
}

export function EquityCalculator() {
  const [settings, setSettings] = useState(defaults);
  const [statuses, setStatuses] = useState<TradingStatus[]>([]);
  const rows = buildProjection(settings, statuses);
  const totalWithdrawn = rows.reduce((sum, row) => sum + row.withdrawal, 0);
  const finalBalance = rows.at(-1)?.balance ?? settings.initialCapital;

  const updateSetting = (key: keyof CalculatorSettings, value: number) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  const updateAllocation = (key: "lockRate" | "tradeRate", value: number) => {
    const nextValue = clamp(value || 0, 0, 100);
    setSettings((current) => ({
      ...current,
      [key]: nextValue,
      [key === "lockRate" ? "tradeRate" : "lockRate"]: 100 - nextValue,
    }));
  };

  const reset = () => {
    setSettings(defaults);
    setStatuses([]);
  };

  return (
    <section id="equity-calculator" className="bg-background py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center">
          <p className="eyebrow text-primary">Equity growth planner</p>
          <h2 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">
            Equity <span className="text-primary underline decoration-4 underline-offset-8">Calculator</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground">
            Adjust capital, allocation, monthly return, withdrawals, or any month&apos;s trading status. The full projection recalculates instantly.
          </p>
        </div>

        <div className="mt-12 rounded-sm border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <CalculatorField label="Initial Capital" suffix="₹" value={settings.initialCapital} onChange={(value) => updateSetting("initialCapital", Math.max(0, value))} money />
            <CalculatorField label="No. of Months" suffix="M" value={settings.months} min={1} max={60} onChange={(value) => updateSetting("months", clamp(Math.round(value || 1), 1, 60))} />
            <CalculatorField label="Lock Equity" suffix="%" value={settings.lockRate} onChange={(value) => updateAllocation("lockRate", value)} />
            <CalculatorField label="Trade Equity" suffix="%" value={settings.tradeRate} onChange={(value) => updateAllocation("tradeRate", value)} />
            <button type="button" onClick={reset} className="mt-auto h-11 rounded-sm border border-primary px-4 text-sm font-bold text-primary transition-colors hover:bg-accent">
              Reset calculator
            </button>
          </div>

          <div className="mt-4 grid gap-4 border-t border-border pt-4 sm:grid-cols-2 lg:grid-cols-5">
            <CalculatorField label="Profit ROI" suffix="%" value={settings.profitRoi} onChange={(value) => updateSetting("profitRoi", value)} />
            <CalculatorField label="Loss ROI" suffix="%" value={settings.lossRoi} onChange={(value) => updateSetting("lossRoi", value)} />
            <CalculatorField label="Profit Withdrawal" suffix="%" value={settings.profitWithdraw} min={0} onChange={(value) => updateSetting("profitWithdraw", Math.max(0, value))} />
            <CalculatorField label="Loss Withdrawal" suffix="%" value={settings.lossWithdraw} min={0} onChange={(value) => updateSetting("lossWithdraw", Math.max(0, value))} />
            <CalculatorField label="Withdrawal Starts" suffix="M" value={settings.withdrawalStart} min={0} max={60} onChange={(value) => updateSetting("withdrawalStart", clamp(Math.round(value || 0), 0, settings.months))} />
          </div>

          <p className="mt-4 text-xs text-muted-foreground">Lock and Trade Equity always remain balanced to 100%. Values use whole-number rounding.</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <SummaryStat label="Initial Capital" value={formatMoney(settings.initialCapital)} />
            <SummaryStat label="Total Withdrawn" value={formatMoney(totalWithdrawn)} />
            <SummaryStat label="Final Balance Equity" value={formatMoney(finalBalance)} />
          </div>

          <div className="mt-8 overflow-x-auto rounded-sm border border-border" tabIndex={0} role="region" aria-label="Dynamic monthly equity calculation table">
            <table className="min-w-[920px] w-full border-collapse text-right text-xs text-navy">
              <caption className="border-b border-border bg-secondary px-4 py-4 text-left">
                <span>Initial Capital: {formatMoney(settings.initialCapital)}</span>
                <b className="ml-4">{settings.months}-Month Equity Projection</b>
              </caption>
              <thead className="bg-navy text-left text-[0.65rem] uppercase tracking-[0.12em] text-primary-foreground">
                <tr>
                  <th className="px-3 py-3">Month</th><th className="px-3 py-3">Lock</th><th className="px-3 py-3">Trade</th><th className="px-3 py-3">Status</th><th className="px-3 py-3">ROI</th><th className="px-3 py-3">Total Equity</th><th className="px-3 py-3">Withdrawal</th><th className="px-3 py-3">Balance</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.month} className="border-t border-border">
                    <th scope="row" className="whitespace-nowrap px-3 py-3 text-left font-semibold">Month - {String(row.month).padStart(2, "0")}</th>
                    <td className="px-3 py-3">{formatMoney(row.lockEquity)}</td>
                    <td className="px-3 py-3">{formatMoney(row.tradeEquity)}</td>
                    <td className="px-3 py-3">
                      <select
                        value={row.status}
                        aria-label={`Month ${row.month} status`}
                        onChange={(event) => setStatuses((current) => rows.map((item, itemIndex) => itemIndex === index ? event.target.value as TradingStatus : item.status))}
                        className={`rounded-sm border px-2 py-2 font-semibold outline-none focus:ring-2 focus:ring-primary ${row.status === "profit" ? "border-primary/40 bg-accent text-primary" : "border-destructive/40 bg-destructive/10 text-destructive"}`}
                      >
                        <option value="profit">Profit</option>
                        <option value="loss">Loss</option>
                      </select>
                    </td>
                    <td className={`px-3 py-3 font-semibold ${row.roi >= 0 ? "text-primary" : "text-destructive"}`}>{formatMoney(row.roi)}</td>
                    <td className="px-3 py-3">{formatMoney(row.totalEquity)}</td>
                    <td className="px-3 py-3">{formatMoney(row.withdrawal)}</td>
                    <td className="px-3 py-3 font-semibold">{formatMoney(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t-2 border-primary bg-secondary font-bold">
                <tr><td colSpan={6} className="px-3 py-4 text-left">Total Withdrawal / Final Balance</td><td className="px-3 py-4">{formatMoney(totalWithdrawn)}</td><td className="px-3 py-4">{formatMoney(finalBalance)}</td></tr>
              </tfoot>
            </table>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground sm:hidden">Swipe horizontally to view the complete table.</p>
        </div>
      </div>
    </section>
  );
}

function CalculatorField({ label, suffix, value, onChange, min, max, money = false }: { label: string; suffix: string; value: number; onChange: (value: number) => void; min?: number; max?: number; money?: boolean }) {
  return (
    <label className="block text-xs font-semibold text-navy">
      <span className="mb-2 block">{label}</span>
      <span className="flex h-11 items-center rounded-sm border border-input bg-background focus-within:ring-2 focus-within:ring-primary">
        <input type="number" inputMode="decimal" value={value} min={min} max={max} step="0.1" onChange={(event) => onChange(Number(event.target.value))} className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
        <span className="px-3 text-xs text-muted-foreground">{suffix}</span>
      </span>
    </label>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return <div className="rounded-sm bg-secondary px-4 py-4"><span className="block text-[0.65rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">{label}</span><strong className="mt-1 block font-display text-xl text-primary">{value}</strong></div>;
}