<template>
  <!-- Header Button — VitePress.dev style -->
  <button
    class="vp-ask-ai-btn"
    :class="{ active: isOpen }"
    @click="openModal"
    aria-label="Ask AI"
    title="Ask AI"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <span class="vp-ask-ai-label">Ask AI</span>
  </button>

  <!-- Centered Modal Overlay — VitePress.dev style -->
  <Teleport to="body">
    <Transition name="vp-modal">
      <div v-if="isOpen" class="vp-modal-backdrop" @click.self="closeModal">
        <div class="vp-modal" :class="{ 'vp-modal-ready': modalReady }" @click.stop>
          <!-- Modal Header -->
          <div class="vp-modal-header">
            <div class="vp-modal-header-left">
              <div class="vp-modal-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h2 class="vp-modal-title">Ask AI</h2>
              <span class="vp-modal-badge">AI</span>
            </div>
            <button class="vp-modal-close" @click="closeModal" title="Close" aria-label="Close modal">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="vp-modal-body" ref="chatBox">
            <!-- Welcome Screen -->
            <div v-if="isWelcomeScreen" class="vp-modal-welcome">
              <div class="vp-modal-welcome-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3l1.912 5.813h6.158l-4.99 3.608 1.912 5.813L12 14.626l-4.992 3.608 1.912-5.813-4.99-3.608h6.158z"/>
                </svg>
              </div>
              <h3 class="vp-modal-welcome-title">How can I help you today?</h3>
              <p class="vp-modal-welcome-sub">Ask me anything about this VitePress course — setup, config, theming, deployment, or any other topic.</p>

              <div class="vp-modal-suggestions">
                <button
                  v-for="(s, i) in suggestions"
                  :key="i"
                  class="vp-modal-suggestion"
                  @click="sendSuggestion(s.message)"
                >
                  <span class="vp-modal-suggestion-icon" :class="s.color">
                    <svg v-if="s.icon === 'zap'" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    <svg v-else-if="s.icon === 'book'" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                    <svg v-else-if="s.icon === 'code'" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    <svg v-else-if="s.icon === 'rocket'" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>
                    <svg v-else-if="s.icon === 'palette'" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="0.5"/><circle cx="17.5" cy="10.5" r="0.5"/><circle cx="8.5" cy="7.5" r="0.5"/><circle cx="6.5" cy="12.5" r="0.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  </span>
                  <span class="vp-modal-suggestion-text">{{ s.label }}</span>
                </button>
              </div>
            </div>

            <!-- Messages -->
            <div v-else class="vp-modal-messages">
              <template v-for="(msg, i) in messages" :key="i">
                <!-- Typing -->
                <div v-if="msg.role === 'typing'" class="vp-modal-msg bot">
                  <div class="vp-modal-msg-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <div class="vp-modal-msg-bubble bot typing">
                    <span class="vp-modal-dot"></span>
                    <span class="vp-modal-dot"></span>
                    <span class="vp-modal-dot"></span>
                  </div>
                </div>

                <!-- User -->
                <div v-else-if="msg.role === 'user'" class="vp-modal-msg user">
                  <div class="vp-modal-msg-bubble user">
                    <span>{{ msg.content }}</span>
                  </div>
                </div>

                <!-- Assistant -->
                <div v-else class="vp-modal-msg bot">
                  <div class="vp-modal-msg-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <div class="vp-modal-msg-bubble bot">
                    <div class="vp-modal-msg-text" v-html="formatMessage(msg.content)"></div>
                  </div>
                  <div class="vp-modal-msg-actions">
                    <button class="vp-modal-msg-action" @click="copyText(msg.content)" title="Copy">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    </button>
                    <button class="vp-modal-msg-action" @click="regenerate(i)" title="Regenerate">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                    </button>
                  </div>
                </div>
              </template>

              <!-- Error -->
              <div v-if="error" class="vp-modal-error">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>{{ error }}</span>
                <button @click="retryLast" class="vp-modal-retry">Retry</button>
              </div>
            </div>
          </div>

          <!-- Modal Input -->
          <div class="vp-modal-input-area">
            <div class="vp-modal-input-wrap">
              <textarea
                ref="inputRef"
                v-model="inputText"
                @keydown="onKeydown"
                @input="autoResize"
                :placeholder="inputPlaceholder"
                :disabled="isLoading"
                rows="1"
                maxlength="2000"
              ></textarea>
              <button
                v-if="inputText.trim()"
                class="vp-modal-send"
                :disabled="isLoading"
                @click="sendMessage"
                aria-label="Send"
              >
                <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                <span v-else class="vp-modal-spinner"></span>
              </button>
            </div>
            <div class="vp-modal-footer">
              <span class="vp-modal-powered">Powered by Poolside AI</span>
              <button v-if="messages.length > 1 && !isWelcomeScreen" class="vp-modal-clear" @click="clearChat">Clear</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- Copy Toast -->
  <Teleport to="body">
    <Transition name="vp-toast">
      <div v-if="showToast" class="vp-modal-toast">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
        Copied to clipboard
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const modalReady = ref(false)
const isLoading = ref(false)
const inputText = ref('')
const error = ref(null)
const showToast = ref(false)
const toastTimer = ref(null)
const chatBox = ref(null)
const inputRef = ref(null)
const abortRef = ref(null)

const messages = ref([
  { role: 'assistant', content: 'Welcome! I can help you with VitePress questions — setup, configuration, theming, deployment, and more. What would you like to know?', isGreeting: true }
])

const isWelcomeScreen = computed(() => messages.value.length === 1 && messages.value[0].isGreeting === true)
const inputPlaceholder = computed(() => isLoading.value ? 'AI is thinking...' : 'Press Enter to send, Shift+Enter for new line')

const suggestions = [
  { icon: 'zap', label: 'What is VitePress and why use it?', message: 'What is VitePress and why should I use it for documentation?', color: 's-purple' },
  { icon: 'book', label: 'How do I create my first VitePress project?', message: 'How do I create my first VitePress project step by step?', color: 's-blue' },
  { icon: 'code', label: 'How to write markdown in VitePress?', message: 'How do I write markdown content in VitePress with extensions?', color: 's-green' },
  { icon: 'palette', label: 'How to customize the VitePress theme?', message: 'How do I customize the VitePress theme with Vue components?', color: 's-orange' },
  { icon: 'rocket', label: 'How to deploy to Cloudflare Pages?', message: 'How do I deploy VitePress to Cloudflare Pages?', color: 's-pink' },
  { icon: 'help', label: 'How to set up bilingual (i18n) support?', message: 'How do I set up multilingual i18n support in VitePress?', color: 's-teal' },
]

const MODEL = 'poolside/laguna-xs-2.1'

// API endpoint — calls Cloudflare Pages Function (server-side proxy)
// The API key is stored securely in Cloudflare Environment Variables / Secrets
const getApiEndpoint = () => {
  try {
    // VitePress SSR mode uses import.meta.env
    const env = import.meta.env
    if (env && env.VITE_API_URL) return env.VITE_API_URL
  } catch (e) {}
  // Default: use the Cloudflare Functions route on the current origin
  return window.location.origin + '/api/chat'
}

function openModal() {
  if (isOpen.value) return
  isOpen.value = true
  document.body.style.overflow = 'hidden'
  setTimeout(() => {
    modalReady.value = true
    nextTick(() => { scrollBottom(); focusInput() })
  }, 50)
}

function closeModal() {
  modalReady.value = false
  document.body.style.overflow = ''
  setTimeout(() => { isOpen.value = false }, 250)
}

function scrollBottom() {
  if (chatBox.value) chatBox.value.scrollTo({ top: chatBox.value.scrollHeight, behavior: 'smooth' })
}

function focusInput() {
  setTimeout(() => { inputRef.value?.focus() }, 300)
}

function autoResize() {
  const el = inputRef.value
  if (el) { el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight, 120) + 'px' }
}

function onKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
}

async function copyText(text) {
  try { await navigator.clipboard.writeText(text) } catch (e) {
    const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;left:-9999px'; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta)
  }
  showToast.value = true
  if (toastTimer.value) clearTimeout(toastTimer.value)
  toastTimer.value = setTimeout(() => { showToast.value = false }, 2000)
}

function regenerate(index) {
  const msg = messages.value[index]
  if (msg.role !== 'assistant' || isLoading.value) return
  let userMsg = null
  for (let j = index - 1; j >= 0; j--) { if (messages.value[j].role === 'user') { userMsg = messages.value[j].content; break } }
  if (!userMsg) return
  messages.value = messages.value.slice(0, index)
  inputText.value = ''; error.value = null
  messages.value.push({ role: 'user', content: userMsg })
  callAPI()
}

// XSS-safe message formatter — sanitizes HTML output
// Only allows safe tags: p, br, strong, b, em, i, code, pre, a, h3, h4, h5, h6, ul, ol, li
const ALLOWED_TAGS = new Set([
  'p', 'br', 'strong', 'b', 'em', 'i', 'code', 'pre',
  'a', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'span'
])

const ALLOWED_ATTRS = {
  a: ['href', 'target', 'rel'],
  code: ['class'],
  pre: ['class'],
  span: ['class'],
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function sanitizeHtml(dirty) {
  // Simple tag-based sanitizer (no DOMPurify needed — works SSR-safe)
  const cleaned = []
  let i = 0
  while (i < dirty.length) {
    if (dirty[i] === '<') {
      // Find the closing >
      const closeIdx = dirty.indexOf('>', i)
      if (closeIdx === -1) { cleaned.push(escapeHtml(dirty.slice(i))); break }

      const tagContent = dirty.slice(i + 1, closeIdx)
      const isClosing = tagContent.startsWith('/')
      const tagName = (isClosing ? tagContent.slice(1) : tagContent).split(/\s/)[0].toLowerCase()

      if (ALLOWED_TAGS.has(tagName)) {
        // Reconstruct safe tag with only allowed attributes
        if (isClosing) {
          cleaned.push(`</${tagName}>`)
        } else {
          // Parse allowed attributes
          const attrMatch = tagContent.match(/^(\w+)(.*)/)
          if (attrMatch) {
            const rawAttrs = attrMatch[2]
            const safeAttrs = []
            const allowedForTag = ALLOWED_ATTRS[tagName] || []
            // Extract href from <a> tags
            const hrefMatch = rawAttrs.match(/href="([^"]*)"/)
            if (hrefMatch && allowedForTag.includes('href')) {
              safeAttrs.push(`href="${escapeHtml(hrefMatch[1])}"`)
            }
            const targetMatch = rawAttrs.match(/target="([^"]*)"/)
            if (targetMatch && allowedForTag.includes('target')) {
              safeAttrs.push(`target="${escapeHtml(targetMatch[1])}"`)
            }
            const relMatch = rawAttrs.match(/rel="([^"]*)"/)
            if (relMatch && allowedForTag.includes('rel')) {
              safeAttrs.push(`rel="${escapeHtml(relMatch[1])}"`)
            }
            const classMatch = rawAttrs.match(/class="([^"]*)"/)
            if (classMatch && allowedForTag.includes('class')) {
              safeAttrs.push(`class="${escapeHtml(classMatch[1])}"`)
            }
            if (safeAttrs.length > 0) {
              cleaned.push(`<${tagName} ${safeAttrs.join(' ')}>`)
            } else {
              cleaned.push(`<${tagName}>`)
            }
          }
        }
      } else {
        // Not allowed — escape it
        cleaned.push(escapeHtml(dirty.slice(i, closeIdx + 1)))
      }
      i = closeIdx + 1
    } else {
      // Find next < or end of string
      const nextTag = dirty.indexOf('<', i)
      if (nextTag === -1) {
        cleaned.push(dirty.slice(i))
        break
      }
      cleaned.push(dirty.slice(i, nextTag))
      i = nextTag
    }
  }
  return cleaned.join('')
}

function formatMessage(text) {
  if (!text) return ''
  let html = text
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="vp-modal-code"><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="vp-modal-inline">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/^### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^## (.+)$/gm, '<h3>$1</h3>')
    .replace(/^# (.+)$/gm, '<h3>$1</h3>')
    .replace(/^[-*] (.+)$/gm, '<li>$1</li>')
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    .replace(/\n/g, '<br>')

  // Sanitize to prevent XSS
  return sanitizeHtml(html)
}

function sendSuggestion(message) {
  inputText.value = message
  nextTick(() => sendMessage())
}

async function sendMessage() {
  const text = inputText.value.trim()
  if (!text || isLoading.value) return

  if (messages.value.length === 1 && messages.value[0].isGreeting) messages.value = []

  messages.value.push({ role: 'user', content: text })
  inputText.value = ''; error.value = null
  if (inputRef.value) inputRef.value.style.height = 'auto'
  scrollBottom()
  callAPI()
}

async function callAPI() {
  isLoading.value = true; scrollBottom()
  messages.value.push({ role: 'typing' }); scrollBottom()

  try {
    const systemPrompt = `You are a VitePress documentation expert assistant for the "VitePress Course" website. Help users with:
1) VitePress setup and installation
2) Configuration (config.js, themeConfig, sidebar, nav)
3) Writing markdown content with extensions
4) Custom themes and Vue components
5) Deploying to Cloudflare Pages, Vercel, Netlify
6) i18n / multilingual setup
7) SEO optimization
8) This specific course website features (Ask AI chatbot, bilingual content, etc.)

Be concise and helpful. Use code examples when appropriate.
If the user asks in Bengali, reply in Bengali. Otherwise reply in English.
Use markdown formatting: **bold**, \`code\`, [links](url), lists.
Keep responses under 300 words.`

    messages.value = messages.value.filter(m => m.role !== 'typing')

    const controller = new AbortController()
    abortRef.value = controller

    // Call our server-side proxy — no API key exposed to the browser
    const res = await fetch(getApiEndpoint(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages.value.filter(m => m.role === 'user' || m.role === 'assistant').map(m => ({ role: m.role, content: m.content }))
        ],
        max_tokens: 1024, temperature: 0.6
      }),
      signal: controller.signal
    })

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}))
      throw new Error(errData.error || `Server ${res.status}`)
    }
    const data = await res.json()

    if (data.choices?.[0]?.message?.content) {
      messages.value.push({ role: 'assistant', content: data.choices[0].message.content })
    } else if (data.error) {
      throw new Error(data.error.message || data.error || 'API Error')
    } else {
      throw new Error('No response from AI')
    }
  } catch (err) {
    messages.value = messages.value.filter(m => m.role !== 'typing')
    if (err.name !== 'AbortError') error.value = err.message || 'Network error. Please try again.'
  } finally {
    isLoading.value = false; abortRef.value = null; scrollBottom()
  }
}

function retryLast() {
  error.value = null
  const lastUser = [...messages.value].reverse().find(m => m.role === 'user')
  if (lastUser) { messages.value.push({ role: 'user', content: lastUser.content }); callAPI() }
}

function clearChat() {
  messages.value = [{ role: 'assistant', content: 'Chat cleared! How can I help you with VitePress?', isGreeting: true }]
  error.value = null; isLoading.value = false
  if (abortRef.value) { abortRef.value.abort(); abortRef.value = null }
  nextTick(() => scrollBottom())
}

function onEscape(e) {
  if (e.key === 'Escape' && isOpen.value) closeModal()
}

onMounted(() => { document.addEventListener('keydown', onEscape) })
onUnmounted(() => {
  if (abortRef.value) abortRef.value.abort()
  document.removeEventListener('keydown', onEscape)
  document.body.style.overflow = ''
})
</script>
