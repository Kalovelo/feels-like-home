import React from "react";
import HeaderDesktop from "./Desktop/header";
import Sidebar from "./mobileNavMenu/sidebar";

class Header extends React.Component {
  state = {
    nav: HeaderDesktop
  };

  links = [{ title: "About", link: "/about" },{ title: "Background", link: "/background" },{ title: "Home", link: "/" },];

  componentDidMount = () => {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  };

  resize = () => {
    let currentHideNav = window.innerWidth <= 760;
    if (currentHideNav) {
      this.setState({ nav: Sidebar });
    } else this.setState({ nav: HeaderDesktop });
  };

  render() {
    return <this.state.nav links={this.links}/>;
  }
}

export default Header;
