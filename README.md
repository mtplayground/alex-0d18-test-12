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

Create a local environment file if you need a public URL other than the default:

```bash
cp .env.example .env.local
```

`NEXT_PUBLIC_SITE_URL` must be an absolute `http` or `https` origin. It is used
by sitemap and Open Graph metadata code for absolute URLs. If it is omitted,
the app falls back to `http://localhost:8080`.

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

This project deploys as static files. Set `NEXT_PUBLIC_SITE_URL` to the public
production origin before building so sitemap, Open Graph, Twitter card, and
JSON-LD URLs are absolute and correct.

```bash
export NEXT_PUBLIC_SITE_URL=https://www.myclawteam.com
npm ci
npm run build
```

After `next build` completes, deploy the generated `out/` directory. The server
does not need to run Next.js in production.

Example copy step:

```bash
rsync -av --delete out/ deploy@web:/var/www/myclawteam/out/
```

The static server must:

- Serve `/var/www/myclawteam/out/index.html` for `/`.
- Preserve `/_next/static/*` asset paths.
- Serve `404.html` for unknown routes with a `404` status.
- Serve `robots.txt`, `sitemap.xml`, `favicon.ico`, and files under `images/`
  directly from `out/`.

### nginx

```nginx
server {
    listen 80;
    server_name www.myclawteam.com;

    root /var/www/myclawteam/out;
    index index.html;

    location /_next/static/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
        try_files $uri =404;
    }

    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    error_page 404 /404.html;
}
```

Reload nginx after copying a new `out/` directory:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### Caddy

```caddyfile
www.myclawteam.com {
    root * /var/www/myclawteam/out
    encode zstd gzip

    header /_next/static/* Cache-Control "public, max-age=31536000, immutable"

    try_files {path} {path}.html {path}/index.html =404
    file_server

    handle_errors {
        @notFound expression {http.error.status_code} == 404
        rewrite @notFound /404.html
        file_server
    }
}
```

Reload Caddy after copying a new `out/` directory:

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```
