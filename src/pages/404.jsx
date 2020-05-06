import React, { useEffect } from "react"
import { UFO } from "../content/pages/notFound404/alien"
import { Layout } from "../components/layout"
import { Helmet } from "react-helmet"
import { analytics } from "../components/helmet/analytics"

const NotFound404 = () => {
  const ufoNum = 3

  const SEO = () => (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Oops!</title>
      <meta name="description" content="That's a 404 Dead end!" />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href="https://kalovelo.com/404" />
      <meta property="og:image" content="https://kalovelo.com/SEO/meta_img.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" /> <script>{analytics}</script>
    </Helmet>
  )

  return (
    <Layout>
      <SEO />
      <div className="notFound layout fade-in">
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
