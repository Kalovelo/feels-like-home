<template>
  <div class="flex flex-col w-max mr-auto ml-auto">
    <span class="accent text-3xl font-semibold mb-4">Conquer the mountain</span>
    <span class="accent text-8xl overflow-hidden font-semibold mb-4 text-center"
      >hello@kalovelo.com</span
    >
    <div
      class="flex flex-col overflow-hidden justify-center space-x-4 mb-6 text-right w-min self-end"
    >
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="font-black hover:underline mr-0"
      >
        {{ link.name }}
      </a>
    </div>
    <span class="accent text-3xl font-thin! mb-4 text-right">even if you're Sisyphus.</span>
  </div>
</template>

<script lang="ts" setup>
const links = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kalovelo' },
  { name: 'GitHub', url: 'https://www.github.com/in/Kalovelo' },
  { name: 'YouTube', url: 'https://www.youtube.com/@apoverse' },
]
</script>
