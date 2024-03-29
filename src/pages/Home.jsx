/* eslint-disable react-refresh/only-export-components */
import { getTrendingToday } from '../services/moviesDbService';
import MovieList from '../components/MovieList';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const trendingMovies = useLoaderData();
  return (
    <>
      <h1 className="font-primary text-4xl  py-3">Trending today</h1>
      <MovieList movies={trendingMovies} />
    </>
  );
};
export const loader = async () => {
  const movies = await getTrendingToday();
  return movies;
};

export default Home;
