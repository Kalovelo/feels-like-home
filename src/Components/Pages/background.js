import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './background.css'
import "./footer.css"
import { Component } from 'react';
import IEEE from '../Images/IEEE.JPG'
import '../Images/lightbox.css'

class Background extends Component
{
    componentDidMount() {
        document.title = 'Earth Herself';
      }
      
render(){
    return (
        <Container fluid="true" id='interestsContainer'>
            <Col xs="12" md={{span:8,offset:2   }} className="fullH">
                <h1 className="interestsTitle">Background</h1>
                <p className='press'>I admire creations that try to show their flavour to the world, creations whose main goal is 
                    to have an impact by expressing their own philosophy, <b>their own story</b>. Thereby, I am leaning towards
                    Web & Game Development.</p>
                    <p>
                    I see the world of Design as complex yet based on simple principles
                    that guide you, but they don't cut down your own determination to apply your personal touches.
                    <br/>My experience involves <b>web design</b> with WordPress, 
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
                            <li>- JavaScript</li>
                            <li>- ReactJS</li>
                            <li>- WordPress</li>
                            <li>- Java</li>
                            <li>- UI/UX</li>
                            <li>- SEO</li>
                            <li>- Git</li>
                </ul>
                </Col>
            </Row>

            {/* <Row style={{backgroundColor:"#050505"}}>
                <Col xs="12" md={{span:8,offset:2   }} id="blackend">
                    <h1 className="interestsTitle B">Inkloom</h1>
                    <p className='press'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores, animi velit ipsa accusamus veniam beatae voluptas natus fugit dolorem? Cumque fugit quia porro quo obcaecati sunt quasi voluptatum dolores.
                    </p>
                </Col>
            </Row> */}

            <Row id="graySection"> 
                <Col lg={{span:6,offset:3}} xs='12'> 
                <a href="#arduinoDay">
                <img alt="a group of friends posing,smiling. There's a person with a t-shirt with 'Short is the new sexy' text on it." src={IEEE} className="IEEEthumbnail"/></a>
                            <a href="#_" className="lightbox" id="arduinoDay">
                            <img src={IEEE} alt="a group of friends posing, smiling. There's a person with a t-shirt with 'Short is the new sexy' text on it."/>
                        </a>
                        <h6 style={{textAlign:'center',paddingBottom:'10%'}}>Arduino Serres Day 2, photo taken by my good friend Stella.</h6>
                        </Col>
                <Col md={{span:4,offset:1}}>
                    <h1 className="interestsTitle bot">IEEE</h1>
                    <p className='press'>In 2018, i joined <a rel="noopener noreferrer" href='http://ieee.teithe.gr/' target="_blank">IEEEteithe Student Branch</a> to participate in IEEEX-TREME. Since then
                        i became a part of a bigger team, where we create projects, organize events, meet new people.
                        As for myself, i am the primary phtographer and the representitive of the branch's media group. I also 
                        design thumbnails for our youtube videos.
                        <br/>
                        <br/>
                        Photos taken from <a href='https://arduinodayserres.gr/tag/arduino-serres/' rel="noopener noreferrer" target="_blank">arduino day Serres 2.0</a>, posted on Greece's public broadcaster's website, <a href='http://www.ert.gr/perifereiakoi-stathmoi/seres/serres-clean-serreskai-arduino-day-2019/'>ERT.</a>
                        </p>
                </Col>
       
                <Col md={{span:4,offset:2}} xs={12}>
                    <h1 className="interestsTitle bot" >Volunteering</h1>
                    <p>Apart from being an IEEE member, i have also taken volunteering actions in conferences. 
                    </p>
                    <ul className='volunteeringLi'>
                        <li>
                            <h6><a rel="noopener noreferrer" href='http://www.5gsummit.org/Thessaloniki/' target="_blank">-IEEE 5G and IoT Thessaloniki Summit 2018</a> | Technical Support</h6>
                        </li>
                        <li>
                            <h6><a href='https://fosdem.org/2019/' rel="noopener noreferrer" target="_blank">-FOSDEM 2019</a> | Info Desk</h6>
                        </li>
                    </ul>
                </Col>
                <Col>
                <h1 className="interestsContact">Contact me at<br/>apostoloskalovelonis@ieee.org</h1>
                </Col>
            </Row>
        </Container>
    )
}

}

export default Background;