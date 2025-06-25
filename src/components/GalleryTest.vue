<template>
  <h2 class="text-3xl text-center mb-15">Life</h2>
  <div
    class="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 p-6 w-3xl mr-auto ml-auto"
  >
    <div
      v-for="(item, index) in galleryItems"
      :key="index"
      :class="'h-auto max-w-full gallery-item ' + item.class"
    >
      <img :src="item.image" :alt="item.title" class="rounded-lg shadow-md" />
      <p class="text-lg font-medium mt-6">{{ item.title }}</p>
      <p class="text-sm text-gray-600 mt-2">{{ item.info }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface GalleryItem {
  image: string
  title: string
  info: string
  class?: string // Optional class for custom styling
}

const galleryItems: GalleryItem[] = [
  {
    image: new URL('@/assets/images/travel.jpeg', import.meta.url).href,
    title: 'The beauty of a transient world',
    info: `Ex solo-traveler who loved to explore hidden gems and meet new people in hostels, 
      where I learnt the beauty of bonding in a transient world.
      Now, I prefer traveling on my motorcycle, alone or with my closest people.
      Still hunting for hidden beauties, but now with more fun, freedom and lotta more adrenaline.`,
  },
  {
    image: new URL('@/assets/images/explore.jpeg', import.meta.url).href,
    title: 'In an abusive relationship with my motorcycle',
    info: `The epitome of fun. I am really sorry to my motorcycle for the abuse I put it through, but I have promised it that there's only glory ahead, and that's through Valhalla.`,
  },
  {
    image: new URL('@/assets/images/martial-arts.png', import.meta.url).href,
    title: 'Throwing sophisticated haymakers',
    info: 'Martial arts was one of my life catalysts. As a kid I tried a lot of different sports, but none sparked like kickboxing did. After a few years I transitioned to MMA, and as of today, the journey has come full circle and I continue as a fan of the sports.',
  },
  {
    image: new URL('@/assets/images/fitness.png', import.meta.url).href,
    title: 'Touch some grass',
    info: 'To find balance in the fast paced life and the sins of software-engineering, I try to spend some time outdoors, reflecting and enjoying the simple things.',
  },
]
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'A .'
    'A B'
    'A B'
    'C B'
    'C D';
}

.gallery-item:nth-child(1) {
  grid-area: A;
}

.gallery-item:nth-child(2) {
  grid-area: B;
}

.gallery-item:nth-child(3) {
  grid-area: C;
}

.gallery-item:nth-child(4) {
  grid-area: D;
}
</style>
