import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "../../themeToggler/themeToggler"
import Logo from "../../../content/svg/logo"
const HeaderDesktop = props => {
  return (
    <div className="header">
      <Link className="header__icon" to="/">
        <Logo />
      </Link>
      <div className="header__wrapper">
        <span className="header__icon">
          <ThemeToggler />
        </span>
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
