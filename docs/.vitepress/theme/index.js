import DefaultTheme from 'vitepress/theme'
import AskAI from './components/AskAI.vue'
import Home from './components/Home.vue'
import './styles/custom.css'
import { h, ref, onMounted } from 'vue'

const ClientOnlyAskAI = {
  setup() {
    const mounted = ref(false)
    onMounted(() => { mounted.value = true })
    return () => mounted.value ? h(AskAI) : null
  }
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(ClientOnlyAskAI),
      'home-hero-after': () => h(Home),
    })
  },
}
