import { useEffect } from "react"
import './burger.css'

export const Burger = () => {
  useEffect(()=>{
  let burger =  document.querySelector('.burger')
  let bar =  document.querySelectorAll('.burger__bar')
  let naveg =  document.querySelector('.nav__items')
  let body =  document.querySelector('body')

  let element = [...bar, naveg, body]

  burger.addEventListener('click', () => {
    window.scrollTo(0, 0);
    element.forEach( n => n.classList.toggle('active'))
  })

  let links = document.querySelectorAll('.nav__link')
  links.forEach(n => n.addEventListener("click", () => {
    element.forEach( n => n.classList.remove('active'))
  }))
  },[])

  return (
    <>
      <div className='burger'>
        <div className="burger__bar"></div>
        <div className="burger__bar"></div>
        <div className="burger__bar"></div>
      </div>
    </>
  )
}