import React from 'react'
import products from '../../assets/products.jpg'
const Products = () => {
  return (
    <>
      <section className='container d-flex flex-wrap justify-content-lg-between justify-content-center'>
        <div className="card-products position-relative mb-lg-0 mb-4">
          <img src={products} alt="candle" />
          <div className="flag-desconto position-absolute end-0">25%</div>
          <div className='details-products p-4 d-flex justify-content-center flex-column align-items-center'>
            <h2>Vela de Baunilha</h2>
            <small className='other-price mt-2'><s>de R$60,90</s></small>
            <p className='price'>R$<span>40,90</span></p>
            <small className='frete'>Frete Grátis</small>
            <div>
              <button className='buy'>Comprar</button>
            </div>
          </div>
        </div>
        <div className="card-products position-relative mb-lg-0 mb-4">
          <img src={products} alt="candle" />
          <div className="flag-desconto position-absolute end-0">25%</div>
          <div className='details-products p-4 d-flex justify-content-center flex-column align-items-center'>
            <h2>Vela de Baunilha</h2>
            <small className='other-price mt-2'><s>de R$60,90</s></small>
            <p className='price'>R$<span>40,90</span></p>
            <small className='frete'>Frete Grátis</small>
            <div>
              <button className='buy'>Comprar</button>
            </div>
          </div>
        </div>
        <div className="card-products position-relative mb-lg-0 mb-4">
          <img src={products} alt="candle" />
          <div className="flag-desconto position-absolute end-0">25%</div>
          <div className='details-products p-4 d-flex justify-content-center flex-column align-items-center'>
            <h2>Vela de Baunilha</h2>
            <small className='other-price mt-2'><s>de R$60,90</s></small>
            <p className='price'>R$<span>40,90</span></p>
            <small className='frete'>Frete Grátis</small>
            <div>
              <button className='buy'>Comprar</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
