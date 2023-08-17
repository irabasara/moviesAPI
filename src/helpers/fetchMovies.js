// const API_KEY = '0c6a9175848cce36424a5edaa6de1cbd';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzZhOTE3NTg0OGNjZTM2NDI0YTVlZGFhNmRlMWNiZCIsInN1YiI6IjY0YjdlMDA3ZWVlMTg2MDBlMzcyNzkzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VPIcq5et5csxP4pBmVL6-6p-p8-8UxOYEMKyRDsKDcU',
  },
};

const fetchMovies = async (endPoint = 'trending/all/week') => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${endPoint}`,
    options
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error(`Oops...`));
};

export default fetchMovies;
