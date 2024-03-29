import { useState, useEffect } from 'react'
import Data from '../mocks/beneficios.json'

import './Beneficios.css'

export function Beneficios () {
  const [benefits, setBenefits] = useState([])

  const getBenefits = () => {
    const info = Data
    setBenefits(info)
  }

  useEffect(() => {
    getBenefits()
  }, [])

  return (
    <section>
      <h1>Beneficios</h1>
      {
        benefits.map((prod) => (
          <div key={prod.benefit_name} className='beneficios-container'>
            <h2>{prod.benefit_name}</h2>
            <div className='items-beneficios'>
              <div className='info-beneficios-container'>
                <p className='info-beneficios'>{prod.info_benefit}</p>
              </div>
              <div className='image-beneficios-container'>
                <img className='image-beneficios' src={prod.image_benefit} alt={prod.image_alt} />
              </div>
            </div>
          </div>
        ))
      }
    </section>
  )
}
