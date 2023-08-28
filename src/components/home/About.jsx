import React from 'react'

const About = () => {
  return (
    <>
      <section className="container d-flex flex-wrap justify-content-between">
        <div className='card-about d-flex justify-content-center flex-column'>
          <div className="d-flex justify-content-center">
            <i class='bx bx-cart-alt' ></i>
          </div>
          <h4 className="py-3">Compre pelo site</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <div className='card-about d-flex justify-content-center flex-column'>
          <div className="d-flex justify-content-center">
            <i class='bx bxs-calendar-check'></i>
          </div>
          <h4 className="py-3">Entrega no prazo</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <div className='card-about d-flex justify-content-center flex-column'>
          <div className="d-flex justify-content-center">
            <i class='bx bx-check-circle'></i>
          </div>
          <h4 className="py-3">No destino com sucesso</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
      </section>
    </>
  )
}

export default About
