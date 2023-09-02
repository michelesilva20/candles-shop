import { useState } from 'react'
import logo from '../assets/logo.png'

const Nav = () => {
  const [open, setOpenMenu] = useState(false)

  const ToggleMenu = () =>{
    setOpenMenu(!open)
  }

  return (
    <>
      <section className=' container d-flex align-items-center justify-content-between'>
        <div>
          <img className='logo' src={logo} alt="logo oficial" />
        </div>
        <div className='d-lg-none d-flex'>
          <i className={open ? 'bx bx-x' : 'bx bx-menu'} onClick={ToggleMenu}></i>
        </div>
        
        <nav className='d-lg-flex d-none align-items-center navbar-container'>
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

         <nav className='d-lg-none d-flex'>
            <div  className={open ? 'menuOpen' : 'menuClose d-none'}>
              <ul className='d-flex flex-column'>
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
            </div>
         </nav>
     
      </section>
    </>
  )
}

export default Nav
