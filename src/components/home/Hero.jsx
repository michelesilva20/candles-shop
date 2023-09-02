import React from 'react'
import hero from '../../assets/hero.png'
const Hero = () => {
  return (
    <>
      <section className='hero container d-flex flex-lg-row flex-column justify-content-center'>
        <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-lg-start align-items-center mb-lg-0 mb-4">
            <h1 className='text-lg-start text-center'><span>Bem-vindo </span>à sua <br/> loja de velas!</h1>
            <p className='text-lg-start text-center mt-lg-0 mt-3'>Loja especialista em confeccionar velas aromáticas de qualidade e por preços acessíveis!</p>
           <div>
            <button className='button'>Saiba mais</button>
           </div>
        </div>
        <div className="col-lg-6 col-12 my-lg-0 my-5 position-relative d-flex justify-content-lg-start justify-content-center">
          <img className='img-hero' src={hero} alt="hero"/>
          <div className='mini-card position-absolute top-0 translate-middle'>
            <i class='bx bxs-shopping-bag '></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
