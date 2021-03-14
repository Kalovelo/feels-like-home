import React, { Component } from "react"
import { slide as Menu } from "react-burger-menu"
import "./sidebar.scss"
import { Link } from "gatsby"
import { ThemeToggler } from "../../themeToggler/themeToggler"
import Logo from "../../../content/svg/logo"

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {
    return (
      <div className="sidebar">
        <nav className="topbar">
          <div className="topbar__icons-wrapper">
            <Menu
              isOpen={this.state.menuOpen}
              onStateChange={state => this.handleStateChange(state)}
              width="100%"
            >
              <div className="sideMenu">
                <li>
                  <Link to="/">
                    <Logo />
                  </Link>
                </li>
                {this.props.links.map((path, index) => (
                  <li key={index}>
                    <Link to={path.link}>{path.title}</Link>
                  </li>
                ))}
              </div>
            </Menu>
            <ThemeToggler />
          </div>
        </nav>
      </div>
    )
  }
}
