import '../stylesheets/home.css'

let arr = ['ca', 'es', 'en']

export const [ Home, Home_es, Home_en ] = arr.map(() => {
  return ({text}) => {
  return (
    <section className='section'>
    <h1 className='section__h1'>{text.home.title}</h1>
    <p className="section__text">{text.home.info}</p>
    </section>
  )
}})