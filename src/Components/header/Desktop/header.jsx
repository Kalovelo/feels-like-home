import React from 'react'; 
import {NavLink,withRouter} from 'react-router-dom';
import './NavBar.css'


const HeaderDesktop = (props) => {
    return <div className="header">
            {props.links.map(path => <NavLink className={'header__item '+(props.location.pathname=="/portal"?'header__item--light':'')} to={path.link}>{path.title}</NavLink> )}
        </div>    
}


export default withRouter(HeaderDesktop)