import { BackLink } from 'components/BackLink/BackLink';
import {
  AboutWrapper,
  MovieImg,
  MoviesDetailsWrapper,
} from './movie-details.styled';
import fetchMovies from 'helpers/fetchMovies';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const baseURL = 'https://image.tmdb.org/t/p/w500';
const defaultImg =
  'https://www.mub.eps.manchester.ac.uk/science-engineering/wp-content/themes/uom-theme/assets/images/default-thumbnail.jpg';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    fetchMovies(`movie/${id}`)
      .then(response => {
        setMovies(response);
        return;
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!movies) return;

  return (
    <>
      <BackLink to={backLinkHref.current}>Back</BackLink>

      <MoviesDetailsWrapper>
        {movies.poster_path ? (
          <MovieImg
            src={baseURL + movies.poster_path}
            alt={movies.title}
          ></MovieImg>
        ) : (
          <MovieImg src={defaultImg} alt={movies.title} width={500}></MovieImg>
        )}
        <div>
          <h2>{movies.title}</h2>
          <p>{movies.overview}</p>
        </div>
      </MoviesDetailsWrapper>
      <AboutWrapper>
        <h2>About movie</h2>
        <Link to="cast">cast</Link>
        <Link to="review">review</Link>
      </AboutWrapper>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
