import { useLocation, Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import './RegAuthPage.css';

import regThumbnail from './imgs/socialEng.png';

const content = [
  {
    path: 'reg-authreg',
    header: 'Зарегестрироваться',
    img: regThumbnail
  },
  {
    path: 'reg-authauth',
    header: 'Войти',
    img: regThumbnail
  }
]

export function RegAuthPage() {
  const { pathname } = useLocation();

  return (
    <div className="regAuth">
      <Header />
      <div className="regAuth__container">
        <h1 className="regAuth__header">{content.find(el => pathname.replace(/\//g, '').includes(el.path))?.header}</h1>
        <div className="regAuth__content">
          <div className="regAuth__img">
            {/* <img
              src={content.find(el => pathname.includes(el.path))?.img}
              alt="page thumbnail"
            /> */}
          </div>
          <div className="regAuth__form">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
