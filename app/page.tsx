import { Hero } from "@/components/sections/Hero";
import { landingContent } from "@/content/landing";

export default function Home() {
  return (
    <main>
      <Hero content={landingContent.hero} />
    </main>
  );
}
