/* eslint-disable react/prop-types */

const ReviewsListItem = ({ review }) => {
  const { author, content } = review;
  return (
    <div>
      <h3>
        {'Author: '} {author}
      </h3>
      <p>{content}</p>
    </div>
  );
};

export default ReviewsListItem;
