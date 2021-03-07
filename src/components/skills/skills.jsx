import React from "react"
import ReactTooltip from "react-tooltip"
import { skills } from "./data"
export default () => {
  return (
    <section>
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
                  className="background__skill background__svg"
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
