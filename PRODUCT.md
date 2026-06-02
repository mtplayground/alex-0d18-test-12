# myClawTeam Product Contract

## What This Project Is

myClawTeam is a static-export Next.js 14 landing site for the myClawTeam
autonomous software development agent. The site explains the product promise:
turn scoped GitHub issues into reviewed, merged, production-ready code while
keeping ownership in the user's own repository.

## What It Does

- Presents a complete landing page with sticky navigation, hero, workflow,
  feature grid, ownership differentiators, FAQ, final CTA, and footer.
- Centralizes landing-page copy and section IDs in typed content modules.
- Exports to static files in `out/` via `next build`; no Next.js server is
  required in production.
- Emits SEO and sharing metadata, Open Graph/Twitter tags, a static OG image,
  sitemap, robots.txt, favicon metadata, and Organization JSON-LD.
- Provides a branded static 404 page.

## Key Features

- Hero message: "Ship production code from your GitHub issues."
- Workflow section: Plan, Build, Deploy, Operate.
- Features emphasize GitHub-native delivery, full SDLC ownership,
  security-first defaults, production-ready output, complete code ownership,
  and conversational collaboration.
- "Why myClawTeam" compares repository ownership against lock-in alternatives.
- Accessible FAQ uses native `details`/`summary` disclosure behavior.
- Responsive QA and axe checks cover 360px, 768px, and 1280px viewports.

## Architecture And Conventions

- Framework: Next.js 14 App Router, TypeScript, React 18.
- Styling: Tailwind CSS with brand tokens in `tailwind.config.ts` and base
  resets in `app/globals.css`.
- UI primitives live in `components/ui` (`Button`, `Container`, `Section`).
- Layout components live in `components/layout`; landing sections live in
  `components/sections`.
- Product copy lives in `content/landing.ts` and should remain typed.
- Public runtime config is handled in `lib/env.ts`; `NEXT_PUBLIC_SITE_URL`
  must be an absolute `http` or `https` origin and controls absolute metadata,
  sitemap, robots, and JSON-LD URLs.
- Static image assets live under `public/images`.

## Quality And Deployment

- Main commands: `npm run format`, `npm run lint`, `npm test`,
  `npm run test:e2e`, and `npm run build`.
- Unit tests use Vitest and React Testing Library.
- End-to-end and accessibility checks use Playwright and axe.
- `scripts/ui-verify.js` is the post-deploy browser smoke verifier; it checks
  styling, content, navigation, CTA behavior, the custom 404 page, and writes
  `/workspace/verify-screenshot.png`.
- Production deployment copies the generated `out/` directory to a static host
  such as nginx or Caddy. README.md contains the exact deployment recipe and
  sample server configs.
