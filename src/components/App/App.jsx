import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/home/Home'));
const Movies = lazy(() => import('pages/movies/Movies'));
const MoviesDetails = lazy(() => import('pages/movie-details/MoviesDetails'));
const Review = lazy(() => import('components/Review/Review'));
const Cast = lazy(() => import('components/Cast/Cast'));
const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />}>
          <Route path="review" element={<Review />} />
          <Route path="cast" element={<Cast />} />
        </Route>
      </Route>
    </Routes>
  );
};
