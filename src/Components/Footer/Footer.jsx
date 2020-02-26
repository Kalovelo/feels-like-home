import React from "react"
import { Component } from "react"
import {
  copyAnimation,
  typewriterAnimation,
  conceptLetterReplace
} from "./animations"

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

  componentDidMount() {
    if (true)
      this.typewriterInterval = setInterval(() => {
        typewriterAnimation(this.updateIndex)
      }, 3800)
  }

  componentWillUnmount() {
    clearInterval(this.typewriterInterval)
  }

  copyMailtoClipboard() {
    this.copyToClipboard("opa@kalovelo.com")
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

  updateIndex() {
    let prevIndex = this.state.indexCTA
    this.setState(
      {
        indexCTA: data.ctaConcepts.length > prevIndex + 1 ? prevIndex + 1 : 0,
        letterClass: ".footer-letter"
      },
      conceptLetterReplace(this.conceptText, data.ctaConcepts[this.state.indexCTA])
    )
  }

  finishedHover() {
    this.setState(prevState => ({ finished: !prevState.finished }))
  }

  render() {
    return (
      <div
        className="footer layout"
        ref={footer => {
          this.footer = footer
        }}
      >
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
            <h3 className="footer__CTA" onClick={this.copyMailtoClipboard}>
              {" "}
              opa@kalovelo.com
            </h3>
            <input
              type="hidden"
              id="copyText"
              value="opa@kalovelo.com"
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
                  window.scrollTo(1, 1)
                }}
              >
                {data.menu.map((menuLink, i) => (
                  <li key={i}>
                    <a to={menuLink.link}>{menuLink.title}</a>
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
    )
  }
}

export default Footer
