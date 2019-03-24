import React from 'react'; 
import { slide as Menu } from "react-burger-menu";
import './styles.css'

export default props => {
  return (
    // Pass on our props
    <div id="topbar">
      <Menu {...props} className="mobile-hide">
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/burgers">
          Projects
        </a>

        <a className="menu-item" href="/pizzas">
          Hello
        </a>
      </Menu>
      <h1 id="topText">tessdfdsfdt</h1>
    </div>
  );
};