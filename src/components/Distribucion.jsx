import ubicacion from '../assets/local.jpg'
import './Distribucion.css'

export function Distribucion () {
  return (
    <section>
      <div className='distribucion-container'>
        <h1>Lugares de distribución</h1>
        <div className='lugares-container'>
          <h3>Ibarra</h3>
          <ul className='lugares-list'>
            <li className='lugares-items'>Lorem ipsum dolor sit amet.</li>
            <li className='lugares-items'>Lorem, ipsum dolor.</li>
            <li className='lugares-items'>Lorem, ipsum dolor.</li>
          </ul>
        </div>

        <div className='lugares-container'>
          <h3>Cotacachi</h3>
          <ul className='lugares-list'>
            <li className='lugares-items'>Lorem ipsum dolor sit amet.</li>
            <li className='lugares-items'>Lorem, ipsum dolor.</li>
            <li className='lugares-items'>Lorem, ipsum dolor.</li>
          </ul>
        </div>

        <div className='image-distribucion-container'>
          <img className='image-distribucion' src={ubicacion} alt='local-front' />
        </div>
      </div>
    </section>
  )
}
