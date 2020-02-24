import React from "react"
import { withRouter } from "react-router-dom"
const FloatingElements = props =>
  props.location.pathname !== "/portal" ? (
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
  ) : (
    ""
  )
export default withRouter(FloatingElements)
