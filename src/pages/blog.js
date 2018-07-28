import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout/layout'
import PostLink from "../components/post-link/post-link"

const BlogListingPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <Layout>
  
  <div className='container'>

      <div className="column is-half is-inline-flex">
        {Posts}
      </div>

  </div>

  </Layout>
}

export default BlogListingPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tags
          }
        }
      }
    }
  }
`