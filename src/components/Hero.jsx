import React from 'react'
import awardOne from '../assets/images/awardOne.png'
import awardTwo from '../assets/images/awardTwo.png'
import awardThree from '../assets/images/awardThree.png'
import mentorBackgroundImg from '../assets/images/homegroup.png'
import './hero.scss'

const Hero = () => {
  return (
   <section className='heroMainSectionContainer'>
      <div className="heroTextContainer">
        <div className="heroDynamicTextContainer">
            <h1>Learning is better with</h1>
            <h2 className='dynamicHeading'>AlmaBetter</h2>
            <div className="underline"></div>
        </div>
        <div className="heroStaticTextContainer">
            <p className="heroTextDesc">Launch your career in Data Science &  Web Development Earn up to ₹ 40 LPA at leading companies Pay us after you land your dream job</p>
            <button className="btn">explore courses</button>
        </div>
        <div className="heroAwardContainer">
            <p className="heroAwardTextDesc">Recognized as emerging Leaders in Tech Education</p>
            <div className="heroAwardImageContainer">
                <img src={awardOne} alt="" className="awardImage" />
                <img src={awardTwo} alt="" className="awardImage" />
                <img src={awardThree} alt="" className="awardImage" />
            </div>
        </div>
      </div>
      <div className="heroMentorContainer">
        <img src={mentorBackgroundImg} alt="img" />
      </div>
    </section>
  )
}

export default Hero
