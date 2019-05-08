import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import FirstSection from './First_Section';
import StatusSection from './StatusSection'
import { Component } from 'react';
import Parallax from '../../Images/Parallax'
import './homepage.css'
import {Helmet} from "react-helmet";

class HomePage extends Component
{

    
    componentDidMount() {
        document.title = 'Apostolos Kalovelones | Design & Development enthusiast';
        
      }
  
      
    render(){
        return(
            <Container fluid="true">
            <Row>
            <Col md={{span:5,offset:1}}>
                <h1 className='helloh1 slide-in-left'>Hello there.<br/><span id='teah1'>Grab a cup of tea and enjoy your stay.</span></h1>
            </Col>

            <Helmet>
                <meta name="description" content="Design & Development Enthusiast. Currently Working with WordPress and exploring technologies. Learn more about my background & hobbies."></meta>
                <meta itemprop="description" content="Design & Development Enthusiast. Currently Working with WordPress and exploring technologies. Learn more about my background & hobbies."/>
            </Helmet>
            
            <Col className='fade-in'  md={{span:5}}>
                <Parallax />
                <p className='lezanta' style={{textAlign:'right'}}>From my trip in Corfu.</p>
            </Col>
        </Row>
                <Row style={{overflow:"hidden"}}>
                   
                    <FirstSection />
                    <StatusSection test='helloo'/>
                </Row>
            </Container>
        );
    }
}

export default HomePage;