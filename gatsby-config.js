require("dotenv").config({
  path: `.env`
});

const config = require("gatsby-plugin-config").default;

module.exports = {
  siteMetadata: {
    title: `Ryan Ponce`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      }
    }
  ]
};
