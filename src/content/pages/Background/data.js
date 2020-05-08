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
      // {
      //   tooltip: "TypeScript",
      //   component: <TypeScript />
      // },
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
  // {
  //   Title: "Testing",
  //   elements: [
  //     {
  //       tooltip: "Jest",
  //       component: <Jest />
  //     }
  //   ]
  // },
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
  attributes: ["Title", "Role"],
  content: [
    {
      data: [
        <a target="_blank" href="https://openscn.io">
          <OpenSCN class="background__svg" />
          OpenSCN
        </a>,
        "Dev"
      ]
    },
    {
      data: [
        <a target="_blank" href="https://www.facebook.com/ieee.ihuthess">
          <Ihu class="background__svg" />
          IEEE IHU SKG Student Branch
        </a>,
        "Member"
      ]
    },
    {
      data: [
        <a target="_blank" href="https://wpgreece.org/">
          <Wordpress class="background__svg" />
          WordPress Greek Community
        </a>,
        "Volunteer"
      ]
    },
    {
      data: [
        <a target="_blank" href="https://fosdem.org">
          <Fosdem class="background__svg" />
          Fosdem
        </a>,
        "Volunteer"
      ]
    }
  ]
}

export { skills, communityTable }
