import s from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import { fetchSearch } from '../services/Api';
import { Spinner } from '../Loader/Loader';
import { MoviesList } from 'components/MovieList/MovieList';
import { toast } from 'react-toastify';

export const Searchbar = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchMoviesByValue = async () => {
      setIsLoading(true);
      try {
        const data = await fetchSearch(value);
        if (data.length === 0) {
          toast.error(`Oops, i dont have this movie, sorry`, {
            theme: 'colored',
          });
        }
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (value) {
      fetchMoviesByValue();
    }
  }, [value]);

  const handleSubmit = e => {
    e.preventDefault();

    setValue(inputRef.current.value);
  };

  return (
    <>
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={handleSubmit}>
          <button type="submit" className={s.buttonIcon}>
            <BsSearch size="15px" />
          </button>

          <input
            ref={inputRef}
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
      {isLoading && <Spinner />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
