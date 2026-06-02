import { ChevronDown } from "lucide-react";
import { Container, Section } from "@/components/ui";
import type { FaqContent } from "@/content/landing";

export type FAQProps = {
  content: FaqContent;
};

export function FAQ({ content }: FAQProps) {
  return (
    <Section className="bg-background" id={content.id} spacing="lg">
      <Container size="sm">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {content.entries.map((entry) => (
            <details
              className="group rounded-lg border border-border bg-surface p-5 shadow-sm shadow-foreground/5"
              key={entry.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                <span>{entry.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-brand-700 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="mt-4 text-sm leading-6 text-foreground/70">
                {entry.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
