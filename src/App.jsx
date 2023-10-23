import { useState, useEffect } from 'react'
import { Link, Route, Routes, NavLink, useNavigate, Navigate } from 'react-router-dom'
import './stylesheets/App.css'
import { Home, Home_es, Home_en } from './pages/Home'
import { About, About_es, About_en } from './pages/About'
import { Contact, Contact_es, Contact_en } from './pages/Contact'
import content from './assets/content.json'
import { test } from './modules/test'
import { ChangeLng } from './components/ChangeLng'
import Cookies from 'universal-cookie'
import {SvgComponent} from './components/logo'
import { Burger } from './components/Burger'


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
  })

  return (
    <>
    <header>
      <nav>
        <div className='naveg'>
        <SvgComponent />
        <ul>
          <li><NavLink className={({isActive}) => {return isActive ? 'is-active' : undefined}} to={`${r}/`}>{home}</NavLink></li>
          <li><NavLink className={({isActive}) => {return isActive ? 'is-active' : undefined}} to={`${r}/about`}>{about}</NavLink></li>
          <li><NavLink className={({isActive}) => {return isActive ? 'is-active' : undefined}} to={`${r}/contact`}>{contact}</NavLink></li>
        </ul>
        <Burger />
        </div>
      </nav>
    </header>
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home text={text}/>} />
      <Route path='/about' element={<About text={text}/>} />
      <Route path='/contact' element={<Contact text={text}/>} />

      <Route path='/es/' element={<Home_es text={text}/>} />
      <Route path='/es/about' element={<About_es text={text}/>} />
      <Route path='/es/contact' element={<Contact_es text={text}/>} />

      <Route path='/en/' element={<Home_en text={text}/>} />
      <Route path='/en/about' element={<About_en text={text}/>} />
      <Route path='/en/contact' element={<Contact_en text={text}/>} />

      <Route path='*' element={ 
        value=='es' ? <Navigate to='/es/'/> :  
        value=='en' ? <Navigate to='/en/'/> : 
        <Navigate to='/'/> }/>
    </Routes>



    </div>
    <footer>
      <div className='footer__container'>
        <ChangeLng setInput={setInput} input={input} cookie={cookie}/>
        <a href="mailto:taller@hefest.es">taller@hefest.es</a>
        <span className='cr'>©2023 Hefest. {content.cont[input].home.cr}.</span>
      </div>
    </footer>
    </>
  )
}

export default App
