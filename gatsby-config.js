/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config()

// const linkResolver = require('./example-route-to-linkResolver')

module.exports = {
 plugins: [
 {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'paygreen',
        accessToken: process.env.API_KEY,
        // releaseID: 'example-id',
        // linkResolver: () => (doc) => linkResolver(doc),
        fetchLinks: [],
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children,
        ) => {},
        schemas: {
          post: require('./src/schemas/blogpost.json'),
          blog: require('./src/schemas/bloghome.json'),
        },
        lang: '*',
        prismicToolbar: true,
        shouldDownloadImage: ({ node, key, value }) => {},
        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 50,
        },
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },
      },
    },
  ] 
}
