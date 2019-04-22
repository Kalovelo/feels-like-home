import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap'
import './StatusSection.css'
import { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faUnderline } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class StatusSection extends Component
{

    componentDidMount() {
        window.scrollTo(0, 0);
      }

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
                        <h3 >· Current Status ·</h3>       
                        </Col>
                            <Col className="status" sm={{span:6}} lg={{span:3}}xs="12">

                                    <h3><FontAwesomeIcon icon={faUniversity}/></h3>
                                    <h4 >
                                    <b>IT Student·</b> Ateith
                                    <br/>
                                    <i>AKA the daily apple.</i>
                                    </h4>
                            </Col>
                            <Col className="status" sm={{span:6}} lg={{span:3}}xs="12">
                                    <h3><FontAwesomeIcon icon={faCode}/></h3>
                                    <h4><b>WordPress Knight·</b> [Insert Brand]
                                    <br/>
                                    <i>The 'W' stands for 'WOW!'</i>
                                    </h4>
                            </Col>
                            <Col className="status" sm={{span:6}}  lg={{span:3}}xs="12">

                            <h3><FontAwesomeIcon icon={faHandsHelping}/></h3>
                                    <h4><b>IEEE Media Committee·</b> Ateith SB
                                    <br/>
                                    <i>Primarily Photography Shooting.</i>
                                    </h4>
                            </Col>
                            <Col className="status" sm={{span:6}} lg={{span:3}}xs="12">

                            <h3><FontAwesomeIcon icon={faUnderline}/></h3>
                                    <h4><b>Writing Enthusiast·</b> Books & Poetry. 
                                    <br/>
                                    <i>Daydreaming on Bukowski's drunk stories.</i>
                                    <br/>
                                    </h4>
                            </Col>
                            
                        <Col xs="12">
                        <Button id="statusMore"  onMouseEnter={this.buttontoggleHover} onMouseLeave={this.buttontoggleHover} variant="outline-light">{this.state.buttonisHovered ?
                        <NavLink to='/:portal'>More!</NavLink>
 : <NavLink to='/:portal'>More?</NavLink>}</Button>
                        </Col>
                    </Row>
                </Container>
            );
        }

}

export default StatusSection