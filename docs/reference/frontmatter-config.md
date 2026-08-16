---
title: "Frontmatter Configuration Reference"
---
# Frontmatter Configuration Reference

VitePress frontmatter allows you to override site-level settings on individual pages using YAML frontmatter at the top of your markdown files.

## Basic Frontmatter

```yaml
---
title: Page Title
description: Page description for SEO
---
```

## Layout Options

### `layout: doc`

The default layout for documentation pages. Includes sidebar, navigation, and footer.

```yaml
---
layout: doc
title: My Page
---
```

### `layout: home`

The homepage layout with hero section and feature grid.

```yaml
---
layout: home
---
hero:
  name: Site Name
  text: Tagline
  tagline: Description
  actions:
    - theme: brand
      text: Get Started
      link: /guide/introduction
---
features:
  - title: Feature 1
    details: Description of feature 1
```

### `layout: page`

A blank page without sidebar or navigation.

```yaml
---
layout: page
---
```

### `layout: bare`

Minimal layout without any chrome — useful for landing pages.

```yaml
---
layout: bare
---
```

## Page Metadata

```yaml
---
title: My Page Title
titleTemplate: false    # Disable site title suffix
description: Page description
head:
  - - meta
    - name: keywords
      content: docs, vitepress
  - - meta
    - property: og:title
      content: Custom Title
---
```

## Navigation Control

```yaml
---
prev: false          # Disable previous link
next: /guide/next-page  # Custom next link
sidebar: false       # Hide sidebar on this page
outline: false      # Hide table of contents
---
```

## Last Updated

```yaml
---
lastUpdated: false  # Disable last updated for this page
---
```

## Edit Link Override

```yaml
---
editLink:
  pattern: https://github.com/user/repo/edit/main/docs/:path
  text: Edit this page
---
```

