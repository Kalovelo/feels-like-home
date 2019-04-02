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
                    <Row  className="statusRow">
                        <Col lg="12">
                        <h3 style={{fontWeight:"400" ,fontSize:"26px",textAlign:"center",color:"white"}}>// Current Status //<br/><br/></h3>       
                        </Col>
                            <Col className="status" id="statusCol" lg={{span:3}}xs="12">
                                    <h4 >
                                    <b>IT Student·</b> Ateith
                                    <br/>
                                    <i>AKA the daily apple.</i>
                                    </h4>
                            </Col>
                            <Col className="status" id="statusCol" lg={{span:3}}xs="12">
                                    <h4><b>WordPress Knight·</b> [Insert Brand]
                                    <br/>
                                    <i>The 'W' stands for 'WOW!'</i>
                                    </h4>
                            </Col>
                            <Col className="status" id="statusCol" lg={{span:3}}xs="12">
                                    <h4><b>IEEE Media Committee·</b> Ateith SB
                                    <br/>
                                    <i>Primarily Photography Shooting.</i>
                                    </h4>
                            </Col>
                            <Col className="status" id="statusCol" lg={{span:3}}xs="12">
                                    <h4><b>Writing Enthusiast·</b> Books & Poetry. 
                                    <br/>
                                    <i>Daydreaming on Bukowski's drunk stories.</i>
                                    <br/>
                                    </h4>
                            </Col>
                            
                        <Col xs="12">
                        <Button id="statusMore"  onMouseEnter={this.buttontoggleHover} onMouseLeave={this.buttontoggleHover} variant="outline-light">{this.state.buttonisHovered ? <a>More!</a> : <a>More?</a>}</Button>
                        </Col>
                    </Row>
                </Container>
            );
        }

}

export default StatusSection