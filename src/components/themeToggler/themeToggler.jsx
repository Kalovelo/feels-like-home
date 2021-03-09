import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../../reducers/themeActions"
import { Moon, Sun } from "../../content/svg/themeIcons"
import anime from "animejs/lib/anime.es.js"
import { useRef } from "react"
import "./themeToggler.scss"

export const ThemeToggler = props => {
  const theme = useSelector(state => state.theme)
  const Icon = theme === "light" ? Sun : Moon
  const dispatch = useDispatch()
  const togglerRef = useRef(null)

  const playAnimation = () =>
    anime({
      targets: togglerRef.current,
      opacity: 0,
      easing: "linear",
      duration: 300,
      complete: () =>
        anime({
          opacity: 1,
          begin: updateStore,
          targets: togglerRef.current,
          easing: "linear",
          duration: 300
        })
    })

  const updateStore = () => dispatch(toggleTheme())
  return (
    <button className="themeToggler" ref={togglerRef} onClick={playAnimation}>
      <Icon />
    </button>
  )
}
