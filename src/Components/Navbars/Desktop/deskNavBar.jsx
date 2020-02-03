import React from 'react'; 
import {NavLink,withRouter} from 'react-router-dom';
import './NavBar.css'


const NavBarDesktop = (props) => {
  let navID = props.location.pathname === '/portal' ? 'transNavbar' : 'solidNavbar';
    return <div className="header">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/background'>Background</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>    
}


export default withRouter(NavBarDesktop)