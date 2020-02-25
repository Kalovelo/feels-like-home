import React from "react"
import { NavLink, withRouter } from "react-router-dom"

const HeaderDesktop = props => {
  return (
    <div className="header">
      <div className="header__wrapper">
        {props.links.map((path, index) => (
          <NavLink
            key={index}
            className={
              "header__item " +
              (props.location.pathname === "/portal" ? "header__item--light" : "")
            }
            to={path.link}
          >
            {path.title}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default withRouter(HeaderDesktop)
