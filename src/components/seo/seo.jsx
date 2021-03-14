import React from "react"
import { Helmet } from "react-helmet"
import { analytics } from "./analytics"

function SEO({ description, title, url, image, robots }) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en"
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: "og:image:width",
          content: "1200"
        },
        {
          property: "og:image:height",
          content: "628"
        },
        {
          property: `og:image`,
          content: image ? image : undefined
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:url`,
          content: url
        }
      ]}
    >
      <meta name="robots" content={robots ? robots : "index, follow"} />
      <script>{analytics}</script>
    </Helmet>
  )
}

export default SEO
