---
title: "Cloudflare Deploy"
---
# Cloudflare Deploy

Deploy your VitePress documentation site to Cloudflare Pages for free, with automatic CI/CD through GitHub Actions.

## Why Cloudflare Pages?

Cloudflare Pages offers several advantages for documentation sites:

- **Free tier** — unlimited bandwidth, 500 builds/month
- **Global CDN** — content served from 300+ locations worldwide
- **Fast deploys** — builds complete in under 60 seconds
- **Automatic HTTPS** — SSL certificates provisioned automatically
- **Preview deploys** — every pull request gets a preview URL
- **Custom domains** — connect your own domain for free

## Deployment Methods

### Method 1: GitHub Integration (Recommended)

The easiest method — connect your GitHub repo to Cloudflare Pages:

1. Push your code to GitHub
2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
3. Click **"Create a project"**
4. Select **"Connect to Git"**
5. Choose your GitHub repository
6. Configure build settings:

| Setting | Value |
|---------|-------|
| Build command | `npm run docs:build` |
| Build output directory | `docs/.vitepress/dist` |
| Root directory | `/` |

7. Click **"Save and Deploy"**

### Method 2: GitHub Actions (Recommended for CI/CD)

For automatic deployments on every push, use GitHub Actions:

#### Step 1: Create Workflow File

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'npm'

      - run: npm ci
      - run: npm run docs:build

      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy docs/.vitepress/dist --project-name=your-project-name
```

#### Step 2: Set GitHub Secrets

In your GitHub repository, go to **Settings > Secrets and variables > Actions** and add:

- `CLOUDFLARE_API_TOKEN` — your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare account ID

#### Step 3: Create Wrangler Config

Create `wrangler.json`:

```json
{
  "name": "my-docs",
  "compatibility_date": "2025-08-15",
  "pages_build_output_dir": "docs/.vitepress/dist",
  "compatibility_flags": ["nodejs_compat"]
}
```

## Environment Variables on Cloudflare

To set environment variables (like API keys) on Cloudflare Pages:

1. Go to your project in Cloudflare Pages Dashboard
2. Navigate to **Settings > Environment variables**
3. Click **"Add variable"**
4. Enter the variable name and value
5. Choose the environment (Production, Preview, or both)

::: tip
For sensitive values like API keys, use the **"Encrypt"** option to store them as secrets.
:::

## Build Configuration Summary

| Setting | Value |
|---------|-------|
| Framework preset | None |
| Build command | `npm run docs:build` |
| Build output directory | `docs/.vitepress/dist` |
| Root directory | `/` |
| Node.js version | 22 |

## Custom Domain

To connect a custom domain:

1. Go to **Cloudflare Pages > Custom domains**
2. Click **"Set up a custom domain"**
3. Enter your domain name
4. Follow the DNS configuration instructions

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check Node.js version (22+) and `npm ci` output |
| 404 on pages | Verify `cleanUrls: true` in config.js |
| Blank page | Check browser console for asset path errors |
| Stale content | Clear Cloudflare cache or redeploy |
| Slow builds | Enable `cache: 'npm'` in GitHub Actions |

