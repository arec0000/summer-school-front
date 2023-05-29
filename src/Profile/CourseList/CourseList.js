import { CourseCard } from './CourseCard/CourseCard'

import './CourseList.css'

import house from '../imgs/house.png'

export function CourseList() {
  return (
    <>
      <div>
          <h2 className="courseList__header">
            Прохожу сейчас
          </h2>
          <div className="courseList__courseList">
            <CourseCard
              to="/ссылка на курс"
              img={house}
              header="Умный дом"
              description="Очень умный дом. Тут вы поумнеете и ваш дом тоже поумнеет. И вообще все будет очень по умному!"
            />
          </div>
        </div>
        <div>
          <h2 className="courseList__header">
            Пройдено ранее
          </h2>
          <span className="courseList__note">
            У вас нет пройденных курсов...
          </span>
        </div>
    </>
  )
}
