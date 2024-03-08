// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { getMovies } from '../services/moviesDbService';
import MovieList from '../components/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearch(searchQuery) {
    setMovies([]);
    if (searchQuery === '') return;
    setIsLoading(true);
    const fetchRes = await getMovies(searchQuery);
    setMovies((prevState) => [...prevState, ...fetchRes]);
  }
  if (movies) {
    return (
      <>
        <SearchBar onSearch={handleSearch} />
        <MovieList movies={movies} />
        {/* <ToastContainer /> */}
      </>
    );
  }
};

export default Movies;
