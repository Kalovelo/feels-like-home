import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap'
import './portal.css'
import { Component } from 'react';

class Portal extends Component
{

    constructor() 
    {
        super();
        
    }

    
render(){

    return(
        <Container id='portal'  fluid='true'>
            <Row>
                <Col id='lightSection' md='6'>
                <h1>About</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corporis dolor accusantium beatae, possimus dignissimos vel tempora in molestiae explicabo sed corrupti vero amet recusandae. Ratione et cupiditate molestias ullam.</p>
                </Col>
                <Col id='darkSection' md='6'>
                <h1>Background</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corporis dolor accusantium beatae, possimus dignissimos vel tempora in molestiae explicabo sed corrupti vero amet recusandae. Ratione et cupiditate molestias ullam.</p>
                
                </Col>
            </Row>

        </Container>
    );
}

}

export default Portal;