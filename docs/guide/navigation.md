---
title: "Navigation & Sidebar"
---
# Navigation & Sidebar

Navigation and sidebar are two of the most important elements of a documentation site. VitePress provides a flexible configuration system for both.

## Navigation Bar (Nav)

The navigation bar appears at the top of every page. Configure it in `themeConfig.nav`:

### Basic Navigation

```js
nav: [
  { text: 'Guide', link: '/guide/introduction' },
  { text: 'Reference', link: '/reference/site-config' },
]
```

### Dropdown Menus

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

### Active Link Matching

Use `activeMatch` to control when a nav item appears active:

```js
{ text: 'Guide', link: '/guide/introduction', activeMatch: '/guide/' }
```

### Navigation with Icons

```js
nav: [
  { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
  { text: 'API', link: '/api/', activeMatch: '/api/' },
  { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
]
```

## Sidebar

The sidebar provides a table of contents for your documentation. Configure it in `themeConfig.sidebar`:

### Single Sidebar

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

### Collapsible Groups

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

### Multiple Sidebars

Different pages can have different sidebars using path mapping:

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

## i18n Navigation & Sidebar

For multilingual sites, configure nav and sidebar under each locale:

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

## Footer Configuration

```js
footer: {
  message: 'Released under the MIT License.',
  copyright: '© 2025 Documentation Author',
}
```

## Edit Links

Allow users to edit pages directly on GitHub:

```js
editLink: {
  pattern: 'https://github.com/user/repo/edit/main/docs/:path',
  text: 'Edit this page on GitHub',
}
```

::: tip
The `:path` placeholder is automatically replaced with the current page's file path relative to the docs directory.
:::

