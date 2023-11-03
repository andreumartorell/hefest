import { Form_fs } from '../components/Form_fs'
import '../stylesheets/contact.css'
import content from '../assets/content.json'

let arr = ['ca', 'es', 'en']

export const [ Contact, Contact_es, Contact_en ] = arr.map(() => {

  return ({text, input, r}) => {
    return (
      <>
      <div className='container'>
      <section className="section-cont">
        <h1 className='cont-h1'>{text.contact.title}</h1>
        <div className='contact-container'>
          <div className='contact-container__links'>
            <a className='contact-container__link' href="mailto:taller@hefest.es">taller@hefest.es</a>
            <a className='contact-container__link' href='tel:+34 93 247 1545'>93 247 1545</a>
            <a className='contact-container__link' href='whatsapp://send?phone=34 640 38 71 76'>640 38 71 76</a>
          </div>
          <Form_fs input={input} r={r} />
        </div>
      </section>
      <section className='section-map'>
        <iframe className="section-map__map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5950.594307193648!2d1.8713967!3d41.7788092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4f9c8b52a1631%3A0xaa0f14a460583c37!2sHefest%20Mecanitzats!5e0!3m2!1sca!2ses!4v1698340040798!5m2!1sca!2ses" width="1690" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" scroll='no'></iframe>
      </section>

      </div>
      </>
    )
  }
})