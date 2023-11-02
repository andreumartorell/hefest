import '../stylesheets/home.css'
import '../stylesheets/about.css'
import { Link } from 'react-router-dom'

let arr = ['ca', 'es', 'en']

export const [ About, About_es, About_en ] = arr.map(() => {
  return ({text, r}) => {
    return (
      <>
      <div className='container'>
      <section className='about-hero'>
      <h1 className='about-hero__h1'>{text.about.title}</h1>
        <p className='about-hero__text'>{text.about.copy[0]}</p>
      </section>
      </div>      
      <section className='about-mach about-mach--color'>
        <div className='about-mach__machine about-mach__machine--reverse'>
          <div className='about-mach__item'>
            <h1 className='about-mach__h1 about-mach__h1--w'>{text.about.copy[1]}</h1>
            <p className='about-mach__text'>{text.about.copy[2]}</p>
          </div>
          <div className='about-mach__item'>
            <img className='about-mach__img about-mach__img--1' src="/about/m1.jpg" alt="Machine" />
          </div>
        </div>
      </section>
      <section className='about-mach'>
        <div className='about-mach__machine'>
          <div className='about-mach__item about-mach__item--left'>
            <h1 className='about-mach__h1'>{text.about.copy[3]}</h1>
            <p className='about-mach__text'>{text.about.copy[4]}</p>
          </div>
          <div className='about-mach__item'>
            <img className='about-mach__img about-mach__img--2' src="/about/m2.jpg" alt="Machine" />
          </div>
        </div>
      </section>
      <section className='about-mach about-mach--color'>
        <div className='about-mach__machine about-mach__machine--reverse'>
          <div className='about-mach__item'>
            <h1 className='about-mach__h1 about-mach__h1--w'>{text.about.copy[5]}</h1>
            <p className='about-mach__text'>{text.about.copy[6]}</p>
          </div>
          <div className='about-mach__item'>
            <img className='about-mach__img about-mach__img--3' src="/about/m3.jpg" alt="Machine" />
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='link-contact'>
          <p className='link-contact__text'>{text.about.copy[7]}</p>
          <Link to={`${r}/contact`} className='section__button'>{text.about.buttons}</Link>
        </div>
      </div>
      </>
    )
}
})