import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { ProductModels } from "@/components/site/ProductModels";
import { RiskModes } from "@/components/site/RiskModes";
import { Pricing } from "@/components/site/Pricing";
import { CoreApproach } from "@/components/site/CoreApproach";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Backtest } from "@/components/site/Backtest";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "Algo Tiger Grow — AI Algo Trading Software & Indicators";
const description =
  "Tiger Grow AI Algo Bot: next generation AI trading algo software and indicator software for MT5 — lifetime licence, all risk modes, crypto, forex and Indian markets.";

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
        <Hero />
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
