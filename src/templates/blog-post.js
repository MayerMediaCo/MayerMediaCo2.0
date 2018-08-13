import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/layout'
import CTA from '../components/call-to-action/call-to-action'

export default({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className='container'>
        <section className='section'>
          <div className='content page-introduction'>
            <h1 className='has-text-centered'>{post.frontmatter.title}</h1>
            <div className="columns">
              <div className="column">
                <p className="blog-sub-text">{post.frontmatter.date}</p>
              </div>
              <div className="column">
                <p className="blog-sub-text has-text-right">{post.frontmatter.tags}</p>
              </div>
            </div>
            <hr className='border'/>
          </div>
          <div className="content">
            <article
              className='mainPostStyle'
              dangerouslySetInnerHTML={{
              __html: post.html
            }}/>
          </div>
        </section>
      </div>
      <CTA/>
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
        tags
        cover
      }
    }
  }
`