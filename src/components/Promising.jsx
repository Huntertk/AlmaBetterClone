import React from 'react'
import image from '../assets/images/promisebackground.png'
import './promising.scss'

const Promising = () => {
  return (
    <section className='promisingSectionMainContainer'>
      <div className="promisingTextContainer">
        <h2 className='promisingHeader'>Transforming learnings and advancing careers in tech.</h2>
        <p className="promisingDesc">We are revolutionising the way skills, experiences, and learning outcomes are delivered online. Join the largest tech community and fast forward your career with AlmaBetter.</p>
      </div>
      <div className="promisingImageContainer">
        <img src={image} alt=""  />
      </div>
    </section>
  )
}

export default Promising
