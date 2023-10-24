import content from '../assets/content.json'
import './changelng.css'
import { useNavigate } from 'react-router-dom'


export const ChangeLng = ({setInput, input, cookie}) => {

let path = location.pathname

const navigate = useNavigate()

const change = (e) => {
  let root
  if (e.target.value == 'ca') root = '/'
  else root = '/' + e.target.value + '/'
  if (input == 'ca') navigate(root + path.slice(1))
  else navigate(root + path.slice(4))
  setInput(e.target.value)
  if (navigator.cookieEnabled) cookie.set('lng', e.target.value, {path: '/', maxAge: 3600*24*3600})
}


return (
  <ul className='changelng'>
    <li><button className='changelng__lng' onClick={change} value='ca'>CA</button></li>
    <li><button className='changelng__lng' onClick={change} value='es'>ES</button></li>
    <li><button className='changelng__lng' onClick={change} value='en'>EN</button></li>
  </ul>
)

}