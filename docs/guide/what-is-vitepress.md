---
title: "What is VitePress?"
---
# What is VitePress?

**VitePress** is a static site generator (SSG) designed specifically for building documentation websites. It is the successor to VuePress, built on top of Vue.js and Vite for dramatically improved performance.

## Core Features

VitePress transforms plain Markdown files into a fast, SEO-friendly, and beautifully themed documentation website. Here are its core capabilities:

### Fast by Default

VitePress uses **Vite** as its build tool, which means:

- **Instant hot module replacement (HMR)** during development
- **Optimized production builds** with code splitting
- **Static HTML output** for every page — no JavaScript required for initial render
- **Sub-100ms page loads** on production

### Markdown Extensions

VitePress enhances standard Markdown with powerful extensions:

- **Code groups** — tabbed code blocks for showing multiple languages
- **Custom containers** — info, tip, warning, danger, and details blocks
- **Emoji support** — use emoji directly in markdown
- **Table of contents** — auto-generated from headings
- **GitHub-style alerts** — `[!NOTE]`, `[!TIP]`, `[!WARNING]`, `[!CAUTION]`

```md
::: tip
This is a tip container
:::

::: warning
This is a warning
:::

::: danger
This is a danger alert
:::
```

### Built-in Features

VitePress comes with everything you need for documentation:

- **Global search** — local search provider (no Algolia needed)
- **Dark/light mode** — built-in appearance toggle
- **Internationalization (i18n)** — multilingual support with locale routing
- **Responsive design** — works on all screen sizes
- **Editable links** — "Edit this page on GitHub" button
- **Previous/next navigation** — automatic page navigation
- **Full-text search** — client-side search indexing

### Vue-Powered

Since VitePress is built with Vue.js, you can:

- Use **Vue components** inside your markdown files
- Create **custom theme layouts**
- Add **interactive demos** and live examples
- Build **dynamic content** with Vue's reactivity system

## VitePress vs Alternatives

| Feature | VitePress | Docusaurus | MkDocs | Hugo |
|---------|-----------|------------|--------|------|
| Build Tool | Vite | Webpack | MkDocs | Go |
| Framework | Vue 3 | React | Python | Go Templates |
| Dev Speed | Instant | Slow | Slow | Fast |
| i18n | Built-in | Plugin | Plugin | Basic |
| Theme System | Vue Components | React Components | Jinja2 | Go Templates |
| Search | Local/Algolia | Algolia | Plugin | Lunr |
| Learning Curve | Low-Medium | Medium | Low | Medium |

::: info
VitePress is developed and maintained by the Vue.js core team, ensuring long-term support and excellent Vue ecosystem integration.
:::

## Real-World Use Cases

VitePress is used by major projects for their documentation:

- **Vue.js** — the official Vue documentation site
- **Vite** — the Vite build tool documentation
- **Pinia** — Vue state management library docs
- **Vitest** — testing framework documentation

These real-world examples demonstrate that VitePress can handle documentation sites of any scale, from small project docs to large framework documentation with hundreds of pages.

