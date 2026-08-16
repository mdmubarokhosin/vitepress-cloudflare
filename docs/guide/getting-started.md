---
title: "Getting Started"
---
# Getting Started

Let's set up your first VitePress project from scratch. This guide walks you through every step, from creating the project to running the development server.

## Step 1: Create Your Project

Create a new directory for your project and initialize it:

```bash
mkdir my-docs
cd my-docs
```

## Step 2: Initialize Package.json

Create a `package.json` file:

```json
{
  "name": "my-docs",
  "version": "1.0.0",
  "type": "module",
  "private": true,
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "devDependencies": {
    "vitepress": "^1.6.4",
    "vue": "^3.5.13"
  }
}
```

::: warning
You must use `"type": "module"` in your package.json because VitePress uses ES module syntax.
:::

## Step 3: Install Dependencies

Install VitePress and Vue:

```bash
npm install
```

This will install both `vitepress` and `vue` as development dependencies.

## Step 4: Create Your First Page

Create the docs directory and your first markdown file:

```bash
mkdir -p docs
```

Create `docs/index.md`:

```md
---
layout: home
---

# Hello VitePress

This is my first VitePress documentation site.
```

## Step 5: Run the Development Server

Start the development server:

```bash
npm run docs:dev
```

Open your browser and visit `http://localhost:5173` — you should see your new documentation site.

## Step 6: Add Your First Guide Page

Create `docs/guide/getting-started.md`:

```md
# Getting Started

This is the getting started page. Follow these steps:

1. Create a markdown file
2. Write your content
3. Run the dev server to preview
```

## Creating the Configuration File

Create `docs/.vitepress/config.js`:

```js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  description: 'My documentation site',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
        ],
      },
    ],
  },
})
```

After saving the config, the development server will automatically reload and show the navigation and sidebar.

## Verifying Your Setup

Make sure everything works correctly:

```bash
# Check that the build works
npm run docs:build

# Preview the production build
npm run docs:preview
```

::: tip
The `docs:preview` command starts a local server to preview the built output. This is useful for testing before deployment.
:::

## Common Issues

| Problem | Solution |
|---------|----------|
| Port 5173 in use | VitePress auto-selects next available port |
| Blank page | Check that your markdown files are in the `docs/` directory |
| Build fails | Verify `"type": "module"` is in package.json |
| No styles | Ensure `vitepress` is installed in devDependencies |

## Next Steps

Now that your project is set up, let's explore the project structure to understand how VitePress organizes files.

