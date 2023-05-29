import { useNavigate } from 'react-router-dom'

import './Header.css'

import logo from '../assets/logo.svg'
import tg from '../assets/tg.svg'
import whatsapp from '../assets/whatsApp.svg'
import vk from '../assets/vk.svg'

export function Header() {
  const navigate = useNavigate()
  return (
    <header className="header">
      <a
        className="header_button_logo"
        href="https://donstux.com/"
      >
        <img
          className="header_logo"
          src={logo}
          alt="logo"
        />
      </a>
      <div className="header__links">
        <a className="header__link" href="https://donstux.com/">
          <img
            className="header_tg"
            src={tg}
            alt="tg"
          />
        </a>
        <a className="header__link" href="https://donstux.com/">
          <img
            className="header_whatsApp"
            src={whatsapp}
            alt="whatsApp"
          />
        </a>
        <a className="header__link" href="https://donstux.com/">
          <img
            className="header_vk"
            src={vk}
            alt="vk"
          />
        </a>
      </div>
      <button className="header_button_account" onClick={() => navigate('/reg-auth/auth/')}>
        Войти
      </button>
    </header>
  )
}
