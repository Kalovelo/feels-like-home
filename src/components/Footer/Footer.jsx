import React from "react"
import Typewriter from "typewriter-effect"
import { Component } from "react"
import { Link } from "gatsby"
import { copyAnimation } from "./animations"
import "./footer.scss"

//Data
const data = require("./data.json")

class Footer extends Component {
  constructor() {
    super()
    this.state = {
      finished: false,
      indexCTA: 0,
      letterClass: ".footer-letter"
    }
    this.conceptText = null
    this.footer = null
  }

  copyMailtoClipboard = () => {
    this.copyToClipboard("hello@kalovelo.com")
    copyAnimation()
  }

  copyToClipboard(text) {
    var dummy = document.createElement("input")
    document.body.appendChild(dummy)
    dummy.setAttribute("value", text)
    dummy.select()
    document.execCommand("copy")
    document.body.removeChild(dummy)
  }

  updateIndex = () => {
    let prevIndex = this.state.indexCTA
    this.setState(
      {
        indexCTA: data.ctaConcepts.length > prevIndex + 1 ? prevIndex + 1 : 0,
        letterClass: ".footer-letter"
      },
      conceptLetterReplace(this.conceptText, data.ctaConcepts[this.state.indexCTA])
    )
  }

  finishedHover = () => {
    this.setState(prevState => ({ finished: !prevState.finished }))
  }

  render() {
    return (
      <div
        className="footer "
        ref={footer => {
          this.footer = footer
        }}
      >
        <div className="footer__divider" />

        <div className="footer__wrapper">
          <div className="footer__CTA-wrapper">
            <span className="footer__CTA-title">
              Let's talk about
              <div>
                <span className="footer__CTA-concept">
                  <span
                    ref={span => (this.conceptText = span)}
                    className="footer__CTA-concept-text"
                  >
                    <Typewriter
                      options={{
                        strings: data.ctaConcepts,
                        autoStart: true,
                        loop: true,
                        delay: 200,
                        deleteSpeed: 70
                      }}
                    />
                  </span>
                </span>
              </div>
            </span>
            <span className="footer__CTA" onClick={this.copyMailtoClipboard}>
              {" "}
              hello@kalovelo.com
            </span>
            <input
              type="hidden"
              id="copyText"
              value="hello@kalovelo.com"
              ref={input => {
                this.mailElement = input
              }}
            />
            <span className="footer__copied">copied!</span>
          </div>

          <div className="footer__socialMedia-wrapper">
            <div>
              <ul
                onClick={() => {
                  if (window) window.scrollTo(1, 1)
                }}
              >
                {data.menu.map((menuLink, i) => (
                  <li key={i}>
                    <Link to={menuLink.link}>{menuLink.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul>
                {data.social.map((smedia, i) => (
                  <li key={i}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__socialMedia"
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
            <span
              className="footer__quote"
              onMouseEnter={this.finishedHover}
              onMouseLeave={this.finishedHover}
            >
              {this.state.finished ? (
                <span className="fade-in">even if you're Sisyphus.</span>
              ) : (
                <span className="puff-in-center">Conquer the mountain </span>
              )}
            </span>
          </div>
        </div>
        <div className="footer__divider" />
      </div>
    )
  }
}

export default Footer
