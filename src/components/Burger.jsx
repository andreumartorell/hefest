import { useEffect } from "react"
import './burger.css'

export const Burger = () => {
  useEffect(()=>{
  let burger =  document.querySelector('.burger')
  let bar =  document.querySelectorAll('.burger > div')
  // let nav =  document.querySelector('.nav')
  // let section =  document.querySelectorAll('.naveg > li')
  // let select =  document.querySelector('.select')
  // let logo =  document.querySelector('#logo > a > svg')
  let naveg =  document.querySelector('.naveg > ul')
  let body =  document.querySelector('body')

  let element = [...bar, naveg, body]

  burger.addEventListener('click', () => {
    window.scrollTo(0, 0);
    element.forEach( n => n.classList.toggle('active'))
  })

  // let logolink =  document.querySelector('#logo > a')
  let links = document.querySelectorAll('.naveg > ul> li > a')
  // links = [...links]

  links.forEach(n => n.addEventListener("click", () => {
    element.forEach( n => n.classList.remove('active'))
  }))
  },[])

  return (
    <>
      <div className='burger'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}