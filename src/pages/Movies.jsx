// import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { getMovies } from '../services/moviesDbService';
import MovieList from '../components/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(
    function () {
      if (query === '') return;

      async function fetchData() {
        const fetchRes = await getMovies(query);
        if (!fetchRes.total_results) {
          setMovies([]);
          return alert('No movies was found!');
        }
        console.log(fetchRes.results);
        setMovies(fetchRes.results);
      }
      fetchData();
    },
    [query]
  );

  const handleSubmit = (searchQuery) => {
    setSearchParams({ query: searchQuery });
  };
  if (movies) {
    return (
      <>
        <SearchBar onSubmit={handleSubmit} />
        <MovieList movies={movies} />
      </>
    );
  }
};

export default Movies;
