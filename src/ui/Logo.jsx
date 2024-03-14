import { Link } from 'react-router-dom';
import LogoIcon from '../images/movieicon.svg?react';
const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center
     "
    >
      <LogoIcon className="size-[50px]" />
      <span className="font-primary text-[50px]">Movies</span>
    </Link>
  );
};

export default Logo;
