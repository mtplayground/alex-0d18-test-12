import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { landingContent } from "@/content/landing";

export default function Home() {
  return (
    <main>
      <Hero content={landingContent.hero} />
      <HowItWorks content={landingContent.howItWorks} />
    </main>
  );
}
