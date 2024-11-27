import React from 'react';
import { Link } from 'react-router-dom';
import { FaCarAlt } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>
          <FaCarAlt className="mr-2" />
          Car Rental Service
        </h1>
        <nav>
          <Link to="/" className="text-white mx-3">
            Home
          </Link>
          <Link to="/booking" className="text-white mx-3">
            Book a Car
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
