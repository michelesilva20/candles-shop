import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='d-flex justify-content-between container align-items-center'>
          <div>
            <img src={logo} alt="logo oficial" />
          </div>
          <div>
            <p>E-mail: <a href="#">xxxxx@candleshop.com.br</a></p>
            <p>Telefone: (00) 00000-0000</p>
            <p>CNPJ: XX. XXX. XXX/0001-XX.</p>
          </div>
          <div className='d-flex flex-column'>
            <a className='mb-2' href="#">Política de Privacidade</a>
            <a href="#">Termos de uso</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
