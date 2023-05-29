import { Link } from 'react-router-dom';
import './IconLink.css';

export function IconLink({ to, img, description }) {
  return (
    <Link className="iconLink" to={to}>
      <img className="iconLink__img" src={img} alt={description} />
      <span className="iconLink__description">{description}</span>
    </Link>
  );
}
