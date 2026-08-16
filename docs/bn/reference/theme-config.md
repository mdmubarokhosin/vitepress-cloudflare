---
title: "Theme Configuration Reference"
---
# Theme Configuration Reference

VitePress থিম কনফিগারেশন অপশনের সম্পূর্ণ রেফারেন্স।

## নেভিগেশন (`nav`)

```js
nav: [
  { text: 'Guide', link: '/guide/' },
  { text: 'External', link: 'https://example.com' },
  {
    text: 'Dropdown',
    items: [
      { text: 'Item 1', link: '/item-1' },
      { text: 'Item 2', link: '/item-2' },
    ],
  },
]
```

### Nav আইটেম প্রপার্টিজ

| প্রপার্টি | টাইপ | বিবরণ |
|----------|------|-------------|
| `text` | `string` | ডিসপ্লে টেক্সট |
| `link` | `string` | পেজ লিংক বা এক্সটার্নাল URL |
| `activeMatch` | `string` | অ্যাক্টিভ স্টেটের জন্য Regex |
| `items` | `array` | ড্রপডাউন আইটেমস |
| `attrs` | `object` | কাস্টম HTML অ্যাট্রিবিউটস |

## সাইডবার (`sidebar`)

```js
sidebar: [
  {
    text: 'Section',
    collapsed: false,
    items: [
      { text: 'Page', link: '/page' },
    ],
  },
]
```

### সাইডবার আইটেম প্রপার্টিজ

| প্রপার্টি | টাইপ | বিবরণ |
|----------|------|-------------|
| `text` | `string` | সেকশন টাইটেল |
| `items` | `array` | পেজ লিংকস |
| `collapsed` | `boolean` | কোল্যাপসিবল সেকশন |

## সোশ্যাল লিংকস

```js
socialLinks: [
  { icon: 'github', link: 'https://github.com' },
  { icon: 'twitter', link: 'https://twitter.com' },
  { icon: 'discord', link: 'https://discord.gg/invite' },
]
```

## ফুটার

```js
footer: {
  message: 'Licensed under MIT',
  copyright: '© 2025 Author Name',
}
```

## এডিট লিংক

```js
editLink: {
  pattern: 'https://github.com/user/repo/edit/main/docs/:path',
  text: 'Edit this page',
}
```

## সার্চ

```js
search: {
  provider: 'local',  // or 'algolia'
}
```

### লোকাল সার্চ অপশনস

```js
search: {
  provider: 'local',
  options: {
    miniSearch: {
      options: {
        fuzzy: 0.2,
        prefix: true,
      },
    },
  },
}
```

## আউটলাইন

```js
outline: {
  level: [2, 3],
  label: 'On This Page',
}
```

## Doc ফুটার

```js
docFooter: {
  prev: 'Previous',
  next: 'Next',
}
```

## ডার্ক মোড

```js
darkModeSwitchLabel: 'Appearance',
lightModeSwitchTitle: 'Switch to light theme',
darkModeSwitchTitle: 'Switch to dark theme',
```

## Carbon Ads

```js
carbonAds: {
  code: 'your-carbon-code',
  placement: 'your-placement',
}
```
