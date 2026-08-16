---
title: "Site Configuration Reference"
---
# Site Configuration Reference

`docs/.vitepress/config.js`-এ উপলব্ধ সমস্ত VitePress সাইট কনফিগারেশন অপশনের সম্পূর্ণ রেফারেন্স।

## টপ-লেভেল অপশনস

### `lang`

- **Type:** `string`
- **Default:** `'en'`
- **Description:** সাইটের ভাষা। SEO এবং i18n-এর জন্য ব্যবহৃত।

```js
lang: 'en'
```

### `title`

- **Type:** `string`
- **Default:** `undefined`
- **Description:** ব্রাউজার ট্যাবে দেখানো সাইট টাইটেল।

```js
title: 'My Documentation'
```

### `description`

- **Type:** `string`
- **Default:** `undefined`
- **Description:** SEO meta ট্যাগের জন্য সাইট বিবরণ।

```js
description: 'Complete VitePress documentation course'
```

### `titleTemplate`

- **Type:** `string`
- **Default:** `'%s | VitePress'`
- **Description:** কাস্টম টাইটেল ফরম্যাট। `%s` পেজ টাইটেল দিয়ে প্রতিস্থাপিত হয়।

```js
titleTemplate: '%s — My Docs'
```

### `head`

- **Type:** `HeadConfig[]`
- **Description:** `<head>` সেকশনে ইনজেক্ট করার জন্য অতিরিক্ত ট্যাগ।

```js
head: [
  ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ['link', { rel: 'icon', href: '/favicon.ico' }],
]
```

### `lastUpdated`

- **Type:** `boolean`
- **Default:** `false`
- **Description:** পেজে "Last updated" টাইমস্ট্যাম্প দেখান।

### `cleanUrls`

- **Type:** `boolean`
- **Default:** `false`
- **Description:** URL থেকে `.html` এক্সটেনশন সরান।

::: warning
Cloudflare Pages-এ ডিপ্লয় করার সময় সঠিক রাউটিং নিশ্চিত করতে `cleanUrls: true` সেট করুন।
:::

### `ignoreDeadLinks`

- **Type:** `boolean`
- **Default:** `false`
- **Description:** ভাঙা ইন্টারনাল লিংকে বিল্ড ব্যর্থ হবে না।

```js
ignoreDeadLinks: true
```

### `sitemap`

- **Type:** `{ hostname: string }`
- **Description:** একটি sitemap.xml ফাইল তৈরি করুন।

```js
sitemap: {
  hostname: 'https://my-docs.pages.dev'
}
```
