---
title: "Ask AI Integration"
---
# Ask AI Integration

Adding an AI chatbot to your documentation site lets users ask questions and get instant answers. This chapter shows you how to integrate the Poolside AI chatbot into your VitePress site.

## Overview

The "Ask AI" feature adds a chatbot that:

- Appears in the **navigation bar** (like VitePress.dev)
- Opens a **centered modal chat window** when clicked
- Responds with **context-aware answers** about your documentation
- Supports **both English and Bengali** queries
- Works **entirely client-side** — no server required

## Architecture

```
User Question
     ↓
AskAI.vue Component (Client-side)
     ↓
Poolside AI API (poolside/laguna-xs-2.1)
     ↓
Response displayed in chat panel
```

## API Configuration

### Poolside AI Details

| Setting | Value |
|---------|-------|
| API Endpoint | `https://inference.poolside.ai/v1/chat/completions` |
| Model | `poolside/laguna-xs-2.1` |
| Auth | Bearer token (API key) |

### API Key Management

Store your API key in `.env`:

```env
POOLSIDE_API_KEY=your_api_key_here
```

For **Cloudflare Pages**, set the API key as an environment variable in the dashboard:

1. Go to **Cloudflare Pages** > your project > **Settings** > **Environment variables**
2. Add `POOLSIDE_API_KEY` with your API key value
3. The key is automatically injected at build time

::: warning
Never commit your API key to the repository. Always use environment variables or the Cloudflare Pages secrets manager.
:::

## Implementation

### 1. Create the AskAI Component

Create `docs/.vitepress/theme/components/AskAI.vue` — a Vue 3 component that handles the chat interface.

Key features of the component:

- **Header bar button** — integrates into VitePress nav
- **Chat panel** — opens as a dropdown from the nav
- **Message history** — maintains conversation context
- **Markdown formatting** — basic code/bold rendering in responses
- **Mobile responsive** — full-screen on mobile devices
- **Keyboard shortcuts** — Enter to send, Escape to close
- **Click outside** — closes the panel when clicking elsewhere

### 2. Register via Layout Slot

In `docs/.vitepress/theme/index.js`, use the `nav-bar-content-after` slot:

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

### 3. API Key Access

The component reads the API key from environment variables:

```js
function getApiKey() {
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env?.POOLSIDE_API_KEY) {
      return import.meta.env.POOLSIDE_API_KEY
    }
  } catch (e) {
    // SSR fallback
  }
  return 'your-default-key'
}
```

## Testing the Integration

1. Start the development server: `npm run docs:dev`
2. Click the **"Ask AI"** button in the navigation bar
3. Type a question about VitePress
4. Verify the response appears in the chat panel

## Best Practices

- **Set a clear system prompt** that focuses on your documentation topic
- **Limit response length** with `max_tokens` to keep answers concise
- **Handle errors gracefully** — show user-friendly error messages
- **Add loading states** — typing indicators while waiting for responses
- **Support multilingual** — detect user language and respond accordingly

