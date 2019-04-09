import React from 'react';
import {Container,Row,Col,Nav,Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram,faLinkedinIn,faGithub } from '@fortawesome/free-brands-svg-icons';
import "./footer.css"
import { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Footer extends Component
{
    constructor() 
    {
        super();
        this.state = {finished: false};
        
    }

    finishedHover =() => 
      {
        this.setState(prevState => ({finished: !prevState.finished}));
      }

render(){
    return (
        <Container className="Footer" fluid="true" style={{backgroundImage: "linear-gradient(#232323, #0c0b0b)",color:"white",paddingTop:"2%"}}>
            <Row  >
                <Col md={{span:4,offset:4}}>
                    <h2 style={{fontSize:"40px",textAlign:"center"}} onMouseEnter={this.finishedHover} onMouseLeave={this.finishedHover}>{this.state.finished?<span class='fade-in'>but keep pushing forward.</span>:<span className='puff-in-center'>You made it to the end</span>}</h2>
                </Col>
            </Row>

            <Row >
                <Col xs={{span:12}}>
                  <ul style={{fontSize:"15px"}} className="footerMenu">
                      <li><Nav.Link> <NavLink to='/'>Home</NavLink></Nav.Link></li>
                      <li> <Nav.Link> <NavLink to='/Background'>Background</NavLink></Nav.Link></li>
                      <li> <Nav.Link> <NavLink to='/portal'>About</NavLink></Nav.Link></li>
                      <li> <Nav.Link> <NavLink to='/Background'>Contact</NavLink></Nav.Link></li>
                  </ul>
                </Col>
            </Row>

            <Row >
                <Col xs={{span:12}}>
                    <h1 style={{fontSize:"10px"}}>©2019 Apostolos Kalovelonis. All rights reserved.</h1>
                </Col>
            </Row>

            <Row >
                <Col xs={{span:12}}>
                    <ul className="footerSocial">
                        <li><a href="https://www.facebook.com/kalovelo"><FontAwesomeIcon icon={faFacebookF}/></a></li>
                        <li><a href="https://www.instagram.com/unscxrred/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="https://www.instagram.com/unscxrred/"><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li><a href="https://linkedin.com/in/apostolos-kalovelonis-0b886116a"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                    </ul>                
                </Col>
            </Row>

        </Container>
    )
}

 
}

export default Footer;