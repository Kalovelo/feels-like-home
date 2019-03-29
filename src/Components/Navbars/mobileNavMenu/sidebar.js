import React from 'react'; 
import { slide as Menu } from "react-burger-menu";
import './styles.css'

export default props => {
  return (
    // Pass on our props
    <div id="topbar">
      <Menu {...props} className="mobile-hide">
        <a className="menu-item" href="/">
          HOME
        </a>
        <a className="menu-item" href="/burgers">
          ABOUT
        </a>

        <a className="menu-item" href="/pizzas">
          BACKGROUND
        </a>
      </Menu>
      <h1 id="topText"><b>フロー</b></h1>
    </div>
  );
};