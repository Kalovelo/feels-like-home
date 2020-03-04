import React from "react"

//! styles
import "../content/fonts/font.css"
import "../styles/styles.scss"
import "../animations/animations.css"
import "react-image-lightbox/style.css"

//! pages
import Homepage from "./Pages/Homepage/homePage"

//!store
import { Layout } from "../Components/layout"

export default () => {
  return (
    <React.StrictMode>
      <Layout>
        <Homepage />
      </Layout>
    </React.StrictMode>
  )
}
