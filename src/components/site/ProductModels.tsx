const rows: [string, string, string, string][] = [
  ["Upfront Payment", "YES", "NO", "NO"],
  ["Primary Service", "Software licence", "Direct algo integration", "Trade-copying access"],
  ["Algo Location", "Customer's MT5/VPS", "Customer's MT5/VPS", "Master account plus copy system"],
  ["Trading Account", "Customer's account", "Customer's account", "Customer's connected account"],
  ["Upfront Licence Fee", "Normally applicable", "Optional or lower", "Usually subscription or connection fee"],
  ["Profit Sharing", "No", "Yes", "Yes"],
  ["Customer Receives EA", "Usually yes, protected version", "Usually no unrestricted file access", "No"],
  ["Trade Generation", "EA runs locally", "EA runs locally", "Master account generates trades"],
  ["Strategy Updates", "May require customer-side update", "Updated during managed support", "Updated centrally"],
  ["Result Similarity", "Based on customer account execution", "Based on customer account execution", "May differ from master due to copying delays"],
  ["Customer Involvement", "Higher", "Medium", "Lower"],
  ["Tiger Grow Operational Support", "Technical support", "Integration and monitoring", "Master and copy-system monitoring"],
  ["Best Suited For", "Independent customers", "Performance-linked customers", "Customers seeking simple trade replication"],
];

export function ProductModels() {
  return (
    <section id="models" className="surface-navy relative overflow-hidden py-24 text-primary-foreground">
      <div className="pointer-events-none absolute -right-32 top-0 h-[640px] w-[640px] rounded-full border border-primary-foreground/10" aria-hidden />
      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="text-center">
          <p className="eyebrow text-brand-light">Tiger Grow business models</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Choose the Right{" "}
            <span className="border-b-4 border-brand-light pb-2 text-brand-light">Product Model</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-primary-foreground/75">
            Compare how each Tiger Grow product works, where the algorithm operates, and the level of support and
            involvement provided.
          </p>
        </div>

        <div className="mt-14 overflow-x-auto rounded-sm border border-primary-foreground/10">
          <table className="w-full min-w-[860px] border-collapse text-left text-sm">
            <thead>
              <tr className="surface-brand">
                {["Feature", "License Model", "Profit Sharing Model", "Copy Trading Model"].map((h) => (
                  <th key={h} className="px-6 py-4 font-display text-sm font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([feature, ...cells], i) => (
                <tr
                  key={feature}
                  className={`border-t border-primary-foreground/10 ${i % 2 ? "bg-primary-foreground/[0.04]" : ""}`}
                >
                  <th scope="row" className="px-6 py-4 font-semibold text-brand-light">
                    {feature}
                  </th>
                  {cells.map((c, j) => (
                    <td key={j} className="px-6 py-4 text-primary-foreground/85">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
