import { Link } from 'react-router-dom';
const Header = (props) => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </header>
  );
};

export default Header;
