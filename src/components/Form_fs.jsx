import './form_fs.css'
import content from '../assets/content.json'

export const Form_fs = ({input, r}) => {
  return (
    <form className='contact-form' action="https://formsubmit.co/c3bc726c3f861a45b84885a164e92cf3" method="POST">
      <input type="hidden" name="_next" value={`http://127.0.0.1:5173${`${r}/thankyou`}`}/>
      <input type="hidden" name="_subject" value="Nou correu desde hefest.com!" />
      <div className='contact-form__cont'>
        <input className='contact-form__input' type="text" placeholder={content.cont[input].contact.form[0]} name="Nom" required />
        <input className='contact-form__input' type="text" placeholder={content.cont[input].contact.form[1]} name="Cognom" required />
      </div>
      <div className='contact-form__cont contact-form__cont--column'>
        <input className='contact-form__input' type="email" placeholder={content.cont[input].contact.form[2]} name="Correu" required />
        <textarea className='contact-form__input' placeholder={content.cont[input].contact.form[3]} name="Missatge" required />
      </div>
      <p className='contact-form__legal'>{content.cont[input].contact.legal}</p>
      <div className='contact-form__buttons'>
        <input className='contact-form__button' type="reset" value={content.cont[input].contact.form[4]} /> 
        <button className='contact-form__button' type="submit">{content.cont[input].contact.form[5]}</button>
      </div>
    </form>
  )
}