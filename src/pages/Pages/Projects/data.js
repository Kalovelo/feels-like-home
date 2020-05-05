import React from "react"
import { Biznames, Stella, Cah, Idea } from "../../../content/svg/projects"

export const projects = [
  {
    title: "Cards Against Humanity",
    description:
      "A University project based on the ice-breaker board game made by my colleagues Joj0s, Giapa and me. Stay tuned for its up and running online deployment.",
    tags: ["VueJS", "SocketIO", "Flask"],
    links: [
      {
        url: "https://github.com/iee-ihu-gr-course1941/ADISE19_ieeediots",
        text: "Github"
      }
    ],
    logo: <Cah />
  },
  {
    title: "Biznames",
    description:
      "A really simple username dictionary generator given a name for enumeration & pentesting.",
    tags: ["python", "enumeration", "pentest"],
    links: [
      {
        url: "https://github.com/Kalovelo/biznames",
        text: "Github"
      }
    ],
    logo: <Biznames />
  },
  {
    title: "A colourful presentation",
    description:
      "A personal website for a good friend of mine focusing on open source events.",
    tags: ["ReactJS", "animations", "open source", "events"],
    links: [
      {
        url: "https://github.com/Kalovelo/a-colourful-presentation",
        text: "Github"
      },
      {
        url: "https://events.stellarouzi.com/",
        text: "Online"
      }
    ],
    logo: <Stella />
  },
  {
    title: "Your own idea!",
    description: "Having and idea in mind? Shall we grab a beer and discuss it?",
    tags: ["or", "maybe", "coffee?"],
    links: [
      {
        url: "mailto:hello@kalovelo.com",
        text: "Contact"
      }
    ],
    logo: <Idea />
  }
]
