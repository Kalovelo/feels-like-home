import Footer from "./Footer/Footer"
import Header from "./header/header"
import React from "react"
import Cookiefier from "./cookiefier"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getTheme } from "../store/store"

export const Layout = props => {
  const theme = useSelector(state => state.theme)

  return (
    <React.Fragment>
      <div className={"App App--" + theme}>
        <Header isPortal={props.isPortal} />
        <div className="layout">
          {props.children}
          {props.noFooter ? "" : <Footer />}
        </div>

        <Cookiefier />
      </div>
    </React.Fragment>
  )
}
