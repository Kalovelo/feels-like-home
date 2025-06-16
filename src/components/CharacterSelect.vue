<template>
  <div>
    <h2 class="text-3xl mb-4 text-center">Interests</h2>
    <div class="grid grid-cols-2 gap-2">
      <div>
        <h3>{{ characters[selectedIndex].name }}</h3>
        <p class="mt-12">{{ characters[selectedIndex].info }}</p>
      </div>
      <div class="carousel-container">
        <h3 class="text-center">Select Character</h3>
        <div class="carousel" :style="carouselStyle">
          <div
            v-for="(char, index) in characters"
            :key="index"
            class="character"
            :style="getCharacterStyle(index)"
            :class="{ selected: index === selectedIndex }"
          >
            <img :src="char.image" :alt="char.name" />
            <div class="name">{{ char.name }}</div>
          </div>
        </div>
        <div class="controls">
          <button @click="prev">◀</button>
          <button @click="next">▶</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import image from '@/assets/images/travelling.png'

export default {
  data() {
    return {
      characters: [
        {
          name: 'Traveling',
          info: `Ex solo-traveler who loved to explore hidden gems and meet new people in hostels, 
      where I learnt the beauty of bonding in a transient world.
      Now, I prefer traveling on my motorcycle, alone or with my closest people.
      Still hunting for hidden beauties, but now with more fun, freedom and a whole lot more adrenaline.`,
          image: image,
        },
        {
          name: 'Off-roading',
          info: `The epitome of fun.
      I am really sorry to my motorcycle for the abuse I put it through,
      but I have promised it that there's only glory ahead, and that's through Valhalla.`,
        },
        {
          name: 'Literature',
        },
        {
          name: 'Fitness & Martial Arts',
        },
      ],
      rotationY: 0, // ← NEW
    }
  },
  computed: {
    selectedIndex() {
      const total = this.characters.length
      const normalizedAngle = ((-this.rotationY % 360) + 360) % 360
      return Math.round(normalizedAngle / (360 / total)) % total
    },
    carouselStyle() {
      return {
        transform: `translateZ(-300px) rotateY(${this.rotationY}deg)`,
      }
    },
  },
  methods: {
    next() {
      const step = 360 / this.characters.length
      this.rotationY -= step
    },
    prev() {
      const step = 360 / this.characters.length
      this.rotationY += step
    },

    getCharacterStyle(index: number) {
      const total = this.characters.length
      const angle = (360 / total) * index

      const diff = (index - this.selectedIndex + total) % total
      const shortest = diff > total / 2 ? diff - total : diff
      const yOffset = -Math.abs(shortest) * 15

      return {
        transform: `
      rotateY(${angle}deg)
      translateZ(300px)
      translateY(${yOffset}px)
    `,
      }
    },
  },
  next() {
    const step = 360 / this.characters.length
    this.rotationY -= step // rotate forward
  },
  prev() {
    const step = 360 / this.characters.length
    this.rotationY += step // rotate backward
  },
}
</script>

<style scoped>
.carousel-container {
  perspective: 1000px;
  width: 400px;
  height: 300px; /* increase if characters overlap controls */
  margin: auto;
  position: relative;
}

.carousel {
  width: 100%;
  height: 80px;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  position: relative; /* changed from absolute */
  transform-origin: center center; /* make sure rotation is around the center */
  display: flex;
  justify-content: center;
  align-items: center;
}
.character {
  position: absolute;
  top: 50%;
  /* left: 50%; */
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  text-align: center;
  transform: translate(-50%, -50%); /* center from the middle */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.character img {
  width: 150px;
  height: 150px;
  border: 2px solid transparent;
}

.character .name {
  width: 140px;
  margin-top: 8px;
  color: white;
  font-weight: bold;
}

.selected img {
  transform: scale(1.2);
}

.controls {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

button {
  font-size: 20px;
  margin: 0 10px;
  padding: 8px 16px;
  border-radius: 8px;
  background: #222;
  color: white;
  border: 1px solid #555;
  cursor: pointer;
}
</style>
