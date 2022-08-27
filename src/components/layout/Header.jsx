import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <nav className="relative container mx-auto px-4 py-2 bg-red-300">
      <div className="flex items-center justify-around">
        <Link to="/" className="text-2xl hover:text-red-100">
          Home
        </Link>
        <img src={logo} alt="Logo" />
        <Link to="/about" className="text-2xl hover:text-red-100">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Header;
