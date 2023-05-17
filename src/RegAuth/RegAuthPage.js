import { useLocation, Outlet } from 'react-router-dom';

import './RegAuth.css';

import regThumbnail from './imgs/socialEng.png';

const content = {
  '/reg-auth/reg/': {
    header: 'Регистрация',
    img: regThumbnail
  },
  '/reg-auth/auth/': {
    header: 'Авторизация',
    img: regThumbnail
  }
}

export function RegAuthPage() {
  const { pathname } = useLocation();

  console.log(pathname)

  return (
    <div className="regAuth">
      {/* header */}
      <div className="regAuth__container">
        <h1 className="regAuth__header">{content[pathname]?.header}</h1>
        <div className="regAuth__content">
          <div className="regAuth__img">
            <img
              src={content[pathname]?.img}
              alt="page thumbnail"
            />
          </div>
          <div className="regAuth__form">
            <Outlet />
          </div>
        </div>
      </div>
      {/* footer */}
    </div>
  )
}
