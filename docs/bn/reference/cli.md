---
title: "CLI Reference"
---
# CLI Reference

ডেভেলপমেন্ট, বিল্ডিং এবং আপনার ডকুমেন্টেশন সাইট প্রিভিউ করার জন্য VitePress কমান্ড-লাইন ইন্টারফেস রেফারেন্স।

## কমান্ডস

### `vitepress dev`

Hot module replacement সহ ডেভেলপমেন্ট সার্ভার শুরু করুন।

```bash
vitepress dev [root] [options]
```

**Options:**

| Option | Default | বিবরণ |
|--------|---------|-------------|
| `--port` | `5173` | পোর্ট নম্বর |
| `--open` | `false` | শুরুতে ব্রাউজার খুলুন |
| `--host` | `localhost` | বাইন্ড করার জন্য হোস্টনেম |

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

প্রোডাকশনের জন্য সাইট বিল্ড করুন।

```bash
vitepress build [root] [options]
```

**Options:**

| Option | Default | বিবরণ |
|--------|---------|-------------|
| `--outDir` | `.vitepress/dist` | আউটপুট ডিরেক্টরি |
| `--base` | `/` | বেস URL পাথ |

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

প্রোডাকশন বিল্ড লোকালি প্রিভিউ করুন।

```bash
vitepress preview [root] [options]
```

**Options:**

| Option | Default | বিবরণ |
|--------|---------|-------------|
| `--port` | `4173` | পোর্ট নম্বর |
| `--open` | `false` | শুরুতে ব্রাউজার খুলুন |

**Examples:**

```bash
# Preview production build
vitepress preview docs

# Custom port
vitepress preview docs --port 8080
```

## NPM Scripts

আপনার `package.json`-এর জন্য স্ট্যান্ডার্ড npm scripts:

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

## সাধারণ ওয়ার্কফ্লোস

```bash
# Development cycle
npm run docs:dev       # Start dev server
npm run docs:build     # Build for production
npm run docs:preview   # Preview build

# CI/CD
npm ci                 # Install dependencies
npm run docs:build     # Build site
```
