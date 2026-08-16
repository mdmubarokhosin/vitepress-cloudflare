---
title: "Writing Markdown"
---
# Writing Markdown

VitePress ডকুমেন্টেশনের জন্য শক্তিশালী ফিচার সহ স্ট্যান্ডার্ড Markdown এক্সটেন্ড করে। এই অধ্যায়টি সমৃদ্ধ, পেশাদার কন্টেন্ট তৈরির জন্য আপনার প্রয়োজনীয় সমস্ত markdown সক্ষমতা কভার করে।

## বেসিক সিনট্যাক্স

### হেডিংস

```md
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

### টেক্সট ফরম্যাটিং

```md
**Bold text**, *italic text*, ~~strikethrough~~

`inline code` with backticks
```

### লিংক এবং ইমেজ

```md
[Link text](/guide/introduction)

![Alt text](/images/screenshot.png)
```

### লিস্টস

```md
- Unordered item 1
- Unordered item 2

1. Ordered item 1
2. Ordered item 2

- [x] Completed task
- [ ] Pending task
```

## কোড ব্লকস

### বেসিক কোড ব্লক

````md
```js
const message = 'Hello VitePress'
console.log(message)
```
````

### কোড গ্রুপস (ট্যাবস)

````md
::: code-group

```bash [npm]
npm install vitepress
```

```bash [yarn]
yarn add vitepress
```

```bash [pnpm]
pnpm add vitepress
```

:::
````

### লাইন হাইলাইটিং

````md
```js{2,4}
const first = 'line 1'    // not highlighted
const second = 'line 2'   // highlighted
const third = 'line 3'     // not highlighted
const fourth = 'line 4'   // highlighted
```
````

## টেবিলস

```md
| Feature | Status | Notes |
|---------|--------|-------|
| Dark Mode | ✅ | Built-in |
| Search | ✅ | Local provider |
| i18n | ✅ | Locale routing |
| Comments | ❌ | Use third-party |
```

## কাস্টম কন্টেইনারস

VitePress বেশ কয়েক ধরনের কন্টেইনার প্রদান করে:

```md
::: tip
This is a tip — helpful information.
:::

::: info
This is an info block — general information.
:::

::: warning
This is a warning — proceed with caution.
:::

::: danger
This is a danger alert — important warning.
:::

::: details
This is a collapsible details block.
:::
```

## GitHub-স্টাইল অ্যালার্টস (v1.6+)

```md
> [!NOTE]
> Useful information that users should know.

> [!TIP]
> Helpful advice for doing something better.

> [!WARNING]
> Cautions about potential issues.

> [!CAUTION]
> Important security or data considerations.
```

## এস্কেপিং

কন্টেইনার সিনট্যাক্স আক্ষরিকভাবে দেখাতে, এটি একটি কোড ব্লকে রাখুন অথবা `---` এস্কেপ ব্যবহার করুন:

```md
::: tip Custom Title
Content here
:::
```

## পারফরম্যান্স টিপস

- **ইমেজ অপ্টিমাইজড রাখুন** — সম্ভব হলে WebP ফরম্যাট ব্যবহার করুন
- **ইমেজ লেজি-লোড করুন** — VitePress এটি স্বয়ংক্রিয়ভাবে হ্যান্ডেল করে
- **বড় ইনলাইন SVG এড়িয়ে চলুন** — সেগুলো public ডিরেক্টরিতে সরান
- **কোড গ্রুপ ব্যবহার করুন** একাধিক কোড ব্লক দেখানোর বদলে

::: tip
VitePress markdown সমস্ত স্ট্যান্ডার্ড Markdown ফিচার প্লাস এক্সটেনশন সাপোর্ট করে। সম্পূর্ণ রেফারেন্সের জন্য, অফিসিয়াল ডকসের [Markdown Extensions](https://vitepress.dev/guide/markdown) সেকশন দেখুন।
:::
