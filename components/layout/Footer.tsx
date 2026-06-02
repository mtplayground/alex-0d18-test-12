import { Container } from "@/components/ui";

const footerGroups = [
  {
    title: "Product",
    links: [
      { href: "#how-it-works", label: "How It Works" },
      { href: "#features", label: "Features" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Docs",
    links: [
      { href: "#docs", label: "Documentation" },
      { href: "#deployment", label: "Deployment" },
    ],
  },
  {
    title: "GitHub",
    links: [
      { href: "#github", label: "Repository" },
      { href: "#github-issues", label: "Issues" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "#contact", label: "Contact" },
      { href: "#get-started", label: "Get started" },
    ],
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-[minmax(0,1.25fr)_minmax(0,2fr)] md:py-14">
          <div className="max-w-sm">
            <a
              aria-label="myClawTeam home"
              className="inline-flex text-lg font-bold text-foreground transition-colors hover:text-brand-800"
              href="/"
            >
              myClawTeam
            </a>
            <p className="mt-3 text-sm leading-6 text-foreground/70">
              A focused landing page for myClawTeam.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        className="text-sm text-foreground/70 transition-colors hover:text-brand-800"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="border-t border-border py-6">
          <p className="text-sm text-foreground/60">
            Copyright {currentYear} myClawTeam. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
