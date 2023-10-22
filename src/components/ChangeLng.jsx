import content from '../assets/content.json'
import { useNavigate } from 'react-router-dom'


export const ChangeLng = ({setInput, input, cookie, value}) => {

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
  <div>
    <button onClick={change} value='ca'>CA</button>
    <button onClick={change} value='es'>ES</button>
    <button onClick={change} value='en'>EN</button>
  </div>
)

}