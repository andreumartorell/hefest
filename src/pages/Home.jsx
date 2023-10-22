
let arr = ['ca', 'es', 'en']

export const [ Home, Home_es, Home_en ] = arr.map(() => {
  return ({text}) => <h1>{text.home.title}</h1>
})