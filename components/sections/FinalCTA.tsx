import { ArrowRight } from "lucide-react";
import { buttonClassName, Container, Section } from "@/components/ui";
import type { FinalCtaContent } from "@/content/landing";

export type FinalCTAProps = {
  content: FinalCtaContent;
};

export function FinalCTA({ content }: FinalCTAProps) {
  return (
    <Section
      className="relative overflow-hidden border-y border-brand-800 bg-brand-950 text-white"
      id={content.id}
      spacing="lg"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-accent-400"
      />
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-200">
              Get started
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
              {content.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {content.body}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              className={buttonClassName({
                className:
                  "border-accent-400 bg-accent-400 text-foreground hover:border-accent-300 hover:bg-accent-300",
                size: "lg",
              })}
              href={content.primaryCta.href}
            >
              {content.primaryCta.label}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 px-6 text-base font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/10"
              href={content.secondaryCta.href}
            >
              {content.secondaryCta.label}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
