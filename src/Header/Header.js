import { Link } from 'react-router-dom'
import { useNavigateToTop } from '../hooks/useNavigateToTop'

import './Header.css'

import logo from '../assets/logo.svg'
import tg from '../assets/tg.svg'
import whatsapp from '../assets/whatsApp.svg'
import vk from '../assets/vk.svg'

export function Header({ username }) {
  const navigate = useNavigateToTop()
  return (
    <header className="header">
      <div className="header__container">
        <Link
          className="header_button_logo"
          to="/"
        >
          <img
            className="header_logo"
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="header__links">
          <a className="header__link" href="https://t.me/donstux">
            <img
              className="header_tg"
              src={tg}
              alt="tg"
            />
          </a>
          <a className="header__link" href="tel:+7(904) 505 26 44">
            <img
              className="header_whatsApp"
              src={whatsapp}
              alt="whatsApp"
            />
          </a>
          <a className="header__link" href="https://vk.com/donstux">
            <img
              className="header_vk"
              src={vk}
              alt="vk"
            />
          </a>
        </div>
        <button className="header_button_account" onClick={() => {
          if (username) {
            navigate('/profile/course-list')
            return
          }
          navigate('/reg-auth/auth/')
        }}>
          {username ?? 'Войти'}
        </button>
      </div>
    </header>
  )
}
