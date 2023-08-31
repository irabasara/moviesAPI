import React from 'react';
import { Content, Item, Link, MovieList } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';
import { HiChartBar } from 'react-icons/hi';

const baseURL = 'https://image.tmdb.org/t/p/w220_and_h330_face';
const defaultImg =
  'https://rcmi.fiu.edu/wp-content/uploads/sites/30/2018/02/no_user.png';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log('movies', movies);
  return (
    <MovieList>
      {movies.map(({ title, name, id, poster_path, vote_average }) => {
        return (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {poster_path ? (
                <img src={baseURL + poster_path} alt={name}></img>
              ) : (
                <img src={defaultImg} alt={name} width={200}></img>
              )}
              <Content>
                <p>
                  {title}
                  {name}
                </p>
                <div>
                  <HiChartBar size={20} />
                  {Number(vote_average).toFixed(1)}
                </div>
              </Content>
            </Link>
          </Item>
        );
      })}
    </MovieList>
  );
};

export default MoviesList;
