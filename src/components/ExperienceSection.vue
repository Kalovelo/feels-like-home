<script lang="ts" setup>
import Timeline from 'primevue/timeline'
import { ref } from 'vue'
import * as anime from 'animejs'
import { useIntersectionObserver } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const offset = ref(0)
const workRef = useTemplateRef<HTMLDivElement>('workRef')
const educationRef = useTemplateRef<HTMLDivElement>('educationRef')
const volunteeringRef = useTemplateRef<HTMLDivElement>('volunteeringRef')

useIntersectionObserver(
  workRef,
  ([entry], observerElement) => {
    if (entry?.isIntersecting) {
      const workContent = document.querySelector('.work-content') as HTMLElement
      const title = workContent.querySelector('.section-title') as HTMLElement
      anime.animate(title, {
        opacity: [0, 1],
        easing: 'easeInOutSine',
        duration: 200,
      })

      offset.value = 200
      const events = workContent.querySelectorAll('.p-timeline-event')
      events.forEach((event, index) => {
        const markerTimeline = anime.createTimeline()
        const contentTimeline = anime.createTimeline()
        const marker = event.querySelector('.p-timeline-event-marker') as HTMLElement
        markerTimeline.add(
          marker,
          {
            opacity: [0, 1],
            easing: 'easeInOutSine',
            duration: 500,
          },
          offset.value - index * 300,
        )

        const separator = event.querySelector('.p-timeline-event-separator') as HTMLElement
        markerTimeline.add(
          separator,
          {
            ['max-height']: ['17px', '250px'],
            easing: 'easeInOutSine',
            duration: 1500,
          },
          offset.value,
        )

        const skip = index > 0 ? 300 : 0

        contentTimeline.add(
          event.querySelector('.p-timeline-event-content') as HTMLElement,
          {
            opacity: [0, 1],
            easing: 'easeInOutSine',
            duration: 1000,
          },
          offset.value - skip,
        )

        offset.value += 1000
      })

      observerElement.disconnect()
    }
  },
  {
    threshold: 0.3,
  },
)

useIntersectionObserver(
  educationRef,
  ([entry], observerElement) => {
    if (entry?.isIntersecting) {
      const educationTimeline = anime.createTimeline()
      const sectionOffset = 0

      educationTimeline.add(
        '.section-education h3',
        {
          opacity: [0, 1],
          easing: 'easeInOutSine',
          duration: 600,
        },
        sectionOffset,
      )
      educationTimeline.add('.section-education .section-content', {
        opacity: [0, 1],
        easing: 'easeInOutSine',
        duration: 600,
      })

      offset.value = educationTimeline.duration

      observerElement.disconnect()
    }
  },
  {
    threshold: 0.3,
  },
)

useIntersectionObserver(
  volunteeringRef,
  ([entry], observerElement) => {
    if (entry?.isIntersecting) {
      const volunteeringContent = document.querySelector('.section-volunteering') as HTMLElement
      anime.animate(volunteeringContent.querySelector('.section-title') as HTMLElement, {
        opacity: [0, 1],
        easing: 'easeInOutSine',
        duration: 600,
      })

      const volunteeringEvents = volunteeringContent.querySelectorAll('.p-timeline-event')
      volunteeringEvents.forEach((event, index) => {
        const markerTimeline = anime.createTimeline()
        const contentTimeline = anime.createTimeline()
        const marker = event.querySelector('.p-timeline-event-marker') as HTMLElement
        markerTimeline.add(marker, {
          opacity: [0, 1],
          easing: 'easeInOutSine',
          duration: 500,
          delay: index * 300,
        })

        const separator = event.querySelector('.p-timeline-event-separator') as HTMLElement
        markerTimeline.add(separator, {
          ['max-height']: ['17px', '250px'],
          easing: 'easeInOutSine',
          duration: 2000,
          delay: index * 500,
        })

        contentTimeline.add(event.querySelector('.p-timeline-event-content') as HTMLElement, {
          opacity: [0, 1],
          easing: 'easeInOutSine',
          duration: 1000,
          delay: index * 800,
        })
        offset.value += 1000
      })

      observerElement.disconnect()
    }
  },
  {
    threshold: 0.3,
  },
)

const positions = ref([
  {
    company: 'Zumo Enterprise',
    position: 'Software Engineer',
    date: '2023 - Present',
    info: 'Designed and delivered product features and core services in <strong>Node.js</strong> and <strong>TypeScript</strong>. Promoted <strong>performance and scalability</strong> awareness through load testing and led the design & implementation of <strong>reusable GitHub Actions workflows</strong>, used by all product teams.',
  },
  {
    company: 'Aeternity',
    position: 'Full-Stack Engineer',
    date: '2022 - 2023',
    info: 'Co-designed & Co-implemented the <strong>TypeScript</strong> migration of the Aeternity Javascript SDK. Full-stack developer of <strong>web3</strong> applications.',
  },
  {
    company: 'PennyChain (prev. Savium)',
    position: 'Full-Stack Engineer',
    date: '2021 - 2022',
    info: 'Led the migration of backend services from JavaScript (Node.js) to <strong>Nest.js</strong> and <strong>TypeScript</strong>. Headed front-end development with <strong>React.js</strong> and <strong>TypeScript</strong>.',
  },
  {
    company: 'Greece & Upwork',
    position: 'Freelancer',
    date: '2019 - 2021',
    info: 'Pixel-perfect <strong>React.js</strong> applications and custom plugins & themes using <strong>Wordpress</strong>.',
  },
  {
    company: 'Bear in Mind',
    position: 'Junior Front-End Developer',
    date: '2019',
    info: 'My introduction to the production world of software development! Havoc wreaking <strong>React.js</strong>.',
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
    info: 'FOSDEM is the largest free and open-source software conference in Europe, where I have been volunteering there since 2018.',
  },
  {
    organization: 'IEEE IHU Thessaloniki Student Branch',
    date: '2018 - 2021',
    info: "I was a member of my university's IEEE student branch, where I participated in various events and activities promoting technology and engineering and served as a design and media committee.",
  },
  {
    organization: 'WordPress Greek Community',
    date: '2018 - 2020',
    info: 'Volunteering in local meetups and events.',
  },
]
</script>

<template>
  <h2 class="text-3xl text-center mb-15">Experience</h2>
  <div class="flex flex-col md:flex-row gap-7 md:gap-2 space-between">
    <div ref="workRef" class="mb-6 flex-1 section-content work-content">
      <h3 class="text-2xl mb-4 section-title">Work</h3>
      <Timeline :value="positions">
        <template #content="slotProps">
          <h4 class="text-md mb-2 company" style="line-height: 0.9">
            {{ slotProps.item.company }}
          </h4>
          <p class="text-sm font-bold position">{{ slotProps.item.position }}</p>
          <p class="text-xs mb-1 date">{{ slotProps.item.date }}</p>
          <p class="text-sm info" v-html="slotProps.item.info" />
        </template>
      </Timeline>
    </div>
    <div class="mb-6 p-2 flex-1 flex flex-col gap-20 md:gap-10 space-between place-content-between">
      <div ref="educationRef" class="section-education">
        <h3 class="text-2xl font-semibold mb-4 section-title">Education</h3>
        <div class="section-content">
          <p class="text-sm font-bold">{{ education.university }}</p>
          <p class="text-sm">{{ education.degree }}</p>
          <p class="text-xs">{{ education.date }}</p>
          <p class="text-xs font-bold">GPA: {{ education.gpa }}</p>
        </div>
      </div>
      <div ref="volunteeringRef" class="section-content section-volunteering">
        <h3 class="text-2xl mb-4 section-title">Volunteering</h3>
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

.p-timeline-event-content {
  padding-bottom: 20px !important;
}

.p-timeline-event-marker::before {
  background: var(--p-content-color) !important;
}

.p-timeline-event-marker {
  opacity: 0;
  border-color: var(--p-content-color) !important;
}

.p-timeline-event-separator {
  max-height: 17px;
}

.p-timeline-event-connector {
  background: var(--p-content-color) !important;
}

.p-timeline-event-content,
.section-education .section-content,
.section-title {
  opacity: 0;
}
</style>
