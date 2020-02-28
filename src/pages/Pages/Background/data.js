import React from "react"
import { Wordpress, Ihu, Fosdem, OpenSCN } from "../../../content/svg/communities"
import {
  Python,
  Java,
  Javascript,
  ReactJS,
  Vue,
  Sass,
  MongoDB,
  PostgressDB,
  Jest,
  TypeScript,
  Figma,
  SocketIO,
  Git
} from "../../../content/svg/skills.jsx"

const skills = [
  {
    Title: "Languages",
    elements: [
      {
        tooltip: "JavaScript",
        component: <Javascript />
      },
      {
        tooltip: "TypeScript",
        component: <TypeScript />
      },
      {
        tooltip: "Java",
        component: <Java />
      },
      {
        tooltip: "Python",
        component: <Python />
      }
    ]
  },
  {
    Title: "Frameworks",
    elements: [
      {
        tooltip: "ReactJS",
        component: <ReactJS />
      },
      {
        tooltip: "VueJS",
        component: <Vue />
      },
      {
        tooltip: "Sass",
        component: <Sass />
      },
      {
        tooltip: "SocketIO",
        component: <SocketIO />
      }
    ]
  },
  {
    Title: "Databases",
    elements: [
      {
        tooltip: "MongoDB",
        component: <MongoDB />
      },
      {
        tooltip: "PostgresSQL",
        component: <PostgressDB />
      }
    ]
  },
  {
    Title: "Testing",
    elements: [
      {
        tooltip: "Jest",
        component: <Jest />
      }
    ]
  },
  {
    Title: "Technologies & Tools",
    elements: [
      {
        tooltip: "WordPress",
        component: <Wordpress />
      },
      {
        tooltip: "Figma",
        component: <Figma />
      },
      {
        tooltip: "Git",
        component: <Git />
      }
    ]
  }
]

const communityTable = {
  attributes: ["Title", "Role", "Link"],
  content: [
    {
      link: "https://openscn.gitlab.io/documentation/",
      data: [
        <span>
          <OpenSCN class="background__svg" />
          OpenSCN
        </span>,
        "Dev"
      ]
    },
    {
      link: "https://www.facebook.com/ieee.ihuthess",
      data: [
        <span>
          <Ihu class="background__svg" />
          IEEE IHU SKG Student Branch
        </span>,
        "Member"
      ]
    },
    {
      link: "https://wpgreece.org/",
      data: [
        <span>
          <Wordpress class="background__svg" />
          WordPress Greek Community
        </span>,
        "Volunteer"
      ]
    },
    {
      link: "https://fosdem.org",
      data: [
        <span>
          <Fosdem class="background__svg" />
          Fosdem
        </span>,
        "Volunteer"
      ]
    }
  ]
}

export { skills, communityTable }
