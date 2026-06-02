import { Differentiators } from "@/components/sections/Differentiators";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { landingContent } from "@/content/landing";

export default function Home() {
  return (
    <main>
      <Hero content={landingContent.hero} />
      <HowItWorks content={landingContent.howItWorks} />
      <Features content={landingContent.features} />
      <Differentiators content={landingContent.differentiators} />
      <FAQ content={landingContent.faq} />
      <FinalCTA content={landingContent.finalCta} />
    </main>
  );
}
