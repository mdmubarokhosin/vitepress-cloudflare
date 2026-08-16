<script setup>
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'

const isLoaded = ref(false)
const { lang } = useData()

const isBn = computed(() => lang.value === 'bn')

const content = computed(() => isBn.value ? {
  sponsorsTitle: 'ওপেন সোর্স ও ফ্রি',
  sponsorsDesc: 'VitePress দিয়ে তৈরি, Cloudflare Pages এ চালিত, এবং Poolside AI দিয়ে উন্নত। এই কোর্স সম্পূর্ণ বিনামূল্যে এবং ওপেন সোর্স।',
  statPages: '২৮+',
  statPagesLabel: 'কন্টেন্ট পেজ',
  statLang: '২',
  statLangLabel: 'ভাষা',
  statChapters: '৭',
  statChaptersLabel: 'কোর্স অধ্যায়',
  statFree: '১০০%',
  statFreeLabel: 'ফ্রি ও ওপেন সোর্স',
  ctaTitle: 'আপনার ডকস সাইট তৈরি করতে প্রস্তুত?',
  ctaDesc: 'শূন্য থেকে শুরু করুন, ধাপে ধাপে শিখুন, এবং আপনার ডকুমেন্টেশন ওয়েবসাইট Cloudflare Pages এ ডিপ্লয় করুন — সম্পূর্ণ বিনামূল্যে।',
  ctaBtn: 'শিখুন শুরু',
  ctaGithub: 'GitHub এ দেখুন',
  startLink: '/bn/guide/introduction',
} : {
  sponsorsTitle: 'Open Source & Free',
  sponsorsDesc: 'Built with VitePress, powered by Cloudflare Pages, and enhanced with Poolside AI. This course is completely free and open source.',
  statPages: '28+',
  statPagesLabel: 'Content Pages',
  statLang: '2',
  statLangLabel: 'Languages',
  statChapters: '7',
  statChaptersLabel: 'Course Chapters',
  statFree: '100%',
  statFreeLabel: 'Free & Open Source',
  ctaTitle: 'Ready to Build Your Docs Site?',
  ctaDesc: 'Start from zero, learn step by step, and deploy your documentation website to Cloudflare Pages — completely free.',
  ctaBtn: 'Start Learning',
  ctaGithub: 'View on GitHub',
  startLink: '/guide/introduction',
})

onMounted(() => {
  setTimeout(() => { isLoaded.value = true }, 100)
})
</script>

<template>
  <div class="home-extra" :class="{ loaded: isLoaded }">
    <!-- Sponsors / Community Section -->
    <section class="home-sponsors">
      <div class="sponsors-content">
        <h2 class="sponsors-title"><i class="bi bi-stars"></i> {{ content.sponsorsTitle }}</h2>
        <p class="sponsors-desc">
          {{ content.sponsorsDesc }}
        </p>
        <div class="sponsor-logos">
          <a href="https://vitepress.dev" target="_blank" rel="noopener" class="sponsor-card" title="VitePress">
            <i class="bi bi-filetype-mdx sponsor-icon" style="color: #5350C4;"></i>
            <span>VitePress</span>
          </a>
          <a href="https://pages.cloudflare.com" target="_blank" rel="noopener" class="sponsor-card" title="Cloudflare Pages">
            <i class="bi bi-cloud-fill sponsor-icon" style="color: #F6821F;"></i>
            <span>Cloudflare</span>
          </a>
          <a href="https://vuejs.org" target="_blank" rel="noopener" class="sponsor-card" title="Vue.js">
            <i class="bi bi-code-slash sponsor-icon" style="color: #4FC08D;"></i>
            <span>Vue.js</span>
          </a>
          <a href="https://github.com/mdmubarokhosin/vitepress-cloudflare" target="_blank" rel="noopener" class="sponsor-card" title="GitHub">
            <i class="bi bi-github sponsor-icon" style="color: #24292F;"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="home-stats">
      <div class="stats-grid">
        <div class="stat-card">
          <i class="bi bi-file-earmark-text-fill stat-icon"></i>
          <div class="stat-number">{{ content.statPages }}</div>
          <div class="stat-label">{{ content.statPagesLabel }}</div>
        </div>
        <div class="stat-card">
          <i class="bi bi-translate stat-icon"></i>
          <div class="stat-number">{{ content.statLang }}</div>
          <div class="stat-label">{{ content.statLangLabel }}</div>
        </div>
        <div class="stat-card">
          <i class="bi bi-book-fill stat-icon"></i>
          <div class="stat-number">{{ content.statChapters }}</div>
          <div class="stat-label">{{ content.statChaptersLabel }}</div>
        </div>
        <div class="stat-card">
          <i class="bi bi-heart-fill stat-icon"></i>
          <div class="stat-number">{{ content.statFree }}</div>
          <div class="stat-label">{{ content.statFreeLabel }}</div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="home-cta">
      <div class="cta-content">
        <h2 class="cta-title"><i class="bi bi-rocket-takeoff-fill"></i> {{ content.ctaTitle }}</h2>
        <p class="cta-desc">
          {{ content.ctaDesc }}
        </p>
        <div class="cta-actions">
          <a :href="content.startLink" class="cta-btn primary">
            <i class="bi bi-arrow-right-circle-fill"></i>
            {{ content.ctaBtn }}
          </a>
          <a href="https://github.com/mdmubarokhosin/vitepress-cloudflare" target="_blank" rel="noopener" class="cta-btn secondary">
            <i class="bi bi-github"></i>
            {{ content.ctaGithub }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-extra {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.home-extra.loaded {
  opacity: 1;
  transform: translateY(0);
}

/* Sponsors Section */
.home-sponsors {
  padding: 64px 24px 48px;
  text-align: center;
  max-width: 1152px;
  margin: 0 auto;
}

.sponsors-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}

.sponsors-title i {
  margin-right: 6px;
  vertical-align: -2px;
}

.sponsors-desc {
  color: var(--vp-c-text-2);
  font-size: 1.05rem;
  max-width: 560px;
  margin: 0 auto 36px;
  line-height: 1.7;
}

.sponsor-logos {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.sponsor-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 24px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  text-decoration: none;
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.25s ease;
}

.sponsor-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(83, 80, 196, 0.12);
}

.sponsor-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

/* Stats Section */
.home-stats {
  padding: 32px 24px 64px;
  max-width: 1152px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.stat-card {
  text-align: center;
  padding: 28px 20px;
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(83, 80, 196, 0.1);
}

.stat-icon {
  font-size: 1.75rem;
  color: var(--vp-c-brand-1);
  margin-bottom: 8px;
  display: block;
}

.stat-number {
  font-size: 2.25rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  margin-bottom: 6px;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

/* CTA Section */
.home-cta {
  padding: 64px 24px 96px;
  text-align: center;
}

.cta-content {
  max-width: 640px;
  margin: 0 auto;
  padding: 48px 40px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(83, 80, 196, 0.06) 0%, rgba(123, 104, 238, 0.04) 100%);
  border: 1px solid rgba(83, 80, 196, 0.12);
}

.dark .cta-content {
  background: linear-gradient(135deg, rgba(83, 80, 196, 0.12) 0%, rgba(123, 104, 238, 0.08) 100%);
  border-color: rgba(83, 80, 196, 0.2);
}

.cta-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}

.cta-title i {
  margin-right: 8px;
  vertical-align: -3px;
}

.cta-desc {
  color: var(--vp-c-text-2);
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0 0 28px;
}

.cta-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.25s ease;
}

.cta-btn i {
  font-size: 1.15rem;
}

.cta-btn.primary {
  background: var(--vp-c-brand-1);
  color: #fff;
  box-shadow: 0 4px 16px rgba(83, 80, 196, 0.3);
}

.cta-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(83, 80, 196, 0.4);
}

.cta-btn.secondary {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.cta-btn.secondary:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .sponsor-logos {
    gap: 12px;
  }

  .sponsor-card {
    padding: 12px 18px;
    font-size: 0.875rem;
  }

  .cta-content {
    padding: 32px 24px;
  }

  .cta-title {
    font-size: 1.4rem;
  }
}

@media (max-width: 480px) {
  .home-sponsors,
  .home-stats {
    padding-left: 16px;
    padding-right: 16px;
  }

  .home-cta {
    padding: 40px 16px 64px;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
