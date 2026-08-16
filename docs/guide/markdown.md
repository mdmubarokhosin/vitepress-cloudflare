---
title: "Writing Markdown"
---
# Writing Markdown

VitePress extends standard Markdown with powerful features for documentation. This chapter covers all the markdown capabilities you need to create rich, professional content.

## Basic Syntax

### Headings

```md
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

### Text Formatting

```md
**Bold text**, *italic text*, ~~strikethrough~~

`inline code` with backticks
```

### Links and Images

```md
[Link text](/guide/introduction)

![Alt text](/images/screenshot.png)
```

### Lists

```md
- Unordered item 1
- Unordered item 2

1. Ordered item 1
2. Ordered item 2

- [x] Completed task
- [ ] Pending task
```

## Code Blocks

### Basic Code Block

````md
```js
const message = 'Hello VitePress'
console.log(message)
```
````

### Code Groups (Tabs)

````md
::: code-group

```bash [npm]
npm install vitepress
```

```bash [yarn]
yarn add vitepress
```

```bash [pnpm]
pnpm add vitepress
```

:::
````

### Line Highlighting

````md
```js{2,4}
const first = 'line 1'    // not highlighted
const second = 'line 2'   // highlighted
const third = 'line 3'     // not highlighted
const fourth = 'line 4'   // highlighted
```
````

## Tables

```md
| Feature | Status | Notes |
|---------|--------|-------|
| Dark Mode | ✅ | Built-in |
| Search | ✅ | Local provider |
| i18n | ✅ | Locale routing |
| Comments | ❌ | Use third-party |
```

## Custom Containers

VitePress provides several container types:

```md
::: tip
This is a tip — helpful information.
:::

::: info
This is an info block — general information.
:::

::: warning
This is a warning — proceed with caution.
:::

::: danger
This is a danger alert — important warning.
:::

::: details
This is a collapsible details block.
:::
```

## GitHub-Style Alerts (v1.6+)

```md
> [!NOTE]
> Useful information that users should know.

> [!TIP]
> Helpful advice for doing something better.

> [!WARNING]
> Cautions about potential issues.

> [!CAUTION]
> Important security or data considerations.
```

## Escaping

To show container syntax literally, wrap it in a code block or use the `---` escape:

```md
::: tip Custom Title
Content here
:::
```

## Performance Tips

- **Keep images optimized** — use WebP format when possible
- **Lazy-load images** — VitePress handles this automatically
- **Avoid large inline SVGs** — move them to the public directory
- **Use code groups** instead of showing multiple code blocks

::: tip
VitePress markdown supports all standard Markdown features plus extensions. For the complete reference, see the [Markdown Extensions](https://vitepress.dev/guide/markdown) section of the official docs.
:::

