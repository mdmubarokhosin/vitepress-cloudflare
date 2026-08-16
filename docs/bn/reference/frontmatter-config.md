---
title: "Frontmatter Configuration Reference"
---
# Frontmatter Configuration Reference

VitePress frontmatter আপনাকে আপনার markdown ফাইলের উপরে YAML frontmatter ব্যবহার করে সাইট-লেভেল সেটিংস পৃথক পেজে ওভাররাইড করতে দেয়।

## বেসিক Frontmatter

```yaml
---
title: Page Title
description: Page description for SEO
---
```

## লেআউট অপশনস

### `layout: doc`

ডকুমেন্টেশন পেজের জন্য ডিফল্ট লেআউট। সাইডবার, নেভিগেশন এবং ফুটার অন্তর্ভুক্ত।

```yaml
---
layout: doc
title: My Page
---
```

### `layout: home`

হিরো সেকশন এবং ফিচার গ্রিড সহ হোমপেজ লেআউট।

```yaml
---
layout: home
---
hero:
  name: Site Name
  text: Tagline
  tagline: Description
  actions:
    - theme: brand
      text: Get Started
      link: /guide/introduction
---
features:
  - title: Feature 1
    details: Description of feature 1
```

### `layout: page`

সাইডবার বা নেভিগেশন ছাড়া একটি ফাঁকা পেজ।

```yaml
---
layout: page
---
```

### `layout: bare`

কোনো ক্রোম ছাড়া মিনিমাল লেআউট — ল্যান্ডিং পেজের জন্য কার্যকরী।

```yaml
---
layout: bare
---
```

## পেজ মেটাডেটা

```yaml
---
title: My Page Title
titleTemplate: false    # Disable site title suffix
description: Page description
head:
  - - meta
    - name: keywords
      content: docs, vitepress
  - - meta
    - property: og:title
      content: Custom Title
---
```

## নেভিগেশন কন্ট্রোল

```yaml
---
prev: false          # Disable previous link
next: /guide/next-page  # Custom next link
sidebar: false       # Hide sidebar on this page
outline: false      # Hide table of contents
---
```

## শেষ আপডেট

```yaml
---
lastUpdated: false  # Disable last updated for this page
---
```

## এডিট লিংক ওভাররাইড

```yaml
---
editLink:
  pattern: https://github.com/user/repo/edit/main/docs/:path
  text: Edit this page
---
```
