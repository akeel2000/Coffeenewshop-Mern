import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaSearch, FaShoppingCart } from 'react-icons/fa'; // FontAwesome icons
import imgSrc from '../Component/ante-samarzija-lsmu0rUhUOk-unsplash.jpg';

function Header() {
  const location = useLocation();
  const [searchVisible, setSearchVisible] = useState(false);

  const renderLink = (to, label) => {
    if (location.pathname === '/') {
      return (
        <ScrollLink
          to={to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="hover:bg-orange-700 px-3 py-2 rounded-full shadow-lg cursor-pointer"
        >
          {label}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          to={`/#${to}`}
          className="hover:bg-orange-700 px-3 py-2 rounded-full shadow-lg cursor-pointer"
        >
          {label}
        </RouterLink>
      );
    }
  };

  return (
    <div className="font-sans leading-normal tracking-normal bg-gray-100">
      <header className="fixed top-0 w-full text-white flex justify-between items-center p-4 z-50 bg-brown-700">
        <div className="flex items-center">
          <img src={imgSrc} alt="Logo" className="w-16 h-16 rounded-full mr-2" />
          <h1 className="text-2xl font-bold">Café Aurora</h1>
        </div>

        {/* Center Navigation */}
        <nav className="flex-grow flex justify-center space-x-4">
          {renderLink('home', 'Home')}
          {renderLink('about', 'About')}
          {renderLink('services', 'Services')}
          {renderLink('whyus', 'Why Us')}
          {renderLink('gallery', 'Gallery')}
          {renderLink('contact', 'Contact')}
        </nav>

        {/* Right Side Icons: Search Bar, Cart, Login */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setSearchVisible(true)}
            onMouseLeave={() => setSearchVisible(false)}
          >
            <FaSearch className="text-white cursor-pointer" />
            {searchVisible && (
              <input
                type="text"
                className="ml-2 px-2 py-1 rounded-full bg-white text-black focus:outline-none"
                placeholder="Search..."
              />
            )}
          </div>

          {/* Cart Icon */}
          <RouterLink to="/cart" className="text-white cursor-pointer">
            <FaShoppingCart />
          </RouterLink>

          {/* Login Button */}
          <RouterLink
            to="/login"
            className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer"
          >
            Login
          </RouterLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
