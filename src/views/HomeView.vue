<script setup lang="ts"></script>

<template>
  <main>
    <section
      class="relative grid grid-cols-[3fr_1fr] align-center justify-center items-center min-h-[100vh] space-between w-full max-w-[100vw] overflow-hidden max-lg:p-4 max-md:mt-[50px]"
    >
      <div
        class="flex h-full min-h-[100vh] w-full place-content-between gap-6 max-xl:place-items-center max-lg:flex-col"
      >
        <div class="flex-col place-content-center">
          <div
            class="flex-col text-7xl font-semibold uppercase leading-[85px] max-lg:text-4xl max-md:leading-snug"
          >
            <h1 class="title grid m-0 p-0">
              <span class="text-7xl name opacity-0"> Apostolos Kalovelonis. </span>
              <span class="text-7xl subtitle opacity-0">Software Engineer.</span>
            </h1>
          </div>
          <div class="bio mt-2 max-w-[750px] p-2 text-justify max-lg:max-w-full opacity-0">
            Challenge-driven software engineer with a mentee mindset (even as a mentor) who seeks
            adventure in both personal and professional life.
          </div>
        </div>
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="234.464 236.489 199.028 183.621"
          class="logo"
          id="logoSvg"
        >
          <defs>
            <path
              id="originalPath"
              d="M418.85 271.06c-6.12-11.03-14.83-20.59-25.22-27.45-.29-.19-.57-.37-.84-.46-.47-.37-.93-.65-1.4-.93a40.868 40.868 0 00-5.09-2.88c-.1-.09-.19-.09-.29-.09-1.02-.37-2.03-.74-3.06-.93-.54-.18-1.11-.27-1.66-.37-.83-.18-1.57-.28-2.41-.37-.66-.09-1.4-.09-2.05-.09-.83 0-1.67 0-2.49.09-12.63 1.3-22.55 11.87-22.55 24.86 0 2.32.37 4.54.93 6.68.28.83.55 1.67.83 2.41.09.09.09.28.19.37.47.93.92 1.85 1.39 2.69.19.46.46.93.74 1.39.09.09.19.19.29.37.27.37.45.74.74 1.02.37.46.74.93 1.11 1.39 1.48 2.04 3.05 3.62 4.82 5.2 4.82 4.73 9.46 9.27 13.73 14.37 4.17 5.01 8.16 10.58 10.57 17.16 2.5 6.4 3.24 13.63 2.78 20.87-.92 14.28-7.7 29.03-19.29 40.07-11.6 11.03-27.63 18.08-44.52 19.2-16.88 1.11-34.5-2.79-48.97-12.62-14.66-9.46-25.97-24.39-30.61-41.74-4.55-17.34-2.6-36.72 6.49-52.95 8.82-16.33 24.02-29.22 41.66-36.36.26-.19.45-.47.37-.84-.11-.37-.48-.55-.85-.37-18.27 6.03-35.05 18.09-45.63 34.88-5.38 8.34-9.37 17.62-11.49 27.54a84.81 84.81 0 00-.47 30.24c3.62 20.12 15.02 38.95 31.25 52.12 16.14 13.45 37.19 20.78 58.54 21.52 21.41.74 43.39-5.47 62.03-18.09 18.55-12.52 33.3-32.46 39.15-55.83 2.96-11.69 3.61-23.93 2.22-36.27-1.48-12.24-4.82-24.67-10.94-35.8z"
            />
          </defs>

          <!-- Animated stroke version -->
          <use href="#originalPath" class="animated-path"></use>

          <!-- Filled version that fades in -->
          <use href="#originalPath" fill="var(--p-content-color)" class="fade-fill"></use>
        </svg>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import * as anime from 'animejs'
import { onMounted } from 'vue'

const timeline = anime.createTimeline()

const scatterAnimation = (timeline, title) => {
  const textWrapper = title
  title.style.opacity = 1
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter text-7xl name opacity-0'>$&</span>",
  )
  timeline
    .add(' .letter', {
      opacity: [0, 1],
      easing: 'easeInOutSine',
      duration: 100,
      delay: function (el, i) {
        return 60 * (i + 1)
      },
    })

    .add('.subtitle', {
      opacity: [0, 1],
      easing: 'easeInOutSine',
      duration: 400,
    })
    .add('.bio', {
      opacity: [0, 1],
      easing: 'easeInOutSine',
      duration: 400,
    })
}

onMounted(() => {
  const title = document.querySelector('.name') as HTMLElement
  const subtitle = document.querySelector('.info') as HTMLElement
  scatterAnimation(timeline, title, subtitle)
})
</script>

<style scoped>
.animated-path {
  stroke-dasharray: 1000;
  stroke-dashoffset: -1000;
  animation: drawPath 3s ease-in-out forwards;
  fill: transparent;
  stroke: var(--p-content-color);
  stroke-width: 0.7;
}

.fade-fill {
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out 2.5s forwards;
}

@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
