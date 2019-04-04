import React from 'react'; 
import { Navbar, Nav} from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom';
import './NavBar.css'
import { faRProject } from '@fortawesome/free-brands-svg-icons';
const NavBarDesktop=() =>{

    return (
         <Navbar id="solidNavbar" className="d-flex flex-row-reverse">
          <Nav>
            <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
            <Nav.Link> <NavLink to='/portal'>About</NavLink></Nav.Link>
            <Nav.Link> <NavLink to='/background'>Background</NavLink></Nav.Link>
      </Nav>
  </Navbar>
    );
 
}


export default NavBarDesktop