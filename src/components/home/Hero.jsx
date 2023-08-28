import React from 'react'
import hero from '../../assets/hero.png'
const Hero = () => {
  return (
    <>
      <section className='hero container d-flex'>
        <div className="col-lg-6 col-12 d-flex flex-column justify-content-center">
            <h1><span>Bem-vindo </span>à sua loja de velas!</h1>
            <p>Loja especialista em confeccionar velas aromáticas de qualidade e por preços acessíveis!</p>
           <div>
            <button className='button'>Saiba mais</button>
           </div>
        </div>
        <div className="col-lg-6 col-12 position-relative">
          <img src={hero} alt="hero"/>
          <div className='mini-card position-absolute top-0 translate-middle'>
            <i class='bx bxs-shopping-bag '></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
