/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
const NavLink = ({ path, children }) => {
  return (
    <Link
      className="hover:text-slate-900 text-lg transition-colors duration-300 "
      to={path}
    >
      {children}
    </Link>
  );
};

export default NavLink;
