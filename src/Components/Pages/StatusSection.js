import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap'
import './StatusSection.css'
import { Component } from 'react';

class StatusSection extends Component
{
    constructor() {
        super();
        this.state = {buttonisHovered: false,colisHovered:false};
        this.buttontoggleHover = this.buttontoggleHover.bind(this);
          }

      buttontoggleHover() 
      {
        this.setState(prevState => ({buttonisHovered: !prevState.buttonisHovered}));
      }


       render(){
            return(
                <Container fluid="true">
                    <Row style={{textAlign:"center"}}>
                        <Col lg={{span:8}} xs="12">INSERT ANIMATION HERE</Col>

                        <Col className="status" id="statusCol" lg={{span:3}}xs="12">
                            <h3 style={{fontWeight:"400" ,fontSize:"26px",marginTop:"10%"}}>// Current Status //<br/><br/></h3>
                            <h4 style={{fontSize:"22px"}}>
                                <b>IT Student·</b> Ateith
                                <br/>
                                <i>AKA the daily apple.</i>
                                <br/><br/>
                                <b>WordPress Knight·</b> [Insert Brand]
                                <br/>
                                <i>The 'W' stands for 'WOW!'</i>
                                <br/><br/>
                                <b>IEEE Media Committee·</b> Ateith SB
                                <br/>
                                <i>Primarily Photography Shooting.</i>
                                <br/><br/>
                                <b>Writing Enthusiast·</b> Books & Poetry. 
                                <br/>
                                <i>Daydreaming on Bukowski's drunk stories.</i>
                                <br/>
                                <Button className="statusMore"  onMouseEnter={this.buttontoggleHover} onMouseLeave={this.buttontoggleHover} variant="outline-light">{this.state.buttonisHovered ? <a>More!</a> : <a>More?</a>}</Button>
                            </h4>
                        </Col>
                    </Row>
                </Container>
            );
        }

}

export default StatusSection