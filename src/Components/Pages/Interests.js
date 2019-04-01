import React from 'react';
import {Container,Row,Col,Nav,Navbar} from 'react-bootstrap';
import './interests.css'
import "./footer.css"
import { Component } from 'react';
import IEEE from '../Images/IEEE.JPG'
import '../Images/lightbox.css'
class Interests extends Component
{
    constructor() 
    {
        super();
        
    }

    
render(){
    return (
        <Container fluid="true" id='interestsContainer'>
            <Col xs="12" md={{span:8,offset:2   }} className="fullH">
                <h1 className="interestsTitle">Background</h1>
                <p>I admire creations which try to show their flavour to the world, creations whose main goal is 
                    to have an impact by expressing their own philosophy, their own story. Thereby, I am leaning towards
                    Web & Game Development.</p>
                    <p>
                    I see the world of Design as complex yet based on simple principles
                    that guide you, but they don't cut down your own determination to apply your personal touches.
                    <br/>My experience involves web design with WordPress, 
                    creating video thumbnails for our IEEE Student Branch and a few logos.
                    I have also worked in moving and cafe services.
                </p> 
            </Col>

            <Row id="TechnologiesRow">
                <Col md={{span:3,offset:4}}>
                    <h5>Working & Forging on</h5>
                    <hr align='left' size='50'/>
                </Col>
                <Col md={{span:3,offset:0}}>
                
                <ul>
                            <li>- HTML</li>
                            <li>- CSS</li>
                            <li>- UI/UX</li>
                            <li>- JavaScript</li>
                            <li>- ReactJS</li>
                            <li>- WordPress</li>
                            <li>- Java</li>
                            <li>- C</li>
                            <li>- Git</li>
                            <li>- SEO</li>
                </ul>
                </Col>
            </Row>

            <Row style={{backgroundColor:"#050505"}}>
                <Col xs="12" md={{span:8,offset:2   }} id="blackend">
                    <h1 className="interestsTitle B">Inkloom</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores, animi velit ipsa accusamus veniam beatae voluptas natus fugit dolorem? Cumque fugit quia porro quo obcaecati sunt quasi voluptatum dolores.
                    </p>
                </Col>
            </Row>

            <Row id="graySection"> 
                <Col lg={{span:6,offset:3}} xs='12'> 
                <a href="#arduinoDay"><img  alt="sds" src={IEEE} className="IEEEthumbnail"/></a>
                            <a href="graySection" class="lightbox" id="arduinoDay">
                            <img src={IEEE}/>
                        </a>
                        <h6 style={{textAlign:'center',paddingBottom:'10%'}}>Arduino Serres Day 2, photo taken by my good friend Stella.</h6>
                        </Col>
                <Col md={{span:4,offset:1}}>
                    <h1 className="interestsTitle">IEEE</h1>
                    <p>In 2018, i joined <a href='http://ieee.teithe.gr/'>IEEEteithe Student Branch</a> to participate in IEEEX-TREME. Since then
                        i became a part of a bigger team, where we create projects, organize events, meet new people.
                        As for myself, i am the primary phtographer and the representitive of the branch's media group. I also 
                        design thumbnails for our youtube videos.
                        <br/>
                        <br/>
                        Photos taken from <a href='https://arduinodayserres.gr/tag/arduino-serres/'>arduino day Serres 2.0</a>, posted on Greece's public broadcaster's website, <a href='http://www.ert.gr/perifereiakoi-stathmoi/seres/serres-clean-serreskai-arduino-day-2019/'>ERT.</a>
                        </p>
                </Col>
       
                <Col md={{span:4,offset:2}}>
                    <h1 className="interestsTitle" >Volunteering</h1>
                    <p>Apart from being an IEEE member, i have also taken volunteering actions in conferences. 
                    </p>
                    <ul>
                        <li>
                            <h6><a href='http://www.5gsummit.org/Thessaloniki/'>IEEE 5G and IoT Thessaloniki Summit 2018</a> - Technical Support</h6>
                        </li>
                        <li>
                            <h6><a href='https://fosdem.org/2019/'>FOSDEM 2019</a> - Info Desk</h6>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

}

export default Interests;