import { useState, useEffect } from 'react'
import { Link, Route, Routes, NavLink, useNavigate, Navigate } from 'react-router-dom'
import './App.css'
import { Home, Home_es, Home_en } from './pages/Home'
import { About, About_es, About_en } from './pages/About'
import { Contact, Contact_es, Contact_en } from './pages/Contact'
import content from './assets/content.json'
import { test } from './modules/test'
import { ChangeLng } from './components/ChangeLng'
import Cookies from 'universal-cookie'


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
    if(arr[0] !== input) {
      console.log('diferent URL')  
      setInput(arr[0])
    

    // arr = location.pathname.split('/')
    // if (arr[1] =='en' || arr[1] =='es' ) {
    //   arr[1] = '/' + arr[1]
    //   arr.shift()
    // }
    // if (arr[1] == '') arr.pop()
    // let navItems = document.querySelectorAll('nav > ul > li')
    // if (arr.length == 1) navItems[0].classList.add('is-active')
    // else navItems[0].classList.remove('is-active')
    // console.log(navItems, arr[0])
    // console.log('loc:', content.cont[input].nav.indexOf(arr[0]))
    // console.log('length:', arr.length, arr)
    }
  })
  
  console.log('input:', input)


  return (
    <>
    <header>
      <nav>
        <ul>
          <li><NavLink className={({isActive}) => {return isActive ? 'is-active' : undefined}} to={`${r}/`}>{home}</NavLink></li>
          <li><NavLink className={({isActive}) => {return isActive ? 'is-active' : undefined}} to={`${r}/about`}>{about}</NavLink></li>
          <li><NavLink className={({isActive}) => {return isActive ? 'is-active' : undefined}} to={`${r}/contact`}>{contact}</NavLink></li>
        </ul>
      </nav>
    </header>
    <div>
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

    <ChangeLng setInput={setInput} input={input} cookie={cookie}/>


    </div>
    <footer>
    </footer>
    </>
  )
}

export default App
