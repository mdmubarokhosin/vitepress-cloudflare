---
title: "CLI Reference"
---
# CLI Reference

VitePress command-line interface reference for development, building, and previewing your documentation site.

## Commands

### `vitepress dev`

Start the development server with hot module replacement.

```bash
vitepress dev [root] [options]
```

**Options:**

| Option | Default | Description |
|--------|---------|-------------|
| `--port` | `5173` | Port number |
| `--open` | `false` | Open browser on start |
| `--host` | `localhost` | Hostname to bind |

**Examples:**

```bash
# Start dev server
vitepress dev docs

# Custom port
vitepress dev docs --port 3000

# Open browser automatically
vitepress dev docs --open

# Allow external access
vitepress dev docs --host 0.0.0.0
```

### `vitepress build`

Build the site for production.

```bash
vitepress build [root] [options]
```

**Options:**

| Option | Default | Description |
|--------|---------|-------------|
| `--outDir` | `.vitepress/dist` | Output directory |
| `--base` | `/` | Base URL path |

**Examples:**

```bash
# Build for production
vitepress build docs

# Custom output directory
vitepress build docs --outDir public

# Custom base path
vitepress build docs --base /docs/
```

### `vitepress preview`

Preview the production build locally.

```bash
vitepress preview [root] [options]
```

**Options:**

| Option | Default | Description |
|--------|---------|-------------|
| `--port` | `4173` | Port number |
| `--open` | `false` | Open browser on start |

**Examples:**

```bash
# Preview production build
vitepress preview docs

# Custom port
vitepress preview docs --port 8080
```

## NPM Scripts

Standard npm scripts for your `package.json`:

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

## Common Workflows

```bash
# Development cycle
npm run docs:dev       # Start dev server
npm run docs:build     # Build for production
npm run docs:preview   # Preview build

# CI/CD
npm ci                 # Install dependencies
npm run docs:build     # Build site
```

