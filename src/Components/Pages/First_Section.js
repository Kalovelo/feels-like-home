import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import apostoles1 from '../Images/apostoles1.png'
import apostoles2 from '../Images/apostoles2.jpg'
import '../Images/lightbox.css'
import "./First_Section.css"
const FirstSection = () => {

    return (
         <Container  fluid="true" id="homeMob" style={{marginTop:"13%"}}> 
                <Row className="halfRow">
                    <Col lg={{span:6}} xl={{span:6}}  className="topHalf"  xs="12 content">
                        <h3>Greetings, stranger!</h3>
                        <p><br/>My name is Apostolos Kalovelonis, coming straight out of the olives and oregano country, Greece.
                            Currently studying IT and working with WordPress. You can find me at local meetups about marketing or development, reading peacefully a book on public transport, or
                            jogging by the sea.
                        </p>
                        <p><br/>
                            I am keen on marketing, design and coding. Combining all three, along with a tube full of love for story-driven videogames, i aspire to be a part of a game development team.
                        </p>
                    </Col>

                    <Col md ={{span:5, offset:1}} xl={{span:5,offset:1}}  xs="12 content" id="topImgs">
                            <a href="#img1"><img  alt="sds" src={apostoles1} className="frstImage thumbnail"/></a>
                            <a href="#_" class="lightbox" id="img1">
                            <img src={apostoles1}/>
                            </a>
                        <a href="#img2"><img className="hideMob" alt="sasdsa" src={apostoles2} /></a>
                        <a href="#_" class="lightbox" id="img2">
                            <img src={apostoles2}/>
                        </a>
                </Col>
            </Row>
            {/* <Row className="rowPost">
                <ParallaxImage />
            </Row> */}
           </Container>
    )
}

export default FirstSection;
