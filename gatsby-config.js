module.exports = {
  pathPrefix: `/portfolio`,
  siteMetadata: {
    title: `Sabrina's Portfolio`,
    description: `Personal website with information, projects and contact details`,
    author: `@SabrinaFZ`,
    keywords: `Sabrina Fernández Zambrano, Front-end Developer, Spain`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sabrina-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#0F0F0F`,
        theme_color: `#0F0F0F`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`,
          `source sans pro\:300,400,400i,700`
        ],
        display: 'swap'
      }
    }
  ],
}
