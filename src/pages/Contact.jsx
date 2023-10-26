import { Form_fs } from '../components/Form_fs'
import '../stylesheets/contact.css'

let arr = ['ca', 'es', 'en']

export const [ Contact, Contact_es, Contact_en ] = arr.map(() => {

  return ({text, input}) => {
    return (
      <>
      <div className='container'>
      <section className="section-cont">
        <h1>{text.contact.title}</h1>
        <Form_fs input={input} />
      </section>
      <iframe className="section-cont__map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5950.594307193648!2d1.8713967!3d41.7788092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4f9c8b52a1631%3A0xaa0f14a460583c37!2sHefest%20Mecanitzats!5e0!3m2!1sca!2ses!4v1698340040798!5m2!1sca!2ses" width="1690" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </>
    )
  }
})