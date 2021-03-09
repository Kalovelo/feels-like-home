import React from "react"

//!SEO

//! styles
import "../content/fonts/font.css"
import "../styles/styles.scss"
import "../animations/animations.css"
import "react-image-lightbox/style.css"
//! pages
import Homepage from "./index/_homePage"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

export default ({ location }) => {
  return (
    <Layout>
      <SEO
        title="Apostolos Kalovelonis | Web Developer & CS Student"
        description="Apostolos Kalovelonis, Check out my portfolio, connect with me on social media or let's find some time to grab a beer."
        url={location.href}
      />
      <Homepage />
    </Layout>
  )
}
