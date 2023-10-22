
let arr = ['ca', 'es', 'en']

export const [ About, About_es, About_en ] = arr.map(() => {
  return ({text}) => <h1>{text.about.title}</h1>
})