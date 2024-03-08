import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home, { loader as trendingMoviesLoader } from './components/Home';
import Movies from './pages/Movies';
import MovieDetails, {
  loader as movoieDetailsLoader,
} from './components/MovieDetails';
import AppLayout from './ui/AppLayout';
import Cast, { loader as castLoader } from './components/Cast';
import Reviews, { loader as reviewsLoader } from './components/Reviews';
import Error from './ui/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: trendingMoviesLoader,
        errorElement: <Error />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetails />,
        loader: movoieDetailsLoader,
        errorElement: <Error />,
        children: [
          {
            path: '/movies/:movieId/cast',
            element: <Cast />,
            loader: castLoader,
            errorElement: <Error />,
          },
          {
            path: '/movies/:movieId/reviews',
            element: <Reviews />,
            loader: reviewsLoader,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
