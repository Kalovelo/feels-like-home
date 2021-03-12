import React from "react"

import "../content/fonts/font.css"
import "../styles/styles.scss"
import "../animations/animations.css"
import "react-image-lightbox/style.css"

import Homepage from "../views/index/_homePage"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import { useStaticQuery } from "gatsby"

export default ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      api {
        homepage {
          seo_title
          seo_description
          seo_image {
            url
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title={data.api.homepage.seo_title}
        description={data.api.homepage.seo_description}
        url={location.href}
        image={data.api.homepage.seo_image?.url}
      />
      <Homepage />
    </Layout>
  )
}
