import fetchMovies from 'helpers/fetchMovies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    fetchMovies(`movie/${id}/reviews`)
      .then(({ results }) => {
        setReview(results);
        if (!review) {
          setReview(null);
        }
        return;
      })
      .catch(err => console.error(err));
  }, [id, review]);

  if (!review) return <h3>...ooops, we don`t have reviews for this movie</h3>;

  return (
    <ul>
      {review.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h3>Author:{author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Review;
