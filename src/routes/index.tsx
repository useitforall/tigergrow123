import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { About } from "@/components/site/About";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { ProductModels } from "@/components/site/ProductModels";
import { RiskModes } from "@/components/site/RiskModes";
import { Pricing } from "@/components/site/Pricing";
import { CoreApproach } from "@/components/site/CoreApproach";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Backtest } from "@/components/site/Backtest";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "Algo Aion — Automated XAUUSD Algo Trading for MT5";
const description =
  "Algo Aion is a disciplined MT5 algorithmic trading system for XAUUSD, with controlled risk modes, licence plans and transparent backtest results.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="home" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <About />
        <WhatWeDo />
        <ProductModels />
        <RiskModes />
        <Pricing />
        <CoreApproach />
        <WhyChoose />
        <Backtest />
      </main>
      <SiteFooter />
    </div>
  );
}
