import React from "react"
import FloatingElements from "../components/floatingElements/floatingElements"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import { UFO } from "../views/404/alien"
import "../views/404/notFound404.scss"

const NotFound404 = () => {
  const ufoNum = 2

  return (
    <Layout>
      <SEO
        robots="noindex, nofollow"
        title="Oops!"
        description="That's a 404 Dead end!"
      />
      <main className="notFound">
        <FloatingElements num={2} class="ufo">
          {" "}
          <UFO />
        </FloatingElements>
        <h1 className="notFound__title"> Oops. That's a 404 dead end.</h1>
      </main>
    </Layout>
  )
}

export default NotFound404
