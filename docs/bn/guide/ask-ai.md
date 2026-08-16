---
title: "Ask AI Integration"
---
# Ask AI Integration

আপনার ডকুমেন্টেশন সাইটে একটি AI চ্যাটবট যোগ করলে ব্যবহারকারীরা প্রশ্ন করতে এবং তাৎক্ষণিক উত্তর পেতে পারে। এই অধ্যায়টি আপনাকে দেখায় কীভাবে Poolside AI চ্যাটবট আপনার VitePress সাইটে ইন্টিগ্রেট করবেন।

## ওভারভিউ

"Ask AI" ফিচারটি একটি চ্যাটবট যোগ করে যা:

- **নেভিগেশন বারে** দেখা যায় (VitePress.dev-এর মতো)
- ক্লিক করলে **মডাল চ্যাট উইন্ডো ওপেন করে**
- আপনার ডকুমেন্টেশন সম্পর্কে **কনটেক্সট-সচেতন উত্তর** প্রদান করে
- **ইংরেজি এবং বাংলা উভয়** কুয়েরি সাপোর্ট করে
- **সম্পূর্ণ ক্লায়েন্ট-সাইডে** কাজ করে — কোনো সার্ভারের প্রয়োজন নেই

## আর্কিটেকচার

```
User Question
     ↓
AskAI.vue Component (Client-side)
     ↓
Poolside AI API (poolside/laguna-xs-2.1)
     ↓
Response displayed in chat panel
```

## API কনফিগারেশন

### Poolside AI বিবরণ

| সেটিং | মান |
|---------|-------|
| API Endpoint | `https://inference.poolside.ai/v1/chat/completions` |
| Model | `poolside/laguna-xs-2.1` |
| Auth | Bearer token (API key) |

### API Key ম্যানেজমেন্ট

আপনার API key `.env`-এ সংরক্ষণ করুন:

```env
POOLSIDE_API_KEY=your_api_key_here
```

**Cloudflare Pages**-এর জন্য, ড্যাশবোর্ডে এনভায়রনমেন্ট ভেরিয়েবল হিসেবে API key সেট করুন:

1. **Cloudflare Pages** > আপনার প্রজেক্ট > **Settings** > **Environment variables**-এ যান
2. `POOLSIDE_API_KEY` যোগ করুন আপনার API key মান সহ
3. কীটি বিল্ডের সময় স্বয়ংক্রিয়ভাবে ইনজেক্ট হয়

::: warning
আপনার API key কখনো রিপোজিটরিতে কমিট করবেন না। সবসময় এনভায়রনমেন্ট ভেরিয়েবল বা Cloudflare Pages secrets manager ব্যবহার করুন।
:::

## ইমপ্লিমেন্টেশন

### ১. AskAI কম্পোনেন্ট তৈরি করুন

`docs/.vitepress/theme/components/AskAI.vue` তৈরি করুন — একটি Vue 3 কম্পোনেন্ট যা চ্যাট ইন্টারফেস হ্যান্ডেল করে।

কম্পোনেন্টের মূল ফিচারগুলো:

- **হেডার বার বাটন** — VitePress nav-এ ইন্টিগ্রেট হয়
- **চ্যাট প্যানেল** — nav থেকে ড্রপডাউন হিসেবে ওপেন হয়
- **মেসেজ হিস্ট্রি** — কথোপকথনের কনটেক্সট বজায় রাখে
- **Markdown ফরম্যাটিং** — রেসপন্সে বেসিক code/bold রেন্ডারিং
- **মোবাইল রেসপন্সিভ** — মোবাইল ডিভাইসে ফুল-স্ক্রিন
- **কীবোর্ড শর্টকাট** — পাঠাতে Enter, বন্ধ করতে Escape
- **বাইরে ক্লিক** — অন্যত্র ক্লিক করলে প্যানেল বন্ধ হয়

### ২. লেআউট স্লটের মাধ্যমে রেজিস্টার করুন

`docs/.vitepress/theme/index.js`-এ, `nav-bar-content-after` স্লট ব্যবহার করুন:

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

### ৩. API Key অ্যাক্সেস

কম্পোনেন্টটি এনভায়রনমেন্ট ভেরিয়েবল থেকে API key পড়ে:

```js
function getApiKey() {
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env?.POOLSIDE_API_KEY) {
      return import.meta.env.POOLSIDE_API_KEY
    }
  } catch (e) {
    // SSR fallback
  }
  return 'your-default-key'
}
```

## ইন্টিগ্রেশন পরীক্ষা করা

1. ডেভেলপমেন্ট সার্ভার শুরু করুন: `npm run docs:dev`
2. নেভিগেশন বারে **"Ask AI"** বাটনে ক্লিক করুন
3. VitePress সম্পর্কে একটি প্রশ্ন টাইপ করুন
4. চ্যাট প্যানেলে রেসপন্স দেখা যাচ্ছে কিনা যাচাই করুন

## সেরা অনুশীলন

- **একটি পরিষ্কার সিস্টেম প্রম্পট সেট করুন** যা আপনার ডকুমেন্টেশন টপিকে ফোকাস করে
- **রেসপন্সের দৈর্ঘ্য সীমিত করুন** `max_tokens` দিয়ে উত্তর সংক্ষিপ্ত রাখতে
- **এরর গ্রেসফুলি হ্যান্ডেল করুন** — ব্যবহারকারী-বান্ধব এরর মেসেজ দেখান
- **লোডিং স্টেট যোগ করুন** — রেসপন্সের জন্য অপেক্ষার সময় টাইপিং ইন্ডিকেটর
- **বহুভাষিক সাপোর্ট** — ব্যবহারকারীর ভাষা ডিটেক্ট করুন এবং সেই অনুযায়ী রেসপন্ড করুন
