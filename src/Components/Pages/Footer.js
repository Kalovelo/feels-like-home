import React from 'react';
import {Container,Row,Col,Nav,Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./home.css"
import "./footer.css"

const Footer = () => {
    return (
        <Container className="Footer" fluid="true" style={{backgroundColor:"black",color:"white",paddingTop:"2%"}}>
            <Row  >
                <Col xs={{span:12}}>
                    <h2 style={{fontSize:"40px",textAlign:"center"}}>You made it to the end.</h2>
                </Col>
            </Row>

            <Row >
                <Col xs={{span:12}}>
                  <ul style={{fontSize:"15px"}} className="footerMenu">
                      <li><a href="dsfdsf">ABOUT</a></li>
                      <li><a href="dsfdsf">PORTFOLIO</a></li>
                      <li><a href="dsfdsf">CONTACT</a></li>
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
                        <li className="firstLi"><a href="dsfdsf"><FontAwesomeIcon icon={faFacebookF}/></a></li>
                        <li><a href="dsfdsf"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li className="lastLi"><a href="dsfdsf"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                    </ul>                
                </Col>
            </Row>

        </Container>
    )
}

export default Footer;