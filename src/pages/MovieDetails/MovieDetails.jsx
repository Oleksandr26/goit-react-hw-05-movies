import s from './MovieDetails.module.css';

import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Cast } from 'components/Cast/Cast';
import { OneMovieDetails } from '../../components/Details/Details';
import { Reviews } from 'components/Reviews/Reviews';
import { Spinner } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchDetails } from '../../components/services/Api';
import { useLocation } from 'react-router-dom';

function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchMoviesByID = async () => {
      setIsLoading(true);
      try {
        const data = await fetchDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesByID();
  }, [movieId]);

  const from = location.state?.from || '/';
  const goBack = () => navigate(from);

  const isMovie = Object.keys(movie).length > 0;

  return (
    <>
      {isLoading && <Spinner />}
      {isMovie && (
        <>
          <button className={s.btn} type="button" onClick={goBack}>
            Go Back
          </button>
          <OneMovieDetails {...movie} />
          <ul>
            <Link className={s.link} state={{ from }} to={'cast'}>
              Cast
            </Link>

            <Link className={s.link} state={{ from }} to={'reviews'}>
              Reviews
            </Link>
          </ul>
        </>
      )}
      <Routes>
        <Route path={'cast'} element={<Cast />} />
        <Route path={'reviews'} element={<Reviews />} />
      </Routes>
    </>
  );
}

export default MovieDetails;
