import React from 'react'; 
import { slide as Menu } from "react-burger-menu";
import './styles.css'
import {  Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default props => {
  return (
    // Pass on our props
    <div id="topbar">
      <Menu {...props} className="mobile-hide">
      <Nav>
            <Nav.Link> <NavLink to='/'>Home</NavLink></Nav.Link>
            <Nav.Link> <NavLink to='/portal'>About</NavLink></Nav.Link>
            <Nav.Link> <NavLink to='/background'>Background</NavLink></Nav.Link>
      </Nav>
      </Menu>
      <h1 id="topText"><b>フロー</b></h1>
    </div>
  );
};