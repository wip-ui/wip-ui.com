module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "wip-ui",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-40JP04B7F0",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
