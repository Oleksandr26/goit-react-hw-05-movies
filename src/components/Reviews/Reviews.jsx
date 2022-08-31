import { Spinner } from '../Loader/Loader';
import { fetchReviews } from '../services/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import s from './Reviews.module.css';

export function Reviews() {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesReviews = async () => {
      setIsLoading(true);
      try {
        const data = await fetchReviews(movieId);

        setReviews(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesReviews();
  }, [movieId]);

  const elements = reviews.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <h3>Author: {author}</h3>
        <p>{content}</p>
      </li>
    );
  });
  return (
    <>
      {isLoading && <Spinner />}
      {reviews.length > 0 ? (
        <ul className={s.list}>{elements}</ul>
      ) : (
        <p>We don't have any reviews for this movie, sorry</p>
      )}
    </>
  );
}
