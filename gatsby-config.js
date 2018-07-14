module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway`,
          `source sans pro\:200i,400,600i`
        ]
      }
    }
  ]
}
