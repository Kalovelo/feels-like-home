import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram,faLinkedinIn,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import "./footer.css"
import { Component } from 'react';
import './notFound404.css'



class NotFound404 extends Component
{
   
    componentDidMount(){
            this.generate_random_string();
    }

    constructor()
    {
        super();
        this.state = { randomString1:'',randomString2:''};
    }

    generate_random_string = () => {
        let random_string1 = '';
        let random_string2 = '';
        let string_length = 600;
        let string_length2 = 5000;
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for(let i = 0; i < string_length; i++) {

            random_string1 += characters.charAt(Math.floor(Math.random() * characters.length))+' ';
        }
        for(let i = 0; i < string_length2; i++) {
        random_string2 += characters.charAt(Math.floor(Math.random() * characters.length))+' ';
        }
        
        this.setState(prevState => ({randomString1:random_string1,randomString2:random_string2}));
    }
    
   
   
    render(){
        

        
        
        return(
            <Container id='notFoundBody' fluid='true'>
            <p>{this.state.randomString1} <a href='/' className='beat' id='notFoundT'>{this.props.location.pathname} 404 NOT FOUND.<br/>GO BACK. NOW.</a> {this.state.randomString2}</p>
            
            </Container>
        )
    }
}

export default NotFound404;