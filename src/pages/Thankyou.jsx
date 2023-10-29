import '../stylesheets/thankyou.css'
import { Link } from 'react-router-dom'

let arr = ['ca', 'es', 'en']

export const [ Thankyou, Thankyou_es, Thankyou_en ] = arr.map(() => {
  return ({text, r}) => {
  return (
    <>
    <section className='section-thankyou'>
      <h1 className='section-thankyou__h1'>{text.thankyou[0]}</h1>
      <img className='section-thankyou__img' width="1000px" height="100%" src="/thankyou/msg.png" alt="Seu" />
       <Link className='section-thankyou__button' to={`${r}/contact`}>&lt;&lt; {text.thankyou[1]}</Link>
    </section>
    </>
  )
}})