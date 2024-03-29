import './Contacto.css'

export function Contacto () {
  return (
    <section>
      <div className='contacto-container'>
        <h1>Contactos</h1>
        <h2>Ubicación</h2>
        <div className='maps-container'>
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31915.319654155657!2d-77.74007349989898!3d0.8147287973499319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2968bae7d5eb4d%3A0x2d2e73b19f33388d!2zVHVsY8Ohbg!5e0!3m2!1ses-419!2sec!4v1704310562761!5m2!1ses-419!2sec' width='600' height='450' loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
          <span className='contacto-direccion'>Ibarra, centro</span>
          <span className='contacto-direccion'>Cotacachi, centro</span>
          <span className='contacto-direccion'>Otavalo, centro</span>
        </div>
        <div className='telefonos-container'>
          <h2>Números de teléfonos</h2>
          <span className='contacto-number'>990998723</span>
          <span className='contacto-number'>090957515</span>
          <span className='contacto-number'>090954839</span>
        </div>
      </div>
    </section>
  )
}
