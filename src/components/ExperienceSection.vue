<script lang="ts" setup>
import Timeline from 'primevue/timeline'
import { ref } from 'vue'

const positions = ref([
  {
    company: 'Zumo Enterprise',
    position: 'Software Engineer',
    date: '2023 - Present',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    company: 'Aeternity',
    position: 'Full-Stack Engineer',
    date: '2022 - 2023',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    company: 'Savium',
    position: 'Full-Stack Engineer',
    date: '2021 - 2022',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    company: 'Freelancing',
    position: 'Potpourri of technologies',
    date: '2019 - 2021',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    company: 'Bear in Mind',
    position: 'Junior Front-End Developer',
    date: '2019',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
])

const education = {
  university: 'International Hellenic University',
  degree: 'Integrated Masters in Information Technology and Electronic Engineering',
  date: '2017 - 2023',
  gpa: '8.5/10',
}

const volunteering = [
  {
    organization: 'FOSDEM',
    date: '2018 - Present',
    info: 'FOSDEM is the largest free and open-source software conference in Europe, where I have been volunteering there since 2018',
  },
  {
    organization: 'IEEE IHU Thessaloniki Student Branch',
    date: '2018 - 2021',
    info: "I was a member of my university's IEEE student branch, where I participated in various events and activities promoting technology and engineering and served as a design and media committee.",
  },
  {
    organization: 'WordPress Greek Community',
    date: '2018 - 2020',
    info: 'As an active member of the WordPress, I volunteered in local meetups and events.',
  },
]
</script>

<template>
  <h2 class="text-3xl">Experience</h2>
  <div class="flex gap-2 space-between">
    <div class="mb-6 flex-1">
      <h3 class="text-2xl">Work</h3>
      <Timeline :value="positions">
        <template #content="slotProps">
          <h4>{{ slotProps.item.company }}</h4>
          <p class="text-sm font-bold">{{ slotProps.item.position }}</p>
          <p class="text-xs">{{ slotProps.item.date }}</p>
          <p class="text-sm">{{ slotProps.item.info }}</p>
        </template>
      </Timeline>
    </div>
    <div class="mb-6 flex-1 flex flex-col space-between place-content-between">
      <div>
        <h3 class="text-2xl font-semibold">Education</h3>
        <p class="text-sm font-bold">{{ education.university }}</p>
        <p class="text-sm">{{ education.degree }}</p>
        <p class="text-xs">{{ education.date }}</p>
        <p class="text-xs font-bold">GPA: {{ education.gpa }}</p>
      </div>
      <div>
        <h3 class="text-2xl">Volunteering</h3>
        <Timeline :value="volunteering">
          <template #content="slotProps">
            <h4>{{ slotProps.item.company }}</h4>
            <p class="text-sm font-bold">{{ slotProps.item.organization }}</p>
            <p class="text-xs">{{ slotProps.item.date }}</p>
            <p class="text-sm">{{ slotProps.item.info }}</p>
          </template>
        </Timeline>
      </div>
    </div>
  </div>
</template>

<style>
.p-timeline-event-opposite {
  display: none !important;
}
</style>
