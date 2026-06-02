import { CheckCircle2, GitPullRequest, Lock, XCircle } from "lucide-react";
import { Container, Section } from "@/components/ui";
import type { DifferentiatorsContent } from "@/content/landing";

export type DifferentiatorsProps = {
  content: DifferentiatorsContent;
};

export function Differentiators({ content }: DifferentiatorsProps) {
  return (
    <Section className="bg-foreground text-white" id={content.id} spacing="lg">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-200">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              {content.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <div className="mt-8 grid gap-4">
              {content.items.map((item) => (
                <article
                  className="rounded-lg border border-white/10 bg-white/5 p-5"
                  key={item.title}
                >
                  <div className="flex gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-300 text-foreground">
                      <GitPullRequest aria-hidden="true" className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <div className="border-b border-white/10 px-5 py-4">
              <h3 className="text-lg font-semibold text-white">
                Ownership comparison
              </h3>
            </div>
            <div
              aria-label="Ownership comparison table"
              className="overflow-x-auto"
              role="region"
              tabIndex={0}
            >
              <table className="min-w-[42rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-white">
                    <th className="px-5 py-4 font-semibold" scope="col">
                      Decision point
                    </th>
                    <th className="px-5 py-4 font-semibold" scope="col">
                      <span className="inline-flex items-center gap-2">
                        <CheckCircle2
                          aria-hidden="true"
                          className="h-4 w-4 text-brand-200"
                        />
                        {content.comparison.myClawTeamLabel}
                      </span>
                    </th>
                    <th className="px-5 py-4 font-semibold" scope="col">
                      <span className="inline-flex items-center gap-2">
                        <XCircle
                          aria-hidden="true"
                          className="h-4 w-4 text-accent-300"
                        />
                        {content.comparison.alternativesLabel}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {content.comparison.rows.map((row) => (
                    <tr key={row.criterion}>
                      <th
                        className="px-5 py-5 align-top font-semibold text-white"
                        scope="row"
                      >
                        {row.criterion}
                      </th>
                      <td className="px-5 py-5 align-top leading-6 text-white/75">
                        {row.myClawTeam}
                      </td>
                      <td className="px-5 py-5 align-top leading-6 text-white/60">
                        <span className="inline-flex gap-2">
                          <Lock
                            aria-hidden="true"
                            className="mt-1 h-4 w-4 shrink-0 text-accent-300"
                          />
                          {row.alternatives}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
