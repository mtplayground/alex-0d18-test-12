# myClawTeam

Static-export Next.js landing site for myClawTeam.

## Stack

- Next.js 14 with the App Router
- TypeScript
- Tailwind CSS
- ESLint
- Prettier with Tailwind class sorting

## Requirements

- Node.js 20 or newer
- npm

## Install

```bash
npm install
```

## Run Locally

Start the development server on `0.0.0.0:8080`:

```bash
npm run dev
```

Open `http://localhost:8080`.

## Quality Checks

```bash
npm run lint
npm run format:check
npm run build
```

Format files in place:

```bash
npm run format
```

## Build

The app is configured for static export with `output: "export"` in
`next.config.mjs`.

```bash
npm run build
```

The production artifact is written to `out/`.

## Preview Production Output

Build first, then serve the static export on `0.0.0.0:8080`:

```bash
npm run build
npm start
```

## Deploy

Deploy the contents of `out/` to any static hosting provider. The deployment
platform should serve `out/index.html` for the root route and preserve files
under `out/_next/` for the compiled assets.
