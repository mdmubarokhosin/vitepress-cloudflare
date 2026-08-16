---
title: "Configuration"
---
# Configuration

VitePress কনফিগারেশন `docs/.vitepress/config.js` এর মাধ্যমে পরিচালিত হয়। এই ফাইলটি আপনার ডকুমেন্টেশন সাইটের সব দিক নিয়ন্ত্রণ করে — মেটাডেটা এবং রাউটিং থেকে শুরু করে থিম কাস্টমাইজেশন এবং বিল্ড সেটিংস পর্যন্ত।

## বেসিক কনফিগারেশন

প্রাথমিক সেটিংস দিয়ে শুরু করুন:

```js
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en',
  title: 'My Documentation',
  description: 'A complete documentation site built with VitePress',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ],
  lastUpdated: true,
  cleanUrls: false,
  ignoreDeadLinks: true,
})
```

## সাইট কনফিগারেশন অপশনস

### মেটাডেটা

```js
export default defineConfig({
  lang: 'en',           // Default language
  title: 'My Docs',     // Site title (shown in browser tab)
  description: '...',   // Meta description for SEO
  titleTemplate: '%s | My Docs',  // Custom title format
})
```

### হেড ট্যাগস

SEO, ফন্ট এবং অ্যানালিটিক্সের জন্য কাস্টম `<head>` ট্যাগ যোগ করুন:

```js
head: [
  ['meta', { property: 'og:title', content: 'My Docs' }],
  ['meta', { property: 'og:description', content: 'Documentation site' }],
  ['meta', { name: 'twitter:card', content: 'summary' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ['link', {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  }],
]
```

### বিল্ড অপশনস

```js
{
  lastUpdated: true,         // Show "Last updated" timestamps
  cleanUrls: false,         // Keep .html extension in URLs
  metaChunk: true,          // Enable meta chunk for smaller payloads
  ignoreDeadLinks: true,    // Don't fail on broken links
  mpa: false,               // Single-page application mode
  srcDir: '.',              // Source directory (relative to docs/)
  srcExclude: ['**/README.md'],  // Exclude files from processing
  outDir: '.vitepress/dist',     // Output directory
  cacheDir: '.vitepress/cache', // Cache directory
}
```

## থিম কনফিগারেশন

`themeConfig` সেকশন ভিজুয়াল অ্যাপিয়ারেন্স নিয়ন্ত্রণ করে:

```js
themeConfig: {
  logo: '/logo.svg',

  // Navigation bar
  nav: [
    { text: 'Guide', link: '/guide/introduction' },
    { text: 'Reference', link: '/reference/site-config' },
    {
      text: 'More',
      items: [
        { text: 'GitHub', link: 'https://github.com' },
      ],
    },
  ],

  // Sidebar
  sidebar: [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Getting Started', link: '/guide/getting-started' },
      ],
    },
  ],

  // Social links
  socialLinks: [
    { icon: 'github', link: 'https://github.com' },
  ],

  // Footer
  footer: {
    message: 'Released under the MIT License.',
    copyright: '© 2025 My Name',
  },

  // Edit link
  editLink: {
    pattern: 'https://github.com/user/repo/edit/main/docs/:path',
    text: 'Edit this page on GitHub',
  },

  // Search
  search: {
    provider: 'local',
  },

  // Appearance toggle
  darkModeSwitchLabel: 'Appearance',
  lightModeSwitchTitle: 'Switch to light theme',
  darkModeSwitchTitle: 'Switch to dark theme',
}
```

## i18n কনফিগারেশন

বহুভাষিক সাইটের জন্য, `locales` অপশন ব্যবহার করুন:

```js
locales: {
  root: {
    label: 'English',
    lang: 'en',
    themeConfig: {
      nav: [{ text: 'Guide', link: '/guide/introduction' }],
      sidebar: [/* English sidebar */],
    },
  },
  bn: {
    label: 'বাংলা',
    lang: 'bn',
    themeConfig: {
      nav: [{ text: 'গাইড', link: '/bn/guide/introduction' }],
      sidebar: [/* Bengali sidebar */],
    },
  },
}
```

::: tip
i18n ব্যবহার করার সময়, প্রাথমিক ভাষা (ইংরেজি) রুটে (`/`) থাকে, এবং সেকেন্ডারি ভাষাগুলো তাদের লোকেল প্রিফিক্স ব্যবহার করে (`/bn/`, `/fr/`, ইত্যাদি)।
:::

## সাইটম্যাপ কনফিগারেশন

স্বয়ংক্রিয় সাইটম্যাপ জেনারেশন সক্রিয় করুন:

```js
sitemap: {
  hostname: 'https://your-site.pages.dev',
}
```

এটি সার্চ ইঞ্জিন অপ্টিমাইজেশনের জন্য বিল্ডের সময় একটি `sitemap.xml` ফাইল তৈরি করে।
