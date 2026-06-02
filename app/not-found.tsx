import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buttonClassName } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-background py-16">
      <Container size="sm">
        <div className="border-l-4 border-brand-600 pl-6">
          <p className="font-mono text-sm font-semibold uppercase tracking-wider text-brand-700">
            404
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
            This page is not in the myClawTeam workflow.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-foreground/75">
            The page may have moved, or the link may point to a route that has
            not been shipped yet.
          </p>
          <div className="mt-8">
            <Link href="/" className={buttonClassName({ size: "lg" })}>
              Return to landing page
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
