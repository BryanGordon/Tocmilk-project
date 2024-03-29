import './Footer.css'

export function Footer () {
  return (
    <footer>
      <div className='container-footer'>
        <div className='footer-info'>
          <label>Tocmilk</label>
          <span>Derechos reservados</span>
        </div>
        <div className='footer-icons'>
          <a href='https://web.whatsapp.com/' target='_blank' rel='noreferrer'>
            <i className='fab fa-whatsapp fa-1x' />
          </a>
          <a href='https://www.facebook.com/?locale=es_LA' target='_blank' rel='noreferrer'>
            <i className='fab fa-facebook-f 1x' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <i className='fab fa-instagram fa-1x' />
          </a>
        </div>
      </div>
    </footer>
  )
}
