import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './interests.css'
import "./footer.css"
import { Component } from 'react';

import '../Images/lightbox.css'
import './about.css'
import ptexta2 from '../Images/ptexta2.jpg'
import ptextawhole from '../Images/ptextawhole.jpg'
import '../Images/lightbox.css'

import toles_illustrator from '../Images/toles_illustrator.jpg'
class About extends Component
{

    componentDidMount() {
        window.scrollTo(0, 0);
      }
    
    render(){
        return(
    <Container fluid="true">
        <h1 id='pageTitle'>FOOD TO KEEP PASSION FLOWING</h1>
        <Row>
            <Col md={{span:6,offset:1}}> 
            <h1 id='aboutTitle'>KAIZEN</h1>
            </Col>
        </Row>
        <Row>
            <Col id='SportsBox' md={{span:5,offset:1}}>
                <h1 className='boxTitle'>Athletics</h1>
                <p>Spending an hour or two sweating is enough to lift a day's weight.(pun intended).
                Extra points having a session in a more natural environment than gym - seaside or inside a forest - 
                for working out both the body and spirit. What a combo!</p>
                <p>Talking about physical and spiritual improvement, i have zeal for the martial artist's lifestyle, where
                    courage, discipline & respect are the root elements of a fighter's spirit.
                    <i>The story begins with a young kid having extra fat and a hard-copy of Rocky. Passion forged from the italian stallion's story.</i>
                </p>
            </Col>
            <Col id='BooksBox' md={{span:5}}>
            <h1  className='boxTitle'>Literature</h1>
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

        <Row id='secondRowAbout'>
            <Col md={{span:8,offset:2}}> 
                <Col id='videogamesBox' md={{span:12}}>
                <h1 className='boxTitle'>Entertainment</h1>
                <p>My music preference ranges from the heaviest metal riffs to the slowest, calming hip-hop beats. It always depends on the mood, 
                    the situtation - and of course - the company. <br/><i>By the way, the design of this website was influenced by Evidence's album, <a href='https://www.youtube.com/watch?v=APStAKRV8yE'>Weather or not.</a></i>
                </p>
                    <span className='gamesSpan'><i>and if we're talking about...</i></span>
                    <p>Videogames feel just like reading a good book but here you're in the protagonist's shoes.
                    I used to game on since i can remember, and in exchange i got some extra passion for challenges and exploration. Grew up
                        with Crash Bandicoot, fell in love with Dark Souls and lately I am on a hunt for unique & innovating indie games.
                    <br/>I also used to write some amateur reviews on Steam, and you can find them right <a href='https://steamcommunity.com/id/Unscxrred/recommended/'> here</a>, or you could simply
                        hit me up with a friend request! </p>
                        <span className='quote'>'Dont you dare go hollow.'</span>
              
                
                </Col>
                
                <a href="#ptexta">
                    <img alt='me and my friends posing in the woods.2 of us are standing and the other 2 are sitting on a rock.I am observing the sky.' src={ptexta2}/>
                </a>

                <a href="#_" class="lightbox" id="ptexta">
                    <img className='lightboxImg' alt='me and my friends posing in the woods.2 of us are standing and the other 2 are sitting on a rock.I am observing the sky.' src={ptextawhole}/>
                
                </a>
                <span id='lezanta'> Me and my friends, from left to right, Dimitris, Thanos, Agelos and me, in Xanthi.</span>

            </Col>
        </Row>

    

        <Row className='aboutRow'>
            <Col md={{span:2,offset:2}}>
            <img id='tolesIll' src={toles_illustrator}/> 
            </Col>

            <Col md={{span:5}}>
            <h1  className='boxTitle'>Conquer the Mountain</h1>
            <p></p>
            </Col>
        </Row>
            
{/* 
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
            <span className='factsS'>Hip-Hop </span>  */}

            
  



    </Container>)



}
}

export default About;
