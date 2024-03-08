/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { getMovieCredits } from '../services/moviesDbService';
import CastList from './CastList';
import { useLoaderData } from 'react-router-dom';

const Cast = () => {
  const cast = useLoaderData();
  return <CastList cast={cast} />;
};

export const loader = async ({ params }) => {
  const cast = await getMovieCredits(params.movieId);
  return cast;
};

export default Cast;
