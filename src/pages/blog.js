import React from "react"
import {graphql} from "gatsby"

import Layout from '../components/layout/layout'
import PostLink from "../components/post-link/post-link"
import CTA from '../components/call-to-action/call-to-action'

const BlogListingPage = ({
  data: {
    allMarkdownRemark: {
      edges
    }
  }
}) => {
  const Posts = edges.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)

  return <Layout>

    <div className='container'>
      <section className="section">
        <div className="content page-introduction">
          <h1 className="title has-text-centered">Blog</h1>
          <p className="subtitle has-text-centered">A collection of articles, tutorials, and case studies.</p>
        </div>
      </section>
      <section className="section">
        <div className="column is-three-fifths is-offset-one-fifth">
          {Posts}
        </div>
      </section>
    </div>
    <CTA/>
  </Layout>
}

export default BlogListingPage

export const pageQuery = graphql `
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
            cover
          }
        }
      }
    }
  }
`