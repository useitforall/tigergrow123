const capitals = ["$1,000", "$5,000", "$10,000", "$25,000", "$50,000", "$100,000", "$200,000", "$300,000"];

const modes = [
  { name: "Low Risk Mode", tag: "LRM", lots: ["0.01", "0.05", "0.10", "0.25", "0.50", "1", "2", "3"] },
  { name: "Medium Risk Mode", tag: "MRM", lots: ["0.02", "0.10", "0.20", "0.50", "1", "2", "4", "6"] },
  { name: "High Risk Mode", tag: "HRM", lots: ["0.03", "0.15", "0.30", "0.75", "1.50", "3", "6", "9"] },
];

const headerStyles = [
  "surface-brand",
  "bg-[linear-gradient(135deg,var(--brand),var(--navy))]",
  "bg-[linear-gradient(135deg,var(--navy),var(--navy-deep))]",
];

export function RiskModes() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center">
          <p className="eyebrow text-primary">Aion trading modes</p>
          <h2 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">
            Choose Your <span className="text-primary underline decoration-4 underline-offset-8">Risk Mode</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground">
            Select the mode that matches your available capital and preferred risk level. The tables below show the
            corresponding lot size for each capital level.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {modes.map((mode, i) => (
            <div key={mode.name} className="card-elevated overflow-hidden">
              <div className={`${headerStyles[i]} px-6 py-6 text-center text-primary-foreground`}>
                <h3 className="text-xl font-bold">{mode.name}</h3>
                <p className="mt-1 text-[0.6rem] font-bold tracking-[0.3em]">{mode.tag}</p>
              </div>
              <div className="grid grid-cols-2 bg-secondary px-6 py-3 text-[0.65rem] font-bold tracking-[0.18em] text-primary">
                <span>CAPITAL</span>
                <span className="text-right">LOT SIZE</span>
              </div>
              <ul>
                {capitals.map((cap, j) => (
                  <li
                    key={cap}
                    className="grid grid-cols-2 border-t border-border px-6 py-3 text-sm text-navy"
                  >
                    <span>{cap}</span>
                    <span className="text-right font-semibold">{mode.lots[j]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
