---
title: "Theme Configuration Reference"
---
# Theme Configuration Reference

Complete reference for VitePress theme configuration options.

## Navigation (`nav`)

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

### Nav Item Properties

| Property | Type | Description |
|----------|------|-------------|
| `text` | `string` | Display text |
| `link` | `string` | Page link or external URL |
| `activeMatch` | `string` | Regex for active state |
| `items` | `array` | Dropdown items |
| `attrs` | `object` | Custom HTML attributes |

## Sidebar (`sidebar`)

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

### Sidebar Item Properties

| Property | Type | Description |
|----------|------|-------------|
| `text` | `string` | Section title |
| `items` | `array` | Page links |
| `collapsed` | `boolean` | Collapsible section |

## Social Links

```js
socialLinks: [
  { icon: 'github', link: 'https://github.com' },
  { icon: 'twitter', link: 'https://twitter.com' },
  { icon: 'discord', link: 'https://discord.gg/invite' },
]
```

## Footer

```js
footer: {
  message: 'Licensed under MIT',
  copyright: '© 2025 Author Name',
}
```

## Edit Link

```js
editLink: {
  pattern: 'https://github.com/user/repo/edit/main/docs/:path',
  text: 'Edit this page',
}
```

## Search

```js
search: {
  provider: 'local',  // or 'algolia'
}
```

### Local Search Options

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

## Outline

```js
outline: {
  level: [2, 3],
  label: 'On This Page',
}
```

## Doc Footer

```js
docFooter: {
  prev: 'Previous',
  next: 'Next',
}
```

## Dark Mode

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

