/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteMetadata = require('./config/siteMetadata');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#6900A8`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-69855574",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ricardo Amb`,
        short_name: `RicardoAmb`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#6900A8`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.ricardoamb.com`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`]
      },
    },
    `gatsby-plugin-offline`
  ],
}
