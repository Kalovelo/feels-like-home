<template>
  <div class="carousel-container">
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
</template>

<script lang="ts">
export default {
  data() {
    return {
      characters: [
        { name: 'Isaac', image: '/isaac.png' },
        { name: 'Magdalene', image: '/magdalene.png' },
        { name: 'Cain', image: '/cain.png' },
        { name: 'Judas', image: '/judas.png' },
        { name: 'Eve', image: '/eve.png' },
        { name: 'Samson', image: '/samson.png' },
      ],
      selectedIndex: 0,
    }
  },
  computed: {
    carouselStyle() {
      const rotation = (360 / this.characters.length) * this.selectedIndex
      return {
        transform: `translateZ(-300px) rotateY(${-rotation}deg)`,
      }
    },
  },
  methods: {
    getCharacterStyle(index: number) {
      const total = this.characters.length
      const anglePer = 360 / total

      const diff = (index - this.selectedIndex + total) % total
      const shortestDistance = diff > total / 2 ? diff - total : diff

      const angle = anglePer * index
      const yOffset = -Math.abs(shortestDistance) * 15 // raise characters behind

      return {
        transform: `
      rotateY(${angle}deg)
      translateZ(300px)
      translateY(${yOffset}px)
    `,
        zIndex: total - Math.abs(shortestDistance), // ensure proper layering
      }
    },
    next() {
      this.selectedIndex = (this.selectedIndex + 1) % this.characters.length
    },
    prev() {
      this.selectedIndex =
        (this.selectedIndex - 1 + this.characters.length) % this.characters.length
    },
  },
}
</script>

<style scoped>
.carousel-container {
  perspective: 1000px;
  width: 400px;
  height: 400px;
  margin: auto;
  position: relative;
}

.carousel {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
}

.character {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  text-align: center;
}

.character img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.character .name {
  margin-top: 8px;
  color: white;
  font-weight: bold;
}

.selected img {
  border-color: yellow;
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
