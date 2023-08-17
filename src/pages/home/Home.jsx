import React, { useEffect, useState } from 'react';
import fetchMovies from '../../helpers/fetchMovies';
import MoviesList from 'components/MoviesList/MoviesList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies('trending/all/week').then(({ results }) => setMovies(results));
  }, []);

  return <MoviesList movies={movies} />;
}

export default Home;
