import React from 'react'
import Hero from '../components/Hero'
import './home.scss'
import HiringPartner from '../components/HiringPartner'
import Promising from '../components/Promising'
import Courses from '../components/Courses'


const Home = () => {
  return (
    <section className='homeMainContainer'>
      <Hero />
      <HiringPartner />
      <Promising />
      <Courses />
    </section>
  )
}

export default Home
