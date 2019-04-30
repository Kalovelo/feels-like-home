import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
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

    finishedHover = () => 
      {
        this.setState(prevState => ({finished: !prevState.finished}));
      }

     
      

render(){
    
    return (
        <Container className="Footer" fluid="true" style={{backgroundImage: "linear-gradient(#232323, #0c0b0b)",color:"white",paddingTop:"2%"}}>
            <Row  >
                <Col md={{span:4,offset:4}}>
                    <h2 style={{fontSize:"40px",textAlign:"center"}} onMouseEnter={this.finishedHover} onMouseLeave={this.finishedHover}>{this.state.finished?<span className='fade-in'>but keep pushing forward.</span>:<span className='puff-in-center'>You made it to the end</span>}</h2>
                </Col>
            </Row>

            <Row >
                <Col xs={{span:12}}>
                  <ul onClick={()=>{window.scrollTo(1,1);console.log('done');}} style={{fontSize:"15px"}} className="footerMenu">
                      <li><NavLink to='/'>Home</NavLink></li>
                      <li><NavLink to='/Background'>Background</NavLink></li>
                      <li><NavLink to='/about'>About</NavLink></li>
                      
                      
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
                        <li><a rel="noopener noreferrer" target="_blank"  href="https://www.facebook.com/kalovelo"><FontAwesomeIcon icon={faFacebookF}/></a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/unscxrred/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/unscxrred/"><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/apostolos-kalovelonis-0b886116a"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                    </ul>                
                </Col>
            </Row>

        </Container>
    )
}

 
}

export default Footer;