import React from 'react'; 
import {NavLink,withRouter} from 'react-router-dom';
import './NavBar.css'


const HeaderDesktop = (props) => {
    return <div className="header">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/background'>Background</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>    
}


export default withRouter(HeaderDesktop)