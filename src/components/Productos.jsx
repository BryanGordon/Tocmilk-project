import { useState, useEffect } from 'react'
import Data from '../mocks/productos.json'

import flavor1 from '../assets/fresas.jpg'
import flavor2 from '../assets/arandanos.jpg'
import flavor3 from '../assets/limones.jpg'
import flavor4 from '../assets/vainilla.jpg'

import './Productos.css'
import '@coreui/coreui/dist/css/coreui.min.css'

import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

export function Productos () {
  const [products, setProducts] = useState([])

  const getProducts = () => {
    const info = Data
    setProducts(info)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <section>
      <h1>Productos</h1>
      <div className='productos-container'>

        {
          products.map((prod) => (
            <div key={prod.product_name} className='productos-data'>
              <div className='productos-info-container'>
                <label className='name-producto'>{prod.product_name}</label>
                <p className='info-producto'>{prod.product_info}</p>
              </div>
              <div className='image-container-productos'>
                <img className='image-producto' src={prod.product_image} alt={prod.image_alt} />
              </div>
            </div>
          ))
        }

      </div>
      <div className='sabores-container'>
        <h1>Sabores</h1>
        <CCarousel controls indicators dark className='container-carousel'>
          <CCarouselItem>
            <CImage className='w-100 image-carousel' src={flavor1} alt='fresas' />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className='w-100 image-carousel' src={flavor2} alt='arandanos' />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className='w-100 image-carousel' src={flavor3} alt='limon' />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className='w-100 image-carousel' src={flavor4} alt='vainilla' />
          </CCarouselItem>
        </CCarousel>
        <div className='info-sabores'>
          <p className='sabores'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel, aliquam enim officia, id libero dolore temporibus eius voluptas tempore veritatis rerum nostrum, ea error? Perspiciatis numquam assumenda quibusdam! Eius?
          </p>
        </div>
      </div>
    </section>
  )
}
