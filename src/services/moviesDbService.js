import { BASIC_URL, KEY } from '../constants/constants';

async function getTrendingToday() {
  const res = await fetch(`${BASIC_URL}/trending/movie/day?api_key=${KEY}`);
  const data = await res.json();
  //   console.log(data);
  return data.results;
}

async function getMovies(query) {
  const res = await fetch(
    `${BASIC_URL}/search/movie?api_key=${KEY}&query=${query}`
  );
  const data = await res.json();
  // console.log(data);
  return data.results;
}

async function getMovieDetails(id) {
  const res = await fetch(`${BASIC_URL}/movie/${id}?api_key=${KEY}`);
  const data = await res.json();
  // console.log(data);
  return data;
}

async function getMovieCredits(id) {
  const res = await fetch(`${BASIC_URL}/movie/${id}/credits?api_key=${KEY}`);
  const data = await res.json();
  // console.log(data);
  return data.cast;
}

async function getMovieReviews(id) {
  const res = await fetch(`${BASIC_URL}/movie/${id}/reviews?api_key=${KEY}`);
  const data = await res.json();
  // console.log(data);
  return data.results;
}

export {
  getTrendingToday,
  getMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
