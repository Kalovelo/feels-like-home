const getTheme = () => {
  let currentHours = new Date().getHours()
  return currentHours >= 7 && currentHours <= 19 ? "light" : "dark"
}

module.exports = {
  siteMetadata: {
    initialTheme: getTheme()
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/pages`
      }
    }
  ]
}
