import React from 'react'; 
import { slide as Menu } from "react-burger-menu";
import './styles.css'
export default props => {
  return (
    // Pass on our props
    //customBurgerIcon={ <img alt='a black and white mountain sketch' src={favicon}/>}
    <div id="topbar">
      <Menu width={ '100%' }  {...props} className="mobile-hide"> 
      <ul>
      
             <li><a href='https://kalovelo.com'>Home</a></li>
             <li><a href='https://kalovelo.com/about'>About</a></li>
             <li><a href='https://kalovelo.com/background'>Background</a></li>
      </ul>
      
      </Menu>
      
    </div>
  );
};