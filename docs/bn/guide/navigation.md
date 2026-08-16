---
title: "Navigation & Sidebar"
---
# Navigation & Sidebar

নেভিগেশন এবং সাইডবার একটি ডকুমেন্টেশন সাইটের সবচেয়ে গুরুত্বপূর্ণ উপাদানদের মধ্যে দুটি। VitePress উভয়ের জন্য একটি নমনীয় কনফিগারেশন সিস্টেম প্রদান করে।

## নেভিগেশন বার (Nav)

নেভিগেশন বার প্রতিটি পৃষ্ঠার উপরে দেখা যায়। `themeConfig.nav`-এ কনফিগার করুন:

### বেসিক নেভিগেশন

```js
nav: [
  { text: 'Guide', link: '/guide/introduction' },
  { text: 'Reference', link: '/reference/site-config' },
]
```

### ড্রপডাউন মেনু

```js
nav: [
  {
    text: 'Resources',
    items: [
      { text: 'VitePress Docs', link: 'https://vitepress.dev' },
      { text: 'Vue.js', link: 'https://vuejs.org' },
      { text: 'GitHub', link: 'https://github.com' },
    ],
  },
]
```

### অ্যাক্টিভ লিংক ম্যাচিং

একটি nav আইটেম কখন অ্যাক্টিভ দেখাবে তা নিয়ন্ত্রণ করতে `activeMatch` ব্যবহার করুন:

```js
{ text: 'Guide', link: '/guide/introduction', activeMatch: '/guide/' }
```

### আইকন সহ নেভিগেশন

```js
nav: [
  { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
  { text: 'API', link: '/api/', activeMatch: '/api/' },
  { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
]
```

## সাইডবার

সাইডবার আপনার ডকুমেন্টেশনের জন্য একটি সূচি প্রদান করে। `themeConfig.sidebar`-এ কনফিগার করুন:

### সিঙ্গেল সাইডবার

```js
sidebar: [
  {
    text: 'Getting Started',
    items: [
      { text: 'Introduction', link: '/guide/introduction' },
      { text: 'Getting Started', link: '/guide/getting-started' },
    ],
  },
  {
    text: 'Advanced',
    items: [
      { text: 'Configuration', link: '/guide/configuration' },
    ],
  },
]
```

### কোল্যাপসিবল গ্রুপস

```js
sidebar: [
  {
    text: 'Getting Started',
    collapsed: false,
    items: [
      { text: 'Introduction', link: '/guide/introduction' },
    ],
  },
  {
    text: 'Reference',
    collapsed: true,
    items: [
      { text: 'Site Config', link: '/reference/site-config' },
    ],
  },
]
```

### মাল্টিপল সাইডবারস

পৃথক পেজে পাথ ম্যাপিং ব্যবহার করে ভিন্ন সাইডবার থাকতে পারে:

```js
sidebar: {
  '/guide/': [
    {
      text: 'Guide',
      items: [
        { text: 'Introduction', link: '/guide/introduction' },
      ],
    },
  ],
  '/reference/': [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: '/reference/site-config' },
      ],
    },
  ],
}
```

## i18n নেভিগেশন ও সাইডবার

বহুভাষিক সাইটের জন্য, প্রতিটি লোকেলের অধীনে nav এবং sidebar কনফিগার করুন:

```js
locales: {
  root: {
    label: 'English',
    themeConfig: {
      nav: [{ text: 'Guide', link: '/guide/introduction' }],
      sidebar: [/* English sidebar */],
    },
  },
  bn: {
    label: 'বাংলা',
    themeConfig: {
      nav: [{ text: 'গাইড', link: '/bn/guide/introduction' }],
      sidebar: [/* Bengali sidebar */],
    },
  },
}
```

## ফুটার কনফিগারেশন

```js
footer: {
  message: 'Released under the MIT License.',
  copyright: '© 2025 Documentation Author',
}
```

## এডিট লিংকস

ব্যবহারকারীদের GitHub-এ সরাসরি পেজ এডিট করতে দিন:

```js
editLink: {
  pattern: 'https://github.com/user/repo/edit/main/docs/:path',
  text: 'Edit this page on GitHub',
}
```

::: tip
`:path` প্লেসহোল্ডারটি স্বয়ংক্রিয়ভাবে docs ডিরেক্টরির সাপেক্ষে বর্তমান পেজের ফাইল পথ দিয়ে প্রতিস্থাপিত হয়।
:::
