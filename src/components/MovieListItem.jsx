import { Link, useLocation } from 'react-router-dom';

/* eslint-disable react/prop-types */
const MovieListItem = ({ movie }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        <p>{movie.title}</p>
      </Link>
    </li>
  );
};

export default MovieListItem;
