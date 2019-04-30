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
                                    <i>dark coffee and a couple of apples.</i>
                                    </h4>
                            </Col>
                            <Col className="status" sm={{span:6}} lg={{span:3}}xs="12">
                                    <h3><FontAwesomeIcon className='rotating' onClick={()=>{console.log('This is the first part of our treasure hunt. Come back later for the next hint!')}} icon={faCode}/></h3>
                                    <h4><b>WordPress Knight · </b> Freelancing 
                                    <br/>
                                    <i>lorem, lorem ipsum!</i>
                                    </h4>
                            </Col>
                            <Col className="status" sm={{span:6}}  lg={{span:3}}xs="12">

                            <h3><FontAwesomeIcon  icon={faHandsHelping}/></h3>
                                    <h4><b>IEEE Media Committee·</b> Ateith SB
                                    <br/>
                                    <i>Primarily Photography Shooting.</i>
                                    </h4>
                            </Col>
                            <Col className="status" sm={{span:6}} lg={{span:3}}xs="12">

                            <h3><FontAwesomeIcon  icon={faUnderline}/></h3>
                                    <h4><b>Writing Enthusiast·</b> Books & Poetry. 
                                    <br/>
                                    <i>Daydreaming on Bukowski's drunk stories.</i>
                                    <br/>
                                    </h4>
                            </Col>
                            
                        <Col xs="12">
                        <NavLink to='/:portal'><Button id="statusMore"  onMouseEnter={this.buttontoggleHover} onMouseLeave={this.buttontoggleHover} variant="outline-light">{this.state.buttonisHovered ?
                        'More!': 'More?'}</Button></NavLink>
                        </Col>
                    </Row>
                </Container>
            );
        }

}

export default StatusSection