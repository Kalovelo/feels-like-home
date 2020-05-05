import Footer from "./Footer/Footer"
import Header from "./header/header"
import React from "react"
import Cookiefier from "./cookiefier"
import { useSelector } from "react-redux"

export const Layout = props => {
  const theme = useSelector(state => state.theme)

  return (
    <React.Fragment>
      <div className={"App App--" + theme}>
        <div className="fade-in">
          <Header isPortal={props.isPortal} />
          {props.children}
          {props.noFooter ? "" : <Footer />}
          <Cookiefier />
        </div>
      </div>
    </React.Fragment>
  )
}
