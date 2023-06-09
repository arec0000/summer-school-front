import { IconLink } from '../IconLink/IconLink';

import './CourseCard.css';

import goal from '../../imgs/goal.png';
import shedule from '../../imgs/schedule.png';
import feedback from '../../imgs/feedback.png';

export function CourseCard({ img, header, description }) {
  return (
    <div className="courseCard">
      <img className="courseCard__img" src={img} alt="course thumbnail" />
      <div>
        <h2 className="courseCard__header">{header}</h2>
        <span className="courseCard__description">{description}</span>
      </div>
      <div className="courseCard__links">
        <IconLink to="/profile/goals" img={goal} description="Цели" />
        <IconLink to="/profile/calendar" img={shedule} description="Расписание" />
        <IconLink to="/profile/feedback" img={feedback} description="Обратная связь" />
      </div>
    </div>
  )
}
