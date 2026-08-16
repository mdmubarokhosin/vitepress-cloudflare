---
title: "Configuration"
---
# Configuration

VitePress configuration is handled through `docs/.vitepress/config.js`. This file controls all aspects of your documentation site — from metadata and routing to theme customization and build settings.

## Basic Configuration

Start with the essential settings:

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

## Site Configuration Options

### Metadata

```js
export default defineConfig({
  lang: 'en',           // Default language
  title: 'My Docs',     // Site title (shown in browser tab)
  description: '...',   // Meta description for SEO
  titleTemplate: '%s | My Docs',  // Custom title format
})
```

### Head Tags

Add custom `<head>` tags for SEO, fonts, and analytics:

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

### Build Options

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

## Theme Configuration

The `themeConfig` section controls the visual appearance:

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

## i18n Configuration

For multilingual sites, use the `locales` option:

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
When using i18n, the primary language (English) is placed at the root (`/`), and secondary languages use their locale prefix (`/bn/`, `/fr/`, etc.).
:::

## Sitemap Configuration

Enable automatic sitemap generation:

```js
sitemap: {
  hostname: 'https://your-site.pages.dev',
}
```

This generates a `sitemap.xml` file during build for search engine optimization.

