import local from '../assets/about-us.jpg'
import prod1 from '../assets/horta-prod.jpg'
// import prod2 from '../assets/pan-prod.jpg'

import './Home.css'

export function Home () {
  return (
    <>
      <section>
        <h1>Sobre Nosotros</h1>
        <div className='about-us-container'>
          <div className='container-about-info'>
            <p className='about-info'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit deleniti quod cumque atque blanditiis, suscipit impedit tenetur quibusdam nesciunt natus explicabo voluptatum quae quis distinctio odit ad sapiente eligendi!
            </p>
          </div>
          <div className='container-image-about'>
            <img className='image-about' src={local} alt='about-us' />
          </div>
        </div>
      </section>
      <section>
        <h1>Algunos de nuestros productos</h1>
        <div className='some-products-container'>
          <div className='image-container-some-products'>
            <img className='image-some-products' src={prod1} alt='producto-1' />
          </div>
          <div className='info-container-some-products'>
            <label className='name-producto'>Producto</label>
            <p className='info-producto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda itaque facilis, modi enim officia eum!
            </p>
          </div>
        </div>
      </section>
    </>

  )
}
