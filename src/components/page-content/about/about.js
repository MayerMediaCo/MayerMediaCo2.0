import React from 'react'

import './styles.css'

import Computer from '../../../assets/computer.png'

const about = () => (
  <div className='container'>
    <div className='wrapper'>
      <div className='column'>
        <div className='card'>
          <hr className='border' />
          <div className='card-title'>
            <h3>About</h3>
          </div>
          <p className='card-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, saepe vel. In accusamus enim perspiciatis sunt explicabo temporibus, quidem id quisquam aliquam voluptatibus eaque animi culpa veniam magni, distinctio autem corporis commodi adipisci illum non repellendus ipsa saepe dicta. Voluptatibus inventore voluptatum quo! Autem laboriosam repudiandae, deleniti voluptate optio maxime!
          </p>
        </div>
      </div>
      <div className='column'>
        <img src={Computer} alt='' />
      </div>
    </div>
  </div>
)

export default about
