import s from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import { fetchSearch } from '../services/Api';
import { Spinner } from '../Loader/Loader';
import { MoviesList } from 'components/MovieList/MovieList';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Searchbar = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMoviesByValue = async () => {
      setIsLoading(true);
      try {
        const data = await fetchSearch(query);
        if (!data.results.length) {
          navigate('/');
        }
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      fetchMoviesByValue();
    }
  }, [query, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue =
      inputRef.current.value.trim() !== ''
        ? { query: inputRef.current.value.trim() }
        : '';
    setSearchParams(inputValue);
  };
  const value = query ? query : '';

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
            defaultValue={value}
          />
        </form>
      </header>
      {isLoading && <Spinner />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
