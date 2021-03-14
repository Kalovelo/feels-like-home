import React from "react"
import { useSelector } from "react-redux"
import Cookiefier from "../cookiefier/cookiefier"
import Footer from "../Footer/Footer"
import Header from "../header/header"
import "./layout.scss"

export default props => {
  const theme = useSelector(state => state.theme)

  return (
    <React.Fragment>
      <div className={"App App--" + theme}>
        <Header isPortal={props.isPortal} />
        <div className="layout fade-in">
          {props.children}
          {props.noFooter ? "" : <Footer />}
        </div>

        <Cookiefier />
      </div>
    </React.Fragment>
  )
}
