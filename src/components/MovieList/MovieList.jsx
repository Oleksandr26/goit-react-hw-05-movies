import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';
import PropTypes from 'prop-types';

export function MoviesList({ movies }) {
  const location = useLocation();

  const elements = movies.map(({ id, title, backdrop_path }) => {
    return (
      <li className={s.item} key={id}>
        <Link
          to={`/movies/${id}`}
          state={{ from: location }}
          className={s.link}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={title}
            className={s.img}
            width="200"
          />
          <p className={s.title}>{title}</p>
        </Link>
      </li>
    );
  });
  return <ul className={s.list}>{elements}</ul>;
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
