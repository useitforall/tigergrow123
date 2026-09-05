import { useState } from "react";

type Pillar = {
  name: string;
  allocation: number;
};

const pillarNames = [
  "Monthly Withdrawal Model",
  "Auto Compounding Model",
  "High Risk Model",
  "Full Risk Model",
];

const allocationPresets: Record<number, number[]> = {
  1: [100, 0, 0, 0],
  2: [60, 40, 0, 0],
  3: [50, 30, 20, 0],
  4: [40, 30, 20, 10],
};

const defaultCapital = 500000;
const formatMoney = (value: number) => `₹${Math.round(value).toLocaleString("en-IN")}`;

export function PillarPlan() {
  const [capital, setCapital] = useState(defaultCapital);
  const [activeAccounts, setActiveAccounts] = useState(4);
  const allocations = allocationPresets[activeAccounts]!;
  const totalAllocation = allocations.reduce((total, allocation) => total + allocation, 0);

  const reset = () => {
    setCapital(defaultCapital);
    setActiveAccounts(4);
  };

  const pillars: Pillar[] = pillarNames.map((name, index) => ({
    name,
    allocation: allocations[index]!,
  }));

  return (
    <section id="pillar-plan" className="surface-navy py-24 text-primary-foreground" aria-labelledby="pillar-plan-title">
      <div className="mx-auto max-w-[1200px] px-5">
        <header className="text-center">
          <p className="eyebrow text-brand-light">Capital allocation planner</p>
          <h2 id="pillar-plan-title" className="mt-4 text-4xl font-bold sm:text-5xl">
            4 Pillars Pro <span className="text-brand-light">Plan Structure</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-primary-foreground/75">
            Enter the total capital and select the number of active accounts. The allocation and account amounts recalculate instantly.
          </p>
        </header>

        <div className="mt-12 grid gap-4 rounded-sm border border-primary-foreground/15 bg-primary-foreground/[0.05] p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-[1.35fr_1fr_auto_auto] lg:items-end">
          <label className="block text-xs font-semibold">
            <span className="mb-2 block text-brand-light">Total Capital Amount</span>
            <span className="flex h-11 items-center rounded-sm border border-primary-foreground/20 bg-primary-foreground/[0.06] focus-within:ring-2 focus-within:ring-brand-light">
              <input
                type="number"
                min="0"
                value={capital}
                onChange={(event) => setCapital(Math.max(0, Number(event.target.value) || 0))}
                className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
                aria-label="Total capital amount"
              />
              <span className="px-3 text-brand-light">₹</span>
            </span>
          </label>

          <label className="block text-xs font-semibold">
            <span className="mb-2 block text-brand-light">Active Accounts</span>
            <select
              value={activeAccounts}
              onChange={(event) => setActiveAccounts(Number(event.target.value))}
              className="h-11 w-full rounded-sm border border-primary-foreground/20 bg-navy px-3 text-sm outline-none focus:ring-2 focus:ring-brand-light"
              aria-label="Number of active accounts"
            >
              <option value="4">4 Accounts</option>
              <option value="3">3 Accounts</option>
              <option value="2">2 Accounts</option>
              <option value="1">1 Account</option>
            </select>
          </label>

          <button type="button" onClick={reset} className="h-11 rounded-sm border border-brand-light px-4 text-sm font-bold text-brand-light transition-colors hover:bg-brand-light hover:text-navy">
            Reset allocations
          </button>

          <div className="flex h-11 items-center justify-between gap-5 rounded-sm bg-primary-foreground/[0.08] px-4 text-xs sm:col-span-2 lg:col-span-1 lg:block lg:h-auto lg:bg-transparent lg:px-0">
            <span className="block text-primary-foreground/65 lg:mb-1">Total Allocation</span>
            <strong className="font-display text-xl text-brand-light">{totalAllocation}%</strong>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Four pillar account allocations">
          {pillars.map((pillar, index) => {
            const active = index < activeAccounts;
            return (
              <article key={pillar.name} className={`flex flex-col rounded-sm border p-6 transition-colors ${active ? "border-brand-light/50 bg-primary-foreground/[0.08]" : "border-primary-foreground/10 bg-primary-foreground/[0.03] opacity-60"}`}>
                <span className="eyebrow text-brand-light">Account - {String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 min-h-14 text-xl font-bold">{pillar.name}</h3>
                <span className="mt-6 text-xs text-primary-foreground/60">Capital Allocation</span>
                <div className="mt-2 flex h-11 items-center rounded-sm border border-primary-foreground/15 bg-primary-foreground/[0.05]">
                  <span className="px-3 text-lg font-bold text-brand-light">{pillar.allocation}</span>
                  <span className="text-xs text-primary-foreground/60">%</span>
                </div>
                <span className="mt-6 text-xs text-primary-foreground/60">Allocated Amount</span>
                <strong className="mt-1 font-display text-2xl text-brand-light">{formatMoney((capital * pillar.allocation) / 100)}</strong>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs font-semibold text-brand-light" role="status" aria-live="polite">
          {totalAllocation === 100 ? "Allocation is correctly balanced at 100%." : "Adjust the allocation to reach 100%."}
        </p>
      </div>
    </section>
  );
}