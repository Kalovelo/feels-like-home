import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  constructor() {
    super();
    this.state = { finished: false };
  }

  finishedHover = () => {
    this.setState(prevState => ({ finished: !prevState.finished }));
  };

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
    return <div className="footer">
        <div className="footer__divider" />

        <div className="footer__wrapper">
          <div className="footer__CTA-wrapper">
            <h3 className="footer__CTA-title">
              Let's talk about
              <span className="footer__CTA-concept"> a project</span>
            </h3>
            <h3 className="footer__CTA"> opa@kalovelo.com</h3>
          </div>

          <div className="footer__socialMedia-wrapper">

              <div>
                <ul
                  onClick={() => {
                    window.scrollTo(1, 1);
                  }}
                >
                  {menu.map((menuLink, i) => (
                    <li>
                      <NavLink to={menuLink.link}>{menuLink.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>

            <div>
              <ul>
                {social.map((smedia, i) => (
                  <li>
                    <a
                      rel="noopener noreferrer"
                      className="footer__socialMedia"
                      key={i}
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

        <div className="footer__divider" />

        </div>
  }
}

export default Footer;
