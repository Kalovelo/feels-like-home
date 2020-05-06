import React from "react"

//!SEO
import { Helmet } from "react-helmet"
import { analytics } from "../components/helmet/analytics"

//! styles
import "../content/fonts/font.css"
import "../styles/styles.scss"
import "../animations/animations.css"
import "react-image-lightbox/style.css"
//! pages
import Homepage from "../content/pages/Homepage/homePage"

//!store
import { Layout } from "../components/layout"

export default () => {
  const SEO = () => (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kalovelo | Front End Developer & IT Student</title>
      <meta
        name="description"
        content="Apostolos Kalovelonis, front end developer and IT student. Check out my portfolio, find me on social media or share a beer with me discussing your project idea."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://kalovelo.com/" />
      <script>{analytics}</script>
      <meta property="og:image" content="https://kalovelo.com/SEO/meta_img.jpg" />
    </Helmet>
  )

  return (
    <React.StrictMode>
      <Layout>
        <SEO />
        <Homepage />
      </Layout>
    </React.StrictMode>
  )
}
