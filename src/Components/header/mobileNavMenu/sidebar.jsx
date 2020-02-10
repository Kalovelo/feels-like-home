import React, { Component } from 'react'; 
import { slide as Menu } from "react-burger-menu";
import './styles.css'
import {NavLink} from 'react-router-dom';
import logo from '../../Images/logo.jpg';

export default class Sidebar extends Component {

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }


  render()
  {
  return <div id="topbar">
      <Menu customBurgerIcon={ <img alt='' src={logo}/>} isOpen={ this.state.menuOpen }  onStateChange={(state) => this.handleStateChange(state)} width={ '100%' } className="mobile-hide">
        <div className='sideMenu'>
        {this.props.links.map(path => <li><NavLink onClick={()=>this.closeMenu()} to={path.link}>{path.title}</NavLink></li> )}
        </div>
      </Menu>
    </div>
  }
}