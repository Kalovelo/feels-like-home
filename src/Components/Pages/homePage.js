import React from 'react';
import { Component } from 'react';
import {Container,Row} from 'react-bootstrap'
import FirstSection from './First_Section';
import StatusSection from './StatusSection'
import Parallax from '../Images/Parallax'
const HomePage = () =>
{
    return(
        <Container fluid="true">
            <Row style={{overflow:"hidden"}}>
                <Parallax/>
                <FirstSection/>
                <StatusSection/>
            </Row>
        </Container>
    )
}

export default HomePage;