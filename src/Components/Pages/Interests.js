import React from 'react';
import {Container,Row,Col,Nav,Navbar} from 'react-bootstrap';
import './interests.css'
import "./footer.css"
import { Component } from 'react';


class Interests extends Component
{
    constructor() 
    {
        super();
        
    }

    
render(){
    return (
        <Container fluid="true">
            <Col xs="12" md={{span:8,offset:2}} className="fullH">
                <h1 className="interestsTitle">Utilities</h1>
                <p>I'm interested in whatever helps me express my thoughts and satisfy my curiosity.
                </p>
            </Col>

            <Row>
                <Col xs="12" id="blackend">
                    <h1 className="interestsTitle B">Inkloom</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo, exercitationem eveniet natus ratione consequuntur illum perferendis minus accusamus ipsa ad, blanditiis repudiandae suscipit beatae pariatur ab velit, eum voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis reiciendis officia inventore veritatis sequi aliquam earum amet, et quae illum aliquid quod cupiditate. Cum magnam aliquam ducimus soluta. Ducimus, suscipit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo minus fugit odio saepe ipsam nostrum sint et impedit sed voluptates quia quas soluta quos, eos accusantium officia, veritatis ratione blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas similique nihil necessitatibus, modi praesentium magni nemo eum temporibus expedita alias tempore dolorum enim explicabo cumque laborum ullam ex quo?</p>
                </Col>
            </Row>

            <Row className="graySection"> 
                <Col md={{span:4,offset:1}}>
                    <h1 className="interestsTitle">[Title]</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloremque repellendus a placeat, corporis praesentium dolor voluptatibus esse, ipsam earum illo, consequatur facere voluptatem. Voluptatem vitae aspernatur aliquid numquam nihil.</p>
                </Col>
       
                <Col md={{span:4,offset:2}}>
                    <h1 className="interestsTitle">Volunteering</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloremque repellendus a placeat, corporis praesentium dolor voluptatibus esse, ipsam earum illo, consequatur facere voluptatem. Voluptatem vitae aspernatur aliquid numquam nihil.</p>
                </Col>
            </Row>
        </Container>
    )
}

}

export default Interests;