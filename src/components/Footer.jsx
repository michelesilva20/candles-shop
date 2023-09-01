import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='d-flex flex-lg-row flex-column justify-content-lg-between justif-content-center container align-items-center'>
          <div className='mb-lg-0 mb-4'>
            <img className='logo' src={logo} alt="logo oficial" />
          </div>
          <div className='mb-lg-0 mb-4 text-lg-start text-center'>
            <p className='mb-2'>E-mail: <a href="#">xxxxx@candleshop.com.br</a></p>
            <p className='mb-2'>Telefone: (00) 00000-0000</p>
            <p className='mb-2'>CNPJ: XX. XXX. XXX/0001-XX.</p>
          </div>
          <div className='d-flex flex-column mb-lg-0 mb-4 text-lg-start text-center'>
            <a className='mb-2' href="#">Política de Privacidade</a>
            <a href="#">Termos de uso</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
