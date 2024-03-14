import NavLink from '../ui/NavLink';
const NavBar = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-8">
        <li>
          <NavLink path="/">Home</NavLink>
        </li>
        <li>
          <NavLink path="/movies">Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
