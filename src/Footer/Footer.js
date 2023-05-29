import './Footer.css'

import logo from '../assets/logo_white.svg'
import tg from '../assets/tg.svg'
import whatsapp from '../assets/whatsApp.svg'
import vk from '../assets/vk.svg'

export function Footer() {
  return (
    <footer className="footer">
      <div className="foter_container">
        <a className="footer_button_logo" href="https://donstux.com/">
          <img className="footer_logo"src={logo} alt="logo" />
        </a>
        <div className="footer_content">
          <div className="footer_info">
            <p className="footer_text_1">
              Подпишитесь на наши аккаунты в социальных сетях, чобы следить за новостями и не пропустить анонсы мероприятий.
            </p>
            <a className="footer_text_mail" href="mailto:donstux@gmail.com">
              donstux@gmail.com
            </a>
            <a className="footer_text_phoneNumber" href="tel:+79045052644">
              +7 (904) 505-26-44
            </a>
          </div>
          <a className="footer_form" href="#">
              <span className="footer_form_header">Whatsapp</span>
              <p className="footer_form_text">Всегда на связи по любым вопросам</p>
              <div className="footer_form_img">
                <img src={whatsapp} alt="whatsApp" />
              </div>
          </a>
          <a className="footer_form" href="#">
              <span className="footer_form_header">ВКонтакте</span>
              <p className="footer_form_text">Самые актуальные новости и меропрития</p>
              <div className="footer_form_img">
                <img src={vk} alt="vk" />
              </div>
          </a>
          <a className="footer_form" href="#">
              <span className="footer_form_header">ВКонтакте</span>
              <p className="footer_form_text">Наш канал оперативной связи и свежих новостей</p>
              <div className="footer_form_img">
                <img src={tg} alt="tg" />
              </div>
          </a>
        </div>
        <div className="footer_links">
          <a className="footer_link" href="#">
            © 2019-2022. Все права защищены
          </a>
          <a className="footer_link" href="#">
            Политика конфиденциальности
          </a>
          <a className="footer_link" href="#">
            Пользовательское соглашение
          </a>
        </div>
      </div>
    </footer>
  )
}
