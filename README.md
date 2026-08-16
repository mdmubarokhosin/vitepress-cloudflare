<div align="center">

<img src="docs/public/vitepress-logo-large.svg" alt="VitePress Course Logo" width="120" height="120">

# VitePress Course — Complete Tutorial

**Learn VitePress from zero to production deployment on Cloudflare Pages**

[![Live Demo](https://img.shields.io/badge/Live-Demo-5350C4?style=flat-square&logo=vitepress&link=https://vitepress-cloudflare.pages.dev)](https://vitepress-cloudflare.pages.dev)
[![VitePress](https://img.shields.io/badge/VitePress-1.6+-5350C4?style=flat-square&logo=vitepress)](https://vitepress.dev)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare_Pages-F6821F?style=flat-square&logo=cloudflare)](https://pages.cloudflare.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[English](#english) · [বাংলা](#বাংলা)

</div>

---

## English

### 📖 About

A complete, bilingual (English + Bengali) VitePress course website — covering everything from basic setup to advanced theming, AI chatbot integration, and production deployment on Cloudflare Pages. Built with a GitHub Markdown Viewer-inspired purple design system.

### ✨ Features

- **28+ Content Pages** — 10 English guides, 4 reference docs, 10 Bengali guides, 4 Bengali reference docs
- **Bilingual i18n** — Full English (`/`) and Bengali (`/bn/`) support with language switcher
- **AI Chatbot (Ask AI)** — Poolside AI-powered chat assistant integrated into every page
  - Quick action buttons for common VitePress questions
  - Copy, regenerate, and clear chat functionality
  - Centered modal overlay (vitepress.dev-style)
  - Typing indicators
  - Server-side API proxy (no exposed keys)
- **GitHub Markdown Viewer Design** — Professional purple theme (#5350C4) inspired by GitHub's markdown rendering
- **SEO Optimized** — Open Graph, Twitter Cards, sitemap, robots.txt, canonical URLs
- **Dark Mode** — Full dark mode with smooth transitions
- **PWA Ready** — Web app manifest included
- **Performance** — Preconnect hints, font optimization, metaChunk enabled
- **Homepage** — Animated hero, feature cards with stagger animations, stats section, sponsors, CTA

### 🏗️ Project Structure

```
├── package.json              # Dependencies & scripts
├── .env.example              # API key template
├── .nvmrc                    # Node.js version
├── .gitignore
├── LICENSE                   # MIT License
├── functions/
│   └── api/
│       └── chat.js           # Cloudflare Pages Function (API proxy)
├── docs/
│   ├── .vitepress/
│   │   ├── config.js         # VitePress config (i18n, SEO, nav, sidebar)
│   │   └── theme/
│   │       ├── index.js       # Theme entry (DefaultTheme + AskAI + Home)
│   │       ├── components/
│   │       │   ├── AskAI.vue  # AI chatbot component (modal overlay)
│   │       │   └── Home.vue   # Homepage sections (bilingual)
│   │       └── styles/
│   │           └── custom.css # Full theme styles
│   ├── public/
│   │   ├── vitepress-logo-large.svg
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   ├── _headers
│   │   └── humans.txt
│   ├── index.md              # English homepage
│   ├── 404.md
│   ├── guide/                # English course chapters (10 files)
│   ├── reference/             # English reference docs (4 files)
│   └── bn/                   # Bengali content (mirror structure)
│       ├── index.md
│       ├── 404.md
│       ├── guide/            # 10 Bengali guides
│       └── reference/        # 4 Bengali references
```

### 🚀 Quick Start

**Prerequisites:** Node.js 18+ (22 recommended)

```bash
# 1. Clone the repo
git clone https://github.com/mdmubarokhosin/vitepress-cloudflare.git
cd vitepress-cloudflare

# 2. Install dependencies
npm install

# 3. Start dev server
npm run docs:dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 🔑 AI Chatbot Setup

The Ask AI chatbot uses Poolside AI via a **server-side Cloudflare Function** proxy. No API key is exposed to the browser.

**Step 1 — Get a Poolside AI API key** from [poolside.ai](https://poolside.ai)

**Step 2 — Add to Cloudflare Pages:**
1. Go to Cloudflare Dashboard → Pages → your project → Settings → Environment variables
2. Add variable: `POOLSIDE_API_KEY` = your key
3. Set as **Secret** → Apply to Production & Preview

**Optional — Local development:**
```bash
# Create .env file in project root
echo "POOLSIDE_API_KEY=your_api_key_here" > .env
```

> Without an API key, the chatbot UI still displays but API calls will show a configuration error.

### 📦 Build & Deploy

```bash
# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

**Cloudflare Pages Configuration:**
| Setting | Value |
|---------|-------|
| Build command | `npm run docs:build` |
| Build output directory | `docs/.vitepress/dist` |
| Root directory | `/` |
| Node.js version | `22` |

### 🎨 Customization

- **Theme colors:** Edit CSS variables in `docs/.vitepress/theme/styles/custom.css`
- **Navigation & Sidebar:** Edit `docs/.vitepress/config.js`
- **Homepage sections:** Edit `docs/.vitepress/theme/components/Home.vue`
- **Chatbot behavior:** Edit `docs/.vitepress/theme/components/AskAI.vue`
- **API proxy:** Edit `functions/api/chat.js`
- **Add content:** Add `.md` files to `docs/guide/` or `docs/bn/guide/`

### 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [VitePress 1.6](https://vitepress.dev) | Static site generator |
| [Vue 3.5](https://vuejs.org) | UI framework |
| [Poolside AI](https://poolside.ai) | AI chatbot API |
| [Cloudflare Pages](https://pages.cloudflare.com) | Hosting, Functions, deployment |
| [Google Fonts](https://fonts.google.com) | Noto Serif Bengali + Inter |
| [Bootstrap Icons](https://icons.getbootstrap.com) | Icon set |

### 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## বাংলা

### 📖 পরিচিতি

একটি সম্পূর্ণ দ্বিভাষিক (ইংরেজি + বাংলা) VitePress কোর্স ওয়েবসাইট — বেসিক সেটআপ থেকে শুরু করে অ্যাডভান্সড থিমিং, AI চ্যাটবট ইন্টিগ্রেশন এবং Cloudflare Pages-এ প্রোডাকশন ডিপ্লয়মেন্ট পর্যন্ত সব কিছু কভার করে। GitHub Markdown Viewer-এর অনুপ্রাণিত বেগুনি ডিজাইন সিস্টেম ব্যবহার করে তৈরি।

### ✨ ফিচারসমূহ

- **২৮+ কনটেন্ট পেজ** — ১০টি ইংরেজি গাইড, ৪টি রেফারেন্স, ১০টি বাংলা গাইড, ৪টি বাংলা রেফারেন্স
- **দ্বিভাষিক i18n** — সম্পূর্ণ ইংরেজি (`/`) এবং বাংলা (`/bn/`) সাপোর্ট সহ ভাষা সুইচার
- **AI চ্যাটবট (Ask AI)** — Poolside AI চালিত চ্যাট অ্যাসিস্ট্যান্ট প্রতিটি পেজে ইন্টিগ্রেটেড
  - কুইক অ্যাকশন বাটন
  - কপি, রিজেনারেট, ক্লিয়ার চ্যাট
  - সেন্টারড মডাল ওভারলে (vitepress.dev-স্টাইল)
  - টাইপিং ইন্ডিকেটর
  - সার্ভার-সাইড API প্রক্সি (কোনো এক্সপোজড কী নেই)
- **GitHub Markdown ডিজাইন** — বেগুনি থিম (#5350C4)
- **SEO অপটিমাইজড** — Open Graph, Twitter Cards, sitemap, robots.txt
- **ডার্ক মোড** — স্মুথ ট্রানজিশনসহ সম্পূর্ণ ডার্ক মোড
- **PWA রেডি** — Web app manifest যুক্ত
- **অ্যানিমেটেড হোমপেজ** — Hero, ফিচার কার্ড, স্ট্যাটস, CTA সেকশন

### 🚀 দ্রুত শুরু

**পূর্বশর্ত:** Node.js 18+ (22 রেকমেন্ডেড)

```bash
# ১. রিপো ক্লোন করুন
git clone https://github.com/mdmubarokhosin/vitepress-cloudflare.git
cd vitepress-cloudflare

# ২. ডিপেন্ডেন্সি ইনস্টল করুন
npm install

# ৩. ডেভ সার্ভার চালু করুন
npm run docs:dev
```

ব্রাউজারে [http://localhost:5173](http://localhost:5173) খুলুন।

### 🔑 AI চ্যাটবট সেটআপ

Ask AI চ্যাটবট **সার্ভার-সাইড Cloudflare Function** প্রক্সির মাধ্যমে Poolside AI ব্যবহার করে। কোনো API key ব্রাউজারে এক্সপোজড থাকে না।

**ধাপ ১ — Poolside AI API key নিন** [poolside.ai](https://poolside.ai) থেকে

**ধাপ ২ — Cloudflare Pages এ যোগ করুন:**
1. Cloudflare Dashboard → Pages → আপনার প্রজেক্ট → Settings → Environment variables
2. ভেরিয়েবল যোগ করুন: `POOLSIDE_API_KEY` = আপনার কী
3. **Secret** হিসেবে সেট করুন → Production & Preview তে Apply করুন

### 📦 বিল্ড ও ডিপ্লয়

```bash
# প্রোডাকশন বিল্ড
npm run docs:build

# প্রিভিউ
npm run docs:preview
```

**Cloudflare Pages কনফিগারেশন:**
| সেটিং | ভ্যালু |
|--------|-------|
| Build command | `npm run docs:build` |
| Build output directory | `docs/.vitepress/dist` |
| Root directory | `/` |
| Node.js version | `22` |

### 🛠️ টেক স্ট্যাক

| টেকনোলজি | ব্যবহার |
|------------|----------|
| [VitePress 1.6](https://vitepress.dev) | স্ট্যাটিক সাইট জেনারেটর |
| [Vue 3.5](https://vuejs.org) | UI ফ্রেমওয়ার্ক |
| [Poolside AI](https://poolside.ai) | AI চ্যাটবট API |
| [Cloudflare Pages](https://pages.cloudflare.com) | হোস্টিং, Functions, ডিপ্লয় |

### 📄 লাইসেন্স

এই প্রোজেক্ট MIT লাইসেন্সের অধীনে লাইসেন্সকৃত। [LICENSE](LICENSE) ফাইল দেখুন।

---

<div align="center">

**Built with ❤️ by [mdmubarokhosin](https://github.com/mdmubarokhosin)**

</div>
