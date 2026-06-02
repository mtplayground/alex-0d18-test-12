import {
  BadgeCheck,
  Code2,
  GitPullRequest,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container, Section } from "@/components/ui";
import type { FeaturesContent } from "@/content/landing";

export type FeaturesProps = {
  content: FeaturesContent;
};

const featureIcons: Record<string, LucideIcon> = {
  "check-circle": BadgeCheck,
  code: Code2,
  github: GitPullRequest,
  "messages-square": MessagesSquare,
  shield: ShieldCheck,
  workflow: Workflow,
};

export function Features({ content }: FeaturesProps) {
  return (
    <Section className="bg-muted/45" id={content.id} spacing="lg">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
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

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item) => {
            const Icon = featureIcons[item.iconName] ?? Sparkles;

            return (
              <article
                className="rounded-lg border border-border bg-surface p-6 shadow-sm shadow-foreground/5 transition-colors hover:border-brand-200"
                key={item.title}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-900 text-brand-100">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/70">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
