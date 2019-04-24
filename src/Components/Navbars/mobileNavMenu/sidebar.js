import React from 'react'; 
import { slide as Menu } from "react-burger-menu";
import './styles.css'

export default props => {
  return (
    <div id="topbar">
      <Menu {...props} className="mobile-hide">
      <ul>
      
             <li><a href='/'>Home</a></li>
             <li><a href='/about'>About</a></li>
             <li><a href='/background'>Background</a></li>
      </ul>
      </Menu>
    </div>
  );
};