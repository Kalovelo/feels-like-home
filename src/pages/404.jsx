import React, { useEffect } from "react"
import { UFO } from "./Pages/notFound404/alien"
import { Layout } from "../Components/layout"

const NotFound404 = () => {
  useEffect(() => {
    document.title = "oops."
  }, [])

  const ufoNum = 3

  return (
    <Layout>
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
    </Layout>
  )
}

export default NotFound404
