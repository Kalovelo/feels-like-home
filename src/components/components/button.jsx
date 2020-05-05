import React from "react"
import { Link } from "gatsby"

export const Button = props => {
  return (
    <Link to={props.link}>
      <span className={"button " + props.class}>{props.text}</span>
    </Link>
  )
}
