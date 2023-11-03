import { useEffect, useState } from 'react'
import './arrowup.css'

const up = () => {
  window.scrollTo({
    top: 0,  // Puedes ajustar la posición de desplazamiento deseada
    left: 0,
    behavior: 'smooth'  // Habilita el desplazamiento suave
  });
}

export const ArrowUp = () => {

  let lastScroll = window.scrollY;

  const [visible, setVisible] = useState(false)

  const checkScroll = () => {
    let currentScroll = window.scrollY
    if (window.scrollY == 0 || lastScroll > currentScroll) setVisible(false)
    else setVisible(true)
    lastScroll = currentScroll;
  }
  
  window.addEventListener('scroll', checkScroll)

  useEffect(() => {
    let arrow = document.querySelector('.arrow-up')
    if (visible) arrow.classList.add('arrow-up__visible')
    else arrow.classList.remove('arrow-up__visible')
  })

  return (
    <>
    <a className='arrow-up' onClick={up}>
     <i className="arrow-up__icon fa-solid fa-arrow-up"></i>
    </a>
    
    </>
  )
}