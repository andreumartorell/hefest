import './form_fs.css'

export const Form_fs = ({input}) => {
  return (
    <form className='contact-form' action="https://formsubmit.co/c3bc726c3f861a45b84885a164e92cf3" method="POST">
      <input type="hidden" name="_next" value="http://127.0.0.1:5173/contact"/>
      <input type="hidden" name="_subject" value="Nou correu!" />
      <input className='contact-form__input' type="text" placeholder="Name" name="Nom" required />
      <input className='contact-form__input' type="text" placeholder="Surname" name="Cognom" required />
      <input className='contact-form__input contact-form__input--2c' type="email" placeholder="Email" name="Correu" required />
      <textarea className='contact-form__input contact-form__input--2c' placeholder="Mensaje" name="Message" required />
      <div className='contact-form__buttons'>
        <input className='contact-form__button' type="reset" value="Reset" /> 
        <button className='contact-form__button' type="submit">Send</button>
      </div>
    </form>
  )
}