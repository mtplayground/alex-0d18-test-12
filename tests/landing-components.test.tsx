import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Header } from "@/components/layout/Header";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { landingContent } from "@/content/landing";

describe("Hero", () => {
  it("renders the headline, sub-headline, and pitch", () => {
    render(<Hero content={landingContent.hero} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: landingContent.hero.headline,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(landingContent.hero.subheadline),
    ).toBeInTheDocument();
    expect(screen.getByText(landingContent.hero.pitch)).toBeInTheDocument();
  });
});

describe("Features", () => {
  it("renders every configured feature card", () => {
    const { container } = render(
      <Features content={landingContent.features} />,
    );

    expect(container.querySelectorAll("article")).toHaveLength(
      landingContent.features.items.length,
    );

    for (const item of landingContent.features.items) {
      expect(
        screen.getByRole("heading", { level: 3, name: item.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    }
  });
});

describe("FAQ", () => {
  it("toggles an answer when its question is selected", async () => {
    const user = userEvent.setup();
    const [entry] = landingContent.faq.entries;

    render(<FAQ content={landingContent.faq} />);

    const summary = screen.getByText(entry.question);
    const disclosure = summary.closest("details");

    expect(disclosure).not.toBeNull();

    if (!disclosure) {
      throw new Error("FAQ question should render inside a details element.");
    }

    expect(disclosure).not.toHaveAttribute("open");

    await user.click(summary);
    expect(disclosure).toHaveAttribute("open");
    expect(screen.getByText(entry.answer)).toBeInTheDocument();

    await user.click(summary);
    expect(disclosure).not.toHaveAttribute("open");
  });
});

describe("Header", () => {
  it("renders primary anchor links and CTA targets", () => {
    render(<Header />);

    const expectedLinks = [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "FAQ", href: "#faq" },
      { label: "Get started", href: "#get-started" },
    ];

    for (const expectedLink of expectedLinks) {
      const links = screen.getAllByRole("link", { name: expectedLink.label });

      expect(
        links.some((link) => link.getAttribute("href") === expectedLink.href),
      ).toBe(true);
    }
  });
});
