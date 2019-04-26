import React, { Component } from 'react';
import './cookiefier.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Cookiefier extends Component
{

    constructor() 
    {
        super();
        this.state = {shown: true};
    }

    pressedClose = () => 
      {
        this.setState(prevState => ({shown: !prevState.shown}));
      }

    render()
    {
        return(
            
            <Col>{this.state.shown ?<Col id='cookiefier' xs='10' md='8' lg='2' >
            <FontAwesomeIcon id='cookieButton' onClick={this.pressedClose} icon={faTimes}/>
            <h2>Tea is served with cookies!</h2>
            <p>In order to keep a functionality and fondness score, I am using Google Analytics to track visitor navigation, so later I can upgrade your visiting experience. </p></Col> :<div></div> }
            </Col>
        )
    }
}

export default Cookiefier;