import React from 'react'
import Link from 'gatsby-link'

import Computer from '../../assets/computer.png'

const BlogCard = () => (
  <div className='card'>
    <div className="card-image">
      <figure className="image is-5by3">
        <img src={Computer} alt=""/>
      </figure>
    </div>
    <div className="card-title">
      <h5 className='blog-meta is-pulled-left'>Posted Date</h5>
      <h5 className="blog-meta is-pulled-right">#Tag</h5>
      <div className="is-clearfix"></div>
      <h3 className='blog-card-title'>Blog Title</h3>
    </div>
    <div className="card-content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nam inventore
        architecto quibusdam eum hic, dolorum pariatur esse autem assumenda voluptatibus
        unde molestiae, ex quasi quidem explicabo atque a corrupti.
      </p>
    </div>
    <footer className="card-footer">
      <div className="card-footer-item">
        <Link to='#'>Read the Rest of the Article</Link>
        <i className="bx bx-chevrons-right bx-fade-right-hover"></i>
      </div>
    </footer>
  </div>
)

export default BlogCard