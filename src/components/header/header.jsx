import React from "react"
import HeaderDesktop from "./Desktop/header"
import Sidebar from "./mobileNavMenu/sidebar"
import "./header.scss"
const Header = () => {
  const links = [{ title: "Portfolio", link: "/portfolio" }]

  return (
    <>
      <Sidebar links={links} />
      <HeaderDesktop links={links} />
    </>
  )
}

export default Header
