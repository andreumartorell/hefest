import '../stylesheets/home.css'
import { Link } from 'react-router-dom'

let arr = ['ca', 'es', 'en']

export const [ Home, Home_es, Home_en ] = arr.map(() => {
  return ({text, r}) => {
    return (
      <>
      <div className='container'>
        <section className='section'>
          <h1 className='hero-h1'>{text.home.title}</h1>
          <div className='section__copy'>
            <div className='section__item-cont'>
            <picture>
              <source srcset="/home/seu.webp" type="image/webp" />
              <img className='section__img' width="1000px" src="/home/seu.jpg" alt="Seu" />
           </picture>
            </div>
            <div className='section__item-cont'>
            <p className="section__text">{text.home.copy[0]}</p>
            <Link to={`${r}/contact`} className='section__button'>{text.home.buttons[0]} </Link>
            </div>
          </div>
        </section>
      </div>
        <section className='frase'>
          <div className='frase__text'>{text.home.copy[1]}</div>
        </section>
      <div className='container'>
        <section className='section'>
          <h1 className='section__h1'>{text.home.copy[2]}</h1>
          <div className='section__copy section__copy--reverse'>
            <div className='section__item-cont'>
            <picture>
              <source srcset="/home/mach.webp" type="image/webp" />
             <img className='section__img' width="1000px" src="/home/mach.jpg" alt="Pieces" />
           </picture>
            </div>
            <div className='section__item-cont'>
              <p className="section__text section__text--nomarg">{text.home.copy[3]}</p>
              <Link to={`${r}/equipment`} className='section__button'>{text.home.buttons[1]}</Link>
            </div>
          </div>
          <div className='product'>
            <picture className='product__picture'>
              <source srcset="/home/p2.webp" type="image/webp" />
              <img width='300px' className='product__item' src="/home/p2.jpg" alt="Product" />              
            </picture>
            <picture className='product__picture'>
              <source srcset="/home/p3.webp" type="image/webp" />
              <img width='300px' className='product__item' src="/home/p3.jpg" alt="Product" />
           </picture>
           <picture className='product__picture'>
              <source srcset="/home/p1.webp" type="image/webp" />
              <img width='300px' className='product__item' src="/home/p1.jpg" alt="Product" />
           </picture>
          </div>
        </section>
      </div>
      </>
    )
}})