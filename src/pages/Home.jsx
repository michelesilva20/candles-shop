import React from 'react'
import Nav from '../components/nav'
import Hero from '../components/home/Hero'
import Numbers from '../components/home/Numbers'
import Products from '../components/home/Products'
import About from '../components/home/About'
import Feedback from '../components/home/Feedback'
import Newsletter from '../components/home/Newsletter'
import Footer from '../components/Footer'
import Title from '../components/title'

const Home = () => {
  return (
   <>
    <div className='vh-lg-100'>
      <Nav/>
      <Hero/>
    </div>
    <Numbers/>
    <Title title='Veja nossos produtos!'/>
    <Products/>
    <Title title='Conheça o nosso trabalho!'/>
    <About/>
    <Title title='Acompanhe o Feedback de nossos clientes!'/>
    <Feedback/>
    <Title title='Newsletter'/>
    <Newsletter/>
    <Footer/>
   </>
  )
}

export default Home
