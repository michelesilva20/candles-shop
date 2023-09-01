import React from 'react'
import logo from '../assets/logo.png'

const Nav = () => {
  return (
    <>
      <section className=' container d-flex align-items-center justify-content-between'>
        <div>
          <img className='logo' src={logo} alt="logo oficial" />
        </div>
        <nav className='d-flex align-items-center navbar-container'>
          <ul className='d-flex'>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Produtos</a>
            </li>
            <li>
              <a href="#">Combos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
          <a href="#" className='me-2'><i class='bx bx-cart-alt' ></i></a>
          <a href="#"> <i class='bx bxs-user'></i></a>
        </nav>
      </section>
    </>
  )
}

export default Nav
