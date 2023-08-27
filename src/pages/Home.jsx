import React from 'react'
import Nav from '../components/nav'
import Hero from '../components/home/Hero'
import Numbers from '../components/home/Numbers'
import Products from '../components/home/Products'
import About from '../components/home/About'
import Feedback from '../components/home/Feedback'
import Newsletter from '../components/home/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <>
    <div className='vh-100'>
      <Nav/>
      <Hero/>
    </div>
    <Numbers/>
    <Products/>
    <About/>
    <Feedback/>
    <Newsletter/>
    <Footer/>
   </>
  )
}

export default Home
