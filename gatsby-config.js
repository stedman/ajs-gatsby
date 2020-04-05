module.exports = {
  siteMetadata: {
    title: 'Austin JavaScript',
    description: 'WIP: AustinJS homepage built with (-surprise-) JavaScript.',
    author: '@austinjs',
  },
  pathPrefix: '/ajs',
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Austin JavaScript',
        short_name: 'AustinJS',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/austinjavascript-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-source-filesystem',
            options: {
              name: 'posts',
              path: `${__dirname}/src/posts`,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
