---
title: "Site Configuration Reference"
---
# Site Configuration Reference

Complete reference for all VitePress site configuration options available in `docs/.vitepress/config.js`.

## Top-Level Options

### `lang`

- **Type:** `string`
- **Default:** `'en'`
- **Description:** The language of the site. Used for SEO and i18n.

```js
lang: 'en'
```

### `title`

- **Type:** `string`
- **Default:** `undefined`
- **Description:** Site title shown in the browser tab.

```js
title: 'My Documentation'
```

### `description`

- **Type:** `string`
- **Default:** `undefined`
- **Description:** Site description for SEO meta tags.

```js
description: 'Complete VitePress documentation course'
```

### `titleTemplate`

- **Type:** `string`
- **Default:** `'%s | VitePress'`
- **Description:** Custom title format. `%s` is replaced by the page title.

```js
titleTemplate: '%s — My Docs'
```

### `head`

- **Type:** `HeadConfig[]`
- **Description:** Additional tags to inject into the `<head>` section.

```js
head: [
  ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ['link', { rel: 'icon', href: '/favicon.ico' }],
]
```

### `lastUpdated`

- **Type:** `boolean`
- **Default:** `false`
- **Description:** Show "Last updated" timestamps on pages.

### `cleanUrls`

- **Type:** `boolean`
- **Default:** `false`
- **Description:** Remove `.html` extensions from URLs.

::: warning
Set `cleanUrls: true` when deploying to Cloudflare Pages to ensure correct routing.
:::

### `ignoreDeadLinks`

- **Type:** `boolean`
- **Default:** `false`
- **Description:** Don't fail the build on broken internal links.

```js
ignoreDeadLinks: true
```

### `sitemap`

- **Type:** `{ hostname: string }`
- **Description:** Generate a sitemap.xml file.

```js
sitemap: {
  hostname: 'https://my-docs.pages.dev'
}
```

