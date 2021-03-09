import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import { UFO } from "./404/alien"
import "./404/notFound404.scss"

const NotFound404 = () => {
  const ufoNum = 2

  return (
    <Layout>
      <SEO title="Oops!" description="That's a 404 Dead end!" />
      <div className="notFound">
        {[...Array(ufoNum)].map((el, index) => (
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
