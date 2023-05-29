import { Link } from 'react-router-dom';

import { IconLink } from '../IconLink/IconLink';

import './CourseCard.css';

import goal from '../imgs/goal.png';
import shedule from '../imgs/schedule.png';
import feedback from '../imgs/feedback.png';

export function CourseCard({ to, img, header, description }) {
  return (
    <Link className="courseCard" to={to}>
      <img className="courseCard__img" src={img} alt="course thumbnail" />
      <div>
        <h2 className="courseCard__header">{header}</h2>
        <span className="courseCard__description">{description}</span>
      </div>
      <div className="courseCard__links">
        <IconLink to="/" img={goal} description="Цели" />
        <IconLink to="/" img={shedule} description="Расписание" />
        <IconLink to="/" img={feedback} description="Обратная связь" />
      </div>
    </Link>
  )
}
