# e-cordel

Institutional website and Wiki for [e-cordel](https://www.ecordel.com.br), a volunteer project that preserves and promotes cordel literature in digital format.

The site is static, built with [Docusaurus](https://docusaurus.io/). The cordel reading platform remains available at [ler.ecordel.com.br](https://ler.ecordel.com.br/).

## Requirements

- Node.js 22 or later
- npm

## Development

```sh
npm install
npm start
```

The local server starts at `http://localhost:3000`. To generate a production build and verify links/content:

```sh
npm run typecheck
npm run build
npm run serve
```

## Content and assets

- Institutional pages: `src/pages/`
- Wiki: `docs/`
- Wiki order and categories: `sidebars.ts`
- Images, icons, and migrated documents: `static/img/media/`
- SEO, navigation, sitemap, and local search configuration: `docusaurus.config.ts`

When adding a page, use Markdown/MDX, include alt text for meaningful images, and prefer local assets in `static/img/media/`. Historical routes have been preserved; do not change them without adding the corresponding redirect on the host.

## Deployment

`.github/workflows/deploy.yml` runs on pushes to `main` and can also be triggered manually via `workflow_dispatch`. The workflow installs dependencies with `npm ci`, builds `build/`, and uploads only that directory via **FTPS** to `/public_html/`.

Configure these repository secrets before the first deployment:

| Secret | Description |
| --- | --- |
| `FTPS_SERVER` | FTPS server hostname |
| `FTPS_USERNAME` | FTPS username |
| `FTPS_PASSWORD` | FTPS password |

Never add these credentials to version-controlled files, public Docusaurus variables, or CI logs.
