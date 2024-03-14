import Logo from './Logo';
import NavBar from '../components/NavBar';
const Header = () => {
  return (
    <header className="py-10">
      <div className="container mx-auto flex gap-40">
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
