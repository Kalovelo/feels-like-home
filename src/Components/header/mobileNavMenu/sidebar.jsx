import React, { Component } from "react"
import { slide as Menu } from "react-burger-menu"
import "./styles.css"
import logo from "../../Images/logo.jpg"
import { Link } from "gatsby"

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
        <Menu
          customBurgerIcon={<img alt="" src={logo} />}
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          width={"100%"}
        >
          <div className="sideMenu">
            {this.props.links.map((path, index) => (
              <li>
                <Link key={index} onClick={() => this.closeMenu()} to={path.link}>
                  {path.title}
                </Link>
              </li>
            ))}
          </div>
        </Menu>
      </div>
    )
  }
}
