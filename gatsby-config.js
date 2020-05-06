const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = {
  siteMetadata: {
    title: `Kalovelo`,
    description: `Apostolos Kalovelonis, front end developer and IT student. Check out my portfolio, find me on social media or share a beer with me discussing your project idea.`,
    author: `Apostolos Kalovelonis`
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
