/* eslint-disable react-refresh/only-export-components */
import { useLocation, Link, Outlet } from 'react-router-dom';
import { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getMovieDetails } from '../services/moviesDbService';
import { IMAGES_BASE_URL } from '../constants/constants';
import movieplaceholder from '../images/movieplaceholder.jpg';

const MovieDetails = () => {
  const location = useLocation();
  const linkBackRef = useRef(location.state?.from ?? '/movies');
  const movie = useLoaderData();
  const { title, genres, release_date, vote_average, poster_path, overview } =
    movie;
  return (
    <>
      <section className="">
        <Link to={linkBackRef.current}>Back</Link>
        <div className="">
          <img
            src={poster_path ? IMAGES_BASE_URL + poster_path : movieplaceholder}
            alt={title}
          />
          <div className="">
            <h2>{title + ' (' + release_date.slice(0, 4) + ')'}</h2>
            <p>
              {'User score: '}
              {Math.floor(vote_average * 10)}
              {'%'}
            </p>
            <h3>Overview:</h3>
            <p>{overview}</p>
            <h3>Genres:</h3>
            <ul>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </section>
    </>
  );
};

export const loader = async ({ params }) => {
  const movies = await getMovieDetails(params.movieId);
  return movies;
};

export default MovieDetails;
