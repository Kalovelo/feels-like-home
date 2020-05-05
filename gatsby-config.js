module.exports = {
  siteMetadata: {
    title: `Kalovelo`
  },
  plugins: ["gatsby-plugin-sass", `gatsby-plugin-react-helmet`,"gatsby-transformer-json", 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/pages`,
      },
    }]
}
