---
title: "Custom Theme"
---
# Custom Theme

VitePress allows you to extend and customize the default theme with your own Vue components, styles, and layouts. This chapter covers everything you need to create a professional-looking custom theme.

## Theme Architecture

VitePress themes are built with Vue 3 and use a slot-based architecture. The default theme provides a complete layout that you can extend without rewriting everything from scratch.

### Theme Directory Structure

```
docs/.vitepress/theme/
├── index.js          # Theme entry point
├── components/       # Custom Vue components
│   ├── AskAI.vue    # AI chatbot component
│   └── ...
└── styles/
    └── custom.css    # Custom styles
```

## Extending the Default Theme

### Basic Extension

Create `docs/.vitepress/theme/index.js`:

```js
import DefaultTheme from 'vitepress/theme'
import './styles/custom.css'

export default DefaultTheme
```

### Adding Custom Components

Register global components:

```js
import DefaultTheme from 'vitepress/theme'
import CustomComponent from './components/CustomComponent.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomComponent', CustomComponent)
  },
}
```

### Using Layout Slots

The default theme provides slots for injecting content at specific positions:

```js
import DefaultTheme from 'vitepress/theme'
import AskAI from './components/AskAI.vue'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(AskAI),
    })
  },
}
```

Available slots include:

| Slot Name | Location |
|-----------|----------|
| `layout-top` | Top of the layout |
| `layout-bottom` | Bottom of the layout |
| `nav-bar-title-before` | Before nav title |
| `nav-bar-title-after` | After nav title |
| `nav-bar-content-before` | Before nav content |
| `nav-bar-content-after` | After nav content |
| `nav-screen-content-before` | Before mobile nav |
| `nav-screen-content-after` | After mobile nav |
| `aside-top` | Before sidebar |
| `aside-bottom` | After sidebar |
| `aside-outline-before` | Before outline |
| `aside-outline-after` | After outline |
| `doc-top` | Before content |
| `doc-bottom` | After content |
| `doc-footer-before` | Before footer |

## Custom CSS

### CSS Variables

VitePress uses CSS variables extensively. Override them in your custom CSS:

```css
:root {
  /* Brand colors */
  --vp-c-brand-1: #5f67ee;
  --vp-c-brand-2: #747bff;
  --vp-c-brand-3: #8b5cf6;

  /* Font family */
  --vp-font-family-base: 'Inter', sans-serif;
  --vp-font-family-mono: 'Fira Code', monospace;
}
```

### Dark Mode Variables

Use the `.dark` class for dark mode overrides:

```css
.dark {
  --vp-c-brand-1: #a78bfa;
  --vp-c-brand-2: #818cf8;
}
```

## Using Components in Markdown

Once registered, use your custom components directly in markdown:

```md
<MyComponent title="Hello" />

<AskAI />
```

::: tip
VitePress automatically registers any `.vue` file placed in `docs/.vitepress/theme/components/` — no manual import needed.
:::

