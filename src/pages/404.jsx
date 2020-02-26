import React, { useEffect } from "react"
import { UFO } from "./Pages/notFound404/alien"
const NotFound404 = () => {
  useEffect(() => {
    document.title = "oops."
  }, [])

  const ufoNum = 3

  return (
    <div className="notFound layout fade-in">
      {[...Array(ufoNum)].map(index => (
        <span
          key={index}
          className="notFound__ufo floatingElement floatingElement--ufo"
        >
          <UFO />
        </span>
      ))}
      <h1 className="notFound__title"> Oops. That's a 404 dead end.</h1>
    </div>
  )
}

export default NotFound404
