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
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUD_NAME,
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET,
        resourceType: "image",
        prefix: `personal-site/`
      }
    },
    `gatsby-transformer-remark`
  ]
};
