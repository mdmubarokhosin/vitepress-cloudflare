---
title: "Cloudflare Deploy"
---
# Cloudflare Deploy

আপনার VitePress ডকুমেন্টেশন সাইটটি বিনামূল্যে Cloudflare Pages-এ ডিপ্লয় করুন, GitHub Actions-এর মাধ্যমে স্বয়ংক্রিয় CI/CD সহ।

## Cloudflare Pages কেন?

Cloudflare Pages ডকুমেন্টেশন সাইটের জন্য বেশ কিছু সুবিধা অফার করে:

- **ফ্রি টায়ার** — আনলিমিটেড ব্যান্ডউইথ, মাসে ৫০০ বিল্ড
- **গ্লোবাল CDN** — বিশ্বব্যাপী ৩০০+ লোকেশন থেকে কন্টেন্ট সার্ভ করা হয়
- **দ্রুত ডিপ্লয়** — ৬০ সেকেন্ডের কম সময়ে বিল্ড সম্পন্ন হয়
- **স্বয়ংক্রিয় HTTPS** — SSL সার্টিফিকেট স্বয়ংক্রিয়ভাবে প্রভাইশন করা হয়
- **প্রিভিউ ডিপ্লয়** — প্রতিটি পুল রিকোয়েস্ট একটি প্রিভিউ URL পায়
- **কাস্টম ডোমেইন** — বিনামূল্যে আপনার নিজস্ব ডোমেইন কানেক্ট করুন

## ডিপ্লয়মেন্ট মেথডস

### মেথড ১: GitHub ইন্টিগ্রেশন (প্রস্তাবিত)

সবচেয়ে সহজ মেথড — আপনার GitHub রিপো Cloudflare Pages-এ কানেক্ট করুন:

1. আপনার কোড GitHub-এ পুশ করুন
2. [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)-এ যান
3. **"Create a project"** ক্লিক করুন
4. **"Connect to Git"** নির্বাচন করুন
5. আপনার GitHub রিপোজিটরি চয়ন করুন
6. বিল্ড সেটিংস কনফিগার করুন:

| সেটিং | মান |
|---------|-------|
| Build command | `npm run docs:build` |
| Build output directory | `docs/.vitepress/dist` |
| Root directory | `/` |

7. **"Save and Deploy"** ক্লিক করুন

### মেথড ২: GitHub Actions (CI/CD-র জন্য প্রস্তাবিত)

প্রতিটি পুশে স্বয়ংক্রিয় ডিপ্লয়মেন্টের জন্য, GitHub Actions ব্যবহার করুন:

#### ধাপ ১: ওয়ার্কফ্লো ফাইল তৈরি করুন

`.github/workflows/deploy.yml` তৈরি করুন:

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

#### ধাপ ২: GitHub Secrets সেট করুন

আপনার GitHub রিপোজিটরিতে, **Settings > Secrets and variables > Actions**-এ যান এবং যোগ করুন:

- `CLOUDFLARE_API_TOKEN` — আপনার Cloudflare API টোকেন
- `CLOUDFLARE_ACCOUNT_ID` — আপনার Cloudflare অ্যাকাউন্ট ID

#### ধাপ ৩: Wrangler Config তৈরি করুন

`wrangler.json` তৈরি করুন:

```json
{
  "name": "my-docs",
  "compatibility_date": "2025-08-15",
  "pages_build_output_dir": "docs/.vitepress/dist",
  "compatibility_flags": ["nodejs_compat"]
}
```

## Cloudflare-এ এনভায়রনমেন্ট ভেরিয়েবলস

Cloudflare Pages-এ এনভায়রনমেন্ট ভেরিয়েবল (API key-এর মতো) সেট করতে:

1. Cloudflare Pages Dashboard-এ আপনার প্রজেক্টে যান
2. **Settings > Environment variables**-এ নেভিগেট করুন
3. **"Add variable"** ক্লিক করুন
4. ভেরিয়েবলের নাম এবং মান লিখুন
5. এনভায়রনমেন্ট চয়ন করুন (Production, Preview, বা উভয়)

::: tip
API key-এর মতো সংবেদনশীল মানের জন্য, সেগুলো secrets হিসেবে সংরক্ষণ করতে **"Encrypt"** অপশন ব্যবহার করুন।
:::

## বিল্ড কনফিগারেশন সারসংক্ষেপ

| সেটিং | মান |
|---------|-------|
| Framework preset | None |
| Build command | `npm run docs:build` |
| Build output directory | `docs/.vitepress/dist` |
| Root directory | `/` |
| Node.js version | 22 |

## কাস্টম ডোমেইন

একটি কাস্টম ডোমেইন কানেক্ট করতে:

1. **Cloudflare Pages > Custom domains**-এ যান
2. **"Set up a custom domain"** ক্লিক করুন
3. আপনার ডোমেইন নাম লিখুন
4. DNS কনফিগারেশন নির্দেশাবলী অনুসরণ করুন

## সমস্যা সমাধান

| সমস্যা | সমাধান |
|-------|----------|
| বিল্ড ব্যর্থ | Node.js ভার্সন (22+) এবং `npm ci` আউটপুট চেক করুন |
| পেজে 404 | config.js-এ `cleanUrls: true` যাচাই করুন |
| ফাঁকা পেজ | অ্যাসেট পথ এররের জন্য ব্রাউজার কনসোল চেক করুন |
| পুরনো কন্টেন্ট | Cloudflare ক্যাশে ক্লিয়ার করুন অথবা রিডিপ্লয় করুন |
| ধীর বিল্ড | GitHub Actions-এ `cache: 'npm'` সক্রিয় করুন |
