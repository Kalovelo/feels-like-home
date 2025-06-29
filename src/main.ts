import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { createHead } from '@unhead/vue/client'

import App from './App.vue'

const app = createApp(App)
const head = createHead({})

app.use(head)

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.mount('#app')
