import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Nevin Raju's Portfolio",
    description: "Portfolio of Nevin Raju, a software engineer specializing in MERN stack and Shopify app development.",
    author: "@nevinraju",
    siteUrl: "https://www.nevinraju.com",
  },
  graphqlTypegen: true,
  plugins: [`gatsby-plugin-postcss`, `gatsby-plugin-image`,`gatsby-plugin-react-helmet`, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.jpg"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

export default config;
