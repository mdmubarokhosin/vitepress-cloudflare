import { defineConfig } from 'vitepress'

const GITHUB_REPO = 'https://github.com/mdmubarokhosin/vitepress-cloudflare'
const SITE_TITLE = 'VitePress Course'

// Dynamic hostname — works on any domain (localhost, preview, production)
// VitePress transformHead can access page URL at build time
const getHead = () => {
  // These global head tags apply to all locales.
  // Locale-specific OG tags are handled via transformHead below.
  return [
    // Favicon
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-large.svg' }],
    ['meta', { name: 'theme-color', content: '#5350C4' }],

    // SEO Meta
    ['meta', { name: 'keywords', content: 'VitePress, documentation, Cloudflare Pages, Vue.js, markdown, web development, deploy, AI chatbot, bilingual' }],
    ['meta', { name: 'author', content: 'mdmubarokhosin' }],
    ['meta', { name: 'robots', content: 'index, follow' }],

    // OG type (same for all locales)
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: SITE_TITLE }],
    ['meta', { property: 'og:image', content: '/vitepress-logo-large.svg' }],
    ['meta', { property: 'og:locale:alternate', content: 'bn_BD' }],

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],

    // Web App Manifest
    ['link', { rel: 'manifest', href: '/manifest.json' }],

    // Preconnect for performance
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' }],

    // Fonts
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap'
    }],

    // Bootstrap Icons CDN
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
    }],
  ]
}

export default defineConfig({
  lang: 'en',
  title: SITE_TITLE,
  description: 'Learn to build documentation websites with VitePress and deploy to Cloudflare Pages — complete bilingual course with AI integration',
  titleTemplate: '%s — ' + SITE_TITLE,

  // Dynamic canonical + OG image — uses window.location at runtime for domain-agnostic support
  transformHead() {
    return [
      ['script', {
        type: 'text/javascript',
        innerHTML: `(function(){var l=window.location.href.replace(/\\/+$/,'');var c=document.createElement('link');c.rel='canonical';c.href=l;document.head.appendChild(c);var u=new URL(l);var img=u.origin+'/vitepress-logo-large.svg';var ogImg=document.querySelector('meta[property="og:image"]');if(ogImg)ogImg.setAttribute('content',img);var twImg=document.querySelector('meta[name="twitter:image"]');if(twImg)twImg.setAttribute('content',img);})()`
      }]
    ]
  },

  head: getHead(),

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  ignoreDeadLinks: false,
  sitemap: {
    hostname: 'https://vitepress-cloudflare.pages.dev'
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: SITE_TITLE,
      description: 'Learn to build documentation websites with VitePress and deploy to Cloudflare Pages — complete bilingual course with AI integration',
      head: [
        ['meta', { property: 'og:title', content: SITE_TITLE + ' — Build & Deploy Docs Sites' }],
        ['meta', { property: 'og:description', content: 'Complete bilingual course to learn VitePress, Cloudflare Pages deployment, and AI integration.' }],
        ['meta', { property: 'og:locale', content: 'en_US' }],
        ['meta', { name: 'twitter:title', content: SITE_TITLE + ' — Build & Deploy Docs Sites' }],
        ['meta', { name: 'twitter:description', content: 'Complete bilingual course to learn VitePress, Cloudflare Pages deployment, and AI integration.' }],
      ],
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/introduction', activeMatch: '/guide/' },
          { text: 'Reference', link: '/reference/site-config', activeMatch: '/reference/' },
          {
            text: 'More',
            items: [
              { text: 'VitePress Official', link: 'https://vitepress.dev' },
              { text: 'Cloudflare Pages', link: 'https://pages.cloudflare.com' },
              { text: 'GitHub Repo', link: GITHUB_REPO },
            ],
          },
        ],
        sidebar: [
          {
            text: 'Getting Started',
            collapsed: false,
            items: [
              { text: 'Introduction', link: '/guide/introduction' },
              { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
              { text: 'Getting Started', link: '/guide/getting-started' },
              { text: 'Project Structure', link: '/guide/project-structure' },
            ],
          },
          {
            text: 'Course Chapters',
            collapsed: false,
            items: [
              { text: 'Configuration', link: '/guide/configuration' },
              { text: 'Writing Markdown', link: '/guide/markdown' },
              { text: 'Navigation & Sidebar', link: '/guide/navigation' },
              { text: 'Custom Theme', link: '/guide/custom-theme' },
              { text: 'Ask AI Integration', link: '/guide/ask-ai' },
              { text: 'Cloudflare Deploy', link: '/guide/deploy' },
            ],
          },
          {
            text: 'Reference',
            collapsed: true,
            items: [
              { text: 'Site Config', link: '/reference/site-config' },
              { text: 'Frontmatter Config', link: '/reference/frontmatter-config' },
              { text: 'Theme Config', link: '/reference/theme-config' },
              { text: 'CLI Reference', link: '/reference/cli' },
            ],
          },
        ],
        editLink: {
          pattern: GITHUB_REPO + '/edit/main/docs/:path',
          text: 'Edit this page on GitHub',
        },
        footer: {
          message: 'VitePress Course — Complete Tutorial',
          copyright: '\u00A9 2025 mdmubarokhosin. MIT License.',
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next',
        },
        outline: {
          label: 'On This Page',
          level: [2, 3],
        },
        returnToTopLabel: 'Back to top',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        sidebarMenuLabel: 'Menu',
        langMenuLabel: 'Language',
        lastUpdated: {
          text: 'Last updated',
        },
      },
    },
    bn: {
      label: 'বাংলা',
      lang: 'bn',
      title: 'VitePress কোর্স',
      description: 'VitePress ব্যবহার করে ডকুমেন্টেশন ওয়েবসাইট তৈরি এবং Cloudflare Pages এ ডিপ্লয় করুন — AI সহ সম্পূর্ণ দ্বিভাষিক কোর্স',
      head: [
        ['meta', { property: 'og:title', content: 'VitePress কোর্স — ডকুমেন্টেশন ওয়েবসাইট তৈরি করুন' }],
        ['meta', { property: 'og:description', content: 'VitePress, Cloudflare Pages ডিপ্লয় এবং AI ইন্টিগ্রেশন শিখুন — সম্পূর্ণ দ্বিভাষিক কোর্স।' }],
        ['meta', { property: 'og:locale', content: 'bn_BD' }],
        ['meta', { name: 'twitter:title', content: 'VitePress কোর্স — ডকুমেন্টেশন ওয়েবসাইট তৈরি করুন' }],
        ['meta', { name: 'twitter:description', content: 'VitePress, Cloudflare Pages ডিপ্লয় এবং AI ইন্টিগ্রেশন শিখুন — সম্পূর্ণ দ্বিভাষিক কোর্স।' }],
      ],
      themeConfig: {
        nav: [
          { text: 'গাইড', link: '/bn/guide/introduction', activeMatch: '/bn/guide/' },
          { text: 'রেফারেন্স', link: '/bn/reference/site-config', activeMatch: '/bn/reference/' },
          {
            text: 'আরো',
            items: [
              { text: 'VitePress অফিসিয়াল', link: 'https://vitepress.dev' },
              { text: 'Cloudflare Pages', link: 'https://pages.cloudflare.com' },
              { text: 'GitHub রিপো', link: GITHUB_REPO },
            ],
          },
        ],
        sidebar: [
          {
            text: 'ভূমিকা',
            collapsed: false,
            items: [
              { text: 'কোর্স পরিচিতি', link: '/bn/guide/introduction' },
              { text: 'VitePress কি?', link: '/bn/guide/what-is-vitepress' },
              { text: 'শুরু করুন', link: '/bn/guide/getting-started' },
              { text: 'প্রজেক্ট স্ট্রাকচার', link: '/bn/guide/project-structure' },
            ],
          },
          {
            text: 'কোর্স অধ্যায়সমূহ',
            collapsed: false,
            items: [
              { text: 'কনফিগারেশন', link: '/bn/guide/configuration' },
              { text: 'Markdown লেখা', link: '/bn/guide/markdown' },
              { text: 'Navigation ও Sidebar', link: '/bn/guide/navigation' },
              { text: 'কাস্টম থিম', link: '/bn/guide/custom-theme' },
              { text: 'Ask AI যোগ করা', link: '/bn/guide/ask-ai' },
              { text: 'Cloudflare ডিপ্লয়', link: '/bn/guide/deploy' },
            ],
          },
          {
            text: 'রেফারেন্স',
            collapsed: true,
            items: [
              { text: 'Site Config', link: '/bn/reference/site-config' },
              { text: 'Frontmatter Config', link: '/bn/reference/frontmatter-config' },
              { text: 'Theme Config', link: '/bn/reference/theme-config' },
              { text: 'CLI Reference', link: '/bn/reference/cli' },
            ],
          },
        ],
        editLink: {
          pattern: GITHUB_REPO + '/edit/main/docs/:path',
          text: 'GitHub এ এডিট করুন',
        },
        footer: {
          message: 'VitePress কোর্স — সম্পূর্ণ টিউটোরিয়াল',
          copyright: '\u00A9 2025 mdmubarokhosin. MIT License.',
        },
        docFooter: {
          prev: 'পূর্ববর্তী',
          next: 'পরবর্তী',
        },
        outline: {
          label: 'এই পেজে',
          level: [2, 3],
        },
        returnToTopLabel: 'টপে ফিরুন',
        darkModeSwitchLabel: 'থিম',
        lightModeSwitchTitle: 'লাইট মোড',
        darkModeSwitchTitle: 'ডার্ক মোড',
        sidebarMenuLabel: 'মেনু',
        langMenuLabel: 'ভাষা',
        lastUpdated: {
          text: 'সর্বশেষ আপডেট',
        },
      },
    },
  },

  themeConfig: {
    logo: '/vitepress-logo-large.svg',
    socialLinks: [
      { icon: 'github', link: GITHUB_REPO },
    ],
    search: {
      provider: 'local',
    },
  },
})
