module.exports = {
  siteMetadata: {
    title: "Reciclatusanimales",
    description: "Portafolio de Daniel Reyes Veas",
    author: "Daniel Reyes Veas",
    image: "/hero-img.webp",
    siteUrl: "https://reciclatusanimales.com",
    startUrl: "https://reciclatusanimales.com",
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
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "api",
        fieldName: "api",
        url: "https://api.reciclatusanimales.com/graphql",
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
        icon: `src/assets/icon.png`,
      },
    },
    {
      resolve: `@slixites/gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Bitter`, `source sans pro\:300,400,400i,700`],
        display: "swap",
        preconnect: true,
        attributes: {
          rel: "stylesheet preload prefetch",
          as: "style",
        },
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-styled-components`,
  ],
}
