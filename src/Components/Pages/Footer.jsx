import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";

const ctaConcepts = ["philosophy", "books", "events", "a project","your idea"];
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      finished: false,
      indexCTA: 0,
      letterClass: ".footer-letter"
    };
    this.conceptText = null;
  }

  componentDidMount() {
   this.typewriterInterval =  setInterval(() => {this.typewriterAnimation()}, 3800);
  }

  copyMailtoClipboard=()=>{
      this.copyToClipboard("opa@kalovelo.com")
      this.copyAnimation();
  }

 copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}

  componentWillUnmount(){
      clearInterval(this.typewriterInterval);
  }


  typewriterAnimation() {
    if(document.hasFocus())
    new anime.timeline()
      .add({
        targets: ".footer__CTA-concept-text",
        opacity: 1,
        duration: 300,
        easing: "easeOutExpo"
      })
      .add({
        targets: ".footer-letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        offset: "-=775",
        delay: (el, i) => 45 * (i + 1)
      })
      .add({
        targets: ".footer__CTA-concept-text",
        opacity: 0,
        duration: 700,
        easing: "easeOutExpo",
        delay: 400,
      })
      .finished.then(this.updateIndex)
  }
  updateIndex = () => {
    let prevIndex = this.state.indexCTA;
    this.setState({
      indexCTA: ctaConcepts.length > prevIndex + 1 ? prevIndex + 1 : 0,
      letterClass: ".footer-letter"
    },this.conceptLetterReplace);
  };


  conceptLetterReplace = () => {
    let textWrapper = this.conceptText;
    textWrapper.innerHTML = ctaConcepts[this.state.indexCTA].replace(
      // eslint-disable-next-line
        /([^\x00-\x80]|\w)/g,
      "<span class='footer-letter'>$&</span>"
    );
  };

  finishedHover = () => {
    this.setState(prevState => ({ finished: !prevState.finished }));
  };

  copyAnimation=()=>anime.timeline().add({
      targets:".footer__copied",
      opacity:[0,1],
      translateY:[200,0],
      duration:600,
      easing:'easeInOutSine'

  })
  .add({
    targets:".footer__copied",
    opacity:0,
    duration:1000,
    easing:'easeInOutSine'

})


  render() {
    var menu = [
      {
        link: "/",
        title: "Home"
      },
      {
        link: "/background",
        title: "Background"
      },
      {
        link: "/about",
        title: "About"
      },
      {
        link: "/projects",
        title: "Projects"
      },
      {
        link: "/communities",
        title: "Communities"
      },

      {
        link: "/thankYou",
        title: "Thank you"
      }
    ];

    var social = [
      {
        link: "https://www.facebook.com/kalovelo",
        title: "Facebook"
      },
      {
        link: "https://linkedin.com/in/apostolos-kalovelonis-0b886116a",
        title: "LinkedIn"
      },
      {
        link: "https://sourcerer.io/kalovelo",
        title: "Sourcerer"
      },
      {
        link: "https://github.com/ApostolosKalovelo",
        title: "Github"
      }
    ];
    return (
      <div className="footer layout">
        <div className="footer__divider" />

        <div className="footer__wrapper">
          <div className="footer__CTA-wrapper">
            <h3 className="footer__CTA-title">
              Let's talk about
              <div>
                <span className="footer__CTA-concept">
                  <span
                    ref={span => (this.conceptText = span)}
                    className="footer__CTA-concept-text"
                  >
                    philosophy
                  </span>
                </span>
              </div>
            </h3>
            <h3 className="footer__CTA" onClick={this.copyMailtoClipboard} > opa@kalovelo.com</h3>
            <input type="hidden" id="copyText" value="opa@kalovelo.com" ref={input=>{this.mailElement = input}}/>
            <span className="footer__copied">copied!</span>
          </div>

          <div className="footer__socialMedia-wrapper">
            <div>
              <ul
                onClick={() => {
                  window.scrollTo(1, 1);
                }}
              >
                {menu.map((menuLink, i) => (
                  <li key={i}>
                    <NavLink  to={menuLink.link}>{menuLink.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul>
                {social.map((smedia, i) => (
                  <li key={i}>
                    <a
                      rel="noopener noreferrer"
                      className="footer__socialMedia"
                      target="_blank"
                      href={smedia.link}
                    >
                      {smedia.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

<div className="footer__quote-wrapper">
          <h2
            className="footer__quote"
            onMouseEnter={this.finishedHover}
            onMouseLeave={this.finishedHover}
          >
            {this.state.finished ? (
              <span className="fade-in">even if you're Sisyphus.</span>
            ) : (
              <span className="puff-in-center">Conquer the mountain </span>
            )}
          </h2>
        </div>

      </div>
        <div className="footer__divider" />
      </div>
    );
  }
}

export default Footer;
