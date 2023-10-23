import '../stylesheets/home.css'

let arr = ['ca', 'es', 'en']

export const [ Home, Home_es, Home_en ] = arr.map(() => {
  return ({text}) => {
  return (
    <div>
    <h1>{text.home.title}</h1>
    <p className="c-1">{text.home.info}</p>
    </div>
  )
}})