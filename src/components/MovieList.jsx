import MovieListItem from './MovieListItem';

/* eslint-disable react/prop-types */
const MovieList = ({ movies }) => {
  return (
    <ul className="list-disc pl-5 ">
      {movies.slice(1, 11).map((movie) => (
        <MovieListItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MovieList;
