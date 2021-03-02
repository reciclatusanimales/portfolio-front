module.exports = {
  siteMetadata: {
    title: "Portafolio",
    description: "Portafolio Daniel Reyes Veas",
    author: "Daniel Reyes Veas",
    image: "/hero-img.jpeg",
    siteUrl: "https://reciclatusanimales.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "http://api.reciclatusanimales.com/api/projects",
        rootKey: "projects",
        schemas: {
          projects: `
              title: String
              description: String
              image: String, 
              github: String, 
              url: String, 
              featured: Boolean
            `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "http://api.reciclatusanimales.com/api/stacks",
        rootKey: "stacks",
        schemas: {
          stacks: `
              name: String
              slug: String
              image: String, 
              order: Int,                             
            `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "http://api.reciclatusanimales.com/api/jobs",
        rootKey: "jobs",
        schemas: {
          jobs: `
              company: String
              position: String
              date: Date
            `,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bitter`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
