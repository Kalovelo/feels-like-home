import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';



class Footer extends Component {
    constructor() {
        super();
        this.state = { finished: false };

    }

    finishedHover = () => {
        this.setState(prevState => ({ finished: !prevState.finished }));
    }




    render() {

        var menu = [
            {
                'link' : '/',
                'title' : 'Home'
            }
            ,
            {
                'link' : '/background',
                'title' : 'Background'
            },
            {
                'link' : '/about',
                'title' : 'About'
            },
            {
                'link' : '/thankYou',
                'title' : 'Thank you'
            }
        ]

        var social = [
            {
                'link' : 'https://www.facebook.com/kalovelo',
                'icon' : faFacebookF
            },
            {
                'link' : 'https://www.instagram.com/unscxrred/',
                'icon' : faInstagram
            },
            {
                'link' : 'mailto:apostoloskalovelonis@ieee.org',
                'icon' : faEnvelopeOpenText
            },
            {
                'link' : 'https://github.com/ApostolosKalovelo',
                'icon' : faGithub
            },
            {
                'link' : 'https://linkedin.com/in/apostolos-kalovelonis-0b886116a',
                'icon' : faLinkedinIn
            }
        ]
        return (
            <div className="footer" >

                <div className="footer__CTA-wrapper">
                    <h3 className="footer__CTA-title"> Let's talk about a project </h3>
                </div>

{/* 
                <div >
                    <div >
                        <ul onClick={() => { window.scrollTo(1, 1); }}>
                            {menu.map((menuLink,i)=><li><NavLink to={menuLink.link}>{menuLink.title}</NavLink></li>)}
                        </ul>
                    </div>
                </div> */}
{/* 
                <div className="footer__title-wrapper">
                        <h2 className="footer__quote" onMouseEnter={this.finishedHover} onMouseLeave={this.finishedHover}>{this.state.finished ? <span className='fade-in'>even if you're Sisyphus.</span> : <span className='puff-in-center'>Conquer the mountain </span>}</h2>
                </div> */}


                {/* <div >
                    <div>
                        <ul>
                            {social.map((smedia,i)=><li><a rel="noopener noreferrer" target="_blank" href={smedia.link}><FontAwesomeIcon icon={smedia.icon}/></a></li>)}
                        </ul>
                    </div>
                </div> */}

            </div>
        )
    }


}

export default Footer;