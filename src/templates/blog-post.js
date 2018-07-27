import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/layout'

export default({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div
        style={{
        margin: `0 auto`,
        position: 'relative',
        maxWidth: '960px'
      }}>
        <h1
          style={{
          fontSize: '2rem',
          textAlign: 'center',
          margin: '10px 0',
          color: '#2B7A78'
        }}>{post.frontmatter.title}</h1>
        <h2
          style={{
          float: 'right',
          fontSize: '1.25rem',
          margin: '5px 0',
          color: '#3AAFA9'
        }}>{post.frontmatter.date}</h2>
        <h2
          style={{
          float: 'left',
          fontSize: '1.25rem',
          margin: '5px 0',
          color: '#3AAFA9'
        }}>{post.frontmatter.author}</h2>
        <div style={{
          clear: 'both'
        }}></div>
        <hr
          style={{
          border: '0',
          height: '1px',
          backgroundImage: 'linear-gradient(to right, rgba(58, 175, 169, 0), rgba(58, 175, 169, 1), rgba(58, 175, 169, 0))'
        }}/>
        <div dangerouslySetInnerHTML={{
          __html: post.html
        }}/>
      </div>
    </Layout>
  )
}

export const query = graphql `
  query($slug: String!) {
    markdownRemark(fields: {
      slug: {eq: $slug}}) 
      {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        author
      }
    }
  }
`