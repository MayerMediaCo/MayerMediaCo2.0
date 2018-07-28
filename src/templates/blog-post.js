import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/layout'

export default({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className='container'>
        <h1 className='blog-title has-text-centered'>{post.frontmatter.title}</h1>
        <div className="columns">
          <div className="column">
            <h2 className="blog-sub-text">{post.frontmatter.date}</h2>
          </div>
          <div className="column">
            <h2 className="blog-sub-text has-text-right">{post.frontmatter.author}</h2>
          </div>
        </div>
        <hr className='border'/>
        <article
          className='mainPostStyle'
          dangerouslySetInnerHTML={{
          __html: post.html
        }}/>
      </div>
    </Layout>
  )
}

export const blogPostQuery = graphql `
  query($slug: String!) {
    markdownRemark(fields: {
      slug: {eq: $slug}}) 
      {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        author
        path
      }
    }
  }
`