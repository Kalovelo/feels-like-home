import Footer from "./Footer/Footer"
import Header from "./header/header"
import React from "react"
import Cookiefier from "./cookiefier"

export const Layout = props => {
  return (
    <React.Fragment>
      <Header isPortal={props.isPortal} />
      <Cookiefier />
      {props.children}
      {props.noFooter ? "" : <Footer />}
    </React.Fragment>
  )
}
