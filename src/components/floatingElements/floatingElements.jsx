import React from "react"
import "./element_animations.scss"

const FloatingElements = props =>
  props.hideElements ? (
    ""
  ) : (
    <div>
      {[...Array(props.num)].map((elem, index) => (
        <span
          key={index}
          className={`floatingElement ${
            props.class ? `floatingElement--${props.class}` : ""
          }`}
        ></span>
      ))}
    </div>
  )
export default FloatingElements
