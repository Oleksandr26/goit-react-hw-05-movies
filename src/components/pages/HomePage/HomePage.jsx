import { useState, useEffect } from 'react';
import { fetchTrending } from '../../services/Api';
import { MoviesList } from '../../MovieList/MovieList';
import { Spinner } from 'components/Loader/Loader';
import s from './HomePage.module.css';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);

    try {
      const data = await fetchTrending();
      setMovies(data.results);
    } catch (error) {
      console.log('error: ', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      {isLoading && <Spinner />}
      <h2 className={s.title}>Popular movies</h2>
      <MoviesList movies={movies} />
    </main>
  );
}

export default HomePage;
