import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <div className="w-full bg-whiteTransparent mb-6">
      <nav className="relative container mx-auto px-4 py-2">
        <div className="flex items-center justify-around">
          <Link to="/" className="text-2xl hover:scale-110 active:scale-100">
            Home
          </Link>
          <a href="https://www.nasa.gov/" rel="noreferrer" target="_blank">
            <img className="w-20 h-20" src={logo} alt="Logo" />
          </a>
          <Link
            to="/about"
            className="text-2xl hover:scale-110 active:scale-100"
          >
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
