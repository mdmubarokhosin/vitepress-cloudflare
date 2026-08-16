---
title: "Custom Theme"
---
# Custom Theme

VitePress আপনাকে আপনার নিজস্ব Vue কম্পোনেন্ট, স্টাইল এবং লেআউট দিয়ে ডিফল্ট থিম এক্সটেন্ড এবং কাস্টমাইজ করতে দেয়। এই অধ্যায়টি একটি পেশাদার দেখতে কাস্টম থিম তৈরির জন্য আপনার যা প্রয়োজন তা কভার করে।

## থিম আর্কিটেকচার

VitePress থিম Vue 3 দিয়ে তৈরি এবং স্লট-ভিত্তিক আর্কিটেকচার ব্যবহার করে। ডিফল্ট থিম একটি সম্পূর্ণ লেআউট প্রদান করে যা আপনি স্ক্র্যাচ থেকে সব পুনরায় লেখার প্রয়োজন ছাড়াই এক্সটেন্ড করতে পারেন।

### থিম ডিরেক্টরি স্ট্রাকচার

```
docs/.vitepress/theme/
├── index.js          # Theme entry point
├── components/       # Custom Vue components
│   ├── AskAI.vue    # AI chatbot component
│   └── ...
└── styles/
    └── custom.css    # Custom styles
```

## ডিফল্ট থিম এক্সটেন্ড করা

### বেসিক এক্সটেনশন

`docs/.vitepress/theme/index.js` তৈরি করুন:

```js
import DefaultTheme from 'vitepress/theme'
import './styles/custom.css'

export default DefaultTheme
```

### কাস্টম কম্পোনেন্ট যোগ করা

গ্লোবাল কম্পোনেন্ট রেজিস্টার করুন:

```js
import DefaultTheme from 'vitepress/theme'
import CustomComponent from './components/CustomComponent.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomComponent', CustomComponent)
  },
}
```

### লেআউট স্লট ব্যবহার করা

ডিফল্ট থিম নির্দিষ্ট অবস্থানে কন্টেন্ট ইনজেক্ট করার জন্য স্লট প্রদান করে:

```js
import DefaultTheme from 'vitepress/theme'
import AskAI from './components/AskAI.vue'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(AskAI),
    })
  },
}
```

উপলব্ধ স্লটগুলো হলো:

| স্লট নাম | অবস্থান |
|-----------|----------|
| `layout-top` | লেআউটের উপরে |
| `layout-bottom` | লেআউটের নিচে |
| `nav-bar-title-before` | Nav title-এর আগে |
| `nav-bar-title-after` | Nav title-এর পরে |
| `nav-bar-content-before` | Nav content-এর আগে |
| `nav-bar-content-after` | Nav content-এর পরে |
| `nav-screen-content-before` | মোবাইল nav-এর আগে |
| `nav-screen-content-after` | মোবাইল nav-এর পরে |
| `aside-top` | সাইডবারের আগে |
| `aside-bottom` | সাইডবারের পরে |
| `aside-outline-before` | আউটলাইনের আগে |
| `aside-outline-after` | আউটলাইনের পরে |
| `doc-top` | কন্টেন্টের আগে |
| `doc-bottom` | কন্টেন্টের পরে |
| `doc-footer-before` | ফুটারের আগে |

## কাস্টম CSS

### CSS ভেরিয়েবলস

VitePress ব্যাপকভাবে CSS ভেরিয়েবল ব্যবহার করে। আপনার কাস্টম CSS-এ সেগুলো ওভাররাইড করুন:

```css
:root {
  /* Brand colors */
  --vp-c-brand-1: #5f67ee;
  --vp-c-brand-2: #747bff;
  --vp-c-brand-3: #8b5cf6;

  /* Font family */
  --vp-font-family-base: 'Inter', sans-serif;
  --vp-font-family-mono: 'Fira Code', monospace;
}
```

### ডার্ক মোড ভেরিয়েবলস

ডার্ক মোড ওভাররাইডের জন্য `.dark` ক্লাস ব্যবহার করুন:

```css
.dark {
  --vp-c-brand-1: #a78bfa;
  --vp-c-brand-2: #818cf8;
}
```

## Markdown-এ কম্পোনেন্ট ব্যবহার

একবার রেজিস্টার হলে, আপনার কাস্টম কম্পোনেন্টস সরাসরি markdown-এ ব্যবহার করুন:

```md
<MyComponent title="Hello" />

<AskAI />
```

::: tip
VitePress স্বয়ংক্রিয়ভাবে `docs/.vitepress/theme/components/`-এ রাখা যেকোনো `.vue` ফাইল রেজিস্টার করে — ম্যানুয়াল import এর প্রয়োজন নেই।
:::
