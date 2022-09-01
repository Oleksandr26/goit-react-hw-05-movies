import 'modern-normalize/modern-normalize.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './Header/Header';
import { Spinner } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movie/Movie'));

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
};
