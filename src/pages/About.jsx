
let arr = ['ca', 'es', 'en']

export const [ About, About_es, About_en ] = arr.map(() => {
  return ({text}) => {
    return (
      <>
      <section>
      <h1>{text.about.title}</h1>
        <p>Som una empresa líder al sector de mecanitzats, i el nostre compromís amb la qualitat i l'eficiència es reflecteix a cada projecte que abordem. Amb un parc de maquinària avançat i tecnologia punta, estem equipats per abordar projectes de mecanització de qualsevol escala i complexitat. El nostre equip d'experts altament capacitats treballa amb les nostres màquines de precisió per crear els millors components.</p>
      </section>
      </>
    )
}
})