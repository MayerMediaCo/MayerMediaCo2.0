module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass', {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway`, `source sans pro:200i,400,600i`]
      }
    }, {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://mayermediaco.us18.list-manage.com/subscribe/post?u=a63f3871b06bbfc0a0cd26b25&amp;id=07396e9bb1`
      }
    }
  ]
}