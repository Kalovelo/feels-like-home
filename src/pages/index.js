import React from "react"

//! styles
import "../fonts/font.css"
import "../styles/styles.scss"
import "../animations/animations.css"
import "react-image-lightbox/style.css"

//! layout
import Footer from "../Components/Pages/Footer/Footer"
import Header from "../Components/header/header"

//! pages
import Homepage from "./Pages/Homepage/homePage"
import Background from "./Pages/Background/background"
import Portal from "./Pages/portal"
import About from "./Pages/About/about"
import NotFound404 from "./404.jsx/index.js.js"
import Cookiefier from "../Components/cookiefier"
import Projects from "./Pages/Projects/Projects.jsx"

//!store
import { useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"

import ScrollToTop from "../ScrollToTop"
//! Middleware
// import { analytics } from "./middleware/analytics"
import store from "../store"

export default () => {
  const theme = useSelector(state => state.theme)
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <div id="App" className={"App fade-in App--" + theme}>
            <ScrollToTop />
            <Header id="mynav" />
            <Cookiefier />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/Background" component={Background} />
              <Route path="/about" component={About} />
              <Route path="/portal" component={Portal} />
              <Route path="/projects" component={Projects} />
              <Route path="" component={NotFound404} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    </React.StrictMode>
  )
}
