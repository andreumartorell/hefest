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
            <h2 className='about-mach__h2 about-mach__h2--w'>{text.about.copy[1]}</h2>
            {/* <p className='about-mach__text'>{text.about.copy[2]}</p> */}
          </div>
          <div className='about-mach__item'>
            <picture>
              <source srcSet="/about/m1.webp" type="image/webp" />
              <img width='870px' height='420px' className='about-mach__img about-mach__img--1' src="/about/m1.jpg" alt="Machine" />
            </picture>
          </div>
        </div>
        <div className='about-mach__machine'>
          <div className='about-mach__item'>
            <h2 className='about-mach__h2 about-mach__h2--w'>{text.about.copy[3]}</h2>
            {/* <p className='about-mach__text'>{text.about.copy[4]}</p> */}
          </div>
          <div className='about-mach__item'>
            <picture>
              <source srcSet="/about/m2.webp" type="image/webp" />
              <img width='870px' height='420px' className='about-mach__img about-mach__img--2' src="/about/m2.jpg" alt="Machine" />
            </picture>
          </div>
        </div>
      </section>

      <section className='about-mach about-mach--w'>
        <div className='about-mach__machine about-mach__machine--reverse'>
          <div className='about-mach__item'>
            <h2 className='about-mach__h2'>{text.about.copy[5]}</h2>
            {/* <p className='about-mach__text'>{text.about.copy[6]}</p> */}
          </div>
          <div className='about-mach__item'>
            <picture>
              <source srcSet="/about/m3.webp" type="image/webp" />
              <img width='870px' height='420px' className='about-mach__img about-mach__img--3' src="/about/m3.jpg" alt="Machine" />
            </picture>
          </div>
        </div>
        <div className='about-mach__machine'>
          <div className='about-mach__item'>
            <h2 className='about-mach__h2'>{text.about.copy[7]}</h2>
            {/* <p className='about-mach__text'>{text.about.copy[8]}</p> */}
          </div>
          <div className='about-mach__item'>
            <picture>
              <source srcSet="/about/m4.webp" type="image/webp" />
              <img width='870px' height='420px' className='about-mach__img about-mach__img--4' src="/about/m4.jpg" alt="Machine" />
            </picture>
          </div>
        </div>
      </section>
      <section className='about-mach'>
        <div className='about-mach__machine about-mach__machine--reverse'>
          <div className='about-mach__item'>
            <h2 className='about-mach__h2'>{text.about.copy[9]}</h2>
            {/* <p className='about-mach__text'>{text.about.copy[10]}</p> */}
          </div>
          <div className='about-mach__item'>
            <picture>
              <source srcSet="/about/m5.webp" type="image/webp" />
              <img width='870px' height='420px' className='about-mach__img about-mach__img--5' src="/about/m5.jpg" alt="Machine" />
            </picture>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='link-contact'>
          {/* <p className='link-contact__text'>{text.about.copy[11]}</p> */}
          <Link to={`${r}/contact`} className='section__button'>{text.about.buttons}</Link>
        </div>
      </div>
      </>
    )
}
})