import MovieListItem from './MovieListItem';

/* eslint-disable react/prop-types */
const MovieList = ({ movies }) => {
  return (
    <ul className="list-disc pl-5 text-red-800">
      {movies.map((movie) => (
        <MovieListItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MovieList;
