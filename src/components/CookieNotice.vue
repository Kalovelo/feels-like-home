<template>
  <div
    v-if="!cookieAccepted"
    class="z-999 left-[50%] -translate-x-1/2 fixed bottom-0 bg-gray-800 text-white mb-4 py-3 px-5 shadow-md flex justify-between items-center l-0 r-0 w-max rounded"
  >
    <p class="text-sm">Tea is served with cookies.</p>
    <button
      @click="acceptCookies"
      aria-label="Close cookie notice"
      class="ml-4 flex items-center justify-center w-7 h-7 rounded-full border border-white text-white text-2xl hover:bg-white hover:text-gray-800 transition"
    >
      ×
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Helper to get and set cookies
const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? match[2] : null
}

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${value}; expires=${expires}; path=/`
}

const cookieAccepted = ref(false)

onMounted(() => {
  cookieAccepted.value = getCookie('cookieConsent') === 'true'
})

const acceptCookies = () => {
  setCookie('cookieConsent', 'true', 365)
  cookieAccepted.value = true
}
</script>

<style scoped>
/* Optional: Add fade-in animation */
</style>
