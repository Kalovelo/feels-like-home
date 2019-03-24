import React from 'react'; 
import { Navbar, Nav} from 'react-bootstrap';
import './NavBar.css'
const NavBarDesktop=() =>{

    return (
         <Navbar id="apostolesNavbar" className="d-flex flex-row-reverse">
          <Nav>
            <Nav.Link >Projects</Nav.Link>
            <Nav.Link >Hello</Nav.Link>
            <Nav.Link >Hello</Nav.Link>

      </Nav>
  </Navbar>
    );
 
}


export default NavBarDesktop