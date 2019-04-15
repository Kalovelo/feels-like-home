import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap'
import './portal.css'
import { Component } from 'react';
import {NavLink} from 'react-router-dom';
import ReactDom from 'react-dom'
class Portal extends Component
{

    componentDidMount() {
        window.scrollTo(1,1);
      }
    
render(){

    return(
        <Container id='portal' className='fade-in' fluid='true'>
            <Row>
                <Col id='lightSection' md='6'>
                <h1>About</h1>
                <p> Get to know me as a person ·<br/>
                Random facts, how i spend my free time or which hot liquid i prefer inside my cup. </p>
                <Button className="lightButton fade-in"   variant="outline-light">Ocean route ·</Button>

                </Col>
                <Col id='darkSection' md='6'>
                <h1>Background</h1>
                <p>Check my journey as a digital deshi ·<br/>My background, how it all started, the tools I use or my future plans.</p>
                <Button className="darkButton"   variant="outline-light"><NavLink to='/Background'>· Earth route</NavLink></Button>
                </Col>
            </Row>

        </Container>
    );
}

}

export default Portal;