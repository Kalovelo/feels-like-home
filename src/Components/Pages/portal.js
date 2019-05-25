import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import './portal.css'
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";

class Portal extends React.Component {

    componentDidMount() {
        window.scrollTo(1, 1)
        document.title = 'Choose a Path';
        if (window.innerWidth >= 768) {
            setTimeout(this.moveCursors, 300);
        }
    }

    moveCursors = (e) => {

        document.getElementById('cursor').style.top = 500 + 'px';
        document.getElementById('cursor').style.opacity = 0;
        document.getElementById('minicursor').style.opacity = 0;
        document.getElementById('minicursor').style.top = 460 + 'px';
    }

    render() {
        return (
            <Container id='portal' className='fade-in' fluid='true'>
                <Helmet>
                    <meta NAME="ROBOTS" CONTENT="noindex,nofollow" />
                </Helmet>
                <Row>
                    <Col id='lightSection' md='6'>
                        <h1>About</h1>
                        <p> Get to know me as a person ·<br />
                            Random facts, how i spend my free time or which hot liquid i prefer inside my cup. </p>
                        <NavLink to='/about'><Button className="lightButton fade-in" variant="outline-light">Ocean route ·</Button></NavLink>

                    </Col>
                    <Col id='darkSection' md='6'>
                        <h1>Background</h1>
                        <p>Check my journey as a digital deshi ·<br />My background, how it all started, the tools I use or my future plans.</p>
                        <NavLink to='/Background'><Button className="darkButton" variant="outline-light">· Earth route</Button></NavLink>
                    </Col>
                </Row>

            </Container>
        );
    }

}

export default Portal;