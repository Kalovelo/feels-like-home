import React from "react"
import HeaderDesktop from "./Desktop/header"
import Sidebar from "./mobileNavMenu/sidebar"

const links = [
  { title: "Home", link: "/" },
  { title: "Projects", link: "/projects" },
  { title: "Background", link: "/background" },
  { title: "About", link: "/about" }
]
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: HeaderDesktop
    }
  }

  componentDidMount() {
    if (window) window.addEventListener("resize", this.resize)
    this.resize()
  }
  componentWillUnmount() {
    if (window) window.removeEventListener("resize", this.resize)
  }

  resize = () => {
    let currentHideNav = window.innerWidth <= 760
    if (currentHideNav) {
      this.setState({ nav: Sidebar })
    } else this.setState({ nav: HeaderDesktop })
  }

  render() {
    return <this.state.nav isPortal={this.props.isPortal} links={links} />
  }
}

export default Header
