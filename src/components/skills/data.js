import React from "react"
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
  Git,
  GraphQL,
  Wordpress
} from "../../content/svg/skills.jsx"

export const skills = [
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
        tooltip: "graphQL",
        component: <GraphQL />
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
