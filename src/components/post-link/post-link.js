import React from "react"
import Link from "gatsby-link"

const PostLink = ({post}) => (
  <div className='card blog-card'>
    <div className="card-image">
      <figure className="image is-5by3">
        <img src={post.frontmatter.cover} alt=""/>
      </figure>
    </div>
    <div className="card-title">
      <h5 className='blog-meta is-pulled-left'>{post.frontmatter.date}</h5>
      <h5 className="blog-meta is-pulled-right">{post.frontmatter.tags}</h5>
      <div className="is-clearfix"></div>
      <h3 className='blog-card-title'>
        <Link to ={post.frontmatter.path}>{post.frontmatter.title}
        </Link>
      </h3>
    </div>
    <div className="card-content">
      <p>
        {post.excerpt}
      </p>
    </div>
    <footer className="card-footer">
      <div className="card-footer-item bx-fade-right-hover">
        <Link to={post.frontmatter.path}>Read the Rest of the Article</Link>
        <i className="bx bx-chevrons-right"></i>
      </div>
    </footer>
  </div>
)

export default PostLink