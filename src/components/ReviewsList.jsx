/* eslint-disable react/prop-types */
import ReviewsListItem from './ReviewsListItem';
const ReviewsList = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <ReviewsListItem review={review} key={review.id} />
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
