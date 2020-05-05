import React, { useEffect, useState } from "react"
import Cookies from "universal-cookie"
import anime from "animejs/lib/anime.es.js"
import { useRef } from "react"
const cookie = new Cookies()

const Cookiefier = () => {
  const [cookieState, setState] = useState(cookie.get("hideCookie"))

  useEffect(() => {
    floatAnimate()
  }, [])

  const setCookie = () => {
    cookie.set("hideCookie", true, { path: "/", maxAge: 2592000 })
    setState(true)
  }
  const cookiefierRef = useRef(null)

  const floatAnimate = () =>
    anime({
      targets: cookiefierRef.current,
      loop: true,
      translateY: [0, 25],
      duration: 2000,
      direction: "alternate",
      easing: "linear"
    })

  const fadeOut = () =>
    anime({
      targets: cookiefierRef.current,
      translateY: -400,
      opacity: 0,
      duration: 2000,
      easing: "linear",
      complete: setCookie
    })

  return !cookieState ? (
    <div className="cookiefier" ref={cookiefierRef}>
      <h5 className="cookiefier__title">Tea is served with cookies!</h5>
      <p className="cookiefier__information">
        In order to keep a functionality and fondness score, I am using GoSquared
        Analytics to track visitor navigation. Worry not, GoSquared is open source!{" "}
      </p>
      <span onClick={fadeOut} className="cookiefier__cta">
        Alright!
      </span>
    </div>
  ) : (
    ""
  )
}

export default Cookiefier
