import React from "react"

//! styles
import "../fonts/font.css"
import "../styles/styles.scss"
import "../animations/animations.css"
import "react-image-lightbox/style.css"

//! layout

//! pages
import Homepage from "./Pages/Homepage/homePage"

//!store
import { useSelector } from "react-redux"
import { Layout } from "../Components/layout"

export default () => {
  const theme = useSelector(state => state.theme)
  return (
    <React.StrictMode>
      <div id="App" className={"App fade-in App--" + theme}>
        <Layout>
          <Homepage />
        </Layout>
      </div>
    </React.StrictMode>
  )
}
