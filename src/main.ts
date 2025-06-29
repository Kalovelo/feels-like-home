import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { createHead } from '@unhead/vue/client'

import App from './App.vue'
import { useHead, useSeoMeta } from '@unhead/vue'

const app = createApp(App)
const head = createHead({})

app.use(head)

useSeoMeta({
  title: 'Apostolos Kalovelonis',
  description: 'Personal website of Apostolos Kalovelonis, a software engineer',
})

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.mount('#app')
