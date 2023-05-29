import { CourseCard } from './CourseCard/CourseCard';
import { Header } from '../Header/Header';

import './ProfilePage.css';

import house from './imgs/house.png';

export function ProfilePage() {
  return (
    <div className="profile">
      <Header />
      <div className="profile__container">
        <div>
          <h2 className="profile__header">
            Прохожу сейчас
          </h2>
          <div className="profile__courseList">
            <CourseCard
              to="/ссылка на курс"
              img={house}
              header="Умный дом"
              description="Очень умный дом. Тут вы поумнеете и ваш дом тоже поумнеет. И вообще все будет очень по умному!"
            />
          </div>
        </div>
        <div>
          <h2 className="profile__header">
            Пройдено ранее
          </h2>
          <span className="profile__note">
            У вас нет пройденных курсов...
          </span>
        </div>
      </div>
      {/* footer */}
    </div>
  )
}
