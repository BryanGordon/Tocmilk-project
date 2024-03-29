import './Navbar.css'

import { Link } from 'react-router-dom'

export function Navbar () {
  return (
    <nav className='nav-container'>
      <ul className='nav-items'>
        <li className='items'>
          <Link to='/' className='link'>Home</Link>
        </li>
        <li className='items'>
          <Link to='/beneficios' className='link'>Beneficios</Link>
        </li>
        <li className='items'>
          <Link to='/productos' className='link'>Productos</Link>
        </li>
        <li className='items'>
          <Link to='/lugares-distribucion' className='link'>Lugares de distribución</Link>
        </li>
        <li className='items'>
          <Link to='/contacto' className='link'>Contacto</Link>
        </li>
      </ul>
    </nav>

  )
}
