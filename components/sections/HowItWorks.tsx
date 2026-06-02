import {
  Activity,
  ClipboardList,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { Container, Section } from "@/components/ui";
import type { HowItWorksContent } from "@/content/landing";

export type HowItWorksProps = {
  content: HowItWorksContent;
};

const stepIcons = [ClipboardList, Code2, Rocket, Activity] satisfies readonly [
  LucideIcon,
  LucideIcon,
  LucideIcon,
  LucideIcon,
];

export function HowItWorks({ content }: HowItWorksProps) {
  return (
    <Section className="bg-background" id={content.id} spacing="lg">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {content.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? Activity;

            return (
              <li
                className="rounded-lg border border-border bg-surface p-5 shadow-sm shadow-foreground/5"
                key={step.title}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-100 text-brand-800">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/70">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
