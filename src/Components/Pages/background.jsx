import "./background.css"
import React, { useEffect } from "react"
import "../Images/lightbox.css"
import { Wordpress, Ihu, Fosdem, OpenSCN } from "../../content/communities.jsx"
import anime from "animejs/lib/anime.es.js"
import FloatingElements from "../components/floatingElements"
import ReactTooltip from "react-tooltip"
import ScrollAnimation from "react-animate-on-scroll"
import { useSelector } from "react-redux"
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
} from "../../content/skills.jsx"

const Background = () => {
  const theme = useSelector(state => state.theme)

  useEffect(() => {
    document.title = "Earth Herself"
    skillsAnimation()
  }, [])

  const tableAnimation = visible =>
    visible
      ? anime({
          targets: ".background__community-row",
          borderColor: theme === "light" ? "#000" : "#fff",
          easing: "linear",
          duration: 300,
          complete: () => {
            anime({
              targets: ".background__community-item",
              opacity: 1,
              easing: "linear",
              duration: 1000
            })
          }
        })
      : ""

  const skillsAnimation = () =>
    anime({
      targets: ".background__skill",
      opacity: [0, 1],
      scale: [0.8, 1],
      delay: (el, i) => 150 * (i + 1),
      duration: 1000,
      easing: "linear"
    })

  let skills = [
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

  let communityTable = {
    attributes: ["Title", "Role"],
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

  return (
    <div className="background layout fade-in">
      <FloatingElements num={3} />
      <h1 className="background__title">Background</h1>
      <p className="layout__container-content background__content">
        I admire creations that try to show their flavour to the world, creations
        whose main goal is to have an impact by expressing their own philosophy,{" "}
        <b>their own story.</b>
        <br />
        My experience involves working as a WordPress freelancer and in-house Front /
        React Developer.
      </p>

      <h2 className="background__subtitle">Skills</h2>
      <div className="background__skills">
        {skills.map((skillContainer, index) => (
          <div key={index} className="background__skill-wrapper">
            <h5 className="background__skill-title">{skillContainer.Title}</h5>
            <div className="background__skill-container">
              {skillContainer.elements.map((skill, index) => (
                <div
                  data-tip={skill.tooltip}
                  key={index}
                  style={{ opacity: 0 }}
                  className="background__skill background__svg float-infinite"
                >
                  {skill.component}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="background__subtitle">Communities</h2>
      <ScrollAnimation
        animateOnce
        animateIn="fadeIn"
        afterAnimatedIn={tableAnimation}
      >
        <table className="background__communities">
          <thead>
            <tr className="background__community-row">
              {communityTable.attributes.map((attribute, index) => (
                <th
                  style={{ opacity: 0 }} //default vaules for animation
                  className="background__community-item background__community-item--head"
                  key={index}
                >
                  {attribute}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {communityTable.content.map((element, index) => (
              <tr
                key={index}
                className="background__community-row background__community-row--content"
              >
                {element.data.map((dataItem, index) => (
                  <td
                    style={{ opacity: 0 }}
                    className="background__community-item"
                    key={index}
                  >
                    {dataItem}
                  </td>
                ))}
                <td>
                  <a
                    className="background__community-item background__community-item--cta"
                    href={element.link}
                    target="_blank"
                  >
                    Go!
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollAnimation>

      <ReactTooltip effect="solid" place="bottom" />
    </div>
  )
}

export default Background
