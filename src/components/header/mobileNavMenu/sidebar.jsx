import React, { Component } from "react"
import { slide as Menu } from "react-burger-menu"
import "./styles.css"
import { Link } from "gatsby"
import { ThemeToggler } from "../../themeToggler/themeToggler"

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
      <div id="topbar">
        <div className="topbar__icons-wrapper">
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={state => this.handleStateChange(state)}
            width="100%"
          >
            <div className="sideMenu">
              {this.props.links.map((path, index) => (
                <li key={index}>
                  <Link onClick={() => this.closeMenu()} to={path.link}>
                    {path.title}
                  </Link>
                </li>
              ))}
            </div>
          </Menu>
        </div>
        <div className="topbar__right-mode-toggle">
          <Menu disableOverlayClick customBurgerIcon={<ThemeToggler />} right></Menu>
        </div>
      </div>
    )
  }
}
