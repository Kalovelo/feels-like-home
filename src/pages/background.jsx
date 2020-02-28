import React, { useEffect } from "react"
import FloatingElements from "../Components/components/floatingElements"
import ReactTooltip from "react-tooltip"
import ScrollAnimation from "react-animate-on-scroll"
import { useSelector } from "react-redux"

import { communityTable, skills } from "./Pages/Background/data"
import { tableAnimation, skillsAnimation } from "./Pages/Background/animations"
import { Layout } from "../Components/layout"
const Background = () => {
  const theme = useSelector(state => state.theme)

  useEffect(() => {
    document.title = "Earth Herself"
    skillsAnimation()
  }, [])

  return (
    <Layout>
      <div className="background layout fade-in">
        <FloatingElements num={3} />
        <h1 className="background__content">
          Code like interfaces, <span className="layout__bold">clean</span> and{" "}
          <span className="layout__bold">
            <span className="background__word-bundle">
              meaningful
              <span className="background__title">a continuous goal</span>
            </span>
          </span>
        </h1>

        <h2 className="background__subtitle">Working & Forging on</h2>
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
          afterAnimatedIn={visible => tableAnimation(visible, theme)}
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
                      rel="noopener noreferrer"
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
    </Layout>
  )
}

export default Background
