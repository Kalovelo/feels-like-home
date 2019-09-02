import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import "./footer.css"
import { Component } from 'react';
import { NavLink } from 'react-router-dom';



class Footer extends Component {
    constructor() {
        super();
        this.state = { finished: false };

    }

    finishedHover = () => {
        this.setState(prevState => ({ finished: !prevState.finished }));
    }




    render() {

        var menu = [
            {
                'link' : '/',
                'title' : 'Home'
            }
            ,
            {
                'link' : '/background',
                'title' : 'Background'
            },
            {
                'link' : '/about',
                'title' : 'About'
            },
            {
                'link' : '/thankYou',
                'title' : 'Thank you'
            }
        ]

        var social = [
            {
                'link' : 'https://www.facebook.com/kalovelo',
                'icon' : faFacebookF
            },
            {
                'link' : 'https://www.instagram.com/unscxrred/',
                'icon' : faInstagram
            },
            {
                'link' : 'mailto:apostoloskalovelonis@ieee.org',
                'icon' : faEnvelopeOpenText
            },
            {
                'link' : 'https://github.com/ApostolosKalovelo',
                'icon' : faGithub
            },
            {
                'link' : 'https://linkedin.com/in/apostolos-kalovelonis-0b886116a',
                'icon' : faLinkedinIn
            }
        ]
        return (
            <Container className="Footer" fluid="true" style={{ backgroundImage: "linear-gradient(#232323, #0c0b0b)", color: "white", paddingTop: "2%" }}>
                <Row  >
                    <Col md={{ span: 4, offset: 4 }}>
                        <h2 style={{ fontSize: "40px", textAlign: "center" }} onMouseEnter={this.finishedHover} onMouseLeave={this.finishedHover}>{this.state.finished ? <span className='fade-in'>but keep pushing forward.</span> : <span className='puff-in-center'>You made it to the end</span>}</h2>
                    </Col>
                </Row>

                <Row >
                    <Col xs={{ span: 12 }}>
                        <ul onClick={() => { window.scrollTo(1, 1); }} style={{ fontSize: "15px" }} className="footerMenu">
                            {menu.map((menuLink,i)=><li><NavLink to={menuLink.link}>{menuLink.title}</NavLink></li>)}
                        </ul>
                    </Col>
                </Row>

                <Row >
                    <Col xs={{ span: 12 }}>
                        <h1 style={{ fontSize: "10px" }}>©2019 Apostolos Kalovelonis, Black Lane. All rights reserved.</h1>
                    </Col>
                </Row>

                <Row >
                    <Col xs={{ span: 12 }}>
                        <ul className="footerSocial">
                            {social.map((smedia,i)=><li><a rel="noopener noreferrer" target="_blank" href={smedia.link}><FontAwesomeIcon icon={smedia.icon}/></a></li>)}
                        </ul>
                    </Col>
                </Row>

            </Container>
        )
    }


}

export default Footer;