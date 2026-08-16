---
title: "Getting Started"
---
# Getting Started

আসুন আপনার প্রথম VitePress প্রজেক্ট স্ক্র্যাচ থেকে সেটআপ করি। এই গাইডটি প্রজেক্ট তৈরি করা থেকে শুরু করে ডেভেলপমেন্ট সার্ভার চালানো পর্যন্ত প্রতিটি ধাপে আপনাকে নিয়ে যায়।

## ধাপ ১: আপনার প্রজেক্ট তৈরি করুন

আপনার প্রজেক্টের জন্য একটি নতুন ডিরেক্টরি তৈরি করুন এবং ইনিশিয়ালাইজ করুন:

```bash
mkdir my-docs
cd my-docs
```

## ধাপ ২: Package.json ইনিশিয়ালাইজ করুন

একটি `package.json` ফাইল তৈরি করুন:

```json
{
  "name": "my-docs",
  "version": "1.0.0",
  "type": "module",
  "private": true,
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "devDependencies": {
    "vitepress": "^1.6.4",
    "vue": "^3.5.13"
  }
}
```

::: warning
আপনার package.json-এ অবশ্যই `"type": "module"` ব্যবহার করতে হবে কারণ VitePress ES module সিনট্যাক্স ব্যবহার করে।
:::

## ধাপ ৩: ডিপেন্ডেন্সি ইনস্টল করুন

VitePress এবং Vue ইনস্টল করুন:

```bash
npm install
```

এটি `vitepress` এবং `vue` উভয়কেই devDependencies হিসেবে ইনস্টল করবে।

## ধাপ ৪: আপনার প্রথম পেজ তৈরি করুন

docs ডিরেক্টরি এবং আপনার প্রথম markdown ফাইল তৈরি করুন:

```bash
mkdir -p docs
```

`docs/index.md` তৈরি করুন:

```md
---
layout: home
---

# Hello VitePress

This is my first VitePress documentation site.
```

## ধাপ ৫: ডেভেলপমেন্ট সার্ভার চালান

ডেভেলপমেন্ট সার্ভার শুরু করুন:

```bash
npm run docs:dev
```

আপনার ব্রাউজার খুলুন এবং `http://localhost:5173` ভিজিট করুন — আপনি আপনার নতুন ডকুমেন্টেশন সাইট দেখতে পাবেন।

## ধাপ ৬: আপনার প্রথম গাইড পেজ যোগ করুন

`docs/guide/getting-started.md` তৈরি করুন:

```md
# Getting Started

This is the getting started page. Follow these steps:

1. Create a markdown file
2. Write your content
3. Run the dev server to preview
```

## কনফিগারেশন ফাইল তৈরি করা

`docs/.vitepress/config.js` তৈরি করুন:

```js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  description: 'My documentation site',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
        ],
      },
    ],
  },
})
```

কনফিগ সেভ করার পর, ডেভেলপমেন্ট সার্ভার স্বয়ংক্রিয়ভাবে রিলোড হবে এবং নেভিগেশন এবং সাইডবার দেখাবে।

## আপনার সেটআপ যাচাই করা

নিশ্চিত করুন সবকিছু সঠিকভাবে কাজ করছে:

```bash
# Check that the build works
npm run docs:build

# Preview the production build
npm run docs:preview
```

::: tip
`docs:preview` কমান্ডটি বিল্ট আউটপুট প্রিভিউ করার জন্য একটি লোকাল সার্ভার শুরু করে। এটি ডিপ্লয়মেন্টের আগে পরীক্ষা করার জন্য কার্যকরী।
:::

## সাধারণ সমস্যা

| সমস্যা | সমাধান |
|---------|----------|
| Port 5173 ব্যবহৃত | VitePress স্বয়ংক্রিয়ভাবে পরবর্তী উপলব্ধ পোর্ট নির্বাচন করে |
| ফাঁকা পেজ | নিশ্চিত করুন আপনার markdown ফাইলগুলো `docs/` ডিরেক্টরিতে আছে |
| বিল্ড ব্যর্থ | যাচাই করুন package.json-এ `"type": "module"` আছে |
| স্টাইল নেই | নিশ্চিত করুন `vitepress` devDependencies-এ ইনস্টল করা আছে |

## পরবর্তী ধাপ

এখন আপনার প্রজেক্ট সেটআপ হয়ে গেছে, চলুন VitePress কীভাবে ফাইল সংগঠিত করে তা বুঝতে প্রজেক্ট স্ট্রাকচার এক্সপ্লোর করি।
