const config = require('./meta/config')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    twitterHandle: '@mayermediaco',
    url: 'https://mayermediaco.com',
    siteDescription: 'A web development, design, and digital marketing freelance business dedicated to' +
        ' helping small business and creative entrepreneurs succeed.'
  },
  plugins: [
    'gatsby-plugin-react-helmet', {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass', {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway:400,600`, `Open Sans:400,600`]
      }
    }, {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://mayermediaco.us18.list-manage.com/subscribe/post?u=a63f3871b06bbfc0a0cd26b25&amp;id=07396e9bb1`
      }
    }, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-113953663-1"
      }
    },
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-favicon`
  ]
}