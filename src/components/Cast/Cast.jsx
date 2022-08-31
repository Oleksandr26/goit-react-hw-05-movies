import { Spinner } from '../Loader/Loader';
import { fetchCredits } from '../services/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import s from './Cast.module.css';

export function Cast() {
  const [isLoading, setIsLoading] = useState(false);
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesByCredits = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCredits(movieId);
        setActors(data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesByCredits();
  }, [movieId]);

  const elements = actors.map(({ id, name, profile_path }) => {
    return (
      <li className={s.item} key={id}>
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={name}
        />{' '}
        <p>{name}</p>
      </li>
    );
  });
  return (
    <>
      {isLoading && <Spinner />}
      {actors.length > 0 ? (
        <ul className={s.list}>{elements}</ul>
      ) : (
        <p>We don't have information about cast</p>
      )}
    </>
  );
}
