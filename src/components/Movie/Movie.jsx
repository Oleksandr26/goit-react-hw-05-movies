import { Searchbar } from '../Searchbar/Searchbar';
import s from './Movie.module.css';

function Movies() {
  return (
    <main>
      <h2 className={s.title}>Search movie</h2>
      <Searchbar />
    </main>
  );
}

export default Movies;
