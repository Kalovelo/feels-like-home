<script setup lang="ts">
import HomeView from './views/HomeView.vue'
import ContactSection from './components/ContactSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import LifeSection from './components/LifeSection.vue'
import CookieNotice from './components/CookieNotice.vue'
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
  title: 'Apostolos Kalovelonis',
  description: 'Personal website of Apostolos Kalovelonis, a software engineer',
})
</script>
<template>
  <CookieNotice />
  <div class="flex flex-col overflow-x-hidden min-h-screen lg:py-5! lg:px-50!">
    <HomeView />
    <div class="my-10">
      <ExperienceSection />
    </div>
    <div class="my-10">
      <LifeSection />
    </div>
    <div class="my-10">
      <ContactSection />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
