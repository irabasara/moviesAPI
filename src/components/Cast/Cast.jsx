import fetchMovies from 'helpers/fetchMovies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const baseURL = 'https://image.tmdb.org/t/p/w200';
const defaultImg =
  'https://rcmi.fiu.edu/wp-content/uploads/sites/30/2018/02/no_user.png';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovies(`movie/${id}/credits`)
      .then(({ cast }) => {
        setCast(cast);
        return;
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!cast) return;

  return (
    <ul>
      {cast.map(({ character, name, id, profile_path }) => {
        return (
          <li key={id}>
            <h3>{character}</h3>
            {profile_path ? (
              <img src={baseURL + profile_path} alt={name}></img>
            ) : (
              <img src={defaultImg} alt={name} width={200}></img>
            )}
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
