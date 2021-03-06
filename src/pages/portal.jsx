import React from "react"
import { Button } from "../components/components/button"
import { Layout } from "../components/layout"
import { Link } from "gatsby"
//!SEO
import { Helmet } from "react-helmet"
import { analytics } from "../components/helmet/analytics"

const SEO = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Choose a Path</title>
    <meta name="description" content="Choose your path." />
    <meta name="robots" content="noindex, nofollow" />
    <link rel="canonical" href="https://kalovelo.com/portal" />
    <script>{analytics}</script>
    <meta property="og:image" content="https://kalovelo.com/SEO/meta_img.jpg" />
  </Helmet>
)
class PortalComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SEO />
        <div className="portal fade-in">
          <div className="portal__section portal__section--light">
            <div className="portal__section-wrapper">
              <h1 className="portal__title">About</h1>
              <p className="portal__description">
                {" "}
                Get to know me as a person ·<br />
                Random facts, how i spend my free time or which hot liquid i prefer
                inside my cup.{" "}
              </p>
              <div className="portal__button-wrapper">
                <Link to="/about/">· Ocean Route</Link>
              </div>
            </div>
          </div>
          <div className="portal__section portal__section--dark">
            <h1 className="portal__title">Background</h1>
            <p className="portal__description">
              Check my journey as a digital deshi ·<br />
              My background, the tools I use and the communities I am part of.
            </p>
            <div className="portal__button-wrapper">
              <Link to="/background/">· Earth Route</Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const Portal = () => (
  <Layout noFooter isPortal>
    <PortalComponent />
  </Layout>
)

export default Portal
