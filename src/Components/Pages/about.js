import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './interests.css'
import "./footer.css"
import { Component } from 'react';
import IEEE from '../Images/IEEE.JPG'
import '../Images/lightbox.css'
import './about.css'
import ptexta2 from '../Images/ptexta2.jpg'
class About extends Component
{

    componentDidMount() {
        window.scrollTo(0, 0);
      }
    
    render(){
        return(
    <Container>
        <h1 id='pageTitle'>FOOD TO KEEP PASSION FLOWING</h1>
        <Row>
            <Col md={{span:10,offset:1}}> 
            <h1 id='aboutTitle'>KAIZEN</h1>
            </Col>
        </Row>
        <Row>
            <Col id='SportsBox' md={{span:6}}>
                <h1 className='boxTitle'>Sports</h1>
                <p>Spending an hour or two sweating is enough to lift a day's weight.(pun intended).
                Extra points having a session in a more natural environment than gym - seaside or inside a forest - 
                for working out both the body and spirit. What a combo!</p>
                <p>Talking about physical and spiritual improvement, i have zeal for the martial artist's lifestyle, where
                    courage, discipline & respect are the root elements of a fighter's spirit.
                    <i>The story begins with a young kid having extra fat and a hard-copy of Rocky. Passion forged from the italian stallion's story.</i>
                </p>
            </Col>
            <Col id='BooksBox' md={{span:6}}>
            <h1  className='boxTitle'>Books</h1>
            <p>You know what, I really can't understand why people hate taking notes or underlining on their books.
                Notes add story, to the story. Have you ever tried reading a borrowed book? The owner's notes guide you
                through the story,and they also help you keep concentrated on the important lines. <i><b>Win-Win Condition!</b></i>
            </p>
            <p>
                My cup of tea includes self-improvement, philosophy and classic literature books. By the way, the closer I to nature,
                the more i appreciate a good poem.
            </p>
            </Col>
        </Row>

        <Row>
            <img src={ptexta2}/>

        </Row>

        <Row>
            <Col id='SportsBox' md={{span:5,offset:1}}>
                <h1 className='boxTitle'>Sports</h1>
                <p>Spending an hour or two sweating is enough to lift a day's weight.(pun intended).
                Extra points having a session in a more natural environment than gym - seaside or inside a forest - 
                for working out both the body and spirit. What a combo!</p>
                <p>Talking about physical and spiritual improvement, i have zeal for the martial artist's lifestyle, where
                    courage, discipline & respect are the root elements of a fighter's spirit.
                    <i>The story begins with a young kid having extra fat and a hard-copy of Rocky. Passion forged from the italian stallion's story.</i>
                </p>
            </Col>
            <Col id='BooksBox' md={{span:5}}>
            <h1  className='boxTitle'>Books</h1>
            <p>You know what, I really can't understand why people hate taking notes or underlining on their books.
                Notes add story, to the story. Have you ever tried reading a borrowed book? The owner's notes guide you
                through the story,and they also help you keep concentrated on the important lines. <i><b>Win-Win Condition!</b></i>
            </p>
            <p>
                My cup of tea includes self-improvement, philosophy and classic literature books. By the way, the closer I to nature,
                the more i appreciate a good poem.
            </p>
            </Col>
        </Row>
            

            <span className='factsS'>Videogames </span>
            <span className='factsL'>Mountains </span> 
            <span className='factsS'>Joe Rogan </span>
            <span className='factsMD'>MMA </span>
            <span className='factsL'>Bukowski </span>
            <span className='factsS'>Dark Souls </span> 
            <span className='factsMD'>Black Coffee </span>
            <span className='factsS'>Heavy Metal </span> 
            <span className='factsL'>Woods </span>
            <span className='factsMD'>Camus </span>
            <span className='factsL'>Ocean </span>
            <span className='factsMD'>Dogs </span>
            <span className='factsS'>Breaking Bad </span> 
            <span className='factsL'>Kaizen </span>
            <span className='factsS'>Hip-Hop </span> 

            
  



    </Container>)



}
}

export default About;
