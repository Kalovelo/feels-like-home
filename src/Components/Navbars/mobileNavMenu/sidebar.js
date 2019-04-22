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
      <ul>
      
             <li><NavLink to='/'>Home</NavLink></li>
             <li><NavLink to='/portal'>About</NavLink></li>
             <li><NavLink to='/background'>Background</NavLink></li>
      </ul>
      </Menu>
      <h1 id="topText"><b>フロー</b></h1>
    </div>
  );
};