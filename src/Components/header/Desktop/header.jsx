import React from "react"
import { Link } from "gatsby"
const HeaderDesktop = props => {
  return (
    <div className="header">
      <div className="header__wrapper">
        {props.links.map((path, index) => (
          <Link
            key={index}
            className={
              "header__item " + (props.isPortal ? "header__item--light" : "")
            }
            to={path.link}
          >
            {path.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HeaderDesktop
