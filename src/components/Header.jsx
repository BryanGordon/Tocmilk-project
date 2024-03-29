import './Header.css'
import logo from '../assets/logo-ecologico.png'

import { Navbar } from './Navbar'

export function Header () {
  return (
    <header>
      <div className='header-container'>
        <div className='image-header'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navbar-container'>
          <Navbar />
        </div>
      </div>
    </header>
  )
}
