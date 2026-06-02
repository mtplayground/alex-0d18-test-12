import Image from "next/image";
import { buttonClassName, Container } from "@/components/ui";
import type { HeroContent } from "@/content/landing";

export type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] overflow-hidden bg-foreground text-white">
      <Image
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fill
        priority
        sizes="100vw"
        src="/images/hero-background.png"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,28,25,0.95)_0%,rgba(18,28,25,0.86)_38%,rgba(18,28,25,0.4)_72%,rgba(18,28,25,0.22)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <Container className="flex items-center py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-200">
            {content.eyebrow}
          </p>
          <h1 className="lg:text-7xl mt-6 max-w-4xl text-5xl font-bold leading-[1.02] text-white sm:text-6xl">
            {content.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-brand-50 sm:text-2xl sm:leading-9">
            {content.subheadline}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {content.pitch}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className={buttonClassName({
                className:
                  "border-accent-400 bg-accent-400 text-foreground hover:border-accent-300 hover:bg-accent-300",
                size: "lg",
              })}
              href={content.primaryCta.href}
            >
              {content.primaryCta.label}
            </a>
            <a
              className={buttonClassName({
                className:
                  "border-white/20 bg-white/10 text-white hover:border-white/35 hover:bg-white/20",
                size: "lg",
                variant: "ghost",
              })}
              href={content.secondaryCta.href}
            >
              {content.secondaryCta.label}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
