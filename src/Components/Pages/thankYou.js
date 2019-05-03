import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap'
import './thankyou.css'
import { Component } from 'react';
import {NavLink} from 'react-router-dom';

class ThankYou extends Component
{

    componentDidMount() {
        window.scrollTo(1,1);
        document.title = 'Thank you!';
      }

    
render(){

    return(
        <Container className='fade-in' fluid='true'>
            <Row>
                <Col id='thankYouCol' xs='12'><h1 id='thankYou'>Thank You</h1></Col>
                    <Col id='thankYouNames' xs='12' md={{span:'10',offset:'1'}}>
                    
                    <h3 className='thankYouLeft'>My innovative friend <a rel="noopener noreferrer" target="_blank" href='https://www.instagram.com/thanostryfonidis/'>Thanos</a>, for his illustration of mine</h3>
                    <h3 className='thankYouRight'>My colleague buddy <a rel="noopener noreferrer" target="_blank" href='http://www.martinkaintas.com/'>Martin</a>, for his feedback and tips</h3>
                    <h3 className='thankYouLeft'>My 'IEEEdiots' teammates & brothers, <a rel="noopener noreferrer" target="_blank" href='https://gitlab.com/joj0s'>Jojos</a> & <a rel="noopener noreferrer" target="_blank" href='https://github.com/Giapa'>Giapa</a>,  for their feedback and Security tests</h3>
                    <h3 className='thankYouRight'>My friend & advisor <a rel="noopener noreferrer" target="_blank" href='https://github.com/differentreality'>Stella</a>, for her support and creative ideas</h3>
                    <h3 className='thankYouLeft'>Master <a rel="noopener noreferrer" target="_blank" href='https://github.com/dpliakos'>Pliakos</a>, for his guidance on ReactJS</h3>
                    <h3 className='thankYouRight'><a rel="noopener noreferrer" target="_blank" href='https://github.com/negomi'>Negomi</a>, for her burger menu</h3>
                    <h3 className='thankYouLeft'><a rel="noopener noreferrer" target="_blank" href='https://alligator.io/author/joshua-bemenderfer'>Joshua Bemenderfer</a>, for his parallax effect</h3>
                    <h3 className='thankYouRight'><a rel="noopener noreferrer" target="_blank" href='https://freepik.com'>Freepik</a>, for their mountain illustration</h3>

                    <h3 id='ofCourse'>and of course,</h3>
                    <h1 id='youHere'>You, for being here.</h1>
                    </Col>
                
            </Row>

        </Container>
    );
}

}

export default ThankYou;