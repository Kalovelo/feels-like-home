import React,{Component} from 'react'; 
import { Navbar, Nav} from 'react-bootstrap';
import {NavLink,withRouter} from 'react-router-dom';
import './NavBar.css'


class NavBarDesktop extends Component
{


  
render(){
  let navID = this.props.location.pathname === '/portal' ? 'transNavbar' : 'solidNavbar';
    return (
         <Navbar id={navID} className="d-flex flex-row-reverse">
          <Nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/background'>Background</NavLink>
            <NavLink to='/about'>About</NavLink>
        </Nav>
  </Navbar>
    );
}
}


export default withRouter(NavBarDesktop)