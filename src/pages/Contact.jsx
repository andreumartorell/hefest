
let arr = ['ca', 'es', 'en']

export const [ Contact, Contact_es, Contact_en ] = arr.map(() => {
  return ({text}) => <h1>{text.contact.title}</h1>
})