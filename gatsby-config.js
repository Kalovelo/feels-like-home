module.exports = {
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
