import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Differentiators } from "@/components/sections/Differentiators";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { landingContent } from "@/content/landing";

const pageTitle = landingContent.hero.headline;
const pageDescription = landingContent.hero.subheadline;
const ogImage = {
  url: "/images/og-image.png",
  width: 1672,
  height: 941,
  alt: "myClawTeam repository workflow preview",
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/",
    siteName: "myClawTeam",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage.url],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero content={landingContent.hero} />
        <HowItWorks content={landingContent.howItWorks} />
        <Features content={landingContent.features} />
        <Differentiators content={landingContent.differentiators} />
        <FAQ content={landingContent.faq} />
        <FinalCTA content={landingContent.finalCta} />
      </main>
      <Footer />
    </>
  );
}
