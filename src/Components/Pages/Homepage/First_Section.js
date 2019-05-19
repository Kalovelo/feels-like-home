import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap'
import apostoles1 from '../../Images/apostoles1.png'
import apostoles2 from '../../Images/apostoles2.jpg'
import '../../Images/lightbox.css'
import "./First_Section.css"
import {NavLink} from 'react-router-dom';
const FirstSection = () => {

    return (
         <Container  fluid="true" id="homeMob" style={{marginTop:"13%"}}> 
         
                <Row className="halfRow">
                    <Col xl={{span:5,offset:1}}  className="topHalf "  xs="12 content">
                        <h2>Greetings, stranger!</h2>
                        <p>My name is Apostolos Kalovelonis, coming straight out of the olives and oregano country, <b>Greece</b>.
                            Currently studying IT and developing websites with WordPress. You can find me at <b>local meetups</b> about marketing or development, reading peacefully a book on public transport, or
                            jogging by the sea.
                        </p>
                        <p><br/><br/>
                            I am keen on <b>marketing, design and coding</b>. Combining all three, along with a tube full of love for story-driven videogames, I aspire to be a web developer by day, and part of a game development team by night.
                        </p>
                        <NavLink to='/portal'><Button id='firstButton'  variant="outline-light">Take a walk?</Button> </NavLink>

                    </Col>

                    <Col md ={{span:5, offset:1}} xl={{span:5,offset:1}}  xs="12 content" id="topImgs">
                            <a href="#img1"><img  alt="myself in side view, pointing at something, low angle" src={apostoles1} className="frstImage thumbnail"/></a>
                            <a href="#_" className="lightbox" id="img1">
                            <img src={apostoles1} alt='myself in side view, pointing at something, low angle'/>
                            </a>
                        <a href="#img2"><img className="secondImage" alt="myself laying on the ground while laughing with eyes closed and my hand on chest" src={apostoles2} /></a>
                        <a href="#_" className="lightbox"  id="img2">
                            <img alt='myself laying on the ground while laughing with eyes closed and my hand on chest' src={apostoles2}/>
                        </a>
                        
                </Col>
            </Row>
           </Container>
    )
}

export default FirstSection;
