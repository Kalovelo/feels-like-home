<template>
  <div
    ref="contactSection"
    class="relative flex flex-col w-[90vw] lg:w-max mr-auto ml-auto contactSection max-w-min"
  >
    <span class="accent md:ml-0 lg:text-3xl font-semibold mb-4">Conquer the mountain</span>
    <span
      ref="email"
      class="accent text-4xl lg:text-8xl overflow-hidden font-semibold mb-8 md:mb-4 text-center"
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
        class="font-black hover:underline mr-0 text-base/loose"
      >
        {{ link.name }}
      </a>
    </div>
    <span class="accent font-thin! mb-4 text-right lg:text-3xl">even if you're Sisyphus.</span>
  </div>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core'
import * as anime from 'animejs'
import { useTemplateRef } from 'vue'

const links = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kalovelo' },
  { name: 'GitHub', url: 'https://www.github.com/in/Kalovelo' },
  { name: 'YouTube', url: 'https://www.youtube.com/@apoverse' },
]

const contactSection = useTemplateRef<HTMLDivElement>('contactSection')
useIntersectionObserver(
  contactSection,
  ([entry], observerElement) => {
    if (entry?.isIntersecting) {
      const textElements = document.querySelectorAll('.contactSection span')
      const animations: anime.JSAnimation[] = []
      textElements.forEach((el, index) => {
        animations.push(
          anime.animate(el as HTMLElement, {
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: index * 200,
            easing: 'easeOutExpo',
          }),
        )
      })
      const lastAnimation = animations[textElements.length - 1]
      const linkElements = document.querySelectorAll('.contactSection a')
      linkElements.forEach((el, index) => {
        anime.animate(el as HTMLElement, {
          opacity: [0, 1],
          duration: 1000,
          delay: lastAnimation.duration + index * 200,
          easing: 'easeOutExpo',
        })
      })

      observerElement.disconnect()
    }
  },
  {
    threshold: 0.8,
  },
)
</script>

<style scoped>
.contactSection a,
.contactSection span {
  opacity: 0;
}
</style>
