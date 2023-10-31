import '../stylesheets/home.css'
import { Link } from 'react-router-dom'

let arr = ['ca', 'es', 'en']

export const [ Home, Home_es, Home_en ] = arr.map(() => {
  return ({text, r}) => {
    return (
      <>
      <div className='container'>
        <section className='section'>
          <h1 className='section__h1'>{text.home.title}</h1>
          <div className='section__copy'>
            <div className='section__item-cont'>
            <img className='section__img' width="1000px" src="/home/seu.jpg" alt="Seu" />
            </div>
            <div className='section__item-cont'>
            <p className="section__text">{text.home.info}</p>
            <Link to={`${r}/contact`} className='section__button'>{text.home.info_2}</Link>
            </div>
          </div>
        </section>
      </div>
        <section className='frase'>
          <div className='frase__text'>Ho fem tot amb carinyo</div>
          <div className='frase__deco'></div>
        </section>
      <div className='container'>
        <section className='section'>
        <div className='section__copy section__copy--reverse'>
            <div className='section__item-cont'>
             <img className='section__img' width="1000px" src="/home/seu.jpg" alt="Seu" />
            </div>
            <div className='section__item-cont'>
              <p className="section__text">{text.home.info_3}</p>
              <Link to={`${r}/contact`} className='section__button'>Veure maquinària</Link>
            </div>
          </div>
        </section>
      </div>
      </>
    )
}})