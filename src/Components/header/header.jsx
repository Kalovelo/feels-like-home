import React from "react"
import HeaderDesktop from "./Desktop/header"
import Sidebar from "./mobileNavMenu/sidebar"
import { withRouter } from "react-router-dom"
class Header extends React.Component {
  state = {
    nav: HeaderDesktop
  }

  links = [
    { title: "Home", link: "/" },
    { title: "Projects", link: "/Projects" },
    { title: "Background", link: "/background" },
    { title: "About", link: "/about" }
  ]

  componentDidMount = () => {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  resize = () => {
    let currentHideNav = window.innerWidth <= 760
    if (currentHideNav) {
      this.setState({ nav: Sidebar })
    } else this.setState({ nav: HeaderDesktop })
  }

  render() {
    return <this.state.nav isPortal={this.props.isPortal} links={this.links} />
  }
}

export default Header
