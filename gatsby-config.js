const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`
})

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: { data: `@import "${__dirname}/src/styles/styles";` }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)]
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "api",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "api",
        // Url to query from
        url: process.env.GATSBY_API_URL + "/graphql"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "kalovelo-website",
        start_url: "/",
        background_color: "#fdfdfd",
        icon: `src/content/Images/favicon.png`
      }
    }
  ]
}

console.log(process.env.GATSBY_API_URL + "/graphql")
