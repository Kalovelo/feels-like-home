import React from "react"
import ReactTooltip from "react-tooltip"
import { skills } from "./data"
export default () => {
  return (
    <section>
      <h2 className="portfolio__subtitle">Working & Forging on</h2>
      <div className="portfolio__skills">
        {skills.map((skillContainer, index) => (
          <div key={index} className="portfolio__skill-wrapper">
            <h5 className="portfolio__skill-title">{skillContainer.Title}</h5>
            <div className="portfolio__skill-container">
              {skillContainer.elements.map((skill, index) => (
                <div
                  data-tip={skill.tooltip}
                  key={index}
                  className="portfolio__skill portfolio__svg"
                >
                  {skill.component}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ReactTooltip effect="solid" place="bottom" />
    </section>
  )
}
