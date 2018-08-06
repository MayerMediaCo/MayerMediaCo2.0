import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/layout'

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
                <h2 className="blog-sub-text">{post.frontmatter.date}</h2>
              </div>
              <div className="column">
                <h2 className="blog-sub-text has-text-right">{post.frontmatter.author}</h2>
              </div>
            </div>
            <hr className='border'/>
          </div>
        </section>
        <section className="section">
          <div className="content">
            <article
              className='mainPostStyle'
              dangerouslySetInnerHTML={{
              __html: post.html
            }}/>
          </div>
        </section>
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