export type CtaLink = Readonly<{
  label: string;
  href: string;
}>;

export type HeroContent = Readonly<{
  eyebrow: string;
  headline: string;
  subheadline: string;
  pitch: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}>;

export type SectionIntro = Readonly<{
  id: string;
  eyebrow: string;
  title: string;
  description: string;
}>;

export type HowItWorksStep = Readonly<{
  title: string;
  description: string;
}>;

export type HowItWorksContent = SectionIntro &
  Readonly<{
    steps: readonly HowItWorksStep[];
  }>;

export type FeatureItem = Readonly<{
  iconName: string;
  title: string;
  description: string;
}>;

export type FeaturesContent = SectionIntro &
  Readonly<{
    items: readonly FeatureItem[];
  }>;

export type DifferentiatorItem = Readonly<{
  title: string;
  description: string;
}>;

export type DifferentiatorsContent = SectionIntro &
  Readonly<{
    items: readonly DifferentiatorItem[];
  }>;

export type FaqEntry = Readonly<{
  question: string;
  answer: string;
}>;

export type FaqContent = SectionIntro &
  Readonly<{
    entries: readonly FaqEntry[];
  }>;

export type FinalCtaContent = Readonly<{
  id: string;
  headline: string;
  body: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}>;

export type LandingContent = Readonly<{
  hero: HeroContent;
  howItWorks: HowItWorksContent;
  features: FeaturesContent;
  differentiators: DifferentiatorsContent;
  faq: FaqContent;
  finalCta: FinalCtaContent;
}>;

export const heroContent = {
  eyebrow: "myClawTeam autonomous software development agent",
  headline: "Ship production code from your GitHub issues",
  subheadline:
    "Plan, build, deploy, and operate software with a focused agent that works in your repository.",
  pitch:
    "myClawTeam turns scoped issues into reviewed code changes, keeping implementation details, verification, and delivery history connected to the pull request.",
  primaryCta: {
    label: "Get started",
    href: "#get-started",
  },
  secondaryCta: {
    label: "Talk to us",
    href: "#contact",
  },
} satisfies HeroContent;

export const howItWorksContent = {
  id: "how-it-works",
  eyebrow: "How It Works",
  title: "A clear path from plan to production",
  description:
    "Each engagement follows a practical software delivery loop built around your existing repository workflow.",
  steps: [
    {
      title: "Plan",
      description:
        "Clarify the scope, dependencies, and architecture before code changes begin.",
    },
    {
      title: "Build",
      description:
        "Implement focused changes in a branch while following the existing project patterns.",
    },
    {
      title: "Deploy",
      description:
        "Validate the production build and prepare static output or deployment artifacts.",
    },
    {
      title: "Operate",
      description:
        "Leave behind documented commands, merged pull requests, and traceable issue history.",
    },
  ],
} satisfies HowItWorksContent;

export const featuresContent = {
  id: "features",
  eyebrow: "Features",
  title: "Built for real repository work",
  description:
    "myClawTeam focuses on the mechanics that make software delivery repeatable, reviewable, and maintainable.",
  items: [
    {
      iconName: "github",
      title: "GitHub-native workflow",
      description:
        "Work is tracked through branches, pull requests, merged code, and closed issues.",
    },
    {
      iconName: "workflow",
      title: "Full SDLC ownership",
      description:
        "Planning, implementation, validation, and delivery stay connected in one flow.",
    },
    {
      iconName: "shield",
      title: "Security-first defaults",
      description:
        "Secrets stay out of source control, environment variables stay explicit, and changes remain scoped.",
    },
    {
      iconName: "check-circle",
      title: "Production-ready output",
      description:
        "Builds are verified before merge so each issue ends with working code.",
    },
    {
      iconName: "code",
      title: "Complete code ownership",
      description:
        "The resulting implementation lives in your repository, under your history and review process.",
    },
    {
      iconName: "messages-square",
      title: "Conversational interface",
      description:
        "Requirements, tradeoffs, and verification steps are handled through direct collaboration.",
    },
  ],
} satisfies FeaturesContent;

export const differentiatorsContent = {
  id: "why-myclawteam",
  eyebrow: "Why myClawTeam",
  title: "Your code stays yours",
  description:
    "myClawTeam is designed around ownership in your repository rather than lock-in to an external workspace.",
  items: [
    {
      title: "Own the repository history",
      description:
        "Every change lands through your GitHub project, branch, pull request, and merge history.",
    },
    {
      title: "Review before it ships",
      description:
        "Implementation work is visible as code changes that can be reviewed, discussed, and reverted.",
    },
    {
      title: "Keep the operating model",
      description:
        "The agent adapts to the project structure and tooling already present in the repo.",
    },
  ],
} satisfies DifferentiatorsContent;

export const faqContent = {
  id: "faq",
  eyebrow: "FAQ",
  title: "Questions teams ask first",
  description:
    "Practical answers about ownership, security, supported stacks, pricing, and onboarding.",
  entries: [
    {
      question: "Who owns the code?",
      answer:
        "You do. The implementation is committed to your repository and delivered through your pull request workflow.",
    },
    {
      question: "How are secrets handled?",
      answer:
        "Secrets should stay in environment variables or platform secret stores. Example values live in committed example files.",
    },
    {
      question: "Which languages and frameworks are supported?",
      answer:
        "myClawTeam can work across common web, backend, scripting, and infrastructure projects when the repository includes runnable tooling.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Pricing depends on scope, repository complexity, and delivery expectations. Use the contact path to discuss fit.",
    },
    {
      question: "How do we get started?",
      answer:
        "Start with a clearly scoped GitHub issue, a prepared repository, and the build or test commands needed to verify the work.",
    },
  ],
} satisfies FaqContent;

export const finalCtaContent = {
  id: "get-started",
  headline: "Bring myClawTeam into your next issue",
  body: "Start with a scoped task and let myClawTeam turn it into a merged, verified pull request.",
  primaryCta: {
    label: "Get started",
    href: "#contact",
  },
  secondaryCta: {
    label: "Talk to us",
    href: "#contact",
  },
} satisfies FinalCtaContent;

export const landingContent = {
  hero: heroContent,
  howItWorks: howItWorksContent,
  features: featuresContent,
  differentiators: differentiatorsContent,
  faq: faqContent,
  finalCta: finalCtaContent,
} satisfies LandingContent;
