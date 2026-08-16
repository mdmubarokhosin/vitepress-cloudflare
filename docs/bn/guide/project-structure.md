---
title: "Project Structure"
---
# Project Structure

একটি সুশৃঙ্খল ডকুমেন্টেশন সাইট তৈরির জন্য VitePress-এর প্রজেক্ট স্ট্রাকচার বোঝা অপরিহার্য। এই অধ্যায়টি একটি স্ট্যান্ডার্ড VitePress প্রজেক্টের প্রতিটি ফাইল এবং ডিরেক্টরি ব্যাখ্যা করে।

## ডিরেক্টরি লেআউট

একটি সাধারণ VitePress প্রজেক্ট এই স্ট্রাকচার অনুসরণ করে:

```
my-docs/
├── docs/
│   ├── .vitepress/
│   │   ├── config.js        # Site configuration
│   │   ├── theme/
│   │   │   ├── index.js     # Custom theme entry
│   │   │   ├── components/  # Custom Vue components
│   │   │   └── styles/      # Custom CSS
│   │   ├── cache/           # Build cache (auto-generated)
│   │   └── dist/            # Production output (auto-generated)
│   ├── public/
│   │   ├── logo.svg         # Static assets
│   │   └── images/          # Image files
│   ├── guide/               # Guide section pages
│   │   ├── introduction.md
│   │   ├── getting-started.md
│   │   └── ...
│   ├── reference/           # Reference section pages
│   │   ├── site-config.md
│   │   └── ...
│   ├── index.md             # Homepage
│   └── bn/                  # Bengali locale (i18n)
│       ├── index.md
│       ├── guide/
│       └── reference/
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD pipeline
├── .env                     # Environment variables
├── .gitignore
├── package.json
├── wrangler.json            # Cloudflare Pages config
└── README.md
```

## মূল ফাইলগুলো ব্যাখ্যা

### `docs/.vitepress/config.js`

এটি আপনার VitePress সাইটের **মূল কনফিগারেশন ফাইল**। এটি সাইট মেটাডেটা থেকে শুরু করে নেভিগেশন, সাইডবার, সার্চ, এবং থিম সেটিংস পর্যন্ত সবকিছু নিয়ন্ত্রণ করে।

```js
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en',
  title: 'My Docs',
  description: 'My documentation site',
})
```

### `docs/index.md`

আপনার ডকুমেন্টেশন সাইটের হোমপেজ। এটি লেআউট কনফিগারেশনের জন্য VitePress-এর YAML frontmatter সাপোর্ট করে।

```md
---
layout: home
---

hero:
  name: My Docs
  text: Documentation Site
  tagline: Built with VitePress
```

### `docs/.vitepress/theme/`

এই ডিরেক্টরিতে আপনার **কাস্টম থিম** ফাইলগুলো থাকে। আপনি ডিফল্ট থিম এক্সটেন্ড করতে পারেন বা সম্পূর্ণ কাস্টম থিম তৈরি করতে পারেন।

### `docs/public/`

এখানে রাখা **static অ্যাসেট** রুট URL-এ সার্ভ করা হয়। উদাহরণস্বরূপ, `docs/public/logo.svg` এ `/logo.svg` এ অ্যাক্সেসযোগ্য।

### `docs/bn/` (Bengali Locale)

**i18n সাপোর্টের** জন্য, প্রতিটি লোকেল তার নিজস্ব ডিরেক্টরি পায়। রুট `docs/`-এ ইংরেজি কন্টেন্ট থাকে, এবং `docs/bn/`-এ বাংলা অনুবাদ থাকে।

## কনফিগারেশন টাইপস

VitePress-এ তিন ধরনের কনফিগারেশন আছে:

| কনফিগ | ফাইল | উদ্দেশ্য |
|--------|------|---------|
| Site Config | `config.js` | গ্লোবাল সেটিংস, i18n, বিল্ড অপশন |
| Frontmatter | প্রতিটি `.md` ফাইল | প্রতি-পেজ সেটিংস (title, layout, ইত্যাদি) |
| Theme Config | `config.js > themeConfig` | Nav, sidebar, footer, search |

## বিল্ড আর্টিফ্যাক্টস

VitePress বিল্ড প্রক্রিয়ায় দুটি ডিরেক্টরি তৈরি করে:

- **`docs/.vitepress/cache/`** — ডেভেলপমেন্ট সার্ভার ক্যাশে (.gitignore-এ যোগ করুন)
- **`docs/.vitepress/dist/`** — প্রোডাকশন-রেডি static ফাইল (এই ডিরেক্টরি ডিপ্লয় করুন)

::: warning
`cache/` বা `dist/`-এ ফাইল কখনো এডিট করবেন না — এগুলো স্বয়ংক্রিয়ভাবে তৈরি হয় এবং প্রতিটি বিল্ডে ওভাররাইট হবে।
:::

## সেরা অনুশীলন

একটি রক্ষণাবেক্ষণযোগ্য প্রজেক্টের জন্য এই সাংগঠনিক নীতিগুলো অনুসরণ করুন:

1. **সম্পর্কিত পেজগুলো গ্রুপ করুন** ডিরেক্টরিতে (`guide/`, `reference/`, `api/`)
2. **বর্ণনামূলক ফাইলনেম ব্যবহার করুন** (`getting-started.md` এর বদলে `page1.md` নয়)
3. **কনফিগ মডুলার রাখুন** — বড় কনফিগারেশনের জন্য JavaScript import ব্যবহার করুন
4. **Static অ্যাসেট ভার্সন করুন** — ইমেজ এবং অ্যাসেটের জন্য হ্যাশড ফাইলনেম ব্যবহার করুন
5. **আপনার কনফিগ ডকুমেন্ট করুন** — অস্পষ্ট সেটিংস ব্যাখ্যা করে কমেন্ট যোগ করুন
