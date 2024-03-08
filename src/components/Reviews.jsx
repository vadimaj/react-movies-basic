import { getMovieReviews } from '../services/moviesDbService';
import ReviewsList from './ReviewsList';
import { useLoaderData } from 'react-router-dom';

const Reviews = () => {
  const reviews = useLoaderData();
  if (!reviews.length) {
    return <div>We do not have any reviews for this movie yet</div>;
  }
  return <ReviewsList reviews={reviews} />;
};
export const loader = async ({ params }) => {
  const reviews = await getMovieReviews(params.movieId);
  return reviews;
};
export default Reviews;
