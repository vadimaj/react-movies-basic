/* eslint-disable react/prop-types */
import CastListItem from './CastListItem';
const CastList = ({ cast }) => {
  return (
    <div>
      <ul>
        {cast.map((actor) => (
          <CastListItem actor={actor} key={actor.id} />
        ))}
      </ul>
    </div>
  );
};

export default CastList;
