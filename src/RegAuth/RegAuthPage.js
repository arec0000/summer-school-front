import { useLocation, Outlet } from 'react-router-dom';

import './RegAuthPage.css';

import regThumbnail from './imgs/socialEng.png';

const content = [
  {
    path: 'reg',
    header: 'Регистрация',
    img: regThumbnail
  },
  {
    path: 'auth',
    header: 'Авторизация',
    img: regThumbnail
  }
]

export function RegAuthPage() {
  const { pathname } = useLocation();

  console.log(pathname)

  return (
    <div className="regAuth">
      {/* header */}
      <div className="regAuth__container">
        <h1 className="regAuth__header">{content.find(el => pathname.includes(el.path))?.header}</h1>
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
      {/* footer */}
    </div>
  )
}
