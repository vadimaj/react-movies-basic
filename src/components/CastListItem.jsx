/* eslint-disable react/prop-types */
import { IMAGES_BASE_URL } from '../constants/constants';
import castplaceholder from '../images/castplaceholder.jpg';

const CastListItem = ({ actor }) => {
  const { name, profile_path, character } = actor;
  return (
    <div>
      <img
        src={profile_path ? IMAGES_BASE_URL + profile_path : castplaceholder}
        alt={name}
        className=""
      />
      <h3>{name}</h3>
      <h3>Character:</h3>
      <p>{character}</p>
    </div>
  );
};

export default CastListItem;
