---
title: "Project Structure"
---
# Project Structure

Understanding VitePress's project structure is essential for building a well-organized documentation site. This chapter explains every file and directory in a standard VitePress project.

## Directory Layout

A typical VitePress project follows this structure:

```
my-docs/
├── docs/
│   ├── .vitepress/
│   │   ├── config.js        # Site configuration
│   │   ├── theme/
│   │   │   ├── index.js     # Custom theme entry
│   │   │   ├── components/  # Custom Vue components
│   │   │   └── styles/      # Custom CSS
│   │   ├── cache/           # Build cache (auto-generated)
│   │   └── dist/            # Production output (auto-generated)
│   ├── public/
│   │   ├── logo.svg         # Static assets
│   │   └── images/          # Image files
│   ├── guide/               # Guide section pages
│   │   ├── introduction.md
│   │   ├── getting-started.md
│   │   └── ...
│   ├── reference/           # Reference section pages
│   │   ├── site-config.md
│   │   └── ...
│   ├── index.md             # Homepage
│   └── bn/                  # Bengali locale (i18n)
│       ├── index.md
│       ├── guide/
│       └── reference/
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD pipeline
├── .env                     # Environment variables
├── .gitignore
├── package.json
├── wrangler.json            # Cloudflare Pages config
└── README.md
```

## Key Files Explained

### `docs/.vitepress/config.js`

This is the **main configuration file** for your VitePress site. It controls everything from site metadata to navigation, sidebar, search, and theme settings.

```js
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en',
  title: 'My Docs',
  description: 'My documentation site',
})
```

### `docs/index.md`

The homepage of your documentation site. It supports VitePress's YAML frontmatter for layout configuration.

```md
---
layout: home
---

hero:
  name: My Docs
  text: Documentation Site
  tagline: Built with VitePress
```

### `docs/.vitepress/theme/`

This directory contains your **custom theme** files. You can extend the default theme or create a completely custom one.

### `docs/public/`

**Static assets** placed here are served at the root URL. For example, `docs/public/logo.svg` is accessible at `/logo.svg`.

### `docs/bn/` (Bengali Locale)

For **i18n support**, each locale gets its own directory. The root `docs/` contains English content, and `docs/bn/` contains Bengali translations.

## Configuration Types

VitePress has three types of configuration:

| Config | File | Purpose |
|--------|------|---------|
| Site Config | `config.js` | Global settings, i18n, build options |
| Frontmatter | Each `.md` file | Per-page settings (title, layout, etc.) |
| Theme Config | `config.js > themeConfig` | Nav, sidebar, footer, search |

## Build Artifacts

VitePress generates two directories during the build process:

- **`docs/.vitepress/cache/`** — development server cache (add to .gitignore)
- **`docs/.vitepress/dist/`** — production-ready static files (deploy this directory)

::: warning
Never edit files in `cache/` or `dist/` — they are auto-generated and will be overwritten on every build.
:::

## Best Practices

Follow these organizational principles for a maintainable project:

1. **Group related pages** into directories (`guide/`, `reference/`, `api/`)
2. **Use descriptive filenames** (`getting-started.md` instead of `page1.md`)
3. **Keep config modular** — use JavaScript imports for large configurations
4. **Version static assets** — use hashed filenames for images and assets
5. **Document your config** — add comments explaining non-obvious settings

