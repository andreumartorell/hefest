import { useState, useEffect } from 'react'
import { Link, Route, Routes, NavLink, useNavigate, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import './stylesheets/App.css'
import content from './assets/content.json'
import { Home, Home_es, Home_en } from './pages/Home'
import { Thankyou, Thankyou_es, Thankyou_en } from './pages/Thankyou'
import { About, About_es, About_en } from './pages/About'
import { Contact, Contact_es, Contact_en } from './pages/Contact'
import { ChangeLng } from './components/ChangeLng'
import { Logo } from './components/logo'
import { Burger } from './components/Burger'
import { ArrowUp } from './components/ArrowUp'

function App() {

  const cookie = new Cookies();

  let value
  if (navigator.cookieEnabled) {
      value = cookie.get('lng')
    if(!cookie.get('lng')){
      cookie.set('lng', 'ca', {path: '/', maxAge: 3600*24*3600})
      value = cookie.get('lng')
    } 
  } else {
    value = 'ca'
  }

  const [input, setInput] = useState(value)

  let ind = content.cont[input].nav
  let text = content.cont[input]

  const [r, home, about, contact] = ind

    const navigate = useNavigate()

  useEffect(()=>{
    let arr = location.pathname.split('/')
    if (arr[1] =='en' || arr[1] =='es' ) arr.shift()
    else arr[0] = 'ca'
    if(arr[0] !== input) setInput(arr[0])

    let buttons = document.querySelectorAll('.section__button')
    buttons.forEach((n)=>{
      n.addEventListener('click', () => {
        if (window.scrollY != 0) {
          window.scrollTo(0, 0)
        }});
    })

  })

  return (
    <>
    <header>
        <div className='nav-container'>
          <nav className='nav'>
            <div className='logo'>
              <Link to={`${r}/`}><Logo /></Link>
            </div>
          <ul className='nav__items'>
            <li className='nav__item'><NavLink className={({isActive}) => {return isActive ? 'nav__link nav__link--is-active' : 'nav__link'}} to={`${r}/`}>{home}</NavLink></li>
            <li className='nav__item'><NavLink className={({isActive}) => {return isActive ? 'nav__link nav__link--is-active' : 'nav__link'}} to={`${r}/equipment`}>{about}</NavLink></li>
            <li className='nav__item'><NavLink className={({isActive}) => {return isActive ? 'nav__link nav__link--is-active' : 'nav__link'}} to={`${r}/contact`}>{contact}</NavLink></li>
          </ul>
          <Burger />
          </nav>
        </div>
    </header>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home text={text} r={r}/>} />
          <Route path='/equipment' element={<About text={text} r={r}/>} />
          <Route path='/contact' element={<Contact text={text} input={input} r={r}/>} />
          <Route path='/thankyou' element={<Thankyou text={text} r={r}/>} />

          <Route path='/es/' element={<Home_es text={text} r={r}/>} />
          <Route path='/es/equipment' element={<About_es text={text} r={r}/>} />
          <Route path='/es/contact' element={<Contact_es text={text} input={input} r={r}/>} />
          <Route path='/es/thankyou' element={<Thankyou_es text={text} r={r}/>} />

          <Route path='/en/' element={<Home_en text={text} r={r}/>} />
          <Route path='/en/equipment' element={<About_en text={text} r={r}/>} />
          <Route path='/en/contact' element={<Contact_en text={text} input={input} r={r}/>} />
          <Route path='/en/thankyou' element={<Thankyou_en text={text} r={r}/>} />

          <Route path='*' element={ 
            value=='es' ? <Navigate to='/es/'/> :  
            value=='en' ? <Navigate to='/en/'/> : 
            <Navigate to='/'/> }/>
        </Routes>
        <ArrowUp />
      </main>
    <footer className='footer'>
      <ul className='footer__items'>
        <li className='footer__item footer__item--2c'>
          <ChangeLng setInput={setInput} input={input} cookie={cookie}/></li>
        <li className="footer__item">
          <a className='footer__phone' href='tel:+34 93 247 1545'>
            <i className="footer__i fa-solid fa-phone"></i>
            <hr className='footer__item-hr'></hr>+34 932 47 15 45
          </a>
        </li>
        <li className="footer__item">
          <a className='footer__phone' href='whatsapp://send?phone=34 640 38 71 76'>
            <i className="footer__i footer__i--big fa-brands fa-whatsapp"></i>
            <hr className='footer__item-hr'></hr>+34 640 38 71 76
          </a>
        </li>
        <li className='footer__item'><a className='footer__mail' href="mailto:taller@hefest.es"><i className="footer__i fa-solid fa-envelope"></i><hr className='footer__item-hr'></hr>taller@hefest.es</a></li>
        <li className="footer__item"><a className='footer__loc' target='_blank' href='https://www.google.com/maps/place/Hefest+Mecanitzats/@41.7788092,1.8713967,16.75z/data=!4m6!3m5!1s0x12a4f9c8b52a1631:0xaa0f14a460583c37!8m2!3d41.7790856!4d1.8708232!16s%2Fg%2F11tgf7shxm?entry=ttu'>C/ la Coma 41 (Pol. Ind. Pla de Santa Anna) 08272 Sant Fruitós de Bages.</a></li>
      </ul>
      <hr className='footer__hr'></hr>
      <p className='footer__copyright'>©2023 Hefest. {content.cont[input].footer.cr}.</p>

    </footer>
    </>
  )
}

export default App
