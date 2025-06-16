<script setup lang="ts">
import image from '@/assets/images/me.jpg'
</script>

<template>
  <main>
    <section
      class="relative flex min-h-[100vh] space-between w-full max-w-[100vw] flex-col overflow-hidden max-lg:p-4 max-md:mt-[50px]"
    >
      <div
        class="flex h-full min-h-[100vh] w-full place-content-between gap-6 p-[5%] max-xl:place-items-center max-lg:flex-col"
      >
        <div class="flex-col place-content-center">
          <div
            class="flex-col text-7xl font-semibold uppercase leading-[85px] max-lg:text-4xl max-md:leading-snug"
          >
            <h1 class="title grid m-0 p-0">
              <span class="bg-green-200 text-7xl w-min"> Apo. </span> Software Engineer.
            </h1>
          </div>
          <div class="reveal-hero-text mt-2 max-w-[750px] p-2 text-justify max-lg:max-w-full">
            Challenge-driven software engineer with a mentee mindset, even as a mentor. I seek
            adventure in both personal and professional life, embracing new challenges beyond my
            comfort zone and core expertise.
          </div>
        </div>

        <div
          class="flex w-full max-w-[50%] place-content-center place-items-center overflow-hidden max-lg:max-w-[unset]"
        >
          <div
            class="relative flex max-h-[580px] min-h-[450px] min-w-[350px] max-w-[650px] overflow-hidden max-lg:h-fit max-lg:max-h-[320px] max-lg:min-h-[180px] max-lg:w-[320px] max-lg:min-w-[320px]"
          >
            <img
              :src="image"
              alt="app"
              class="reveal-hero-img z-[1] h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
