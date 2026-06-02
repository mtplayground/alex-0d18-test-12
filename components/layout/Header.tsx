"use client";

import { useState } from "react";
import { buttonClassName, Container } from "@/components/ui";
import { cn } from "@/components/ui/utils";

const navigationLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
] as const;

const cta = {
  href: "#get-started",
  label: "Get started",
} as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            aria-label="myClawTeam home"
            className="inline-flex min-h-10 items-center text-lg font-bold text-foreground transition-colors hover:text-brand-800"
            href="/"
            onClick={closeMenu}
          >
            myClawTeam
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {navigationLinks.map((link) => (
              <a
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand-800"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a className={buttonClassName({ size: "sm" })} href={cta.href}>
              {cta.label}
            </a>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:bg-muted md:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            <span aria-hidden="true" className="flex flex-col gap-1">
              <span
                className={cn(
                  "block h-0.5 w-5 rounded-sm bg-current transition-transform",
                  isMenuOpen && "translate-y-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 rounded-sm bg-current transition-opacity",
                  isMenuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 rounded-sm bg-current transition-transform",
                  isMenuOpen && "-translate-y-1.5 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>

        <div
          className={cn(
            "border-t border-border py-3 md:hidden",
            isMenuOpen ? "block" : "hidden",
          )}
          id="mobile-navigation"
        >
          <nav aria-label="Mobile primary navigation" className="grid gap-1">
            {navigationLinks.map((link) => (
              <a
                className="rounded-md px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-brand-800"
                href={link.href}
                key={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              className={buttonClassName({
                className: "mt-2",
                fullWidth: true,
              })}
              href={cta.href}
              onClick={closeMenu}
            >
              {cta.label}
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
